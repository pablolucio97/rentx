import React from 'react';
import { StatusBar } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue
} from 'react-native-reanimated'

import { useTheme } from 'styled-components';
import { Acessory } from '../../components/Acessory';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { ImageSlider } from '../../components/ImageSlider';
import { ParamsProps } from '../../types/cars';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import {
    About, Acessories, Brand,
    Container,
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
        navigation.navigate('Scheduling', { car })
    }

    const scrollY = useSharedValue(0)
    const scrollHandler = useAnimatedScrollHandler(event => {
        scrollY.value = event.contentOffset.y
    })

    const headerStyleAnimation = useAnimatedStyle(() => {
        return {
            height: interpolate(
                scrollY.value,
                [0, 192],
                [192, 0],
                Extrapolate.CLAMP
            )
        }

    })

    const sliderCarStyleAnimation = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                scrollY.value,
                [0, 80],
                [1, 0],
                Extrapolate.CLAMP
            )
        }
    })


    return (
        <Container
        >
            <BackButton
                color={theme.colors.text_detail}
                onPress={() => navigation.goBack()}
            />
            <Animated.View
                style={headerStyleAnimation}
            >
                <Header>
                </Header>
                <StatusBar
                    barStyle='dark-content'
                    translucent
                    backgroundColor='#fff'
                />
                <Animated.View
                    style={sliderCarStyleAnimation}
                >
                    <ImageSlider
                        imageUrl={car.photos}
                    />
                </Animated.View>
            </Animated.View>
            <Animated.ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    padding: 24,
                    alignItems: 'center'
                }}
                onScroll={scrollHandler}
                scrollEventThrottle={16}
                overScrollMode='never'
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
                    {car.about}
                    {car.about}
                    {car.about}
                    {car.about}
                </About>
            </Animated.ScrollView>
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