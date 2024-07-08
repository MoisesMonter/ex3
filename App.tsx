import React, { useState, useEffect,startTransition } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { Exercicio } from "./src/pages/initial";
import { colors } from "./src/atomes/colors";
import { Orientation } from "expo-screen-orientation";

export default function App() {
  const { width, height } = useWindowDimensions();
  const [actualyRotation, SetActualyRotation] = useState(width < height);
  

  useEffect(() => {
    SetActualyRotation(width < height);
    
  }, [width, height]);
  return (
    <View style={[styles.container, actualyRotation? styles.vertical:styles.horizontal]}>
      <Exercicio  />
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.body,
    
  },
  vertical: {
    marginTop: 20,
  },
  horizontal: {
    marginTop: 25,
  },
});
