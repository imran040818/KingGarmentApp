import React from 'react'
import {View, Modal,ScrollView, Text, TextInput,StyleSheet,TouchableOpacity,TouchableHighlight,Alert} from 'react-native';
import ShkButton from './ShkButton';
import Color from '../constants/color';

export default function CustomModal(props) {
    return (
        <Modal animationType="slide"
                    transparent={true}
                    visible={props.modalVisible}>

                    <View style={styles.centeredView}>
                        <View style={styles.modalBody}>
                            <View style={styles.closeBtnContainer}>
                                <ShkButton style={styles.closeBtn} iconName="close"   onPress={() => {
                                    props.onClose(!props.modalVisible);
                                }}/>
                            </View>
                            <ScrollView>
                                {props.modalBody}
                            </ScrollView>
                            {/* <View style={styles.modalFooter}>
                                <ShkButton  title="Save" onPress={()=>props.onExecute()}/>
                                <ShkButton style={styles.clearBtn} txtStyle={styles.clearBtntxtStyle} title="Clear"  onPress={() => {
                                        props.onClear();
                                    }}/>
                            </View> */}
                        </View>
                    </View>
            </Modal>
    )
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        //alignItems: "center",
        marginTop: 22
      },
      modalBody: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        width:"90%",
        //alignItems: "flex-start",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      modalFooter:{
          flexDirection:"row",
          justifyContent:"space-between",
          alignItems:"center",
          //backgroundColor:"red"
      },
      closeBtnContainer:{
          //flex:1,
          flexDirection:"row",
          justifyContent:"flex-end"
      },
      closeBtn:{
          backgroundColor:Color.RED,
          width:40,
          height:40
      },
      clearBtn:{
        backgroundColor: Color.WHITE,
    },
    clearBtntxtStyle:{
        color:Color.PRIMARY,
        fontSize:18
    }
    //   openButton: {
    //     backgroundColor: "#F194FF",
    //     borderRadius: 20,
    //     padding: 10,
    //     elevation: 2
    //   },
    //   textStyle: {
    //     color: "white",
    //     fontWeight: "bold",
    //     textAlign: "center"
    //   },
    //   modalText: {
    //     marginBottom: 15,
    //     textAlign: "center"
    //   },
});