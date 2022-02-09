import React, { useEffect } from 'react';
import { Container } from './styles';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    interpolate,
    runOnJS,
    Extrapolate,
} from 'react-native-reanimated'

import LogoSvg from '../../../assets/logo.svg'
import BrandSvg from '../../../assets/brand.svg'
import { useNavigation } from '@react-navigation/native';


export function Splash() {

    const navigation = useNavigation()

    function startApp() {
        //@ts-ignore
        navigation.navigate('Home')
    }

    const splashAnimation = useSharedValue(0)

    const brandStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(splashAnimation.value,
                [0, 25, 50],
                [1, .5, 0],
            ),
            transform: [
                {
                    translateX: interpolate(splashAnimation.value,
                        [0, 50],
                        [0, -50],
                        Extrapolate.CLAMP)
                }
            ]
        }
    })

    const logoStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(splashAnimation.value,
                [0, 25, 50],
                [0, .5, 1],
            ),
            transform: [
                {
                    translateX: interpolate(splashAnimation.value,
                        [0, 50],
                        [-50, 0],
                        Extrapolate.CLAMP)
                }
            ]
        }
    })


    useEffect(() => {
        splashAnimation.value = withTiming(50, {
            duration: 3000
        },
            () => {
                'worklet'
                runOnJS(startApp)()
            }
        )
    }, [])


    return (
        <Container
        >
            <Animated.View
                style={[{ position: 'absolute' }, logoStyle]}
            >

                <LogoSvg
                    width={120}
                    height={72}
                />
            </Animated.View>
            <Animated.View
                style={[{ position: 'absolute' }, brandStyle]}
            >

                <BrandSvg
                    width={80}
                    height={48}

                />
            </Animated.View>
        </Container>
    )
}
