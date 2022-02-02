import React from 'react';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons'


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
    Acessories,
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
    Rent,
    RentalPeriod,
    DateTitle,
    DateValue,
    DateInfo,
    CalenderIconContainer,
    RentalPrice,
    RentalPriceLabel,
    RentalPriceDetails,
    RentalPriceTotal,
    RentalPriceQuota,
    Footer
} from './styles';
import { useNavigation } from '@react-navigation/native';

export function SchedulingDetails() {

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
        <Container>
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
                <RentalPeriod>
                    <CalenderIconContainer>
                        <Feather
                            name='calendar'
                            size={24}
                            color={theme.colors.shape}
                        />
                    </CalenderIconContainer>
                    <DateInfo>
                        <DateTitle>De</DateTitle>
                        <DateValue>05/02/2022</DateValue>
                    </DateInfo>
                    <Feather
                        name='chevron-right'
                        size={12}
                        color={theme.colors.text}
                    />
                       <DateInfo>
                        <DateTitle>Até</DateTitle>
                        <DateValue>10/02/2022</DateValue>
                    </DateInfo>
                </RentalPeriod>
                <RentalPrice>
                    <RentalPriceLabel>TOTAL</RentalPriceLabel>
                    <RentalPriceDetails>
                        <RentalPriceQuota>R$ 500 x3 diárias</RentalPriceQuota>
                        <RentalPriceTotal>R$ 2.900,00</RentalPriceTotal>
                    </RentalPriceDetails>
                </RentalPrice>

            </Content>
            <Footer>
                <Button
                    title='Confirmar'
                    onPress={() => handleNavigation('SchedulingComplete')}
                />
            </Footer>
        </Container>
    )
}