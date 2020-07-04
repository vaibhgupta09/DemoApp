import React, {memo} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 20;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;
import Colors from '../../constant/colors';
import back from '../../assets/images/arrow.png'
const Header = props => {
  const {title,hasBack,nav} = props;
  const onBack =()=>{
    nav.goBack();
  }
  return (
    <View
      style={{
        height: HEADER_HEIGHT + STATUS_BAR_HEIGHT,
        backgroundColor: Colors.Primary,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: RFValue(10),
        borderBottomRightRadius: RFValue(20),
      }}>
        {props.hasBack?
        <TouchableOpacity onPress={onBack} style={{width:'15%',marginTop:STATUS_BAR_HEIGHT,height:HEADER_HEIGHT ,justifyContent:'center',alignItems:'center'}}>
            <Image source={back} style={{width:30,height:30}}/>
        </TouchableOpacity>:null}
      <Text
        style={{
          marginTop: STATUS_BAR_HEIGHT,
          color: Colors.White,
          fontSize: RFValue(20),
          fontWeight: 'bold',
          marginLeft: RFValue(10),
        }}>
        {title}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    color: 'red',
    fontWeight: 'bold',
    paddingVertical: 14,
  },
});

export default Header;
