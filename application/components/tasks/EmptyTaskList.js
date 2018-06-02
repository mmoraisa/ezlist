import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const EmptyTaskList = () => {
    return (
        <View style={ styles.view }>
            <Text style={ styles.text }>A lista de tarefas está vazia</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center'
    }
})

export default EmptyTaskList