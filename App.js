import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screen/Home';
import Customer from './screen/Customer';
import Employee from './screen/Employee';
import Seller from './screen/Seller';
import Profile from './screen/Profile';
import Pay from './screen/Pay';
import Bill from './screen/Bill';
import BillDetail from './screen/BillDetail';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducers from './reducers';
import thunk from 'redux-thunk';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack  = createStackNavigator();

let store = createStore(rootReducers,applyMiddleware(thunk));

export default class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerMode: 'none', headerShown : false}} />
            <Stack.Screen name="Profile" component={Profile} options={{headerMode: 'none', headerShown : false}} />
            <Stack.Screen name="Customer" component={Customer} options={{headerMode: 'none', headerShown : false}} />
            <Stack.Screen name="Seller" component={Seller} options={{headerMode: 'none', headerShown : false}}/>
            <Stack.Screen name="Employee" component={Employee} options={{headerMode: 'none', headerShown : false}}/>
            <Stack.Screen name="Pay" component={Pay} options={{headerMode: 'none', headerShown : false}}/>
            <Stack.Screen name="Bill" component={Bill} options={{headerMode: 'none', headerShown : false}}/>
            <Stack.Screen name="BillDetail" component={BillDetail} options={{headerMode: 'none', headerShown : false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
