import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import Task from '../components/tasks/Task'
import SubtaskList from '../components/tasks/SubtaskList'

class Substasks extends Component {
    render () {
        const { task } = this.props.screenProps
        return (
            <View style={ styles.view }>
                <View style={{ flex: 1 }}>
                    <Task task={ task } />
                </View>
                <View style={{ flex: 5 }}>
                    <SubtaskList subtasks={ task.subtasks } />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    }
})

export default Substasks