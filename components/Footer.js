import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default class Footer extends Component {
    constructor(props){
        super(props)
    } 
    render() {
        return (
            // <View {...this.props} style={{...this.props.style, ...styles.header}}>
                <Text>Footer</Text>
            // </View>
        )
    }
}

const styles = StyleSheet.create({
    content :{
        
    }
});

