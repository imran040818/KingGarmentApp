import React, { Component } from 'react'
import {View, Text, TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import { Icon, Input, Image,Button, ListItem } from 'react-native-elements';
import ToggleSwitch from './ToggleSwitch';
import color from '../constants/color';
import fontSize from '../constants/fontSize';
import padding from '../constants/padding';
import margin from '../constants/margin';
import height from '../constants/height';


export default class HomeMenu extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const { menuList } =  this.props;
        return (
        <View style={{...this.props.style, ...styles.container}}>
            {
            menuList !==undefined && menuList!==null && menuList.map((menu,index)=>{
              return(
                    <TouchableOpacity activeOpacity={0.8} key={index} 
                    onPress={()=>this.props.onMenuSelectionHandler(index)}
                    >
                        <View style={styles.mainContainer}>
                            <View style={styles.imageContainer}>
                                <Icon style={styles.searchIcon} name='user'
                                        type= 'font-awesome'
                                        size={fontSize.F_X_LARGE}
                                        color={color.PRIMARY}/>
                                <Text style={styles.txtName}>{menu.name}</Text>
                            </View>
                        
                            <Icon style={styles.searchIcon} name='arrow-right'
                                    type= 'font-awesome'
                                    size={fontSize.F_X_LARGE}
                                    color={color.PRIMARY}/>
                        </View>
                    </TouchableOpacity>
               )})
            }
           
        </View>
        )
    }
}
const styles = StyleSheet.create({
    mainContainer: {
        borderBottomWidth:1,
        borderBottomColor:color.PRIMARY,
        flexDirection:"row",
        width:"100%",
        height:60,
        padding:padding.P_MEDUM,
        justifyContent:"space-between",
        alignItems:"center"
    },
    imageContainer:{
        flexDirection:"row",
        padding:padding.P_MEDUM,
        justifyContent:"space-between",
        alignItems:"center"
    },
    txtName:{
        color:color.PRIMARY,
        fontSize:fontSize.F_LARGE,
        paddingLeft:padding.P_SMALL
    },
    
    btn:{
        backgroundColor:color.PRIMARY,
        height:30,
        justifyContent:"center",
       
    },
    container:{

    }
})