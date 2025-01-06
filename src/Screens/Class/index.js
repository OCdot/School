import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import CommonTextInput from '../../Compontes/CommonTxtInput';
import {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

import RNPickerSelect from 'react-native-picker-select';

const Class = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const dates = Array.from({ length: 31 }, (_, i) => ({
    label: (i + 1).toString(),
    value: (i + 1).toString(),
  }));

  return (
    <View style={styles.container}>
      <View
        style={{
          borderBottomWidth: StyleSheet.hairlineWidth,
          paddingBottom: 10,
        }}>
        <Text style={[styles.txt, {alignSelf: 'flex-start'}]}>Class</Text>
      </View>

      <Text style={[styles.txt, {alignSelf: 'flex-start', marginTop: 20}]}>
        Name
      </Text>
      <View style={styles.row}>
        <Text style={styles.txt}>Course</Text>
        <CommonTextInput />
      </View>
      <View style={styles.row}>
        <Text style={styles.txt}>Subject</Text>
        <CommonTextInput />
      </View>
      <View style={styles.row}>
        <Text style={styles.txt}>Description</Text>
        <CommonTextInput />
      </View>
      <View style={styles.row}>
        <Text style={styles.txt}>Payment Frequency</Text>
        <CommonTextInput />
      </View>
      <View style={styles.row}>
        <Text style={styles.txt}>Fee Amount</Text>
        <CommonTextInput />
      </View>
      <View style={styles.row}>
        <Text style={styles.txt}>Payment Date</Text>
        {/* <RNPickerSelect
        onValueChange={(value) => setSelectedDate(value)}
        items={dates}
        placeholder={{
          label: 'Select a date',
          value: null,
          color: '#9EA0A4',
        }}
        // style={{
        //   inputIOS: styles.input, // iOS-specific styles
        //   inputAndroid: styles.input, // Android-specific styles
        //   placeholder: styles.placeholder, // Placeholder text styles
        // }}
        value={selectedDate}
      /> */}
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.txt}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Class;
