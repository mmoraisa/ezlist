import React from 'react'
import { Text, View } from 'react-native'

import EzlistStatusBar from '../components/general/EzlistStatusBar'
import Stack from '../components/navigation/Stack'
import { black } from '../helpers/Colors'

const Main = () => {
    return (
        <View style={{ flex: 1 }}>
            <EzlistStatusBar
                backgroundColor={ black }
                barStyle='light-content'
            />
            <Stack />
        </View>
    )
}

export default Main