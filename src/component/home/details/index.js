// @ts-nocheck
import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Header from '../../common/Header';

const Details = props => {
  const {incidentData, loading, nav, data} = props;
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Header hasBack={true} title={'Details'} nav={nav} />
      <View style={styles.innerView}>
        <View style={{flex: 0.6}}>
          <Text style={styles.descr}>Emp ID-{data.id}</Text>
          <Text style={styles.title}>{data.employee_name}</Text>
          <Text style={styles.address}>Age-{data.employee_age}</Text>
          <Text style={styles.descr}>Salary-{data.employee_salary}</Text>
        </View>
        <View
          style={{flex: 0.4, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={{uri: 'https://i.imgur.com/eA7fdX6.png'}}
            style={{width: RFValue(100), height: RFValue(100)}}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  innerView: {
    padding: RFValue(25),
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  title: {
    fontSize: RFValue(20),
    color: 'black',
    fontWeight: '600',
  },
  address: {
    fontSize: RFValue(14),
    color: 'grey',
    marginTop: 10,
  },
  descr: {
    fontSize: RFValue(16),
    color: 'black',
    textAlign: 'justify',
    marginTop: 20,
  },
});

export default Details;
