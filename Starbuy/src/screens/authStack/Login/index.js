import {Image, Text, View, ImageBackground, TextInput, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {
  BgAssets,
  Lock,
  Msg,
} from '../../../assets';
import {InputField, Button} from '../../../components';
import {styles} from './styles';

import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Login = () => {

  return (
    <View style={styles.container}>
      <Image
        source={BgAssets}
        style={{
          height: responsiveHeight(100),
          width: responsiveWidth(100),
          position: 'absolute',
          top: -responsiveHeight(8),
        }}
      />
      <Text style={styles.heading}>Welcome back</Text>
      <View
        style={{
          backgroundColor: '#fff',
          flex:1,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          width: responsiveWidth(100),
          paddingHorizontal:responsiveWidth(10),
          gap:responsiveHeight(4),
        }}>
          <ScrollView  showsVerticalScrollIndicator={false}>
            <View style={{
          backgroundColor: '#fff',
          flex:1,
          gap:responsiveHeight(4),

        }}>
        <Text style={styles.login}>Login</Text>

        <InputField label="Email" labelIcon={Msg} placeholder="Email"/>
        <View style={styles.inputContainer}>
        <InputField label="Password" labelIcon={Lock} RightTxt="Show" placeholder="Password"/>
       <Text style={styles.createAccount}>Already have an account?</Text>
        </View>
        <View style={styles.btnContainer}>
       <Button btnTitle="Login"/>
       <Text style={styles.createAccount}>Create account</Text>
       </View>
       </View>
      </ScrollView>
      </View>
    </View>
  );
};

export default Login;
