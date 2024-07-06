import React, { useState, useEffect } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { Exercicio } from "./src/pages/initial";
import { colors } from "./src/atomes/colors";

export default function App() {
  const { width, height } = useWindowDimensions();
  const [isLandscape, setIsLandscape] = useState(width < height);

  useEffect(() => {
    setIsLandscape(width < height);
    
  }, [width, height]);
  return (
    <View style={[styles.container, isLandscape? styles.vertical:styles.horizontal]}>
      <Exercicio />
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  vertical: {
    backgroundColor: colors.body,
  },
  horizontal: {
    backgroundColor: "red",
  },
});
