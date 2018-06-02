import { StyleSheet } from 'react-native'

import { blue, white } from './Colors'

const generalStyles = StyleSheet.create({
    page: {
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingTop: 20
    },
    pageTextHeader: {
        fontSize: 24,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 40,
        marginBottom: 0
    },
    textInput: {
        marginLeft: 20,
        marginRight: 20,
        padding: 10
    },
    buttonEzlist: {
        marginRight: 60,
        marginLeft: 60,
        borderRadius: 3,
        backgroundColor: blue,
        paddingHorizontal: 5,
        paddingVertical: 10
    },
    buttonEzlistText: {
        textAlign: 'center',
        color: white
    }
})

export default generalStyles