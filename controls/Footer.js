import React, { Component } from 'react'
import {View, Text, TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import color from '../constants/color';
import fontSize from '../constants/fontSize';
import padding from '../constants/padding';
import margin from '../constants/margin';
import height from '../constants/height';
import { Icon, Input, Image,Button, ListItem } from 'react-native-elements';

export default class Footer extends Component {
constructor(props){
    super(props);
}
    render() {
        const {hideSettingButton, hideBackButton, hideClosebutton, onSettingHandler,onBackHandler,onCloseHandler} = this.props;
        return (
            <View style={styles.mainContainer}>
                <View
                 style = { 
                    hideSettingButton === true ? {"display":"none"} : {"display":"flex"}
                }>
                <TouchableOpacity activeOpacity={0.8} onPress={onSettingHandler}>
                                    <Icon  name='cog'
                                    type= 'font-awesome-5'
                                    size={50}
                                    color={color.WHITE}/>
                                </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={0.8} onPress={onBackHandler}>
                    <Icon name='angle-left' 
                    style = { 
                        hideBackButton === true ? {"display":"none"} : {"display":"flex"}
                    }
                    type= 'font-awesome-5'
                    size={50}
                    color={color.WHITE}/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={onCloseHandler}>
                    <Icon name='window-close'
                     style = { 
                        hideClosebutton === true ? {"display":"none"} : {"display":"flex"}
                    }
                    type= 'font-awesome-5'
                    size={50}
                    color={color.WHITE}/>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    mainContainer : {
        height:60,
        backgroundColor:color.PRIMARY,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:padding.P_X_LARGE
    },
});