import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { CalendarProps } from 'react-native-calendars'

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
import { Button } from '../../components/Button';
import { BackButton } from '../../components/BackButton';
import { Calendar, DayProps } from '../../components/Calendar';
import { generateInterval } from '../../components/Calendar/generateInterval'


export function Scheduling() {

  const theme = useTheme()

  const [lastSelesectedDate, setLastSelectedDate] = useState({} as DayProps)
  const [markedDatesInterval, setMarkedDatesInterval] = useState({})

  function handleChangeDate(date: DayProps) {
    let startDate = !lastSelesectedDate ? date : lastSelesectedDate
    let endDate = date

    if (startDate.timestamp > endDate.timestamp) {
      startDate = endDate
      endDate = startDate
    }

    setLastSelectedDate(endDate)
    const interval = generateInterval(startDate, endDate)
    setMarkedDatesInterval(interval)

  }

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
        <Calendar
          markedDates={markedDatesInterval}
          onDayPress={handleChangeDate}
        />
      </Content>
      <Footer>
        <Button
          title="Confirmar"
        />
      </Footer>
    </Container>
  )
}