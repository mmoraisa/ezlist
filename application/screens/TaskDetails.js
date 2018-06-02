import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { connect } from 'react-redux'

import TaskDetailsMenu from '../components/navigation/TaskDetailsMenu'

class TaskDetails extends Component{

    static navigationOptions = ({ navigation }) => {
        const { taskTitle } = navigation.state.params
        return { title: taskTitle }
    }

    render () {
        const { tasks, navigation } = this.props
        const { taskTitle } = navigation.state.params
        return (
            <TaskDetailsMenu screenProps={{ stack: navigation, task: tasks[taskTitle] }}/>
        )
    }
}

function mapStateToProps({ tasks }){
    return {
        tasks
    }
}

export default connect(mapStateToProps)(TaskDetails)