import {View,StyleSheet} from "react-native"
import { colors } from "../../atomes/colors"

export function BodyCols(){
    return(
    <View style={styles.cols}>
        <View style={styles.item_cols}></View>
        <View style={styles.item_cols}></View>
        <View style={styles.item_cols}></View>
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
        minHeight:"25%",
    },
    item_cols:{
        backgroundColor:"black",
        height:38,
        margin:10,
    },
})