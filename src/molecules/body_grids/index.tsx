import {View,StyleSheet} from "react-native"
import { colors } from "../../atomes/colors"
import { orientation } from "../../atomes/orientation"
import useOrientation from "../../../hooks/useOrientation"
type MatrixProps ={
    matrix: number[][]
}


export function BodyGrids({matrix}: MatrixProps){
    return(
        <View style={[styles.grids, useOrientation() === orientation.LANDSCAPE? styles.gridsLANDSCAPE : styles.gridsPORTRAIL]}> 

                
        {
            matrix.map((row,r_)=>(
                <View style={[styles.item_grids_l, useOrientation() === orientation.LANDSCAPE? styles.item_LANDSCAPE_l : styles.item_PORTRAIL_l]}>
                    {row.map((col,c_) =>(
                        <View style={[styles.item_grids_c, useOrientation() === orientation.LANDSCAPE? styles.item_LANDSCAPE_c : styles.item_PORTRAIL_c]}></View>
                    ))}
                </View>
            ))
        }
        </View>
    )

}

const styles = StyleSheet.create({
    grids:{
        flex:1,
        flexDirection:"column",
        borderRadius:5,
        backgroundColor:colors.b_sub_sub,
        justifyContent:"space-around",
        alignItems:"center",
    },

    gridsPORTRAIL:{minHeight:"25%",},
    gridsLANDSCAPE:{
        minHeight:"30%",
        marginLeft:"5%",
        marginRight:"5%",
    },

    item_grids_l:{
        flex:1,
        flexDirection:'row',
        justifyContent:"space-around",
        alignItems:"center",
    },

    item_PORTRAIL_l:{height:45,},
    item_LANDSCAPE_l:{
        height:45,
        marginTop:10,
        marginBottom:10,
},

    item_grids_c:{
        flex:1,
        margin:5,
        justifyContent:"space-around",
        backgroundColor:"black",

        
    },

    item_PORTRAIL_c:{        
        width:35,
        height:35,},
    item_LANDSCAPE_c:{
        marginLeft:25,
        marginRight:25,
        height:60,
    },
})