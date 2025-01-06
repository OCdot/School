import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import { useEffect, useState } from 'react';

const Students = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [pincode, setPincode] = useState('');
  const [email, setEmail] = useState('');

  const getData = async () => {
    const url =
      'https://zkbsgdbbhc.execute-api.us-east-1.amazonaws.com/mvp/students';
    let result = await fetch(url);
    result = await result.json();
    console.warn(result);
    setName(result[0].firstName + ' ' + result[0].lastName);
    setAge(result[0].age);
    setPincode(result[0].pinCode);
    setEmail(result[0].parent1Email);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleTouch = () => {
    Alert.alert(
      'NAME: ' +
        name +
        '\n' +
        'AGE: ' +
        age +
        '\n' +
        'PINCODE: ' +
        pincode +
        '\n' +
        'EMAIL: ' +
        email,
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headTxt}>HEADER</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.cards}>
          <TouchableOpacity style={styles.card} onPress={handleTouch}></TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={handleTouch}></TouchableOpacity>
        </View>
        <View style={styles.cards}>
          <TouchableOpacity style={styles.card} onPress={handleTouch}></TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={handleTouch}></TouchableOpacity>
        </View>
        <View style={styles.cards}>
          <TouchableOpacity style={styles.card} onPress={handleTouch}></TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={handleTouch}></TouchableOpacity>
        </View>
        <View style={styles.cards}>
          <TouchableOpacity style={styles.card} onPress={handleTouch}></TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={handleTouch}></TouchableOpacity>
        </View>
        <View style={styles.cards}>
          <TouchableOpacity style={styles.card} onPress={handleTouch}></TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={handleTouch}></TouchableOpacity>
        </View>
      </ScrollView>
      <View styles={styles.footer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>ADD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Students;
