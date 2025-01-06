import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import { useEffect } from 'react';

const Login = () => {
  const navigation = useNavigation();
  const url = "https://zkbsgdbbhc.execute-api.us-east-1.amazonaws.com/mvp/login/teacher";

 const onSubmit = async()=>{
    let result =  await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify({
        userName: "johndoe",
        password: "password123"
      })
    });
    result = await result.json();
    if (result) {
      console.log(result)
      navigation.navigate('DrawerNav')
    }
 }
  
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image source={require('../../Assets/images/school-removebg.png')} />
      </View>
      <View>
        <View style={styles.txtinputView}>
          <Text style={styles.txt}>Name</Text>
          <TextInput style={styles.txtInput} />
        </View>
        <View style={styles.txtinputView}>
          <Text style={styles.txt}>Password</Text>
          <TextInput secureTextEntry style={styles.txtInput} />
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.btn} onPress={onSubmit}>
          <Text style={[styles.txt, {fontSize: 30}]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, {backgroundColor: '#87CEEB'}]}
          onPress={() => {navigation.navigate('Signup')}}>
          <Text style={[styles.txt, {fontSize: 30}]}>Signup</Text>
        </TouchableOpacity>
        <Text
          style={styles.forgot}
          onPress={() => {
            console.warn('FORGOT PASSWORD');
          }}>
          Forgot Password?{' '}
        </Text>
      </View>
    </View>
  );
};

export default Login;
