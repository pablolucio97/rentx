import React from 'react';
import { useWindowDimensions } from 'react-native'
import {
    Container,
    Title,
    Content,
    Message,
    Footer
} from './styles';

import LogoSvg from '../../../assets/logo_background_gray.svg';
import DoneSvg from '../../../assets/done.svg'
import { ConfirmButton } from '../../components/ConfirmButton';

export function SchedulingComplete() {


    const { width } = useWindowDimensions()

    return (
        <Container>
            <LogoSvg
                width={width}
            />
                <Content>
                    <DoneSvg
                        width={80}
                        height={80}
                    />
                    <Title>Carro alugado</Title>
                    <Message>
                        Agoraoce só precisa ir {'\n'}
                        até uma consecionária RentX {'\n'}
                        e pegar o seu automóvel.
                    </Message>
                </Content>
                <Footer>
                    <ConfirmButton 
                        title='OK'
                        activeOpacity={.8}
                    />
                </Footer>
        </Container>
    )
}