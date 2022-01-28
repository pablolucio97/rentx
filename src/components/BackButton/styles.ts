import styled from 'styled-components/native'
import {BorderlessButton} from 'react-native-gesture-handler'
import {getStatusBarHeight} from 'react-native-iphone-x-helper'

export const Container = styled(BorderlessButton)`
    margin: 12px;
    margin-top: 32px;
`

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`