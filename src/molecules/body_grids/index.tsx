import {View,StyleSheet} from "react-native"
import { colors } from "../../atomes/colors"

type MatrixProps ={
    matrix: number[][]
}


export function BodyGrids({matrix}: MatrixProps){
    return(
        <View style={styles.grids}> 

                
        {
            matrix.map((row,r_)=>(
                <View style={styles.item_grids_l}>
                    {row.map((col,c_) =>(
                        <View style={styles.item_grids_c}></View>
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
        minHeight:"25%",




    },
    item_grids_l:{
        flex:1,
        flexDirection:'row',
        justifyContent:"space-around",
        alignItems:"center",

        height:45,


    },
    item_grids_c:{
        flex:1,
        margin:5,
        justifyContent:"space-around",
        backgroundColor:"black",
        width:35,
        height:35,
        
    }
})