import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import Picker from 'react-native-picker-select';
import {useNavigation} from '@react-navigation/native';
import { useEffect, useState } from 'react';

const Home = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('')

  const getData= async ()=>{
    const url = "https://zkbsgdbbhc.execute-api.us-east-1.amazonaws.com/mvp/teachers";
    let result = await fetch(url)
    result = await result.json()
    console.warn(result)
    setName(result[0].userName)
  }

  useEffect(() => {
    getData()
  }, [])
  

  const handleTouch = ()=>{
    Alert.alert('Comming Soon..!')
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.toggleDrawer();
          }}>
          <Image
            style={styles.icon}
            source={require('../../Assets/icons/square.png')}
          />
        </TouchableOpacity>

        <Text style = {styles.txt}>{name}</Text>
        <TouchableOpacity style={styles.btn} onPress={handleTouch}>
          <Image
            style={styles.notification}
            source={require('../../Assets/icons/bell.png')}
          />
        </TouchableOpacity>
        {/* <View style={styles.notification}></View> */}
      </View>
      <TouchableOpacity style ={styles.cards} onPress={()=> navigation.navigate('Students')}>
        <Text style={styles.txt}>Manage Sudents</Text>
      </TouchableOpacity>
      <TouchableOpacity style ={styles.cards} onPress={handleTouch}>
        <Text style={styles.txt}>Messages</Text>
      </TouchableOpacity>
      <TouchableOpacity style ={styles.cards} onPress={handleTouch}>
        <Text style={styles.txt}>Assignments</Text>
      </TouchableOpacity>
      <TouchableOpacity style ={styles.cards} onPress={handleTouch}>
        <Text  style={styles.txt}>Free Teacher</Text>
      </TouchableOpacity>
      <TouchableOpacity style ={styles.cards} onPress={handleTouch}>
        <Text style={styles.txt}>Tests</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
