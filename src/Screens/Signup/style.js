import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    img:{
        resizeMode : 'contain',
        alignSelf : 'center',
        marginVertical : hp('3%'),
        height : wp('30%'),
        width : wp('40%')
    },
    row : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginBottom : wp('4%')
    },
    txt : {
        fontSize : 20,
        alignSelf : 'center',
        color : 'black'
    },
    btn : {
        borderRadius : 10,
        backgroundColor : '#90EE90',
        height : wp('16%'),
        width : wp('30%'),
        alignSelf : 'center',
        justifyContent : 'center',
        alignItems : 'center'
    },
    submit : {
        fontSize : 30,
        fontWeight : '500',
        color : 'black',
        // alignSelf: 'center'
    },
    txtInput : {
        borderRadius : 10,
        borderWidth : 1,
        width : wp('60%'),
        height : hp('15%'),
        padding : 10,
        textAlignVertical: 'top',
        fontSize: 16,   
    }

})
export default styles