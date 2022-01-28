import React from 'react';
import { useTheme } from 'styled-components';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import {
    Header,
    Container
 } from './styles';

export function CarDetails() {

    const theme = useTheme()

    return (
        <Container>
            <Header>
                <BackButton
                    color={theme.colors.text_detail}
                />
            </Header>
            <CarImages>
                <ImageSlider
                    imageUrl='https://www.pngkit.com/png/detail/237-2375768_2018-porsche-718-cayman-vs-porsche-718-cayman.png'
                />
            </CarImages>
        </Container>
    )
}