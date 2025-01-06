import {StyleSheet} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container:{padding : 20},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: wp('4%'),
  },
  txt: {
    fontSize: 25,
    alignSelf: 'center',
    color: 'black',
  },
  btn :{
    backgroundColor : '#90EE90',
    marginBottom : 25,
    alignSelf : 'center',
    height : 65,
    width: 120,
    justifyContent : 'center',
    borderRadius : 15
  },
  picker: {
    flex: 1,
    height: 40,
    // width: 200,
    padding : 25,
    fontSize : 25
  },
  itemStyle : {
    fontSize : '20',
    color : 'black'
  }
});

export default styles;
