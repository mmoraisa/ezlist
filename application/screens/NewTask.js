import React, { Component } from 'react'
import { Text, View, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, DatePickerAndroid } from 'react-native'
import { MaterialIcons, Foundation } from '@expo/vector-icons'

import { delay } from '../helpers/Utility'

import { connect } from 'react-redux'
import { addTask } from '../actions/tasksActions'
import { addTaskToStorage } from '../helpers/AsyncStorageControl'

import generalStyles from '../helpers/GeneralStyles'
import { white, blue } from '../helpers/Colors'

import CalendarInput from '../components/general/CalendarInput'

class NewTask extends Component{

    initialState = {
        name: '',
        description: '',
        finalDate: '01/01/2018'
    }

    state = {
        name: '',
        description: '',
        finalDate: ''
    }

    componentDidMount () {
        this.resetComponent()
    }

    resetComponent = () => {
        this.setState({
            name: this.initialState.name,
            description: this.initialState.description,
            finalDate: this.initialState.finalDate
        })

        this._nameInput.clear()
        this._descriptionInput.clear()
    }

    handleSubmit = () => {
        const { name, description, finalDate } = this.state
        const { addTask, navigation, screenProps } = this.props

        if(name.length == 0){
            alert('Você precisa preencher o nome da tarefa antes de salvar')
            return false
        }

        if(description.length == 0){
            alert('Você precisa preencher a descrição da tarefa antes de salvar')
            return false
        }

        if(finalDate.length == 0){
            alert('Você precisa preencher a data final da tarefa antes de salvar')
            return false
        }

        const task = { title: name, description, finalDate }

        addTaskToStorage(task)
            .then(() => {
                addTask(task)
                //screenProps.stack.navigate('TaskDetails', { taskTitle: task.title })
                delay(500)
                    .then(() => {
                        navigation.navigate('Tasks')
                    })
                delay(700)
                    .then(this.resetComponent)
            })
    }

    render () {

        const { name, description, finalDate } = this.state

        return (
            <View style={{ flex: 1 }}>
                <Text style={ generalStyles.pageTextHeader }>Nova Tarefa</Text>
                <KeyboardAvoidingView style={ generalStyles.page } behavior="padding">
                    <View>
                        <TextInput
                            placeholder='Nome da tarefa'
                            ref={ (ref) => this._nameInput = ref }
                            style={ generalStyles.textInput }
                            returnKeyType="next"
                            onSubmitEditing={ () => { this._descriptionInput.focus() } }
                            onChangeText={ (name) => { this.setState({ name }) } }
                        />
                        <TextInput
                            placeholder='Descrição da tarefa'
                            ref={ (ref) => this._descriptionInput = ref }
                            style={ generalStyles.textInput }
                            multiline={ true }
                            returnKeyType="done"
                            onChangeText={ (description) => { this.setState({ description }) } }
                        />
                        <CalendarInput
                            placeholder="Data final da tarefa"
                            onDateChange={ (finalDate) => { this.setState({ finalDate }) } }
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
    addTask
})(NewTask)