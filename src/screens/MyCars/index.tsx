import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native';

import { CarProps } from '../../types/cars'
import { api } from '../../services/api';
import { Car } from '../../components/Car'
import { BackButton } from '../../components/BackButton';

import {
    Container,
    Title,
    SubTitle,
    Header,
    Content,
    Appointments,
    AppointmentQuanitty,
    AppointmentTitle,
} from './styles';
import { FlatList } from 'react-native';

interface UserCarProps {
    id: string;
    user_id: string;
    car: CarProps
}


export function MyCars() {

    const navigation = useNavigation()
    const theme = useTheme()

    const [cars, setCars] = useState<UserCarProps[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await api.get('/schedules_byuser?user_id=1')
                setCars(response.data)
                console.log(cars)
            } catch (error) {
                console.log(error)
            }
        }
        fetchCars()
    }, [])

    return (
        <Container>
            <Header>
                <BackButton
                    onPress={() => navigation.goBack()}
                    color={theme.colors.shape}
                />
                <Title>Escolha uma {'\n'} data  de início e {'\n'}fim do aluguel</Title>
                <SubTitle>Conforto, praticidade e segurança</SubTitle>
            </Header>
            <Content>
                <Appointments>
                    <AppointmentTitle>Agendamentos feitos</AppointmentTitle>
                    <AppointmentQuanitty>{cars.length}</AppointmentQuanitty>
                </Appointments>
            <FlatList
                data={cars}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Car
                        data={item.car}
                    />
                )}
            />
            </Content>
        </Container>
    )
}