import React, { Component,useState } from 'react'
import Menu from '../controls/Menu';
import HomeMenu from '../controls/HomeMenu';
import Footer from '../controls/Footer';
import {View, Text, TextInput,StyleSheet,TouchableOpacity, Alert} from 'react-native';
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

const customers = [{"Name":"Imran", "Mobile":"9148244425","Address":"BG Road","IsActive":true},
{"Name":"Inu", "Mobile":"9147244425","Address":"BG Road","IsActive":false}]

let propData = null;
const  onBackHandler = ()=> {
   propData.navigation.goBack(null);
}
const onBillHandler = (index)=>{
  propData.navigation.navigate("Bill")
}
const onPayHandler =(index)=>{
  propData.navigation.navigate("Pay")
}
const onProfileHandler= (index)=>{
  propData.navigation.navigate("Profile")
}

const onAddNewHandler =(customer)=>{
    console.log("Added")
    Alert.alert("Information","Will add sonn");
    //propData.navigation.navigation("");
}
const onSearchHandler=(searchText)=>{
    console.log("Search")
    Alert.alert("Information","Will add sonn");
}
export default function Seller(props) {
    propData = props;
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.mainContainer}>
            <CustomModal modalVisible={modalVisible}
            modalBody={<NewUser/>}
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
                    <UserDetail datas={customers} 
                    onBillHandler={onBillHandler}
                    onPayHandler={onPayHandler}
                    onProfileHandler={onProfileHandler}/>
                </View>
            </View>
            <View style={styles.footerContainer}>
                <Footer hideSettingButton={true} onBackHandler={onBackHandler}/>
            </View>
        </View>
    )
}
