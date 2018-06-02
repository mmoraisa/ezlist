import React from 'react'
import { ScrollView } from 'react-native'

import Task from './Task'

const TaskList = ({ tasks }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
        {
            Object.keys(tasks).map(taskTitle => {
                return (<Task key={ taskTitle } task={ tasks[taskTitle] } />)
            })
        }
    </ScrollView>
  )
}

export default TaskList