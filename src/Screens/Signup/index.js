import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CommonTextInput from '../../Compontes/CommonTxtInput';
import styles from './style';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useMemo, useState} from 'react';
import {RadioGroup} from 'react-native-radio-buttons-group';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation()
  const radioButtons = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Male',
        value: 'Male',
      },
      {
        id: '2',
        label: 'Female',
        value: 'Female',
      },
      {
        id: '3',
        label: 'Not disclose',
        value: 'Not disclose',
      },
    ],
    [],
  );
  const [selectedId, setSelectedId] = useState();

  const url = "https://zkbsgdbbhc.execute-api.us-east-1.amazonaws.com/mvp/teachers";

 const onSubmit = async()=>{
    let result =  await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify({
        "firstName": "john",
        "lastName": "doe",
        "userName": "johndoe",
        "password": "password123",
        "email": "john.doe@example.com",
        "phone": "1234567890",
        "address": "1234 Main Street",
        "pinCode": "123456",
        "age:": 30,
        "gender" : 'male'
      })
    });
    result = await result.json();
    if (result) {
      console.log(result)
      navigation.navigate('Class')
    }
 }

  return (
    <>
      <Image
        style={styles.img}
        source={require('../../Assets/images/school-removebg.png')}
      />
      <ScrollView scrollEnabled style={{paddingHorizontal: 30}}>
        <View style={styles.row}>
          <Text style={styles.txt}>Username</Text>
          <CommonTextInput />
        </View>
        <View style={styles.row}>
          <Text style={styles.txt}>Password</Text>
          <CommonTextInput secureTxtEntry = {true} />
        </View>
        <View style={styles.row}>
          <Text style={styles.txt}>FirstName</Text>
          <CommonTextInput />
        </View>
        <View style={styles.row}>
          <Text style={styles.txt}>LasrName</Text>
          <CommonTextInput />
        </View>
        <View style={styles.row}>
          <Text style={styles.txt}>email</Text>
          <CommonTextInput />
        </View>
        <View style={styles.row}>
          <Text style={styles.txt}>Phone</Text>
          <CommonTextInput keyboardType= {'phone-pad'} />
        </View>
        <View style={styles.row}>
          <Text style={styles.txt}>Address</Text>
         <TextInput multiline numberOfLines={4} style={styles.txtInput} />
        </View>
        <View style={styles.row}>
          <Text style={styles.txt}>Pincode</Text>
          <CommonTextInput keyboardType= {'phone-pad'} />
        </View>
        <View style={[styles.row, {justifyContent: 'flex-start'}]}>
          <Text style={styles.txt}>Age</Text>
          <TextInput
            style={{
              borderRadius: 15,
              width: wp('15%'),
              borderWidth: 1,
              height: hp('5%'),
              marginLeft: wp('18%'),
            }}
            keyboardType="number-pad"
          />
        </View>
        <View style={[styles.row, {justifyContent: 'flex-start'}]}>
          <Text style={styles.txt}>Gender</Text>
          <View
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              marginLeft: wp('6%'),
            }}>
            <RadioGroup
              radioButtons={radioButtons}
              onPress={setSelectedId}
              selectedId={selectedId}
            />
          </View>
        </View>
        <TouchableOpacity style ={styles.btn} onPress={onSubmit}>
          <Text style = {styles.submit}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default Signup;
