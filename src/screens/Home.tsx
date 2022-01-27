import React from 'react';
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';

import {
  Container,
  TotalCars,
  Header,
  HeaderContent
} from './styles';
import Logo from '../../assets/logo.svg'
import { Car } from '../components/Car';

export function Home() {

  const carData = {
    brand: 'Audi',
    name: 'Audi Coupe',
    rent: {
      period: 'Ao dia',
      price: 120
    },
    thumbnail: 'https://p.kindpng.com/picc/s/423-4235443_audi-a5-sportback-quattro-petrol-hd-png-download.png'
  }
  const carDataTwo = {
    brand: 'Porshe',
    name: 'Porshe Cayman',
    rent: {
      period: 'Ao dia',
      price: 230
    },
    thumbnail: 'https://www.pngkit.com/png/detail/237-2375768_2018-porsche-718-cayman-vs-porsche-718-cayman.png'
  }

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
      <Car
          data={carData}
      />
      <Car
          data={carDataTwo}
      />
    </Container>
  )
}