import {View,StyleSheet} from "react-native"
import { colors } from "../../atomes/colors"
import useOrientation from "../../../hooks/useOrientation"
import { orientation } from "../../atomes/orientation"
export function BodyRows(){
    return(
    <View style={[styles.row, useOrientation() === orientation.LANDSCAPE ? styles.sizeofLANDSCAPE: styles.sizeofPORTRAIL]}>
        <View style={[styles.item_row, useOrientation() === orientation.LANDSCAPE ? styles.itemLANDSCAPE: styles.itemPORTRAIL]}></View>
        <View style={[styles.item_row, useOrientation() === orientation.LANDSCAPE ? styles.itemLANDSCAPE: styles.itemPORTRAIL]}></View>
        <View style={[styles.item_row, useOrientation() === orientation.LANDSCAPE ? styles.itemLANDSCAPE: styles.itemPORTRAIL]}></View>
    </View>
    )

}

const styles = StyleSheet.create({
    row:{
        flex:0,
        flexDirection:"row",
        borderRadius:5,
        backgroundColor:colors.b_sub_sub,
        justifyContent:"space-around",


    },
    item_row:{
        backgroundColor:"black",

    },
    sizeofLANDSCAPE:{
        minHeight:"30%",
        marginLeft:"5%",
        marginRight:"5%"
    },
    sizeofPORTRAIL:{minHeight:"25%",},

    itemLANDSCAPE:{
        width:50,
        margin:10,},
    itemPORTRAIL:{
        width:50,
        margin:10,},
})