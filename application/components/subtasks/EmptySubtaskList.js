import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const EmptySubtaskList = () => {
    return (
        <View style={ styles.view }>
            <Text style={ styles.text }>Essa tarefa ainda não possui subtarefas cadastradas</Text>
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

export default EmptySubtaskList