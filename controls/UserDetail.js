import React, { Component } from 'react'
import {View, Text, TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import { Icon, Input, Image,Button } from 'react-native-elements';
import ToggleSwitch from './ToggleSwitch';
import color from '../constants/color';
import fontSize from '../constants/fontSize';
import padding from '../constants/padding';
import margin from '../constants/margin';
import height from '../constants/height';
import ShkButton from '../controls/ShkButton';

const onCallHandler = ()=>{

}
export default function UserDetail(props) {
    const {datas,onBillHandler,onProfileHandler} = props;
        return (
            <View style={{...props.style}}>
            {
                datas !== undefined && datas !== null && datas.map((data,index)=>{
                   return(
                    <View style={styles.mainContainer} key={index}>
                    <View style={styles.firstColumn}>
                        <View style={styles.nameContainer} >
                            <View style={styles.imageContainer}>
    
                            </View>
                   <Text style={styles.nameText}>{data.Name}</Text>
                        </View>
                       
                        <View style={styles.phoneAndButtonContainer}>
                            <View style={styles.phoneContainer}>
                                <TouchableOpacity activeOpacity={0.8} onPress={onCallHandler} >
                                    <Icon style={styles.phoneIcon} name='phone'
                                            type= 'font-awesome'
                                            size={fontSize.F_MEDUM}
                                            color={color.DIGIT}/>
                                </TouchableOpacity>
                                <Text style={styles.phoneText}>{data.Mobile}</Text>
                                <View style={styles.toggleContainer}>
                                    <ToggleSwitch value={
                                        data.IsActive 
                                    } />
                                </View>
                                
                            </View>
                            <View style={styles.buttonContainer}>
                                <View>
                                <TouchableOpacity activeOpacity={0.8} onPress={onBillHandler} >
                                    <ShkButton onPress={()=>onBillHandler(index)} style={styles.btn}  
                                    title="Bill" iconName="plus"/>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity  activeOpacity={0.8} >
                                        <ShkButton onPress={()=>onProfileHandler(index)} style={styles.btn} 
                                        title="View" iconName="arrow-right"/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                           
                        </View>
                       
                    </View>
               </View>
                   ) 
                })
            }
            </View>
        )
    
}
const styles = StyleSheet.create({
    mainContainer : {
        //marginTop:margin.M_MEDUM,
        //backgroundColor:color.BLACK,
        borderBottomWidth:1,
        borderBottomColor:color.PRIMARY,
        flexDirection:"column",
        width:"100%",
    },
    firstColumn:{
        flexDirection:"row",
        height:80,
         //backgroundColor:color.SECONDARY,
    },
    // secondColumn:{
    //     flexDirection:"row",
    //     height:40,
    //      backgroundColor:color.BORDER,
    // },
    imageContainer:{
        height:70,
        width:70,
        borderRadius:70,
        backgroundColor:color.BLACK,
    },
    nameContainer:{
        justifyContent:"flex-start",
        alignItems:"center",
        flex:1,
        //backgroundColor:"green",
        flexDirection:"row",
        paddingHorizontal:padding.P_MEDUM
    },
    nameText:{
        paddingHorizontal:padding.P_MEDUM,
        color:color.PRIMARY,
        fontSize:fontSize.F_LARGE
    },
    phoneAndButtonContainer:{
        justifyContent:"flex-start",
        alignItems:"flex-end",
        flex:1,
        //backgroundColor:"red",
        flexDirection:"column",
        //paddingVertical:padding.P_MEDUM
        paddingRight:10
    },
    phoneContainer:{
        justifyContent:"flex-start",
        alignItems:"flex-start",
        //flex:1,
        //backgroundColor:"yellow",
        flexDirection:"row",
        paddingVertical:padding.P_SMALL,
    },
    toggleContainer:{
        justifyContent:"flex-end",
        alignItems:"baseline",
        flex:1,
        flexDirection:"row",
    },
    buttonContainer:{
        //backgroundColor:"green",
        flexDirection:"row",
        justifyContent:"flex-end",
        //alignItems:"flex-start",
        //borderTopColor:color.PRIMARY,
        //borderTopWidth:1,
        //paddingVertical:padding.P_SMALL,
        paddingHorizontal:padding.P_SMALL,
    },
    phoneIcon:{
        paddingHorizontal:padding.P_X_SMALL,
        paddingTop:padding.P_X_SMALL
    },
    phoneText:{
        color:color.DIGIT,
        paddingHorizontal:padding.P_X_SMALL,
        fontSize:fontSize.F_MEDUM
    },
    btn:{
        //backgroundColor:color.PRIMARY,
        height:30,
        width:60,
        marginHorizontal:margin.M_X_SMALL,
        justifyContent:"flex-start",
        //paddingHorizontal:padding.P_SMALL
       
    }
})