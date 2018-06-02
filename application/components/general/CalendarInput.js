import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Text, DatePickerAndroid } from 'react-native'

import { Foundation } from '@expo/vector-icons'
import generalStyles from '../../helpers/GeneralStyles'
import { blue } from '../../helpers/Colors'

class CalendarInput extends Component {

    state = {
        date: '01/01/2018'
    }

    async getDateFromCalendar () {
        try {
            const { action, year, month, day } = await DatePickerAndroid.open({
                date: new Date()
            });
            if (action !== DatePickerAndroid.dismissedAction){
                const monthToRender = month < 9 ? '0' + (month + 1) : month + 1
                return `${day}/${monthToRender}/${year}`
            }
        } catch ({code, message}) {
            console.warn('Não foi possível abrir o calendário', message);
        }
    }

    handleOnPressCalendar = () => {
        const { onDateChange } = this.props
        this.getDateFromCalendar()
            .then((date) => {
                this.setState({ date })
                onDateChange(date)
            })
    }

    render () {

        const { placeholder } = this.props
        const { date } = this.state

        return (
            <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
                <TextInput
                    placeholder={ placeholder }
                    style={[ generalStyles.textInput, { flex: 4 } ]}
                    editable={ false }
                    value={ date }
                />
                <TouchableOpacity
                    activeOpacity={.8}
                    onPress={ () => { this.handleOnPressCalendar() } }
                    style={{ flex: 1 }}
                    >
                    <Text>
                        <Foundation name="calendar" size={42} color={blue} />
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default CalendarInput