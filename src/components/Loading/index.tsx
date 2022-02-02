import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import { Container } from './styles';

interface Props {
    isLoading: boolean
}

export function Loading({ isLoading }: Props) {

    const theme = useTheme();

    return (
        <Container>
            {isLoading ?
                <ActivityIndicator
                    size="large"
                    color={theme.colors.main}
                />
                :
                null
            }
        </Container>
    )
}