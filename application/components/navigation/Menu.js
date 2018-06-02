import { createMaterialTopTabNavigator } from 'react-navigation'

import Tasks from '../../screens/Tasks'

import { white, blue, darkgray, lightblue } from '../../helpers/Colors'

const Menu = createMaterialTopTabNavigator({
    Tasks: {
        screen: Tasks,
        navigationOptions: {
            tabBarLabel: 'Tarefas'
        }
    }
},{
    tabBarOptions: {
        activeTintColor: lightblue,
        inactiveTintColor: blue,
        indicatorStyle: {
            backgroundColor: lightblue
        },
        style: {
            backgroundColor: darkgray,
            shadowColor: 'rgba(0,0,0,.3)',
            shadowOffset: {
                width:0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        }
    }
})

export default Menu