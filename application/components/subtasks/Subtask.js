import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

import { connect } from 'react-redux'
import { toggleSubtaskStatus } from '../../actions/subtasksActions'
import { toggleSubtaskCompletion } from '../../helpers/AsyncStorageControl'

import ToggleCompletedButton from '../general/ToggleCompletedButton'

import { green } from '../../helpers/Colors'

class Subtask extends Component {
    
    handleOnToggleChange = (on) => {
        const { task, subtask, toggleSubtaskStatus } = this.props
        toggleSubtaskCompletion(on,subtask,task)
            .then(() => {
                toggleSubtaskStatus(task.title, subtask.title, on)
            })
    }

    render () {
        const { subtask } = this.props
        return (
            <View style={ styles.subtask } >
                <ToggleCompletedButton
                    defaultOn={ subtask.completed }
                    onToggleChange={ this.handleOnToggleChange }
                    />
                <View style={ styles.subtaskInfo }>
                    <Text
                        style={
                            [
                                styles.subtaskTitle,
                                (
                                    subtask.completed
                                    ? styles.subtaskCompletedText
                                    : {}
                                )
                            ]
                        }
                        >
                        { `${subtask.title} (${subtask.timeEstimated} min)` }
                    </Text>
                    <Text
                        style={
                            (
                                subtask.completed
                                ? styles.subtaskCompletedText
                                : {}
                            )
                        }>
                        { subtask.description }
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    subtask: {
        flex: 1,
        flexDirection: 'row',
        padding: 10
    },
    subtaskInfo: {
        marginLeft: 10,
        justifyContent: 'center'
    },
    subtaskTitle: {

    },
    subtaskCompletedText: {
        color: green,
        textDecorationLine: 'line-through'
    }
})

export default connect(null,{
    toggleSubtaskStatus
})(Subtask)