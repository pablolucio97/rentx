import React from 'react'
import {
  useFonts,
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from '@expo-google-fonts/archivo'
import {
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter'
import AppLoading from 'expo-app-loading'
import {ThemeProvider} from 'styled-components'

import { Home } from './src/screens/Home'
import theme from './src/theme/theme'
import { CarDetails } from './src/screens/CarDetails'

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_600SemiBold,
    Archivo_400Regular,
    Archivo_500Medium,
  })

  if (!fontsLoaded) {
    return (
      <AppLoading />
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <CarDetails />
    </ThemeProvider>
  );
}

