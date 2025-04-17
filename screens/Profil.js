import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const Profil = () => {
  return (
    <View style={[styles.profil, styles.profilLayout]}>
      <Image
        style={[styles.clipPathGroup, styles.profilLayout]}
        resizeMode="cover"
        source={require("../assets/clip-path-group1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profilLayout: {
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
  profil: {
    flex: 1,
    height: 812,
  },
});

export default Profil;
