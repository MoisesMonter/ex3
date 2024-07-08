import { View,StyleSheet} from "react-native";
import { colors } from "../../atomes/colors";
import {HeaderListButtons} from "../../molecules/header_list_buttons"
import useOrientation from '../../../hooks/useOrientation';
import { orientation } from "../../atomes/orientation";
export function Header(){
    return(
        <View style={[styles.container, useOrientation() === orientation.LANDSCAPE ? styles.sizeofLANDSCAPE : styles.sizeofPORTRAIL ]}>
            <HeaderListButtons items={['Menu', 'Logs', 'Credits']} />
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex:0,
        flexDirection:'row',
        backgroundColor: colors.header,
        justifyContent:'space-around',
        alignItems:'center',
        color:'blue',
    },
    sizeofLANDSCAPE:{
        height:40,
    },
    sizeofPORTRAIL:{
        height:60,
    },
})
