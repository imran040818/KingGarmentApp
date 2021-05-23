import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import ShkCard from "../controls/ShkCard";

export default class Content extends Component {
    constructor(props){
        super(props)
    } 
    render() {
        return (
            // <View {...this.props} style={{...this.props.style, ...styles.header}}>
              
            <View>
                <ShkCard/>
            </View>
            // </View>
        )
    }
}
const styles = StyleSheet.create({
    content :{
        
    }
});
