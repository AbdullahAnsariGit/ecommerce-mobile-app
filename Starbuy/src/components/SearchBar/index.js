import {StyleSheet, View, Image, TextInput} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const SearchBar = props => {
  const {leftIcon, rightIcon, placeholder} = props;
  return (
    <View style={styles.container}>
      {leftIcon && <Image source={leftIcon} style={styles.leftIcon} />}
      <TextInput style={styles.input} placeholder={placeholder}></TextInput>
      {rightIcon && <Image source={rightIcon} style={styles.envelope} />}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(6.5),
    backgroundColor: '#E5E5E5',
    borderRadius: responsiveWidth(7),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(4),
    gap: responsiveWidth(3),
    flex:1,
    width:'100%',
    borderColor:'#C9C9C9',
    borderWidth:1
  },
  leftIcon: {
    width: responsiveWidth(5),
    height: responsiveWidth(6),
    resizeMode: 'contain',
    marginRight: responsiveWidth(-1.8),
  },
  input: {
    flex: 1,
    color: '#000',
    fontSize: responsiveFontSize(1.8),
  },
});
