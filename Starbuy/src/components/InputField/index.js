import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { Msg } from '../../assets';

const InputField = props => {
  const {
    label="Email",
    labelIcon,
    RightTxt,
    placeholder,
    leftIcon,
    rightIcon,
    onChangeText,
    value,
    onBlur,
    secureTextEntry,
    passwordPress,
  } = props;
  return (
    <View>
    <View style={styles.label}>
      <Image source={labelIcon} style={{height:responsiveWidth(6), width:responsiveWidth(5), resizeMode:'contain'}}/>
      <Text style={styles.labelTitle}>{label}</Text>
    </View>
    <View style={styles.input}>
      <TextInput placeholder={placeholder} style={styles.textInput}/>
     { RightTxt && <Text style={styles.showPass}>{RightTxt}</Text>}
    </View>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  label:{
    flexDirection:'row',
    gap:responsiveWidth(2),
    alignItems:'center',
  },
  input:{
    flexDirection:'row',
    alignItems:'center',
    borderBottomWidth:0.8,
    borderBottomColor:'#C9C9C9'
  },
  textInput:{
    flex:1,
    height:responsiveHeight(5),
    color:'#000',
    fontSize:responsiveFontSize(1.8)
  },
  showPass:{
    color:"#5956E9"
  },
  labelTitle:{
    color:'#868686'
  }
});
