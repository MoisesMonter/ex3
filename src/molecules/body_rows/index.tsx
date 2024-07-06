import {View,StyleSheet} from "react-native"
import { colors } from "../../atomes/colors"
export function BodyRows(){
    return(
    <View style={styles.row}>
        <View style={styles.item_row}></View>
        <View style={styles.item_row}></View>
        <View style={styles.item_row}></View>
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
        minHeight:"25%",

    },
    item_row:{
        backgroundColor:"black",
        width:50,
        margin:10,
    },
})