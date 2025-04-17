import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const ClipIPhone13Mini = () => {
  return (
    <View style={styles.clipIphone13Mini3}>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    width: "100%",
  },
  clipIphone13Mini3: {
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default ClipIPhone13Mini;
