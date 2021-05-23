import React,{Component,useState} from 'react'
import {View, Text, TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import Color from '../constants/color';
import ToggleSwitch from './ToggleSwitch';
import ShkButton from './ShkButton';
import styles from '../constants/style';
import ValidationExpModel from '../models/ValidationExpModel';
import ValidationUtility  from '../utilities/ValidationUtility';
import ValidationService from '../services/ValidationService';

export default class UpdateBill extends Component {
   
    constructor(props){
        super(props)
        const { BillId, BillDate, Cgst, Sgst, Igst, Discount, Total, GrandTotal, Photo, TotalTaxable } = props.prefillData;
        console.log(props.prefillData);
        
        this.ValidationService = new ValidationService();
        this.state ={
            billId:BillId,
            billDate: BillDate,
            cgst:Cgst.toString(),
            sgst:Sgst.toString(),
            igst:Igst.toString(),
            discount:Discount.toString(),
            total:Total.toString(),
            grandTotal:GrandTotal.toString(),
            photo:Photo,
            totalTaxable:TotalTaxable.toString(),
            formError:{
                billId:"",
                billDate:"",
                cgst:"",
                sgst:"",
                igst:"",
                discount:"",
                total:"",
                grandTotal:"",
            },
            validation:{
                billId:[ new ValidationExpModel("REQUIRED","billId","Bill Id is requires")],
                cgst:[new ValidationExpModel("EXPRESSION","cgst","Igst should not be greater than 100%",RegExp(/^0*([0-9]|[1-8][0-9]|9[0-9]|100)$/))],
                sgst:[new ValidationExpModel("EXPRESSION","sgst","Sgst should not be greater than 100%",RegExp(/^0*([0-9]|[1-8][0-9]|9[0-9]|100)$/))],
                igst:[new ValidationExpModel("EXPRESSION","igst","Igst should not be greater than 100%",RegExp(/^0*([0-9]|[1-8][0-9]|9[0-9]|100)$/))],
                discount:[new ValidationExpModel("EXPRESSION","discount","Discount should not be greater than 100%",RegExp(/^0*([0-9]|[1-8][0-9]|9[0-9]|100)$/))],
                billDate:[ new ValidationExpModel("REQUIRED","billDate","Bill date is required")],
                total:[ new ValidationExpModel("REQUIRED","total", "Total is required")],
                grandTotal:[ new ValidationExpModel("REQUIRED","grandTotal","Grand total is required")]
            }
        }
    }
     onChangeHandler(name,value){
         this.setState({[name]:value});
         const error = ValidationUtility.validate(this.state,name,value);
         ValidationUtility.setSingleErrorMessage(error, name, this);
         switch (name) {
            case "total":
                this.addGst(this.state.cgst,value);
                this.addGst(this.state.sgst,value);
                this.addGst(this.state.igst,value);
                break;
             case "igst":
                 this.addGst(value,this.state.total);
                 break;
            case "sgst":
                this.addGst(value,this.state.total);
            break;
            case "cgst":
                this.addGst(value,this.state.total);
                break;
            case "discount":
                this.addDiscount(value,this.state.totalTaxable);
                break;
             default:
                 break;
         }
     }
     addGst(gst,totalValue){
        const tax =  parseFloat(gst);
        const total = parseFloat(totalValue);
        if(tax >= 0 && total >= 0){
        const grandTotal = total+ ((total * tax)/100);
        this.setState({grandTotal:grandTotal.toString()});
        this.setState({totalTaxable:grandTotal.toString()});
        this.addDiscount(this.state.discount,grandTotal);
        }
     }
    
    addDiscount(discountPercentage,totalValue){
        const  discount =  parseInt(discountPercentage);
        const total = parseInt(totalValue);
        if(discount >= 0 && total >= 0){
            const grandTotal = total- ((total * discount)/100);
            this.setState({grandTotal:grandTotal.toString()})
        }
    }
     onExecuteHandler(stateData){
        const {billId, billDate, cgst, sgst, igst, discount, total, grandTotal,totalTaxable,photo} = stateData.state;
         const error = ValidationUtility.getFormErrors(stateData.state);
         ValidationUtility.setErrorMessage(error,stateData);
         var isValid = ValidationUtility.isValidForm(stateData.state);
         if(isValid === true){
             const bill = {
                BillId:billId,
                BillDate:billDate,
                Cgst:cgst,
                Sgst:sgst,
                Igst:igst,
                Discount:discount,
                Total:total,
                TotalTaxable:totalTaxable,
                GrandTotal:grandTotal,
                Photo:photo,
             };
             stateData.props.onExecute(bill);
        }
     }
    render(){
        const {name, billId, billDate, cgst, sgst, igst, discount, total, grandTotal, totalTaxable, photo, formError} = this.state;

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
                    <Text style={styles.txtError}>{formError.billDate}</Text >
                    <View style={styles.rowContainer}>
                        <Text style={styles.txt}>Bill Date</Text>
                        <TextInput
                        style={styles.txtBox}
                        onChangeText={(value)=>this.onChangeHandler("billDate",value)}
                        placeholder="Bill Date"
                        value={billDate}/>
                    </View>
                </View>
                <View style={styles.columnContainer}>
                    <Text style={styles.txtError}>{formError.total}</Text >
                    <View style={styles.rowContainer}>
                        <Text style={styles.txt}>Total</Text>
                        <TextInput multiline={true}
                        style={styles.txtBox}
                        onChangeText={(value)=>this.onChangeHandler("total",value)}
                        placeholder="Total"
                        keyboardType={"number-pad"}
                        value={total}/>
                    </View>
                </View>
                <View style={styles.columnContainer}>
                    <Text style={styles.txtError}>{formError.cgst}</Text >
                    <View style={styles.rowContainer}>
                        <Text style={styles.txt}>Cgst</Text>
                        <TextInput
                        style={styles.txtBox}
                        onChangeText={(value)=>this.onChangeHandler("cgst",value)}
                        placeholder="Cgst"
                        keyboardType={"number-pad"}
                        value={cgst}/>
                    </View>
                </View>
                <View style={styles.columnContainer}>
                    <Text style={styles.txtError}>{formError.sgst}</Text >
                    <View style={styles.rowContainer}>
                        <Text style={styles.txt}>Sgst</Text>
                        <TextInput
                        style={styles.txtBox}
                        onChangeText={(value)=>this.onChangeHandler("sgst",value)}
                        placeholder="Sgst"
                        keyboardType={"number-pad"}
                        value={sgst}/>
                    </View>
                </View>
                <View style={styles.columnContainer}>
                    <Text style={styles.txtError}>{formError.igst}</Text >
                    <View style={styles.rowContainer}>
                        <Text style={styles.txt}>Igst</Text>
                        <TextInput multiline={true}
                        style={styles.txtBox}
                        onChangeText={(value)=>this.onChangeHandler("igst",value)}
                        placeholder="Igst"
                        keyboardType={"number-pad"}
                        value={igst}/>
                    </View>
                </View>
                <View style={styles.columnContainer}>
                    <Text style={styles.txtError}>{formError.discount}</Text >
                    <View style={styles.rowContainer}>
                        <Text style={styles.txt}>Discount</Text>
                        <TextInput multiline={true}
                        style={styles.txtBox}
                        onChangeText={(value)=>this.onChangeHandler("discount",value)}
                        placeholder="Discount"
                        keyboardType={"number-pad"}
                        value={discount}/>
                    </View>
                </View>
                <View style={styles.columnContainer}>
                <Text style={styles.txtError}></Text >
                    <View style={styles.rowContainer}>
                        <Text style={styles.txt}>Total Taxable</Text>
                        <TextInput editable={false}
                        style={styles.txtBox}
                        placeholder="Total Taxable"
                        keyboardType={"number-pad"}
                        value={totalTaxable}/>
                    </View>
                </View>
                <View style={styles.columnContainer}>
                    <Text style={styles.txtError}>{formError.grandTotal}</Text >
                    <View style={styles.rowContainer}>
                        <Text style={styles.txt}>Grand Total</Text>
                        <TextInput editable={false}
                        style={styles.txtBox}
                        placeholder="Grand Total"
                        keyboardType={"number-pad"}
                        value={grandTotal}/>
                    </View>
                </View>
                <View style={styles.modalFooter}>
                    <ShkButton  title="Update" onPress={()=>this.onExecuteHandler(this)}/>
                </View>
            </View>
    )
    }
}
