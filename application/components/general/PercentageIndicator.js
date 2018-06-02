import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { blue, green, yellow, red } from '../../helpers/Colors'

const PercentageIndicator = ({ actual, maximum }) => {

    let percentage;

    if(actual === maximum)
        percentage = actual === 0 ? 0 : 100
    else
        percentage = (actual * 100 / maximum)

    if(percentage === 0)
        return <EmptyPercentageIndicator />
        
    if(percentage === 100)
        return <FullPercentageIndicator />

    return (
        <View style={
                [
                    styles.percentageIndicator,
                    (
                        percentage < 50
                        ? styles.percentageIndicatorLessThanAHalf
                        : styles.percentageIndicatorEqualsOrMoreThanAHalf
                    )
                ]
            }
            >
            <Text style={ styles.percentageIndicatorText }>{ percentage.toFixed(2).toString().replace('.',',') }%</Text>
        </View>
    )
}

const FullPercentageIndicator = () => {
    return (
        <View style={[ styles.percentageIndicator, styles.fullPercentageIndicator ]}>
            <Text style={[ styles.percentageIndicatorText, styles.fullPercentageIndicatorText ]}>
                <Feather name="check" size={32}/>
            </Text>
        </View>
    )
}

const EmptyPercentageIndicator = () => {
    return (
        <View style={[ styles.percentageIndicator, styles.emptyPercentageIndicator ]}></View>
    )
}

const styles = StyleSheet.create({
    percentageIndicator: {
        padding: 10,
        borderRadius: 10,
        width: 70,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2
    },
    percentageIndicatorEqualsOrMoreThanAHalf: {
        borderColor: yellow
    },
    percentageIndicatorLessThanAHalf: {
        borderColor: red
    },
    percentageIndicatorText: {
        textAlign: 'center'
    },
    fullPercentageIndicator: {
        borderColor: green
    },
    fullPercentageIndicatorText: {
        color: green
    },
    emptyPercentageIndicator: {
        borderColor: blue
    }
})

export default PercentageIndicator