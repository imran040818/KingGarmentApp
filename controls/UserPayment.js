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

export default function UserPayment(props)  {
        return (
            <View>
                  {
                    props.datas !== undefined && props.datas !== null && props.datas.map((data,index)=>{

                        return(
                            <View style={styles.mainContainer} key={index}>
                            <View style={styles.topContainer}>
                        <Text style={styles.txtName}>{data.Name}</Text>
                        <Text style={styles.txtDigit}>{data.BillDate}</Text>
                        <Text style={styles.txtDigit}>${data.Total}</Text>
                            </View>
                            <View style={styles.bottomContainer}>
                               <ShkButton style={styles.btn} iconName="arrow-right"
                                               title={data.BillId} />
                               <Text style={styles.txtDigit}>${data.Balance}</Text>
                            </View>
                        </View>
                        )
                    })
                  }
            </View>
        )
}

const styles = StyleSheet.create({
    mainContainer: {
        borderBottomWidth:1,
        borderBottomColor:color.PRIMARY,
        flexDirection:"column",
        width:"100%",
        height:80,
        paddingVertical:padding.P_MEDUM
    },
    topContainer:{
        flex:1,
        flexDirection:"row",
        //backgroundColor:"blue",
        justifyContent:"space-between",
        paddingHorizontal:padding.P_MEDUM,
        alignItems:"center",
    },
    bottomContainer:{
        flex:1,
        flexDirection:"row",
        //backgroundColor:"green",
        justifyContent:"space-between",
        paddingHorizontal:padding.P_MEDUM,
        marginTop:margin.M_LARGE,
        alignItems:"center",
    },
    txtName:{
        color:color.PRIMARY,
        fontSize:fontSize.F_LARGE,
    },
    txtDigit:{
        color:color.DIGIT,
        fontSize:fontSize.F_MEDUM,
    },
    btn:{
        backgroundColor:color.PRIMARY,
        width:150,
        maxWidth:"90%",
        justifyContent:"center",
       
    },
})