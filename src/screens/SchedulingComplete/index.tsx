import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native'
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
import { useNavigation } from '@react-navigation/native';

export function SchedulingComplete() {


    const { width } = useWindowDimensions()

    const navigation = useNavigation()

    function handleNavigation(screen: string){
      //@ts-ignore
      navigation.navigate({name: screen})
    }
  

    return (
        <Container>
            <StatusBar
                barStyle='light-content'
                translucent
                backgroundColor='transparent'
            />
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
                        Agora você só precisa ir {'\n'}
                        até uma consecionária RentX {'\n'}
                        e pegar o seu automóvel.
                    </Message>
                </Content>
                <Footer>
                    <ConfirmButton 
                        title='OK'
                        activeOpacity={.8}
                        onPress={() => handleNavigation('Home')}
                    />
                </Footer>
        </Container>
    )
}