import React, { Component, useState } from 'react'
import {View, Text, TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { Icon, Input } from 'react-native-elements';
import color from '../constants/color';
import fontSize from '../constants/fontSize';
import padding from '../constants/padding';
import margin from '../constants/margin';
import height from '../constants/height';
//import { Colors } from 'react-native/Libraries/NewAppScreen';


let data = [{
    value: '2020',
  }, {
    value: '2019',
  }, {
    value: '2018',
  }];

export default function Menu(props){
    const {title,searchText,onAddNewHandler ,onSearchHandler, isSearchVisible=true, isYearVisible=false} = props;
    const[searchContent,onSearchTextChange] = useState(searchText);

   const searchContentView =  isSearchVisible === true ?
   <TextInput style={styles.searchText} value={searchContent} onChangeText={(value)=>onSearchTextChange(value)}/> : <Text  style={styles.searchText} >{searchText}</Text>;
    
    return (
        <View style={styles.menuContainer}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.searchContainer}>
            {
               searchContentView
            }
            </View>
            {isSearchVisible=== true && (
                <View>
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>onSearchHandler(searchContent)} >
                        <Icon style={styles.searchIcon} name='search'
                                type= 'font-awesome'
                                size={fontSize.F_LARGE}
                                color={color.WHITE}/>
                    </TouchableOpacity>
                 </View>
            )}
             {isYearVisible === true && (
                  <View style={styles.dropdown}>
                  <Dropdown textColor={color.WHITE} itemColor={color.BLACK}
                  baseColor="white" selectedItemColor= {color.PRIMARY}
                       label='Year'
                       data={data}
                   />
                  </View>
             )}
          
            <View style={styles.plusIconContainer}>
                <TouchableOpacity activeOpacity={0.8} onPress={()=>{
                    //onSearchTextChange('');
                    onAddNewHandler();
                }}>
                        <Icon name='plus'
                            type= 'font-awesome'
                            size={fontSize.F_LARGE}
                            color={color.WHITE}/>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        color:color.WHITE,
        fontSize:fontSize.F_LARGE,
        alignItems:'center',
        justifyContent: 'center',
        //width:"30%"
    },
    searchText:{
       color:color.WHITE,
       fontSize:fontSize.F_LARGE,
       textAlign:"center",
    },
    dropdown:{
        width:70,
        paddingHorizontal:5,
        width:"25%"
    },
    searchIcon:{
        justifyContent: 'flex-end',
        alignItems:'flex-end',
        paddingHorizontal:padding.P_MEDUM,
    },
    plusIconContainer:{
        alignItems:'center',
        justifyContent: 'flex-end',
        //paddingLeft:padding.P_MEDUM,
        width:"10%"
    },
    searchContainer:{
        color:color.BLACK,
        paddingHorizontal: padding.P_LARGE,
        maxWidth:200,
        width:'50%',
        borderBottomColor:color.WHITE,
        borderBottomWidth: 1,
        marginHorizontal:margin.M_SMALL
    },
    menuContainer : {
        flexDirection: 'row',
        width:'90%',
        paddingHorizontal: "5%",
        //backgroundColor:color.PRIMARY,
        height:height.MENU,
        alignItems:'center',
        justifyContent: 'space-between',
        marginTop:50,
        zIndex:99999,
    }
});