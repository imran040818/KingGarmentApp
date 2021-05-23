import React,{useState, Component} from 'react'
import {View, Text, TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import Color from '../constants/color';
import ToggleSwitch from './ToggleSwitch';
import ShkButton from './ShkButton';
import styles from '../constants/style';
import ValidationExpModel from '../models/ValidationExpModel';
import ValidationUtility  from '../utilities/ValidationUtility';
import ValidationService from '../services/ValidationService';
import { render } from 'react-dom';

export default class NewPayment extends Component {
    constructor(props){
        super(props);
        this.state ={
            advance:'',
            billId:'',
            balance:'',
            checkNo:'',
            transaction:'',
            formError:{
                advance:'',
                billId:'',
                balance:'',
                checkNo:'',
                transaction:'',
            },
            validation:{
                billId: [  new ValidationExpModel("REQUIRED","billId")],
                advance:[ new ValidationExpModel("REQUIRED","advance")],
                balance:[ new ValidationExpModel("REQUIRED","balance")]
            }
        }
    }
    onChangeHandler(name,value){
        this.setState({[name]:value});
        const error = ValidationUtility.validate(this.state,name,value);
        ValidationUtility.setSingleErrorMessage(error, name, this);
    }
    onExecuteHandler(stateData, propsData){
        const{name, address, mobile,isActive} = stateData.state;
        const error = ValidationUtility.getFormErrors(stateData.state);
        ValidationUtility.setErrorMessage(error,stateData);
        // var isValid =  error == null;
        // if(isValid === true){
            const user = {"Name":name, "Mobile":mobile, "Address":address, "IsActive":isActive};
            propsData.onExecute(user);
       // }
    }
render(){
    const { advance, billId, balance, checkNo, transaction, formError} = this.state;
    return (
            <View style={styles.controlContainer}>
                
                <View style={styles.columnContainer}>
                    <Text style={styles.txtError}>{formError.billId}</Text >
                    <View style={styles.rowContainer}>
                        <Text style={styles.txt}>Bill Id</Text>
                        <TextInput
                            style={styles.txtBox}
                            onChangeText={(value)=>this.onChangeHandler("billId",value)}
                            placeholder="Bill Id"
                            value={billId}
                            />
                    </View>
                </View>
                <View style={styles.columnContainer}>
                    <Text style={styles.txtError}>{formError.advance}</Text >
                    <View style={styles.rowContainer}>
                        <Text style={styles.txt}>Advance</Text>
                        <TextInput
                        style={styles.txtBox}
                        onChangeText={(value)=>this.onChangeHandler("advance",value)}
                        placeholder="Advance"
                        keyboardType={"number-pad"}
                        value={advance}/>
                    </View>
                </View>
                <View style={styles.columnContainer}>
                    <Text style={styles.txtError}>{formError.balance}</Text >
                    <View style={styles.rowContainer}>
                        <Text style={styles.txt}>Balance</Text>
                        <TextInput
                        style={styles.txtBox}
                        onChangeText={(value)=>this.onChangeHandler("balance",value)}
                        placeholder="Balance"
                        keyboardType={"number-pad"}
                        value={balance}/>
                    </View>
                </View>
                <View style={styles.columnContainer}>
                    <Text style={styles.txtError}>{formError.checkNo}</Text >
                    <View style={styles.rowContainer}>
                        <Text style={styles.txt}>Check No</Text>
                        <TextInput
                        style={styles.txtBox}
                        onChangeText={(value)=>this.onChangeHandler("checkNo",value)}
                        placeholder="Check No"
                        value={checkNo}/>
                    </View>
                </View>
                <View style={styles.columnContainer}>
                    <Text style={styles.txtError}>{formError.transaction}</Text >
                    <View style={styles.rowContainer}>
                        <Text style={styles.txt}>Transaction</Text>
                        <TextInput multiline={true}
                        style={styles.txtBox}
                        onChangeText={(value)=>this.onChangeHandler("transaction",value)}
                        placeholder="Transaction"
                        value={transaction}/>
                    </View>
                </View>

                <View style={styles.modalFooter}>
                    <ShkButton  title="Save" onPress={()=>this.onExecuteHandler(this,this.props)}/>
                    <ShkButton style={styles.clearBtn} txtStyle={styles.clearBtntxtStyle} title="Clear"  onPress={() => {
                           this.setState({
                            advance:'',
                            billId:'',
                            balance:'',
                            checkNo:'',
                            transaction:'',
                            formError:{
                                advance:'',
                                billId:'',
                                balance:'',
                                checkNo:'',
                                transaction:'',
                            }
                           })
                        }}/>
                </View>
            </View>
    )}
}

// const styles = StyleSheet.create({
//     controlContainer:{
//         flexDirection:"column",
//         justifyContent:"flex-start",
//         alignItems:"flex-start"
//     },
//     rowContainer:{
//         height:60,
//         width:"100%",
//         flexDirection:"row",
//         justifyContent:"space-between",
//         alignContent:"center"
//    },
//    txt:{
//        color:Color.PRIMARY,
//        width:"30%",
//    },
//     txtBox:{
//         height: 30,
//         borderBottomColor:Color.PRIMARY,
//         borderBottomWidth:1,
//         //width:150,
//         width:"70%",
//     }
// });