import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    inputHolder:{
        width,
        height: 60,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    input:{
        width: 280,
        height: 40,
        fontSize: 15,
        marginHorizontal: 20,
        padding: 5,
        borderWidth: 1,
    },
    btn:{
        width: 90,
        height: 35,
        justifyContent:'center',
        alignItems: 'center'
    }
});


export default styles;