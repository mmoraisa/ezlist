import React from 'react'
import { Text, View } from 'react-native'

import EzlistStatusBar from '../components/general/EzlistStatusBar'
import { black } from '../helpers/Colors'

const Main = () => {
    return (
        <View style={{ flex: 1 }}>
            <EzlistStatusBar
                backgroundColor={ black }
                barStyle='light-content'
            />
            <Text>Main</Text>
        </View>
    )
}

export default Main