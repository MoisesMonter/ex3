
import { StyleSheet,  View } from 'react-native';
import {Header} from '../../organisms/header';
import { Body } from "../../organisms/body";
import { Footer } from '../../organisms/footer';
import { colors } from '../../atomes/colors';
export function Exercicio(){
    return (
          <View style={styles.container}>
            <Header/>
            <Body/>
            <Footer/>
          </View>
    );
}
      
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
    },
});
    