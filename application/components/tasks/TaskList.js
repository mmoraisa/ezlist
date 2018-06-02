import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'

import Task from './Task'

const TaskList = ({ tasks, showTask }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
        {
            Object.keys(tasks).map(taskTitle => {
                return (
                    <TouchableOpacity
                        key={ taskTitle }
                        activeOpacity={.8}
                        onPress={ () => { showTask(tasks[taskTitle]) } }
                    >
                        <Task task={ tasks[taskTitle] } />
                    </TouchableOpacity>
                )
            })
        }
    </ScrollView>
  )
}

export default TaskList