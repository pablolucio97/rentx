import styled from 'styled-components/native'
import {Dimensions} from 'react-native'

interface ImageIndexProps{
    active: boolean
}

export const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`
export const ImageIndexes = styled.View`

`

export const ImageIndex = styled.View<ImageIndexProps>`
    background-color: ${({ theme,active }) =>  
    active ? 
    theme.colors.title : theme.colors.shape};
`

export const CarImage = styled.Image`
    width: 280px;
    height:132px;
`

export const CarImageWrapper = styled.View`
    width: ${Dimensions.get('window').width}px;
    height: 132px;

    justify-content: center;
    align-items: center;
`
