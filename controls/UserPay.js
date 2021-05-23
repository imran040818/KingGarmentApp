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


export default function UserPay(props){
        const {datas,onViewHandler, onPayHandler,onAddBillDetailHandler} = props;
        return (
        <View>
             {
                datas !== undefined && datas !== null && datas.map((data,index)=>{
                   return(
                    <View style={styles.mainContainer} key={index}>
                        {  
                            <View style={styles.tableContainer}>
                                <View style={styles.date}>
                                    <Text style={styles.txtHeader}>PayDate</Text>
                                </View>
                                <View style={styles.advance}>
                                    <Text style={styles.txtHeader}>Advance</Text>
                                </View>
                            
                                <View style={styles.balance}>
                                    <Text style={styles.txtHeader}>Balance</Text>
                                </View>
                               
                                { data.CheckNo !== null && 
                                    <View style={styles.check}>
                                        <Text style={styles.txtHeader}>Check</Text>
                                    </View>
                                }
                                { data.TransactionId !== null &&
                                    <View style={styles.trans}>
                                        <Text style={styles.txtHeader}>Trans</Text>
                                    </View>
                                }
                            </View>
                        }
                        <View style={styles.topContainer}>
                                <View style={styles.date}>
                                    <Text style={styles.txtDigit}>{data.PayDate}</Text>
                                </View>
                                <View style={styles.advance}>
                                    <Text style={styles.txtDigit}>{data.Advance}</Text>
                                </View>
                                <View style={styles.balance}>
                                    <Text style={styles.txtDigit}>{data.Balance}</Text>
                                </View>
                                { data.CheckNo != null && data.CheckNo != "" && 
                                    <View style={styles.check}>
                                        <Text style={styles.txtDigit}>{data.CheckNo}</Text>
                                    </View>
                                }
                                { data.TransactionId != null && data.TransactionId != "" &&
                                    <View style={styles.trans}>
                                        <Text style={styles.txtDigit}>{data.TransactionId}</Text>
                                    </View>
                                }
                            </View>
                            <View style={styles.buttonContainer}>
                                <View>
                                    <TouchableOpacity  activeOpacity={0.8} >
                                        <ShkButton style={styles.btn} onPress={()=>onViewHandler(index)}
                                        title="View" iconName="arrow-right"/>
                                    </TouchableOpacity>
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
    buttonContainer:{
        flexDirection:"row",
        justifyContent:"flex-end",
        paddingHorizontal:padding.P_SMALL,
    },
    mainContainer: {
        borderBottomWidth:1,
        borderBottomColor:color.PRIMARY,
        flexDirection:"column",
        width:"100%",
        //height:80,
        paddingVertical:padding.P_MEDUM
    },
    topContainer:{
        flex:1,
        width:"100%",
        //backgroundColor:color.PRIMARY,
        //height:60,
        marginVertical:30,
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:padding.P_MEDUM,
        alignItems:"center",
    },
    bottomContainer:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:padding.P_MEDUM,
        marginTop:margin.M_LARGE,
        alignItems:"center",
    },
    tableContainer:{
        flex:1,
        width:"100%",
        height:50,
        backgroundColor:color.PRIMARY,
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:padding.P_MEDUM,
        paddingVertical:padding.P_LARGE,
        alignItems:"center",
    },
    date:{
        width:"25%",
    },
    advance:{
        width:"25%",
    },
    balance:{
        width:"25%",
    },
    check:{
        width:"25%",
        
    },
    trans:{
        width:"25%",
        
    },
    txtName:{
        color:color.PRIMARY,
        fontSize:fontSize.F_LARGE,
    },
    txtDigit:{
        color:color.DIGIT,
        fontSize:fontSize.F_MEDUM,
    },
    txtHeader:{
        color:color.WHITE
    },
    btn:{
        backgroundColor:color.PRIMARY,
        width:80,
        height:30,
        maxWidth:"90%",
         justifyContent:"center",
    },
})