import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Giri = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.giri}>
      <Image
        style={[styles.vectorIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={styles.appleLogo747Icon}
        resizeMode="cover"
        source={require("../assets/applelogo-747.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/group4.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/group4.png")}
      />
      <Image
        style={[styles.eyeicon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/eyeicon.png")}
      />
      <Text style={styles.giriYap}>Giriş Yap</Text>
      <Text style={styles.ifremiUnuttumyenile}>Şifremi unuttum/Yenile</Text>
      <Text style={[styles.text, styles.textTypo]}>Şifre</Text>
      <Text style={[styles.ePosta, styles.textTypo]}>E-posta</Text>
      <Image
        style={[styles.arrowBackIos24dpFill0WghtIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/arrow-back-ios-24dp-fill0-wght400-grad0-opsz24.png")}
      />
      <Image
        style={[styles.google300221Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/google-300221.png")}
      />
      <Image
        style={[styles.facebook5968764Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/google-300221.png")}
      />
      <Image
        style={[styles.giriChild, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/group-101.png")}
      />
      <Pressable
        style={styles.giri1}
        onPress={() => navigation.navigate("AnaSayfa")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/giri-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.logoIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupIconLayout: {
    left: "18.4%",
    width: "62.13%",
    height: "5.05%",
    right: "19.47%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorDarkslategray_300,
    position: "absolute",
  },
  iconLayout: {
    bottom: "33.31%",
    top: "63.68%",
    width: "6.51%",
    height: "3%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
  appleLogo747Icon: {
    top: "63.62%",
    right: "46.72%",
    bottom: "33.37%",
    left: "46.77%",
    width: "6.51%",
    height: "3%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon: {
    top: "31.4%",
    bottom: "63.55%",
  },
  groupIcon1: {
    top: "38.79%",
    bottom: "56.16%",
  },
  eyeicon: {
    height: "1.35%",
    width: "4%",
    top: "41.01%",
    right: "21.87%",
    bottom: "57.64%",
    left: "74.13%",
    position: "absolute",
    maxWidth: "100%",
  },
  giriYap: {
    top: "22.44%",
    left: "12.96%",
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorDarkslategray_300,
    position: "absolute",
  },
  ifremiUnuttumyenile: {
    top: "44.63%",
    left: "5.31%",
    fontSize: 10,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorDarkslategray_300,
    position: "absolute",
  },
  text: {
    top: "40.43%",
    left: "6.08%",
  },
  ePosta: {
    top: "32.92%",
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
  google300221Icon: {
    right: "63.44%",
    left: "30.05%",
  },
  facebook5968764Icon: {
    right: "30.03%",
    left: "63.47%",
  },
  giriChild: {
    height: "12.07%",
    top: "87.93%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    maxWidth: "100%",
    position: "absolute",
    width: "100%",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  giri1: {
    left: "14.93%",
    top: "52.59%",
    bottom: "41.75%",
    width: "65.6%",
    height: "5.67%",
    right: "19.47%",
    position: "absolute",
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
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Giri;
