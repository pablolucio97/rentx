import React from 'react';
import {
    Container,
    ImageIndexes,
    ImageIndex,
    CarImage,
    CarImageWrapper,
} from './styles';

interface Props {
    imageUrl: string
}

export function ImageSlider({ imageUrl }: Props) {
    return (
        <Container>
            <ImageIndexes>
                <ImageIndex active />
                <ImageIndex active={false} />
                <ImageIndex active={false} />
            </ImageIndexes>
            <CarImageWrapper>
                <CarImage
                    source={{ uri: imageUrl }}
                    resizeMode='contain'
                />
            </CarImageWrapper>
        </Container>
    )
}