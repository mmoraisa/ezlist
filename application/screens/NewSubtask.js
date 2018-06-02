import React, { Component } from 'react'
import { Text, View, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { delay } from '../helpers/Utility'

import { connect } from 'react-redux'
import { addSubtask } from '../actions/subtasksActions'
import { addSubtaskToTask } from '../helpers/AsyncStorageControl'

import generalStyles from '../helpers/GeneralStyles'

class NewSubtask extends Component{

    initialState = {
        name: '',
        description: '',
        timeEstimated: 40
    }

    state = {
        name: '',
        description: '',
        timeEstimated: 0
    }

    componentDidMount () {
        this.resetComponent()
    }

    resetComponent = () => {
        this.setState({
            name: this.initialState.name,
            description: this.initialState.description,
            timeEstimated: this.initialState.timeEstimated
        })

        this._nameInput.clear()
        this._descriptionInput.clear()
        this._timeEstimated.clear()
    }

    handleSubmit = () => {
        const { name, description, timeEstimated } = this.state
        const { addSubtask, navigation, screenProps } = this.props
        const { task } = screenProps

        if(name.length == 0){
            alert('Você precisa preencher o nome da subtarefa antes de salvar')
            return false
        }

        if(description.length == 0){
            alert('Você precisa preencher a descrição da subtarefa antes de salvar')
            return false
        }

        if(timeEstimated == 0){
            alert('Você precisa preencher o tempo estimado da subtarefa antes de salvar')
            return false
        }

        const subtask = { title: name, description, timeEstimated, completed: false }
        
        addSubtaskToTask(subtask,task)
            .then(() => {
                addSubtask(task.title,subtask)
                //screenProps.stack.navigate('TaskDetails', { taskTitle: task.title })
                delay(500)
                    .then(() => {
                        navigation.navigate('Subtasks')
                    })
                delay(700)
                    .then(this.resetComponent)
            })
    }

    render () {

        const { name, description, timeEstimated } = this.state

        return (
            <View style={{ flex: 1 }}>
                <Text style={ generalStyles.pageTextHeader }>Nova Subtarefa</Text>
                <KeyboardAvoidingView style={ generalStyles.page } behavior="padding">
                    <View>
                        <TextInput
                            placeholder='Nome da subtarefa'
                            ref={ (ref) => this._nameInput = ref }
                            style={ generalStyles.textInput }
                            returnKeyType="next"
                            onSubmitEditing={ () => { this._descriptionInput.focus() } }
                            onChangeText={ (name) => { this.setState({ name }) } }
                        />
                        <TextInput
                            placeholder='Descrição da subtarefa'
                            ref={ (ref) => this._descriptionInput = ref }
                            style={ generalStyles.textInput }
                            multiline={ true }
                            returnKeyType="next"
                            onSubmitEditing={ () => { this._timeEstimated.focus() } }
                            onChangeText={ (description) => { this.setState({ description }) } }
                        />
                        <TextInput
                            placeholder='Tempo estimado da subtarefa'
                            ref={ (ref) => this._timeEstimated = ref }
                            style={ generalStyles.textInput }
                            keyboardType="numeric"
                            returnKeyType="done"
                            onChangeText={ (timeEstimated) => { this.setState({ timeEstimated }) } }
                        />                        
                        <TouchableOpacity
                            activeOpacity={.8}
                            style={[ generalStyles.buttonEzlist, { marginTop: 20 } ]}
                            onPress={ this.handleSubmit }
                            >
                            <View>
                                <Text style={ generalStyles.buttonEzlistText }>
                                    <MaterialIcons name="save"/> Salvar
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

export default connect(null,{
    addSubtask
})(NewSubtask)