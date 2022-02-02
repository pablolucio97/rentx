import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  TotalCars,
  Header,
  HeaderContent,
  CarList
} from './styles';
import Logo from '../../../assets/logo.svg'
import { Car } from '../../components/Car';
import { api } from '../../services/api';
import { CarProps} from '../../types/cars'




export function Home() {

  const navigation = useNavigation()

  const [cars, setCars] = useState<CarProps[]>([])
  const [loading, setLoading] = useState(true)

  function handleNavigation(screen: string) {
    //@ts-ignore
    navigation.navigate({ name: screen })
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
      <CarList
        data={cars}
        renderItem={({ item }) =>
          <Car
            data={item}
            //@ts-ignore
            onPress={() => handleNavigation('CarDetails')}
          />}
          keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}