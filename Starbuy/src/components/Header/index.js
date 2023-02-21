import { Image, StyleSheet, Text, useWindowDimensions, View, TextInput } from 'react-native'
import React from 'react'
import { Pic, Search, Vector } from '../../assets'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
  } from 'react-native-responsive-dimensions';
import SearchBar from '../SearchBar';

const Header = (props) => {
    const {Placeholder="Seacrh", Title="Checkout" , LeftIcon, RightIcon} = props
  return (
    <View style={styles.container}>
      {true && <Image source={Vector} style={styles.leftIcon}/>}
     {true ?  <SearchBar leftIcon={Search} placeholder='Seacrh'/> : <Text style={styles.title}>{Title}</Text> }
    {false && <Image source={Vector} style={styles.rightIcon}/>}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
     flexDirection:'row',
     justifyContent:'space-between',
     alignItems:'center', 
     gap:responsiveWidth(6),
     paddingHorizontal:responsiveWidth(1),
     paddingVertical:responsiveHeight(1.5)
    },
    leftIcon:{
        height:responsiveWidth(5),
        width:responsiveWidth(6),
        resizeMode:'contain'
    },
    rightIcon:{
      height:responsiveWidth(5),
      width:responsiveWidth(6),
      resizeMode:'contain'
  },
    title:{
        fontSize:responsiveFontSize(2.4),
        fontWeight:'700',
        color:'#000',
    }
})