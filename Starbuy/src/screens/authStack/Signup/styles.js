import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5956E9',
    width: responsiveWidth(100),
    alignItems: 'center',
  },
  login: {
    color: '#000',
    fontSize: responsiveFontSize(2.2),
    fontWeight: '600',
    paddingTop: responsiveHeight(3.6),
  },
  forgetPass: {
    fontSize: responsiveFontSize(2.1),
    color: '#fff',
    width: '100%',
    textAlign: 'right',
  },
  register: {
    fontSize: responsiveFontSize(1.8),
    color: '#fff',
  },
  signUp: {
    fontSize: responsiveFontSize(2.1),
    color: '#fff',
    textDecorationLine: 'underline',
  },
  btnStyles: {
    marginTop: responsiveHeight(0.6),
  },
  createAccount: {
    color: '#5956E9',
  },
  btnContainer: {
    gap: responsiveHeight(2.4),
    alignItems: 'center',
    paddingBottom:responsiveHeight(2)
  },
  inputContainer: {
    gap: responsiveHeight(2.4),
  },
  heading:{
    fontSize:responsiveFontSize(8),
    fontWeight:'800',
    color:'#fff',
    paddingVertical:responsiveHeight(6)
  }
});
