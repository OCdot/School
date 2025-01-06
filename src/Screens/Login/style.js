import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  img: {
    alignSelf : 'center',
    marginBottom : 30
  },
  txtinputView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    // alignSelf : ''
  },
  txtInput: {
    borderWidth: 1,
    // backgroundColor : 'black',
    width : 250,
    color : 'black',
    fontSize : 20,
    borderRadius : 15
  },
  txt : {
    fontSize : 20,
    alignSelf : 'center'
  },
  btn : {
    backgroundColor : '#90EE90',
    marginBottom : 25,
    alignSelf : 'center',
    height : 65,
    width: 120,
    justifyContent : 'center',
    borderRadius : 15
  },
  forgot:{
    alignSelf : 'center',
    fontSize : 25,
    color: 'red'
  }
});

export default styles;
