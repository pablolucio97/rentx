import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import { CarDetails } from '../screens/CarDetails'
import { Home } from '../screens/Home'
import { MyCars } from '../screens/MyCars'
import { Scheduling } from '../screens/Scheduling'
import { SchedulingComplete } from '../screens/SchedulingComplete'
import { SchedulingDetails } from '../screens/SchedulingDetails'
import { Splash } from '../screens/Splash'


export function Routes() {

    const {Navigator, Screen} = createStackNavigator()

    return (
        <NavigationContainer>
            <Navigator 
                initialRouteName='Splash'
                screenOptions={{
                    headerShown: false
                }}
            >
                <Screen name='Splash' component={Splash}/>
                <Screen name='Home' component={Home}/>
                <Screen name='CarDetails' component={CarDetails}/>
                <Screen name='Scheduling' component={Scheduling}/>
                <Screen name='MyCars' component={MyCars}/>
                <Screen name='SchedulingDetails' component={SchedulingDetails}/>
                <Screen name='SchedulingComplete' component={SchedulingComplete}/>
            </Navigator>
        </NavigationContainer>
    )
}