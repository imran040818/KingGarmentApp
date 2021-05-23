import React, { Component } from 'react'
import { View, Switch, StyleSheet }

from 'react-native'

export default ToggleSwitch = (props) => {
   return (
      <View style = {styles.container}>
         <Switch
         onValueChange = {props.onValueChange}
         value = {props.value}/>
      </View>
   )
}
const styles = StyleSheet.create ({
   container: {
   }
})