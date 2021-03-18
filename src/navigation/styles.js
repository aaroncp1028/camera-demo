import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {

        height: 280,
        top: -220,
        backgroundColor: 'transparent',
        flexDirection: 'row',

    },
    title: {
        fontSize: 28,
    },
    play: {
        width: 80,
        resizeMode: 'stretch',
        height: 80
    },
    gallery: {
        width: 80,
        height: 80,
        resizeMode: 'stretch'
    },
    gear: {
        width: 70,
        height: 70,
        resizeMode: 'stretch'
    },
    order: {
        width: 70,
        height: 70,
        resizeMode: 'stretch'
    },
    bottomButton: {
        flexDirection: 'column',
        paddingTop: 100,
        alignItems: 'center',
    }
})

export default styles;