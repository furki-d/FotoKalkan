import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const Ana = () => {
  return (
    <View style={[styles.ana1, styles.ana1Layout]}>
      <Image
        style={[styles.clipPathGroup, styles.ana1Layout]}
        resizeMode="cover"
        source={require("../assets/clip-path-group7.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ana1Layout: {
    overflow: "hidden",
    width: "100%",
  },
  clipPathGroup: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  ana1: {
    flex: 1,
    height: 844,
  },
});

export default Ana;
