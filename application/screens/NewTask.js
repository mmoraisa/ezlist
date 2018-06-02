import React, { Component } from 'react'
import { Text, View } from 'react-native'

class NewTask extends Component{

    state = {

    }

    render () {
        return (
            <View style={{ flex: 1 }}>
                <Text>Nova Tarefa</Text>
            </View>
        )
    }
}

export default NewTask