import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import Task from '../components/tasks/Task'
import SubtaskList from '../components/subtasks/SubtaskList'
import EmptySubtaskList from '../components/subtasks/EmptySubtaskList'

class Substasks extends Component {
    render () {
        const { task } = this.props.screenProps
        return (
            <View style={ styles.view }>
                <View style={{ flex: 3 }}>
                    <Task task={ task } />
                </View>
                <View style={{ flex: 10 }}>
                    {
                        Object.keys(task.subtasks).length === 0
                        ? <EmptySubtaskList />
                        : <SubtaskList task={ task } />
                    }
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