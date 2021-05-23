import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements'
import color from '../constants/color';

const ShkIcon = props =>{
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
                <View style={{...props.style, ...styles.container}}>
                <Icon
                    name={props.iconName}
                    type={props.iconType}
                    color={props.iconColor}
                    onPress={props.onPress}
                    />
                </View>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        margin:5,
        backgroundColor:color.SECONDARY,
        width:40,
        height:40,
        paddingHorizontal:10,
        alignItems:"center",
        justifyContent:"center"
    }
});
export default ShkIcon;