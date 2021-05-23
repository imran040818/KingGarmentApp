import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Menu from '../controls/Menu';

export default class Profile extends Component {
    render() {
        return (
            <View>
                <Menu title="Profile"/>
            </View>
        )
    }
}
