import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTheme } from 'styled-components';
import AcelerationSvg from '../../../assets/car.svg';
import Exchangevg from '../../../assets/exchange.svg';
import ForceSvg from '../../../assets/force.svg';
import GasolineSvg from '../../../assets/gasoline.svg';
import PeopleSvg from '../../../assets/people.svg';
import SpeedSvg from '../../../assets/speed.svg';
import { Acessory } from '../../components/Acessory';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { ImageSlider } from '../../components/ImageSlider';
import {
    About, Acessories, Brand,
    CarImages,
    Container,
    Content,
    Description,
    Details,
    Header,
    Name,
    Period,
    Price, 
    Rent,
    Footer
} from './styles';

export function CarDetails() {

    const theme = useTheme()

    const carImages = [
        'https://www.pngkit.com/png/detail/237-2375768_2018-porsche-718-cayman-vs-porsche-718-cayman.png',
        'https://www.pngkit.com/png/detail/237-2375768_2018-porsche-718-cayman-vs-porsche-718-cayman.png'
    ]

    const navigation = useNavigation()

    function handleNavigation(screen: string){
      //@ts-ignore
      navigation.navigate({name: screen})
    }
  

    return (
        <Container
        >
            <Header>
                <BackButton
                    color={theme.colors.text_detail}
                    onPress={() => navigation.goBack()}
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
                <Acessories>
                    <Acessory
                        name='362Km/h'
                        icon={SpeedSvg}
                    />
                    <Acessory
                        name='3.2s'
                        icon={AcelerationSvg}
                    />
                    <Acessory
                        name='380HP'
                        icon={ForceSvg}
                    />
                    <Acessory
                        name='Automatico'
                        icon={Exchangevg}
                    />
                    <Acessory
                        name='Gasolina'
                        icon={GasolineSvg}
                    />
                    <Acessory
                        name='2 pessoas'
                        icon={PeopleSvg}
                    />
                </Acessories>
                <About>
                    Este é automóvel desportivo.
                    Surgiu do lendário touro de lide indultado na praça Real Maestranza
                    de Sevilla. É um belíssimo carro para quem gosta de acelerar.
                </About>
            </Content>
            <Footer>
                <Button
                    title='Confirmar'
                    onPress={() => handleNavigation('SchedulingDetails')}
                />
            </Footer>
        </Container>
    )
}