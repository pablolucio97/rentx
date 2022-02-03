import React from 'react';
import {
    Container,
    Details,
    Brand,
    Name,
    About,
    Rent,
    Period,
    Price,
    Type,
    CarImage,
} from './styles';

import GasolineSvg from '../../../assets/gasoline.svg'
import { TouchableOpacityProps } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

interface CarData {
    brand: string;
    name: string;
    thumbnail: string;
    fuel_type: string;
    rent: {
        period: string;
        price: number;
    },
}

interface Props extends TouchableOpacityProps {
    data: CarData;
}


export function Car({ data, ...rest }: Props) {

    const navigation = useNavigation()

    function handleNavigation(screen: string) {
        //@ts-ignore
        navigation.navigate({ name: screen })
    }

    const MotorIcon = getAccessoryIcon(data.fuel_type)

    return (
        //@ts-ignore
        <Container
            {...rest}
        >
            <Details>
                <Brand>{data.brand}</Brand>
                <Name>{data.name}</Name>
                <About>
                    <Rent>
                        <Period>{data.rent.period}</Period>
                        <Price>{`R$ ${data.rent.price}`}</Price>
                    </Rent>
                    <Type>
                        <MotorIcon/>
                    </Type>
                </About>
            </Details>
            <CarImage
                source={{ uri: data.thumbnail }}
                resizeMode='contain'
            />
        </Container>
    )
}
