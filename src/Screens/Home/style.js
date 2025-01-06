import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";


const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 10
    },
    btn:{
        height : wp('15%'),
        width: wp('15%'),
        // borderWidth : 1,
        marginLeft : -20,
        justifyContent : 'center',
        alignItems : 'center'
    },
    icon :{
        height : wp('15%'),
        width: wp('15%'),
        resizeMode : 'cover',
        alignSelf: "center",
        // justifyContent : ''
    },
    headerView:{
        flexDirection:'row',
        justifyContent : 'space-around',
        height : hp('10%'),
        // borderWidth : 1,
        alignItems : 'center',
    },
    notification : {
        width : wp('10%'),
        height : hp('5%'),
        // backgroundColor : 'red',
        resizeMode :'contain',
        alignSelf : 'center'
    },
    cards : {
        justifyContent : 'center',
        alignItems : 'center',
        borderWidth : 1,
        width : wp('90%'),
        height : wp('25%'),
        alignSelf : 'center',
        marginVertical : wp('4%')
    },
    txt : {
        fontSize : 35,
        fontWeight : '600',
        color : 'black'
    }
});

export default styles;