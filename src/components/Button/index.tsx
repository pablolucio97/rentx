import React from 'react';
import { Container, Title } from './styles';

interface Props {
    title: string
    color?: string
}

export function Button({ color, title, ...rest }: Props) {
    return (
        <Container 
        color={color}
        {...rest}
        >
            <Title>{title}</Title>
        </Container>
    )
}