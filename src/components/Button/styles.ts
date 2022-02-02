import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

interface ButtonProps {
    color: string
}

export const Container = styled.TouchableOpacity<ButtonProps>`
flex: 1;
justify-content: center;
align-items: center;

width: 100%;
padding: 10px;
background-color: ${({ color, theme }) => color? color : theme.colors.main};
`
export const Title = styled.Text`
font-family: ${({ theme }) => theme.fonts.primary_500};
font-size: ${RFValue(15)}px;
color: ${({ theme }) => theme.colors.shape}
`