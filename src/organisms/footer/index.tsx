import {View,StyleSheet,Text} from "react-native"
import {colors} from "../../atomes/colors"

export function Footer(){
    return(
        <View style={styles.container}>
        <Text style={styles.text}>Exercício 03 - DDM</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:0,
        justifyContent:"center",
        backgroundColor: colors.footer,
        // width:"100%",
        height:"7%",
        // maxHeight:"100%",
        alignItems:"center",
    },
    text:{
        // paddingTop:20,
        // paddingBottom:15,
        fontSize:17,
        color:"white",
    },
}
)