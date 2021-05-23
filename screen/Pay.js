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
import UserPay from '../controls/UserPay';
import styles from '../constants/style';
import NewPayment from '../controls/NewPayment';
import CustomModal from '../controls/CustomModal';
import { ScrollView } from 'react-native-gesture-handler';


let propData = null;
const  onBackHandler = ()=> {
   propData.navigation.goBack(null);
}

const getBillByName = (name)=>{
    return  [
        {"BillId":"9148244425","PayDate":"10/03/2010","Total":"11000","Balance":10900, "Advance":100, "CheckNo":"BHG78","TransactionId":"","PhotoUrl":"UJHNNJ",},
        {"BillId":"9148244425","PayDate":"10/03/2010","Total":"11000","Balance":10900, "Advance":100, "CheckNo":"","TransactionId":"YKK","PhotoUrl":"UJHNNJ", }
    ];
}
export default function Pay(props) {
    propData = props;
    const { name, id, type } = propData.route.params.params;
    const [modalVisible, setModalVisible] = useState(false);
    const [payments, setPayment] = useState(getBillByName(name));

    const onExecuteHandler =(payment)=>{
        setPayment([payment,...payments]);
        setModalVisible(false)
    }

    const onSearchHandler=(searchText)=>{
        console.log("Search")
        Alert.alert("Information","Will add sonn");
    } 
    
    return (
        <View style={styles.mainContainer}>  
        <CustomModal modalVisible={modalVisible}
        modalBody={<NewPayment onExecute={onExecuteHandler}/>}
        onClose={() => {
            setModalVisible(!modalVisible);
        }}
        onClear={()=>{Alert.alert('Clear','Clear')}}/>
            <View style={styles.menuContainer}>
                <View style={styles.menu}>
                    <Menu title="Payment"  onAddNewHandler={() => {
                            setModalVisible(!modalVisible);
                        }} 
                         onSearchHandler={onSearchHandler} searchText={id}/>
                </View>
                <ScrollView>
                    <View style={styles.detail}>
                        <UserPay datas={payments}/>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.footerContainer}>
                <Footer hideSettingButton={true} onBackHandler={onBackHandler}/>
            </View>
        </View>
    )
}