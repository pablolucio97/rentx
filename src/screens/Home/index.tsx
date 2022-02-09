import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, BackHandler } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring
} from 'react-native-reanimated'
import {
  RectButton,
  PanGestureHandler
} from 'react-native-gesture-handler';

import {
  Container,
  TotalCars,
  Header,
  HeaderContent,
  CarList,
} from './styles';
import Logo from '../../../assets/logo.svg'
import { Car } from '../../components/Car';
import { api } from '../../services/api';
import { CarProps } from '../../types/cars'
import { LottieAnimation } from '../../components/LottieAnimation';
import theme from '../../theme/theme';

const ButtonAnimated = Animated.createAnimatedComponent(RectButton)

export function Home() {

  const navigation = useNavigation()

  const positionX = useSharedValue(0)
  const positionY = useSharedValue(0)


  const myCarsButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value },
      ]
    }
  })

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any) {
      ctx.positionX = positionX.value
      ctx.positionY = positionY.value
    },
    onActive(event, ctx: any) {
      positionX.value = event.translationX + ctx.positionX
      positionY.value = event.translationY + ctx.positionY
    },
    onEnd() {
      positionX.value = withSpring(0)
      positionY.value = withSpring(0)
    }

  })

  const [cars, setCars] = useState<CarProps[]>([])
  const [loading, setLoading] = useState(true)

  function handleNavigation(screen: string, car?: CarProps) {
    //@ts-ignore
    navigation.navigate(screen, { car })
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/cars')
        setCars(response.data)
      } catch (error) {
        console.log(error)
        throw new Error('Erro ao buscar carros')
      } finally {
        setLoading(false)
      }
    }
    fetchCars()
  }, [])

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true
    })
  })

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
      />
      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(188)}
            height={RFValue(12)}
          />
          {
            !loading &&
            <TotalCars>
              Total de {cars.length} carros
            </TotalCars>
          }
        </HeaderContent>
      </Header>
      {loading ?
        <LottieAnimation
        />
        :
        <CarList
          data={cars}
          renderItem={({ item }) =>
            <Car
              data={item}
              //@ts-ignore
              onPress={() => handleNavigation('CarDetails', item)}
            />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      }
      <PanGestureHandler
        onGestureEvent={() => onGestureEvent}
      >
        <Animated.View
          style={[myCarsButtonStyle, styles.button, {
            position: 'absolute',
            bottom: 12,
            right: 12,
            backgroundColor: theme.colors.main
          }]}
        >
          <ButtonAnimated
            onPress={() => handleNavigation('MyCars')}
          >
            <Ionicons
              name='ios-car-sport'
              size={24}
              color={theme.colors.shape}
            />
          </ButtonAnimated>
        </Animated.View>
      </PanGestureHandler>
    </Container>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})