import {View,StyleSheet} from "react-native"
import { colors } from "../../atomes/colors"
import { orientation } from "../../atomes/orientation"
import useOrientation from "../../../hooks/useOrientation"
export function BodyCols(){
    return(
    <View style={[styles.cols, useOrientation() === orientation.LANDSCAPE? styles.colsLANDSCAPE : styles.colsPORTRAIL]}>
        <View style={[styles.item_cols, useOrientation()=== orientation.LANDSCAPE? styles.itemLANDSCAPE : styles.itemPORTRAIL]}></View>
        <View style={[styles.item_cols, useOrientation()=== orientation.LANDSCAPE? styles.itemLANDSCAPE : styles.itemPORTRAIL]}></View>
        <View style={[styles.item_cols, useOrientation()=== orientation.LANDSCAPE? styles.itemLANDSCAPE : styles.itemPORTRAIL]}></View>
    </View>
    )

}

const styles = StyleSheet.create({
    cols:{
        flex:0,
        flexDirection:"column",
        borderRadius:5,
        backgroundColor:colors.b_sub_sub,
        justifyContent:"space-around",

    },
    item_cols:{
        backgroundColor:"black",
    },
    colsLANDSCAPE:{        
    minHeight:"30%",
    marginLeft:"5%",
    marginRight:"5%"},
    colsPORTRAIL:{minHeight:"25%"},
    itemLANDSCAPE:{
        height:38,
        margin:10,},
    itemPORTRAIL:{
        height:38,
        margin:10,},
})