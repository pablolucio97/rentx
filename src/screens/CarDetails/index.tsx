import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { useTheme } from 'styled-components';
import { Acessory } from '../../components/Acessory';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { ImageSlider } from '../../components/ImageSlider';
import { ParamsProps } from '../../types/cars';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import {
    About, Acessories, Brand,
    CarImages,
    Container,
    Content,
    Description,
    Details, Footer, Header,
    Name,
    Period,
    Price,
    Rent
} from './styles';




export function CarDetails() {

    const theme = useTheme()
    const route = useRoute()
    const navigation = useNavigation()

    const { car } = route.params as ParamsProps

    function handleNavigation() {
        //@ts-ignore
        navigation.navigate('Scheduling', {car})
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
                    onPress={handleNavigation}
                    color={theme.colors.success}
                />
            </Footer>
        </Container>
    )
}