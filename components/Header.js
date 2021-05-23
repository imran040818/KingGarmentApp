import React, { Component } from "react"
import { StyleSheet, View } from "react-native";
import ShkButton from '../controls/ShkButton';
import ShkIcon from '../controls/ShkIcon';
import { Image, Text, Icon } from 'react-native-elements'
import color from "../constants/color";

export default class Header extends Component {
    constructor(props){
        super(props)
    } 

    render() {
        return (
            <View style={styles.header}>
                 <ShkIcon iconiconTouchable={true} style={styles.icons}
                iconName='bars'
                iconType='font-awesome'
                iconColor={color.WHITE}
                onPress={this.props.onPress} 
                />

                <View style={styles.iconContainer}>
                    <Image source= {{uri:"../assets/icon.png"}} style={{ width: 40, height: 40 }}/>
                </View>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center"
    },
    iconContainer:{
        flexDirection:"row",
        alignItems:"center",
        alignContent:"center",
        paddingLeft:20,
    },
    btn:{
        marginHorizontal:0
    },
    icon:{
        height:30,
        width:30
    }
});
