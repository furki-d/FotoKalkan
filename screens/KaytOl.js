import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const KaytOl = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.kaytOl}>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.kaytOlChild, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/group-101.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconPosition]}
        resizeMode="cover"
        source={require("../assets/group4.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.groupIconPosition]}
        resizeMode="cover"
        source={require("../assets/group13.png")}
      />
      <Image
        style={[styles.eyeicon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/eyeicon.png")}
      />
      <Text style={[styles.kaytOl1, styles.giriTypo]}>Kayıt Ol</Text>
      <Text style={[styles.ePosta, styles.ePostaTypo]}>E-posta</Text>
      <Image
        style={[styles.arrowBackIos24dpFill0WghtIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/arrow-back-ios-24dp-fill0-wght400-grad0-opsz24.png")}
      />
      <Image
        style={[styles.groupIcon2, styles.groupIconPosition]}
        resizeMode="cover"
        source={require("../assets/group4.png")}
      />
      <Text style={[styles.adSoyad, styles.ePostaTypo]}>Ad Soyad</Text>
      <Image
        style={[styles.logoIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/logo1.png")}
      />
      <Text style={[styles.giri, styles.giriTypo]}>Kayıt</Text>
      <Pressable
        style={[styles.kayt1, styles.groupIconPosition]}
        onPress={() => navigation.navigate("Giri")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/kayt-1.png")}
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
  groupIconPosition: {
    left: "18.4%",
    position: "absolute",
  },
  giriTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  ePostaTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorDarkslategray_300,
    position: "absolute",
  },
  vectorIcon: {
    top: "0%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    maxWidth: "100%",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  kaytOlChild: {
    height: "12.07%",
    top: "87.93%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    maxWidth: "100%",
    position: "absolute",
    width: "100%",
  },
  groupIcon: {
    top: "38.79%",
    bottom: "56.16%",
    right: "19.47%",
    width: "62.13%",
    height: "5.05%",
    left: "18.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupIcon1: {
    top: "46.18%",
    bottom: "48.77%",
    right: "19.47%",
    width: "62.13%",
    height: "5.05%",
    left: "18.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  eyeicon: {
    height: "1.35%",
    width: "4%",
    top: "48.4%",
    right: "21.87%",
    bottom: "50.25%",
    left: "74.13%",
    position: "absolute",
    maxWidth: "100%",
  },
  kaytOl1: {
    top: "22.44%",
    left: "14.48%",
    fontSize: FontSize.size_6xl,
    color: Color.colorDarkslategray_300,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  ePosta: {
    top: "40.31%",
    left: "6.4%",
  },
  arrowBackIos24dpFill0WghtIcon: {
    height: "3.69%",
    width: "8%",
    top: "5.42%",
    right: "85.33%",
    bottom: "90.89%",
    left: "6.67%",
    position: "absolute",
    maxWidth: "100%",
  },
  groupIcon2: {
    top: "31.4%",
    bottom: "63.55%",
    right: "19.47%",
    width: "62.13%",
    height: "5.05%",
    left: "18.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  adSoyad: {
    top: "32.86%",
    left: "4.83%",
  },
  logoIcon: {
    height: "12.48%",
    width: "28.27%",
    top: "8.09%",
    right: "35.87%",
    bottom: "79.43%",
    left: "35.87%",
    position: "absolute",
    maxWidth: "100%",
  },
  giri: {
    top: "55.73%",
    left: "28.4%",
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  kayt1: {
    top: "57.14%",
    right: "22.13%",
    bottom: "37.93%",
    width: "59.47%",
    height: "4.93%",
  },
  kaytOl: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default KaytOl;
