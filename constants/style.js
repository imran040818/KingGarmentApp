import { StyleSheet} from "react-native";
import Color from './color';

const styles = StyleSheet.create({
    /* 
    ====================SCREEN================
    */
    mainContainer:{
        flexDirection:"column",
        justifyContent:"space-between",
        height:"100%",
    },
    menuContainer:{
        justifyContent:"flex-start",  
        maxHeight:"80%", 
        //backgroundColor:"red",
        height:400
    },
    menu:{
        justifyContent:"flex-start", 
        backgroundColor:Color.PRIMARY,
        height:110          
    },
    detail:{
        justifyContent:"flex-end",
    },
    footerContainer:{
        justifyContent:"flex-end",
        maxHeight:"20%", 
        height:60
      },

     /* 
    ====================CONTROL================
    */
      controlContainer:{
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"flex-start"
    },
    columnContainer:{
        height:60,
        width:"100%",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignContent:"center"
   },
    rowContainer:{
        height:60,
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"center"
   },
   txt:{
       color:Color.PRIMARY,
       width:"30%",
   },
    txtError:{
        color:Color.RED,
        width:"100%",
    },
    txtBox:{
        height: 30,
        borderBottomColor:Color.PRIMARY,
        borderBottomWidth:1,
        //width:150,
        width:"70%",
    },

    modalFooter:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
    },
    clearBtn:{
      backgroundColor: Color.WHITE,
  },
  clearBtntxtStyle:{
    color:Color.PRIMARY,
}

});
export default styles;