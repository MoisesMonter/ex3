import {View,StyleSheet,Text} from "react-native"
import {colors} from "../../atomes/colors"
import useOrientation from "../../../hooks/useOrientation"
import { orientation } from "../../atomes/orientation"
export function Footer(){
    return(
        <View style={[styles.container,  useOrientation() === orientation.LANDSCAPE ?styles.sizeofLANDSCAPE:styles.sizeofPORTRAIL]}>
        <Text style={[styles.text,useOrientation() === orientation.LANDSCAPE ? styles.textLANDSCAPE :styles.textPORTRAIL]}>Exercício 03 - DDM</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:0,
        justifyContent:"center",
        backgroundColor: colors.footer,
    },
    text:{
        color:"white",
        textAlign:"center",
    },
    sizeofLANDSCAPE:{height:"10%"},sizeofPORTRAIL:{height:"7%"},
    textLANDSCAPE:{fontSize:22},textPORTRAIL:{fontSize:17},
}
)