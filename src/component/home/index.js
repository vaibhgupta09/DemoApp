// @ts-nocheck
import React, { useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../constant/colors';
import Header from '../common/Header';

const Home = (props) => {
  const {incidentData, loading,onRowPressed,_handleLoadMore} = props;
  const Row =({item})=>{
    return(
       <TouchableOpacity onPress={()=>onPressed(item)} style={styles.card}>
           <Text numberOfLines={1} style={styles.title}>Name-{item.employee_name}</Text>
           <Text numberOfLines={1} style={styles.address}>Age-{item.employee_age}</Text>
       </TouchableOpacity>
    ) 
  }
  const onPressed=(item)=>{
    onRowPressed(item);
  }
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Header title={"Home"}/>
      <View style={styles.innerContainer}>  
            <FlatList
                data={incidentData}
                renderItem={({ item,index }) => <Row item={item}/>}
                keyExtractor={item => item.id}
            />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  innerContainer:{
      padding:RFValue(20),
      marginBottom:RFValue(65)
  },
  card:{
    width:'100%',
    height:RFValue(80),
    borderRadius:RFValue(5),
    borderWidth:RFValue(1),
    marginBottom:RFValue(10) ,
    borderColor:'#898989',
    padding:RFValue(15)
  },
  title:{
      fontSize:RFValue(16),
      color:'black',
      fontWeight:'600'
  },
  address:{
    fontSize:RFValue(14),
    color:'grey',
    fontWeight:'400',
    marginTop:5
}
});

export default Home;