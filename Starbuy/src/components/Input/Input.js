import {StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';

const Input = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {

    const [hidePassword, setHidePassword] = useState(password);
    const [isFocused, setIsFocused] = useState(false);
  return (
    <View>
     <Text>{label}</Text>
     <View></View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
