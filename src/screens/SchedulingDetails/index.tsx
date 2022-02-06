import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useTheme } from 'styled-components';
import { Acessory } from '../../components/Acessory';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { ImageSlider } from '../../components/ImageSlider';
import { api } from '../../services/api';
import { ParamsProps } from '../../types/cars';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { getPlatformDate } from '../../utils/getPlatformDate';
import {
    Acessories,
    Brand, CalenderIconContainer, CarImages,
    Container,
    Content, DateInfo, DateTitle,
    DateValue, Description,
    Details, Footer, Header,
    Name,
    Period,
    Price,
    Rent,
    RentalPeriod, RentalPrice, RentalPriceDetails, RentalPriceLabel, RentalPriceQuota, RentalPriceTotal
} from './styles';


interface RentalPeriod {
    start: string;
    end: string;
}


export function SchedulingDetails() {

    const theme = useTheme()
    const navigation = useNavigation()
    const route = useRoute()

    const { car, dates } = route.params as ParamsProps
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)
    const [loading, setLoading] = useState(false)

    const rentalTotal = Number(dates.length * car.rent.price)

    async function handleConfirmRental() {

        try {
            const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`)

            const unavailable_dates = [
                ...schedulesByCar.data.unavailable_dates,
                ...dates
            ]
            
            setLoading(true)

            await api.put(`/schedules_bycars/${car.id}`, {
                id: car.id,
                unavailable_dates,
            })

            await api.post(`schedules_byuser`, {
                user_id: 1,
                car,
                startDate: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
                endDate: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy')
            })
                //@ts-ignore
                .then(() => navigation.navigate('SchedulingComplete'))
        } catch (error) {
            Alert.alert('Não foi possível finalizar o agendamento', 'Carro indisponível para este dia.')
            setLoading(false)
        }

    }

    useEffect(() => {
        setRentalPeriod({
            start: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
            end: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy')
        })
    }, [])



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
                        <Price>{car.rent.price}</Price>
                    </Rent>
                </Details>
                <Acessories>
                    {car.accessories.map(accessory => (
                        <Acessory
                            name={accessory.name}
                            icon={getAccessoryIcon(accessory.type)}
                        />
                    ))}
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
                        <DateValue>{rentalPeriod.start}</DateValue>
                    </DateInfo>
                    <Feather
                        name='chevron-right'
                        size={12}
                        color={theme.colors.text}
                    />
                    <DateInfo>
                        <DateTitle>Até</DateTitle>
                        <DateValue>{rentalPeriod.end}</DateValue>
                    </DateInfo>
                </RentalPeriod>
                <RentalPrice>
                    <RentalPriceLabel>TOTAL</RentalPriceLabel>
                    <RentalPriceDetails>
                        <RentalPriceQuota>{`R$ ${car.rent.price} x${dates.length} diárias`}</RentalPriceQuota>
                        <RentalPriceTotal>R$ {rentalTotal}</RentalPriceTotal>
                    </RentalPriceDetails>
                </RentalPrice>

            </Content>
            <Footer>
                <Button
                    title='Alugar carro'
                    color={theme.colors.success}
                    onPress={handleConfirmRental}
                    enabled={!loading}
                    loading={loading}
                />
            </Footer>
        </Container>
    )
}