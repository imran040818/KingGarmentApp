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
import UserBill from '../controls/UserBill';
import styles from '../constants/style';
import NewBill from '../controls/NewBill';
import UpdateBill from '../controls/UpdateBill';
import CustomModal from '../controls/CustomModal';

let propData = null;
const  onBackHandler = ()=> { 
   propData.navigation.goBack(null);
}


const getBillByName = (name)=>{
    return  [
        {"Name":"Imran", "BillId":"9148244425","Total":11000,"TotalTaxable":1000, "GrandTotal":12000, "Discount":0,"Igst":0, "Sgst":2,"Cgst":2 ,"BillDate":"10/03/2020"},
        {"Name":"Imran", "BillId":"914823325","Total":12000,"TotalTaxable":1000, "GrandTotal":12000, "Discount":0,"Igst":5, "Sgst":0,"Cgst":0 ,"BillDate":"10/03/2019"}
    ];
}

export default function Bill(props) {
    propData = props;
    const { name, id,type } =propData.route.params.params;
    const [newBillModalVisible, setNewBillModalVisible] = useState(false);
    const [updateBillModalVisible, setUpdateBillModalVisible] = useState(false);
    const [bills, setBills] = useState(getBillByName(name));
    const [prefillData, setPrefilData] = useState({});

    const onAddExecuteHandler =(bill)=>{
        bill.Name=name;
        setBills([bill,...bills]);
        setNewBillModalVisible(false)
    }
    const onUpdateExecuteHandler =(bill, index)=>{
        const allBills = bills.filter(f=>f.BillId !== bill.BillId);
        setBills([bill,...allBills]);
        setUpdateBillModalVisible(false)
    }
    const onSearchHandler=(searchText)=>{
     
        Alert.alert("Information","Will add sonn");
    } 

    const onPayHandler =(index)=>{
        const bill = bills[index];
        propData.navigation.navigate("Pay",{
            params : { name:bill.Name, id:bill.BillId,type:type }
        })
    }
    const onViewHandler=(index)=>{
        const selectedBill = bills[index];
        setPrefilData(selectedBill);
        setUpdateBillModalVisible(!updateBillModalVisible);
    }
    const onAddBillDetailHandler=(index)=>{
        const selectedBill = bills[index];
        propData.navigation.navigate("BillDetail",{
            params : { name:selectedBill.Name, id:selectedBill.BillId,type:type }
        })
    }

    return (
        <View style={styles.mainContainer}>
             <CustomModal modalVisible={newBillModalVisible}
            modalBody={<NewBill onExecute={onAddExecuteHandler} />}
            onClose={() => {
                setNewBillModalVisible(!newBillModalVisible);
            }}
            onClear={()=>{Alert.alert('Clear','Clear')}}/>

            <CustomModal modalVisible={updateBillModalVisible}
            modalBody={<UpdateBill onExecute={onUpdateExecuteHandler} prefillData={prefillData}/>}
            onClose={() => {
                setUpdateBillModalVisible(!updateBillModalVisible);
            }}
            onClear={()=>{Alert.alert('Clear','Clear')}}/>

            <View style={styles.menuContainer}>
                <View style={styles.menu}>
                    <Menu title="Bill" isSearchVisible={false} isYearVisible={true}  onAddNewHandler={() => {
                            setNewBillModalVisible(!newBillModalVisible);
                        }} 
                         onSearchHandler={onSearchHandler} searchText={name}/>
                </View>
                <View style={styles.detail}>
                    <UserBill datas={bills} onPayHandler={onPayHandler} onViewHandler={onViewHandler} onAddBillDetailHandler={onAddBillDetailHandler}/>
                </View>
            </View>
            <View style={styles.footerContainer}>
                <Footer hideSettingButton={true} onBackHandler={onBackHandler}/>
            </View>
        </View>
    )
}