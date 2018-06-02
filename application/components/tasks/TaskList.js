import React from 'react'
import { FlatList, View, Text } from 'react-native'

const TaskList = ({ tasks }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text>{JSON.stringify(tasks)}</Text>
      
    </View>
  )
}

export default TaskList