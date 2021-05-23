import React,{useState, Component} from 'react'
import {View, Text, TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import Color from '../constants/color';
import ToggleSwitch from './ToggleSwitch';
import ShkButton from './ShkButton';
import styles from '../constants/style';
import ValidationExpModel from '../models/ValidationExpModel';
import ValidationUtility  from '../utilities/ValidationUtility';
import ValidationService from '../services/ValidationService';

export default class NewEmployee extends Component {
   constructor(props){
       super(props)
       this.ValidationService = new ValidationService();
       this.state ={
           name:"",
           address:"",
           mobile:"",
           isActive:false,
           formError:{
            name:"",
            address:"",
            mobile:"",
           },
           validation:{
            name: [ 
                new ValidationExpModel("REQUIRED","name","Name is required"),
                new ValidationExpModel("EXPRESSION","name","Name should not contain special character",RegExp(/^[A-Za-z .,-]*$/)),
                new ValidationExpModel("MIN_LEN","name","Name minimum length is 3"),
                new ValidationExpModel("MAX_LEN","name", "Name maximum length is 200")
                ],
            address:[  
                 new ValidationExpModel("REQUIRED","address","Address is required"),
                new ValidationExpModel("EXPRESSION","address","Address should contaiin alphanumberic character , . - can be used", RegExp(/^[A-Za-z0-9 .,-]*$/)),
                new ValidationExpModel("MAX_LEN","address","Address maximum length is 200", RegExp(/^.{0,200}/))
                ],
            mobile:[ 
                new ValidationExpModel("REQUIRED","mobile","Mobile is required"),
                new ValidationExpModel("MOB_NUMBERS","mobile"),
                new ValidationExpModel("MIN_LEN","mobile", "Mobile number should have 10 character.", RegExp(/^.{10,10}/))
            ]
        }
       }
   }
    onChangeHandler(name,value){
        this.setState({[name]:value});
        const error = ValidationUtility.validate(this.state,name,value);
        ValidationUtility.setSingleErrorMessage(error, name, this);
    }
    onExecuteHandler(stateData){
        const{name, address, mobile,isActive} = stateData.state;
        const error = ValidationUtility.getFormErrors(stateData.state);
        ValidationUtility.setErrorMessage(error,stateData);
        var isValid = ValidationUtility.isValidForm(stateData.state);
        if(isValid === true){
            const user = {"Name":name, "Mobile":mobile, "Address":address, "IsActive":isActive};
            stateData.props.onExecute(user);
       }
    }
 
    render(){
    const{name, address, mobile,isActive, formError} = this.state;
    return (
            <View style={styles.controlContainer}>
                <View style={styles.columnContainer}>
                    <Text style={styles.txtError}>{formError.name}</Text >
                        <View style={styles.rowContainer}>
                        <Text style={styles.txt}>Name</Text>
                        <TextInput key="name"
                            style={styles.txtBox}
                            onChangeText={(value)=>this.onChangeHandler("name",value)}
                            placeholder="Name"
                            value={name}
                            />
                        </View>
                </View>
                <View style={styles.columnContainer}>
                    <Text style={styles.txtError}>{formError.mobile}</Text >
                    <View style={styles.rowContainer}>
                        <Text style={styles.txt}>Mobile</Text>
                        <TextInput
                        style={styles.txtBox}
                        onChangeText={(value)=>this.onChangeHandler("mobile",value)}
                        placeholder="Mobile"
                        keyboardType={"number-pad"}
                        value={mobile}/>
                    </View>
                </View>

                <View style={styles.columnContainer}>
                    <Text style={styles.txtError}>{formError.address}</Text >
                    <View style={styles.rowContainer}>
                        <Text style={styles.txt}>Address</Text>
                        <TextInput multiline={true}
                        style={styles.txtBox}
                        onChangeText={(value)=>this.onChangeHandler("address",value)}
                        placeholder="Address"
                        value={address}/>
                    </View>
                </View>

                <View style={styles.rowContainer}>
                    <Text style={styles.txt}>Active</Text>
                    <ToggleSwitch 
                        value={isActive }
                        onValueChange={(value)=>this.onChangeHandler("isActive",value)}
                    />
                </View>
                <View style={styles.modalFooter}>
                    <ShkButton title="Save" onPress={()=>this.onExecuteHandler(this)}/>
                    <ShkButton style={styles.clearBtn} txtStyle={styles.clearBtntxtStyle} title="Clear"  onPress={()=>{
                        this.setState({
                          name:"",
                          address:"",
                          mobile:"",
                          isActive:false,
                          formError:{
                           name:"",
                           address:"",
                           mobile:"",
                          }
                    })}}/>
                </View>
            </View>
    )
    }
}
