import React from 'react';
import { Container } from './styles';
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'

import { Calendar as CustomCalendar, LocaleConfig, CalendarProps } from 'react-native-calendars'
import { localeConfig } from './localeConfig';

export interface DayProps{
    dateString: string;
    day: number;
    month: number;
    year: number;
    timestamp: number;
}


export function Calendar( {markedDates, onDayPress} :  CalendarProps) {

    const theme = useTheme()

    LocaleConfig.locales['pt-br'] = localeConfig
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
                markingType='period'
                markedDates={markedDates}
                onDayPress={onDayPress}
            />
        </Container>
    )
}