import {Image, Text, View} from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const Splash = () => {
  return (
    <View style = {{justifyContent : 'center',alignItems : 'center' , paddingVertical :  heightPercentageToDP('30%')}}>
      <Image
        source={require('../../Assets/images/school-removebg.png')}
        style={{resizeMode: 'contain',}}
      />
      <Text
        style={{
          fontSize: 40,
          fontWeight: '800',
          color: 'black',
        }}>
        Welcome..
      </Text>
    </View>
  );
};

export default Splash;
