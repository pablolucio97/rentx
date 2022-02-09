import React from 'react';
import LottieView from 'lottie-react-native';

import { Container } from './styles';
import carAnimation from '../../../assets/carAnimation.json'



export function LottieAnimation() {
   return (
  <Container>
      <LottieView 
        source={carAnimation}
        style={{height: 160}}
        resizeMode='contain'
        autoPlay
        loop
      />
  </Container>
)
}