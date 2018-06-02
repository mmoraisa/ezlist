import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

import { getTasks, setInitialTasks } from '../helpers/AsyncStorageControl'
import { loadTasks } from '../actions/tasksActions'

class Tasks extends Component {

    componentWillMount () {
        const { loadTasks } = this.props
     
        setInitialTasks()
            .then(getTasks)
            .then(loadTasks)
            .catch((err) => console.log(err))
    }

    render () {
        const { tasks } = this.props
        return (
            <View>
                <Text>{JSON.stringify(tasks)}</Text>
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