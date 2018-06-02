import React from 'react';
import { Text, View } from 'react-native';

const Task = ({ task }) => {
  return (
    <View>
      <Text>{ task.title }</Text>
    </View>
  );
};

export default Task;
