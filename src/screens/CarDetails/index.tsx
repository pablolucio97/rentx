import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useTheme } from 'styled-components';

import { api } from '../../services/api'

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
import { CarProps } from '../../types/cars';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

interface RouteParamsProps {
    car: CarProps
}

export function CarDetails() {

    const theme = useTheme()
    const route = useRoute()
    const navigation = useNavigation()

    const { car } = route.params as RouteParamsProps

    function handleNavigation(screen: string) {
        //@ts-ignore
        navigation.navigate({ name: screen })
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
                    imageUrl={car.photos}
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
                        <Brand>{car.brand}</Brand>
                        <Name>{car.name}</Name>
                    </Description>
                    <Rent>
                        <Period>{car.rent.period}</Period>
                        <Price>R$ {car.rent.price}</Price>
                    </Rent>
                </Details>
                <Acessories>
                    {car.accessories.map(accessory => (
                          <Acessory
                          key={accessory.type}
                          name={accessory.name}
                          icon={getAccessoryIcon(accessory.type)}
                      />
                    ))}
                </Acessories>
                <About>
                    {car.about}
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