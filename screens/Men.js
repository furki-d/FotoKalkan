import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const Men = () => {
  return (
    <View style={[styles.men, styles.menLayout]}>
      <Image
        style={[styles.clipPathGroup, styles.menLayout]}
        resizeMode="cover"
        source={require("../assets/clip-path-group.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  menLayout: {
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
  men: {
    flex: 1,
    height: 812,
  },
});

export default Men;
