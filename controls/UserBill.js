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


export default function UserBill(props){
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
                                    <Text style={styles.txtHeader}>BillDate</Text>
                                </View>
                                <View style={styles.total}>
                                    <Text style={styles.txtHeader}>Total</Text>
                                </View>
                                { data.Igst > 0 && 
                                    <View style={styles.tax}>
                                        <Text style={styles.txtHeader}>Igst</Text>
                                    </View>
                                }
                                { data.Cgst > 0 && 
                                    <View style={styles.tax}>
                                        <Text style={styles.txtHeader}>Cgst</Text>
                                    </View>
                                }
                                { data.Sgst > 0 &&
                                    <View style={styles.tax}>
                                        <Text style={styles.txtHeader}>Sgst</Text>
                                    </View>
                                }
                                <View style={styles.discount}>
                                    <Text style={styles.txtHeader}>Discount</Text>
                                </View>
                                <View style={styles.grandTotal}>
                                    <Text style={styles.txtHeader}>G Total</Text>
                                </View>
                            </View>
                        }
                        <View style={styles.topContainer}>
                                <View style={styles.date}>
                                    <Text style={styles.txtDigit}>{data.BillDate}</Text>
                                </View>
                                <View style={styles.total}>
                                    <Text style={styles.txtDigit}>{data.Total}</Text>
                                </View>
                                { data.Igst > 0 && 
                                    <View style={styles.tax}>
                                        <Text style={styles.txtDigit}>{data.Igst}</Text>
                                    </View>
                                }
                                { data.Cgst > 0 && 
                                    <View style={styles.tax}>
                                        <Text style={styles.txtDigit}>{data.Cgst}</Text>
                                    </View>
                                }
                                { data.Sgst > 0 &&
                                    <View style={styles.tax}>
                                        <Text style={styles.txtDigit}>{data.Sgst}</Text>
                                    </View>
                                }
                                <View style={styles.discount}>
                                    <Text style={styles.txtDigit}>{data.Discount}</Text>
                                </View>
                                <View style={styles.grandTotal}>
                                    <Text style={styles.txtDigit}>{data.GrandTotal}</Text>
                                </View>
                            </View>
                            <View style={styles.buttonContainer}>
                                <View>
                                    <TouchableOpacity  activeOpacity={0.8} >
                                        <ShkButton style={styles.btn} onPress={()=>onViewHandler(index)}
                                        title="View" iconName="arrow-right"/>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity  activeOpacity={0.8} >
                                        <ShkButton style={styles.btn} onPress={()=>onAddBillDetailHandler(index)}
                                        title="Detail" iconName="plus"/>
                                    </TouchableOpacity>
                                </View>
                                <View >
                                    <TouchableOpacity activeOpacity={0.8}>
                                        <ShkButton onPress={()=>onPayHandler(index) }style={styles.btn} iconName="plus"
                                        title="Pay" />
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
        height:120,
        backgroundColor:color.PRIMARY,
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:padding.P_MEDUM,
        paddingVertical:padding.P_LARGE,
        alignItems:"center",
    },
    date:{
        width:"15%",
        
    },
    total:{
        width:"15%",
        
        
    },
    tax:{
        width:"8%",
        
        
    },
    discount:{
        width:"15%",
        
    },
    grandTotal:{
        width:"15%",
        
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