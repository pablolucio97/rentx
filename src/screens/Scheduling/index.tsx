import React from 'react';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';

import ArrowSvg from '../../../assets/arrow.svg'

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from './styles';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';
export function Scheduling() {

  const theme = useTheme()

  return (
    <Container>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <Header>
        <BackButton
          onPress={() => { }}
          color={theme.colors.shape}
        />
        <Title>Escolha uma {'\n'} data  de início e {'\n'}fim do aluguel</Title>
        <RentalPeriod>
          <DateInfo>
            <DateTitle>de</DateTitle>
            <DateValue
              selected={false}
            />
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>até</DateTitle>
            <DateValue
              selected
            >
              12/02/2022
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content
        showsVerticalScrollIndicator={false}
      >
        <Calendar />
      </Content>
      <Footer>
        <Button
          title="Confirmar"
        />
      </Footer>
    </Container>
  )
}