import {TextInput} from 'react-native';
import styles from './style';

const CommonTextInput = props => {
  const {secureTxtEntry = false, keyboardType = 'default', multiline = false} = props;
  return (
    <TextInput
      keyboardType={keyboardType}
      style={styles.txtinput}
      secureTextEntry={secureTxtEntry}
      multiline = {multiline}
      numberOfLines={multiline ? 3 :1}
    />
  );
};

export default CommonTextInput;
