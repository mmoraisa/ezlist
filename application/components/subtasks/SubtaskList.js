import React from 'react'
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native'

import Subtask from './Subtask'

const SubtaskList = ({ task }) => {
  return (
    <ScrollView style={ styles.view }>
        {
            Object.keys(task.subtasks).map(subtaskTitle =>
                <Subtask
                    key={ subtaskTitle }
                    task={ task }
                    subtask={ task.subtasks[subtaskTitle] }
                    />
            )
        }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        padding: 20
    }
})

export default SubtaskList