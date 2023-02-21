import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Pizza, Star, Tab} from '../../assets';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const ProductCard = props => {
  const {Name, Item, Price, Images} = props;
  return (
    <View style={styles.container}>
      <Image source={Images} style={styles.productImg} />
      <View style={styles.statusContainer}>
        <Text style={styles.status}>{Name}</Text>
        <Text style={styles.distance}>{Item}</Text>
      </View>
      <Text style={styles.price}>{Price}</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(40),
    paddingHorizontal: responsiveWidth(4.3),
    paddingVertical: responsiveHeight(3),
    backgroundColor: '#fff',
    marginBottom: responsiveHeight(2.5),
    borderRadius: responsiveWidth(6),
    gap: responsiveWidth(1.2),
    marginTop:responsiveHeight(4.5),
    alignItems:"center"
  },
  productImg: {
    height: responsiveHeight(18),
    width: responsiveWidth(40),
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    marginTop:-responsiveHeight(8)
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  innerContainer: {
    flexDirection: 'row',
    gap: responsiveWidth(2),
    alignItems: 'center',
  },
  rating: {
    color: '#cc021a',
    fontSize: responsiveFontSize(2),
    fontWeight: '800',
  },
  star: {
    height: responsiveHeight(2.2),
    width: responsiveWidth(4.4),
    resizeMode: 'contain',
  },
  price: {
    color: '#5956E9',
    fontSize: responsiveFontSize(2),
    fontWeight: '800',
    textAlign: 'center',
  },
  status: {
    color: '#000',
    fontSize: responsiveFontSize(2.5),
    textAlign: 'center',
    fontWeight: '800',

    borderRadius: responsiveWidth(2),
  },
  statusContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  distance: {
    fontSize: responsiveFontSize(1.5),
    color: '#868686',
    textAlign: 'center',
  },
});
