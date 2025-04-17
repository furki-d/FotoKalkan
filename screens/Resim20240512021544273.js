import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Resim20240512021544273 = () => {
  return (
    <ImageBackground
      style={styles.resim202405120215442731Icon}
      resizeMode="cover"
      source={require("../assets/resim202405120215442731.png")}
    />
  );
};

const styles = StyleSheet.create({
  resim202405120215442731Icon: {
    flex: 1,
    width: "100%",
    height: 34,
  },
});

export default Resim20240512021544273;
