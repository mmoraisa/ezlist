import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

import { getTasks, setInitialTasks } from '../helpers/AsyncStorageControl'
import { loadTasks } from '../actions/tasksActions'

import TaskList from '../components/tasks/TaskList'
import EmptyTaskList from '../components/tasks/EmptyTaskList';

class Tasks extends Component {

    componentWillMount () {
        const { loadTasks } = this.props
     
        setInitialTasks()
            .then(getTasks)
            .then(loadTasks)
            .catch((err) => console.log(err))
    }

    showTask = (task) => {
        const { stack } = this.props.screenProps
        stack.navigate('TaskDetails', { taskTitle: task.title })
    }

    render () {
        const { tasks } = this.props
        return (
            <View style={{ flex: 1 }}>
                {
                    Object.keys(tasks).length === 0
                    ? <EmptyTaskList />
                    : <TaskList tasks={ tasks } showTask={ this.showTask } />
                }
            </View>
        )
    }
}

function mapStateToProps({ tasks }) {
    return {
        tasks
    }
}

export default connect(mapStateToProps,{
    loadTasks
})(Tasks)