import { useNavigation, useRoute } from '@react-navigation/native';
import { format, parseISO } from 'date-fns';
import React, { useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import ArrowSvg from '../../../assets/arrow.svg';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar, DayProps } from '../../components/Calendar';
import { generateInterval } from '../../components/Calendar/generateInterval';
import { Loading } from '../../components/Loading';
import { ParamsProps } from '../../types/cars';
import { getPlatformDate } from '../../utils/getPlatformDate';
import {
  Container, Content, DateInfo,
  DateTitle,
  DateValue, Footer, Header, RentalPeriod, Title
} from './styles';



export interface RentalPeriodProps {
  startDateFormatted: string;
  endDateFormatted: string;
}

export function Scheduling() {

  const theme = useTheme()
  const navigation = useNavigation()
  const route = useRoute()

  const { car } = route.params as ParamsProps

  const [lastSelesectedDate, setLastSelectedDate] = useState({} as DayProps)
  const [markedDatesInterval, setMarkedDatesInterval] = useState({})
  const [loading, setLoading] = useState(true)
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodProps>({} as RentalPeriodProps)

  function handleChangeDate(date: DayProps) {
    let startDate = !lastSelesectedDate.timestamp ? date : lastSelesectedDate
    let endDate = date

    if (startDate.timestamp > endDate.timestamp) {
      startDate = endDate
      endDate = startDate
    }

    setLastSelectedDate(endDate)
    const interval = generateInterval(startDate, endDate)
    setMarkedDatesInterval(interval)

    const firstDate = Object.keys(interval)[0]
    const lastDate = Object.keys(interval)[Object.keys(interval).length - 1]

    setRentalPeriod({
      startDateFormatted: format(getPlatformDate(parseISO(firstDate)), 'dd/MM/yyyy'),
      endDateFormatted: format(getPlatformDate(parseISO(lastDate)), 'dd/MM/yyyy'),

    })


  }

  function handleConfirmRental() {
    if (!rentalPeriod.startDateFormatted || !rentalPeriod.endDateFormatted) {
      Alert.alert("Dados insuficientes", "Por favor, selecione uma data para continuar.")
    } else {
      setLoading(false)
      //@ts-ignore
      navigation.navigate('SchedulingDetails', {
        car,
        dates: Object.keys(markedDatesInterval)
      })
    }
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
          onPress={() => navigation.goBack()}
          color={theme.colors.shape}
        />
        <Title>Escolha uma {'\n'} data  de início e {'\n'}fim do aluguel</Title>
        <RentalPeriod>
          <DateInfo>
            <DateTitle>de</DateTitle>
            <DateValue
              selected={!!rentalPeriod.startDateFormatted}
            >
              {rentalPeriod.startDateFormatted}

            </DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>até</DateTitle>
            <DateValue
              selected={!!rentalPeriod.startDateFormatted}
            >
              {rentalPeriod.endDateFormatted}
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
          title='Confirmar'
          enabled={!!rentalPeriod.startDateFormatted}
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  )
}

