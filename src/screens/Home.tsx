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

export function Home() {
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
    </Container>
  )
}