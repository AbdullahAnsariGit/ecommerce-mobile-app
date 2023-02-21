import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Foundation';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Bottom = () => {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Icon name="home" color="#5956E9" size={responsiveScreenWidth(6)} />
        {false && <Text style={styles.bottomTitle}>Feed</Text>}
      </View>
      <View style={styles.menu}>
        <Icon2 name="heart" color="#200E32" size={responsiveScreenWidth(5)} />
        {false && <Text style={styles.bottomTitle}>Feed</Text>}
      </View>

      <View style={styles.menu}>
        <Icon3
          name="user"
          color="#200E32"
          size={responsiveScreenWidth(6)}
        />
        {false && <Text style={styles.bottomTitle}>Feed</Text>}
      </View>
      <View style={styles.menu}>
        <Icon3 name="shopping-cart" color="#200E32" size={responsiveScreenWidth(6)} />
        {false && <Text style={styles.bottomTitle}>Feed</Text>}
      </View>
    </View>
  );
};

export default Bottom;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: responsiveHeight(4),
    backgroundColor:"#E5E5E5",
    paddingTop:responsiveHeight(1)
  },
  bottomTitle: {
    fontSize: responsiveFontSize(1.8),
    color: '#cc021a',
  },
  menu: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
