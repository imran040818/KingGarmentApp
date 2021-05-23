import React, { Component, useState } from 'react'
import Menu from '../controls/Menu';
import HomeMenu from '../controls/HomeMenu';
import Footer from '../controls/Footer';
import {View, Text, TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import color from '../constants/color';
import fontSize from '../constants/fontSize';
import padding from '../constants/padding';
import margin from '../constants/margin';
import height from '../constants/height';
import { Icon, Input, Image,Button, ListItem } from 'react-native-elements';

//const [selectedItem, se]
const menuList = [{"name":"Seller"},{"name":"Customer"},{"name":"Employee"}];
let propData = null;
const onMenuSelectionHandler =  (index) => {
    console.log(index);
    switch(index){
        case 0:
            propData.navigation.navigate('Seller')
        break;
        case 1:
            propData.navigation.navigate('Customer')
        break;
        case 2:
            propData.navigation.navigate('Employee')
        break;
        default:
        break;
    }
    //this.props.navigation.navigate('Customer', { name: 'Jane' })
}
export default function Home(props) {    
    propData = props;    
        return (
            <View style={styles.mainContainer}>
                <View style={styles.headerContainer}>
                    <Icon name='star'
                                        type= 'font-awesome'
                                        size={80}
                                        color={color.WHITE}/>
                    <Text style={styles.title}>King Garments</Text>
                </View>
                <View style={styles.homeMenu}>
                    <HomeMenu menuList={menuList} onMenuSelectionHandler={onMenuSelectionHandler} />
                </View>
                {/* <Button title="Profile" onPress={()=>props.navigation.navigate('Profile', { name: 'Jane' })}/> */}
                <View style={styles.footerContainer}>
                    <Footer hideBackButton={true}/>
                </View>
            </View>
        )
    }

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:"column",
        justifyContent:"space-between",
        height:"100%",
    },
   headerContainer : {
       //marginTop:80,
       flexDirection:"column",
       backgroundColor:color.PRIMARY,
       height:200,
       zIndex:9999,
       borderBottomLeftRadius:350,
       borderBottomRightRadius:350,
       justifyContent:"flex-end",
       alignItems:"center"
   },
  title:{
  fontSize:30,
  color:color.WHITE,
  alignItems:"center",
  marginBottom:margin.M_40,
  },
  homeMenu:{
      marginTop:margin.M_40
  },
  footerContainer:{
    justifyContent:"flex-end"
  }
});