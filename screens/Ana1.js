import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color } from "../GlobalStyles";

const Ana1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ana2}>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector7.png")}
      />
      <Image
        style={[styles.ana2Child, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/group-2621.png")}
      />
      <Text style={styles.fotokalkan}>FotoKalkan</Text>
      <Image
        style={[styles.b0122364a0e4fabAcd5Cef81e9Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/-9b0122364a0e4fabacd5cef81e9f6af1removebgpreview.png")}
      />
      <Image
        style={[styles.logoIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/logo9.png")}
      />
      <Pressable
        style={styles.kayt}
        onPress={() => navigation.navigate("KaytOl")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/kayt.png")}
        />
      </Pressable>
      <Pressable
        style={styles.giri}
        onPress={() => navigation.navigate("Giri")}
      >
        <Image
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("../assets/giri.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorIcon: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  ana2Child: {
    height: "0.83%",
    width: "13.59%",
    top: "74.76%",
    right: "42.05%",
    bottom: "24.41%",
    left: "44.36%",
    position: "absolute",
  },
  fotokalkan: {
    top: "26.66%",
    left: "39.74%",
    fontSize: 40,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorDarkslategray_300,
    textAlign: "left",
    position: "absolute",
  },
  b0122364a0e4fabAcd5Cef81e9Icon: {
    height: "32.01%",
    width: "77.44%",
    top: "37.42%",
    right: "11.28%",
    bottom: "30.57%",
    left: "11.28%",
    position: "absolute",
  },
  logoIcon: {
    height: "20.25%",
    width: "45.85%",
    top: "4.99%",
    right: "27.08%",
    bottom: "74.76%",
    left: "27.08%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  kayt: {
    left: "15.13%",
    top: "90.17%",
    right: "15.64%",
    bottom: "4.15%",
    width: "69.23%",
    height: "5.69%",
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  giri: {
    left: 58,
    top: 692,
    width: 274,
    height: 51,
    position: "absolute",
  },
  ana2: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Ana1;
