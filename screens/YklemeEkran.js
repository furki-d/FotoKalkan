import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const YklemeEkran = () => {
  return (
    <View style={[styles.yklemeEkran, styles.yklemeEkranLayout]}>
      <Image
        style={[styles.clipPathGroup, styles.yklemeEkranLayout]}
        resizeMode="cover"
        source={require("../assets/clip-path-group2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  yklemeEkranLayout: {
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
  yklemeEkran: {
    flex: 1,
    height: 844,
  },
});

export default YklemeEkran;
