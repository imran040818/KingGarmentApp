import React from 'react'
import color from '../constants/color';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Icon, Input, Image,Button } from 'react-native-elements';
import fontSize from '../constants/fontSize';

const ShkButton = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
            <View {...props} style={{...styles.btn,...props.style }}>
                <Icon style={styles.icon}
                    type= 'font-awesome'
                    name={props.iconName}
                    size={fontSize.F_SMALL}
                    color={color.WHITE}
                />
                <Text style = {{...styles.txt, ...props.txtStyle}}
                >{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    icon:{
        paddingHorizontal:5
    },
    btn:{
        width:80,
        height:40,
        backgroundColor: color.PRIMARY,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:3,
        elevation: 2
    },
    txt:{
        color: color.WHITE
    }
});
export default ShkButton
