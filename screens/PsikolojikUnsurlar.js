import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const PsikolojikUnsurlar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.psikolojikUnsurlar1}>
      <Image
        style={[styles.clipPathGroup, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/clip-path-group3.png")}
      />
      <Image
        style={[styles.imageRemovebgPreview1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/imageremovebgpreview-1.png")}
      />
      <Image
        style={[styles.simgeIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/simge.png")}
      />
      <Pressable
        style={[styles.backArrow114886331, styles.backLayout]}
        onPress={() => navigation.navigate("PsikolojikUnsurlar2")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/backarrow-11488633-11.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.backArrow114886332, styles.backLayout]}
        onPress={() => navigation.navigate("AnaSayfa")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/backarrow-11488633-21.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.pressable, styles.pressablePosition1]}
        onPress={() => navigation.navigate("AnaSayfa")}
      >
        <Image
          style={[styles.homeIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/041.png")}
        />
        <Text style={[styles.home, styles.homeTypo]}>AnaSayfa</Text>
      </Pressable>
      <Pressable
        style={[styles.pressable1, styles.pressablePosition1]}
        onPress={() => navigation.navigate("AnaSayfa")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/041.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.pressable2, styles.pressablePosition]}
        onPress={() => navigation.navigate("Profil")}
      >
        <Image
          style={[styles.profileicon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/profileicon5.png")}
        />
        <Text style={[styles.profile, styles.homeTypo]}>Profil</Text>
      </Pressable>
      <Pressable
        style={[styles.pressable3, styles.pressablePosition]}
        onPress={() => navigation.navigate("Profil")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/profileicon5.png")}
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
  backLayout: {
    height: "4.03%",
    width: "10.26%",
    position: "absolute",
  },
  pressablePosition1: {
    top: "92.65%",
    position: "absolute",
  },
  homeTypo: {
    textAlign: "left",
    color: Color.colorDarkslategray_300,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    left: "0%",
    position: "absolute",
  },
  pressablePosition: {
    top: "93.36%",
    position: "absolute",
  },
  clipPathGroup: {
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  imageRemovebgPreview1Icon: {
    height: "30.57%",
    width: "63.59%",
    top: "34.72%",
    right: "18.21%",
    bottom: "34.72%",
    left: "18.21%",
    maxWidth: "100%",
    position: "absolute",
  },
  simgeIcon: {
    height: "7.11%",
    width: "15.38%",
    top: "88.39%",
    right: "42.31%",
    left: "42.31%",
    bottom: "4.5%",
    maxWidth: "100%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  backArrow114886331: {
    left: "80.51%",
    top: "83.06%",
    bottom: "12.91%",
    right: "9.23%",
  },
  backArrow114886332: {
    left: "7.95%",
    top: "17.18%",
    bottom: "78.79%",
    right: "81.79%",
  },
  homeIcon: {
    height: "55.3%",
    width: "44.44%",
    right: "33.33%",
    bottom: "44.7%",
    left: "22.22%",
    top: "0%",
    maxWidth: "100%",
    position: "absolute",
  },
  home: {
    top: "65.44%",
  },
  pressable: {
    height: "5.14%",
    width: "13.85%",
    bottom: "2.2%",
    left: "4.36%",
    right: "81.79%",
  },
  pressable1: {
    left: "7.44%",
    right: "86.41%",
    width: "6.15%",
    height: "2.84%",
    bottom: "4.5%",
  },
  profileicon: {
    height: "48.65%",
    width: "46.67%",
    right: "20%",
    bottom: "51.35%",
    left: "33.33%",
    top: "0%",
    maxWidth: "100%",
    position: "absolute",
  },
  profile: {
    top: "59.46%",
  },
  pressable2: {
    height: "4.38%",
    width: "7.69%",
    bottom: "2.25%",
    left: "83.08%",
    right: "9.23%",
  },
  pressable3: {
    left: "85.64%",
    right: "10.77%",
    width: "3.59%",
    height: "2.13%",
    bottom: "4.5%",
  },
  psikolojikUnsurlar1: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default PsikolojikUnsurlar;
