import React from 'react'
import { FlatList } from 'react-native'

const TaskList = ({ tasks }) => {
  return (
    <FlatList
      data={ tasks }
      renderItem={({item}) => <Text>{item.key}</Text>}
    />
  )
}

export default TaskList