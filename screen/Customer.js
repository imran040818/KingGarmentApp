import React, { Component, useState } from 'react'
import Menu from '../controls/Menu';
import Footer from '../controls/Footer';
import {View, Modal, Text, TextInput,StyleSheet,TouchableOpacity,TouchableHighlight,Alert} from 'react-native';
import styles from '../constants/style';
import { Icon, Input, Image,Button, ListItem } from 'react-native-elements';
import UserDetail from '../controls/UserDetail';
import NewUser from '../controls/NewUser';
import CustomModal from '../controls/CustomModal';
import { ScrollView } from 'react-native-gesture-handler';


let propData = null;
const  onBackHandler = ()=> {
   propData.navigation.goBack(null);
}

const getAllCustomer = ()=>{
    return  [{"CustomerId":"1","Name":"Imran", "Mobile":"9148244425","Address":"BG Road","IsActive":true},
    {"CustomerId":"2","Name":"Inu", "Mobile":"9147244425","Address":"BG Road","IsActive":false}]
    ;
}

export default function Customer(props) {
    propData = props;    
    const [modalVisible, setModalVisible] = useState(false);
    const [customers, setCustomer] = useState(getAllCustomer());
    const [searchCustomer, setSearchCustomer] = useState(customers);
    

    const onExecuteHandler =(customer)=>{
        setCustomer([customer,...customers]);
        setSearchCustomer(customers);
        setModalVisible(false);
    }

    const onSearchHandler=(searchText)=>{
        console.log("SearchText",  searchText);
        if(searchText === '' || searchText === undefined) {
            setSearchCustomer(customers);
        } else{
            var filterCustomer = customers.filter(function(customer){return customer.Name.toLowerCase().includes(searchText.toLowerCase()) === true;});
            setSearchCustomer(filterCustomer);
        }
    }

    const onBillHandler = (index)=>{
        const customer = customers[index];
        propData.navigation.navigate("Bill",{
            params : { name:customer.Name,id:customer.CustomerId, type:'customer' }
        })
    }

    const onProfileHandler= (index)=>{
        const customer = customers[index];
        propData.navigation.navigate("Profile",{
            params : { name:customer.Name, id:customer.CustomerId, type:'customer' }
        })
    }

    return(
        <View style={styles.mainContainer}>
            <CustomModal modalVisible={modalVisible}
            modalBody={ <NewUser onExecute={onExecuteHandler}/> }
            onClose={() => {
                setModalVisible(!modalVisible);
            }}
          />
            <View style={styles.menuContainer}>
                <View style={styles.menu}>
                    <Menu title="Customer"
                        onAddNewHandler={() => {
                            setModalVisible(!modalVisible);
                        }} 
                         onSearchHandler={onSearchHandler}/>
                </View>
                    <View style={styles.detail}>
                    <ScrollView>
                        <UserDetail datas={searchCustomer} 
                        onBillHandler={onBillHandler}
                        onProfileHandler={onProfileHandler}/>
                    </ScrollView>
                    </View>
            </View>
            <View style={styles.footerContainer}>
                <Footer hideSettingButton={true} onBackHandler={onBackHandler}/>
            </View>
        </View>
    )
}
