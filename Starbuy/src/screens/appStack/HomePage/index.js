import {StyleSheet, Text, View, Flatlist} from 'react-native';
import React from 'react';
import {Bottom, Header, ProductCard} from '../../../components';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const HomePage = () => {
  return (
    <>
      <View style={styles.container}>
        <Header />
        <Text style={styles.heading}>Order online collect in store</Text>
      </View>
      <Bottom />
    </>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    flex: 1,
    paddingHorizontal: responsiveWidth(10),
  },
  heading: {
    fontSize: responsiveFontSize(3.5),
    color: '#000',
    fontWeight: '800',
    width: responsiveWidth(50),
    paddingVertical: responsiveHeight(2.5),
  },
});
