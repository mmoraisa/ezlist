import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

import PercentageIndicator from '../general/PercentageIndicator';

import { lightgray } from '../../helpers/Colors'

const Task = ({ task }) => {
  return (
    <View style={ styles.task }>
      <PercentageIndicator
        actual={50}
        maximum={100}
        style={ styles.percentageIndicator }
        />
      <View style={ styles.taskInfo }>
        <Text style={ styles.taskTitle }>{ task.title }</Text>
        <Text style={ styles.taskDescription }>{ task.description }</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: lightgray,
    padding: 20
  },
  percentageIndicator: {
    flex: 3
  },
  taskInfo: {
    flex: 5,
    marginLeft: 20
  },
  taskTitle: {

  },
  taskDescription: {
    
  }
})

export default Task;
