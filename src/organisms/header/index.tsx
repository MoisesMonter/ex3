import { View,StyleSheet} from "react-native";
import { colors } from "../../atomes/colors";
import {HeaderListButtons} from "../../molecules/header_list_buttons"
export function Header(){
    return(
        <View style={styles.container}>
            <HeaderListButtons items={['Menu', 'Logs', 'Credits']} />
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex:0,
        flexDirection:'row',
        backgroundColor: colors.header,
        height:60,
        justifyContent:'space-around',
        alignItems:'center',
        color:'blue',
    },

})
