import React, { Component,useState } from 'react'
import Menu from '../controls/Menu';
import HomeMenu from '../controls/HomeMenu';
import Footer from '../controls/Footer';
import {View, Text,ScrollView, TextInput,StyleSheet,TouchableOpacity, Alert} from 'react-native';
import color from '../constants/color';
import fontSize from '../constants/fontSize';
import padding from '../constants/padding';
import margin from '../constants/margin';
import height from '../constants/height';
import { Icon, Input, Image,Button, ListItem } from 'react-native-elements';
import UserDetail from '../controls/UserDetail';
import styles from '../constants/style';
import NewUser from '../controls/NewUser';
import CustomModal from '../controls/CustomModal';

let propData = null;
const  onBackHandler = ()=> {
   propData.navigation.goBack(null);
}

const getAllEmployee = ()=>{
    return  [{"EmployeeId":"1","Name":"Imran", "Mobile":"9148244425","Address":"BG Road","IsActive":true},
    {"EmployeeId":"2","Name":"Inu", "Mobile":"9147244425","Address":"BG Road","IsActive":false}]
    ;
}

export default function Employee(props) {
    propData = props;    
    const [modalVisible, setModalVisible] = useState(false);
    const [employees, setEmployeeHandler] = useState(getAllEmployee());
    
    const onExecuteHandler =(employee)=>{
        setEmployeeHandler([employee,...employees]);
        setModalVisible(false)
    }

    const onSearchHandler=(searchText)=>{
        console.log("Search")
        Alert.alert("Information","Will add sonn");
    }

    const onBillHandler = (index)=>{
        const employee = employees[index];
        propData.navigation.navigate("Bill",{
            params : { name:employee.Name, id:employee.EmployeeId }
        })
    }

    const onPayHandler =(index)=>{
        const employee = employees[index];
        propData.navigation.navigate("Pay",{
            params : { name:employee.Name, id:employee.EmployeeId }
        })
    }

    const onProfileHandler= (index)=>{
        const employee = employees[index];
        propData.navigation.navigate("Profile",{
            params : { name:employee.Name, id:employee.EmployeeId}
        })
    }
    return (
        <View style={styles.mainContainer}>
            <CustomModal modalVisible={modalVisible}
            modalBody={<NewUser onExecute={onExecuteHandler}/>}
            onClose={() => {
                setModalVisible(!modalVisible);
            }}
            onClear={()=>{Alert.alert('Clear','Clear')}}/>
            <View style={styles.menuContainer}>
                <View style={styles.menu}>
                    <Menu title="Employee"  onAddNewHandler={() => {
                            setModalVisible(!modalVisible);
                        }}  onSearchHandler={onSearchHandler}/>
                </View>
                <View style={styles.detail}>
                    <ScrollView>
                        <UserDetail datas={employees} 
                        onBillHandler={onBillHandler}
                        onPayHandler={onPayHandler}
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
