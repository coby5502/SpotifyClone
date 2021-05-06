import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 48,
        backgroundColor: '#131313',
        width: '100%',
        borderWidth: 2,
        borderColor: 'black',
    },
    progress: {
        height: 5,
        width: '100%',
        backgroundColor: '#bcbcbc'
    },
    row: {
        flexDirection: 'row',
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        justifyContent: 'space-around',
    },
    image: {
        width: 75,
        height: 75,
        marginRight: 10,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10,
    },
    artist: {
        color: 'lightgray',
        fontSize: 18,
    }
})

export default styles;