import React from 'react'
import { createStackNavigator } from 'react-navigation'

import Home from '../../screens/Home'
import { blue, lightblue, white, darkgray } from '../../helpers/Colors';

const Stack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    }
},{
    navigationOptions: {
        headerTintColor: white,
        headerStyle: {
            backgroundColor: darkgray
        }
    }
})

export default Stack