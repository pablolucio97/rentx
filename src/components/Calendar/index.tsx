import React from 'react';
import { Container } from './styles';
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'

import { Calendar as CustomCalendar, LocaleConfig } from 'react-native-calendars'

export function Calendar() {

    const theme = useTheme()
    LocaleConfig.locales['pt-br'] = {
        monthNames: [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro'
],
        monthNamesShort: [
            'Jan',
            'FeV',
            'Mar',
            'Abr',
            'Mai',
            'Jun',
            'Jul',
            'Ago',
            'Set',
            'Out',
            'Nov',
            'Dez'
],
        dayNames: [
            'Domingo',
            'Segunda',
            'Terça',
            'Quarta',
            'Quinta',
            'Sexta',
            'Sabado'
],
        dayNamesShort: [
            'DOM',
            'SEG',
            'TER',
            'QUA',
            'QUI',
            'SEX',
            'SAB'
],
        today: 'Hoje'
    }

    LocaleConfig.defaultLocale = 'pt-br'

    return (
        <Container>
            <CustomCalendar
                renderArrow={(direction) => <Feather
                    color={theme.colors.shape}
                    size={24}
                    name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
                />}
                headerStyle={{
                    backgroundColor: theme.colors.background_secondary,
                    borderWidth: 0.5,
                    borderColor: theme.colors.text_detail,
                    paddingBottom: 10,
                    marginBottom: 10
                }}
                theme={{
                    textDayFontFamily: theme.fonts.primary_400,
                    textDayHeaderFontFamily: theme.fonts.primary_500,
                    textMonthFontFamily: theme.fonts.secondary_600,
                    textMonthFontSize: 20,
                    monthTextColor: theme.colors.title,
                    arrowStyle: {
                        marginHorizontal: 15
                    }
                }}
                firstDay={1}
                minDate={String(new Date())}
            />
        </Container>
    )
}