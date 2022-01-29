import React from 'react';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import {

    Brand,
    CarImages,
    Container,
    Content,
    Description,
    Details,
    Header,
    Name,
    Period,
    Price,
    About,
    Rent

} from './styles';


export function CarDetails() {

    const theme = useTheme()

    const carImages = [
        'https://www.pngkit.com/png/detail/237-2375768_2018-porsche-718-cayman-vs-porsche-718-cayman.png',
        'https://www.pngkit.com/png/detail/237-2375768_2018-porsche-718-cayman-vs-porsche-718-cayman.png'
    ]

    return (
        <Container>
            <Header>
                <BackButton
                    color={theme.colors.text_detail}
                />
            </Header>
            <CarImages>
                <ImageSlider
                    imageUrl={carImages}
                />
            </CarImages>
            <Content
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    padding: 24,
                    alignItems: 'center'
                }}
            >
                <Details>
                    <Description>
                        <Brand>Lamborghini</Brand>
                        <Name>Huracan</Name>
                    </Description>
                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 580</Price>
                    </Rent>
                </Details>
                <About>
                    Este é automóvel desportivo.
                    Surgiu do lendário touro de lide indultado na praça Real Maestranza
                    de Sevilla. É um belíssimo carro para quem gosta de acelerar.
                </About>
            </Content>
        </Container>
    )
}