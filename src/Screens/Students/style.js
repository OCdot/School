import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headTxt: {
    fontSize: 40,
    fontWeight: '500',
  },
  cards: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    // padding : 10,
  },
  card: {
    height: hp('20%'),
    width: hp('18%'),
    backgroundColor: 'red',
    // alignSelf : 'flex-start',
    marginHorizontal: 15,
    marginVertical: 15,
  },
  btn: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: wp('20%'),
    width: wp('30%'),
    backgroundColor: '#90EE90',
  },
  txt: {
    fontSize: 20,
    fontWeight: '300',
    color: 'black',
  },
  footer : {
    width: wp('100%'),
    justifyContent : 'center',
    alignItems : 'center',
    borderTopWidth : StyleSheet.hairlineWidth,
    padding : 10,
  },
});

export default styles;
