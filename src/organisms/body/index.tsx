import {View,StyleSheet,ScrollView} from "react-native"
import {colors} from "../../atomes/colors"
import { BodyRows } from "../../molecules/body_rows";
import { BodyCols } from "../../molecules/body_cols";
import { BodyGrids } from "../../molecules/body_grids";
import useOrientation from "../../../hooks/useOrientation";
import { orientation } from "../../atomes/orientation";

export function Body(){

    const grid : number[][] = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15]
      ];


    return(
        <ScrollView style={[styles.container, useOrientation() === orientation.LANDSCAPE? styles.containerLANDSCAPE : styles.containerPORTRAIL]}>
            <View style={[styles.subcontainer, useOrientation() === orientation.LANDSCAPE? styles.subcontainerLANDSCAPE : styles.subcontainerPORTRAIL]}>
                <BodyRows/>

                <BodyCols/>

                <BodyGrids matrix={grid}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,


    },
    subcontainer:{
        flex:1,
        flexDirection:"column",
        justifyContent:"space-around",
        backgroundColor: colors.b_sub,
        borderRadius:15,

    },
    containerLANDSCAPE:{
        marginTop:30,
        marginLeft:70,
        marginRight:70,
        marginBottom:30,
    },
    containerPORTRAIL:{
        margin:25,
    },
    subcontainerLANDSCAPE:{
        padding:5,
        paddingTop:50,
        paddingBottom:50,
        gap:100,
    },
    subcontainerPORTRAIL:{

        paddingTop:52,
        paddingLeft:30,
        paddingRight:30,
        paddingBottom:52,
        gap:85,
    },
})