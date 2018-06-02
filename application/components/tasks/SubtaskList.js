import React from 'react'
import { ScrollView, TouchableOpacity, Text } from 'react-native'


const SubtaskList = ({ subtasks }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
        {
            Object.keys(subtasks).map(subtaskTitle => {
                return (
                    <TouchableOpacity
                        key={ subtaskTitle }
                        activeOpacity={.8}
                    >
                        <Text>{ subtaskTitle }</Text>
                    </TouchableOpacity>
                )
            })
        }
    </ScrollView>
  )
}

export default SubtaskList