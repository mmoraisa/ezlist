import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import { green } from '../../helpers/Colors'

class ToggleCompletedButton extends Component{
    
    state = {
        on: false
    }

    componentWillMount() {
        const { defaultOn } = this.props
        this.setState({
            on: defaultOn
        })
    }

    handleOnPress = () => {
        const { onToggleChange } = this.props
        const { on } = this.state
        this.setState({
            on: !on
        })
        onToggleChange(!on)
    }

    render () {
        const { on } = this.state
        return (
            <TouchableOpacity
                style={ styles.toggleCompletedButton }
                onPress={ this.handleOnPress }>
                <Ionicons
                    name={
                        on
                        ? "ios-checkmark-circle-outline"
                        : "ios-radio-button-off"
                    }
                    style={[
                        styles.toggleCompletedButtonText,
                        on
                        ? styles.on
                        : {}
                    ]} />
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    toggleCompletedButton: {

    },
    toggleCompletedButtonText: {
        fontSize: 24
    },
    on: {
        color: green
    }
})

export default ToggleCompletedButton