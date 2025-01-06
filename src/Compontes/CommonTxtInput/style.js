import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";


const styles = StyleSheet.create({
    txtinput : {
        borderRadius : 15,
        width : wp('60%'),
        borderWidth : 1,
        height : hp('5%')

    },
})

export default styles