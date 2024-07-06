import {View,StyleSheet,ScrollView} from "react-native"
import {colors} from "../../atomes/colors"
import { BodyRows } from "../../molecules/body_rows";
import { BodyCols } from "../../molecules/body_cols";
import { BodyGrids } from "../../molecules/body_grids";


export function Body(){

    const grid : number[][] = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15]
      ];


    return(
        <ScrollView style={styles.container}>
            <View style={styles.subcontainer}>
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
        margin:25,

    },
    subcontainer:{
        flex:1,
        flexDirection:"column",
        justifyContent:"space-around",
        backgroundColor: colors.b_sub,
        borderRadius:15,
        paddingTop:52,
        paddingLeft:30,
        paddingRight:30,
        paddingBottom:52,
        gap:85,
    },
})