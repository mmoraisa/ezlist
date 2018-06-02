import { createMaterialTopTabNavigator } from 'react-navigation'

import Subtasks from '../../screens/Subtasks'
import NewSubtask from '../../screens/NewSubtask'

import { white, blue, darkgray, lightblue } from '../../helpers/Colors'

const TaskDetailsMenu = createMaterialTopTabNavigator({
    Subtasks: {
        screen: Subtasks,
        navigationOptions: {
            tabBarLabel: 'Detalhes'
        }
    },
    NewSubtask: {
        screen: NewSubtask,
        navigationOptions: {
            tabBarLabel: 'Nova Subtarefa'
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

export default TaskDetailsMenu