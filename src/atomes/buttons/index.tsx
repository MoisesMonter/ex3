import React from "react"
import { TouchableOpacity,StyleSheet,Text } from "react-native"
import { colors } from "../colors"

interface ButtonProps {
    title: string;
  }
export function ButtonHeader({title}:ButtonProps){
    return(
        <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button :{
        flex:0,
        justifyContent:"center",
        backgroundColor: colors.h_button,
        height:30,
        width:75,
        borderRadius:5,

    },
    
    text:{
        fontSize:20,
        color:'white',
        textAlign:'center',
    }
})