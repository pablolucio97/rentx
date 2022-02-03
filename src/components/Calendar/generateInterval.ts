import { CalendarProps } from "react-native-calendars";
import { eachDayOfInterval, format } from "date-fns";

import {getPlatformDate} from '../../utils/getPlatformDate'
import { DayProps } from "./";
import theme from '../../theme/theme'

export function generateInterval(startDate: DayProps, endDate: DayProps){
    let interval : CalendarProps = {}
    eachDayOfInterval({start: new Date(startDate.timestamp), end: new Date(endDate.timestamp)})
    .forEach(item => {
        const date = format(getPlatformDate(item), 'yyyy-MM-dd')
        interval = {
            ...interval,
            [date] : {
                color: startDate.dateString === date || endDate.dateString === date ? 
                theme.colors.main : theme.colors.main_light,
                textColor: startDate.dateString === date || endDate.dateString === date ? 
                theme.colors.main_light : theme.colors.main
            }
        }
    })
    return interval
}

