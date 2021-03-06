import React from 'react'
import { View, StatusBar } from 'react-native'
import { Constants } from 'expo'

const EzlistStatusBar = ({ backgroundColor, ...props }) => {
    return (
        <View style={{ height: Constants.statusBarHeight, backgroundColor: backgroundColor }}>
            <StatusBar
                translucent
                backgroundColor={backgroundColor}
                {...props}
            />
        </View>
    )
}

export default EzlistStatusBar