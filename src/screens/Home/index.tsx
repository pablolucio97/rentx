import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

import {
  Container,
  TotalCars,
  Header,
  HeaderContent,
  CarList,
  MyCarButtons
} from './styles';
import Logo from '../../../assets/logo.svg'
import { Car } from '../../components/Car';
import { api } from '../../services/api';
import { CarProps } from '../../types/cars'
import { Loading } from '../../components/Loading';
import theme from '../../theme/theme';

export function Home() {

  const navigation = useNavigation()

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
          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>
      {loading ?
        <Loading
          isLoading={loading}
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
      <MyCarButtons
        onPress={() => handleNavigation('MyCars')}
      >
        <Ionicons
          name='ios-car-sport'
          size={24}
          color={theme.colors.shape}
        />
      </MyCarButtons>
    </Container>
  )
}