import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const PsikolojikUnsurlar3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.psikolojikUnsurlar3}>
      <Image
        style={[styles.clipPathGroup, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/clip-path-group5.png")}
      />
      <Image
        style={[styles.simgeIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/simge1.png")}
      />
      <Image
        style={[styles.psikolojikUnsurlar3Child, styles.image7IconLayout]}
        resizeMode="cover"
        source={require("../assets/group-1407.png")}
      />
      <Text style={[styles.etkinlikler, styles.etkinliklerTypo]}>
        Çevrimiçi Aktiviteler
      </Text>
      <Text style={[styles.etkinlikler1, styles.etkinliklerTypo]}>
        Başarı Hikayeleri
      </Text>
      <Text
        style={[styles.etkinlikler2, styles.etkinliklerTypo]}
      >{`Eğitici Videolar `}</Text>
      <Image
        style={[styles.image6Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-6.png")}
      />
      <Image
        style={[styles.image7Icon, styles.image7IconLayout]}
        resizeMode="cover"
        source={require("../assets/image-7.png")}
      />
      <Pressable
        style={styles.backArrow114886332}
        onPress={() => navigation.navigate("PsikolojikUnsurlar2")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/backarrow-11488633-21.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.pressable, styles.pressablePosition1]}
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
        style={[styles.pressable1, styles.pressablePosition1]}
        onPress={() => navigation.navigate("Profil")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/profileicon5.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.pressable2, styles.pressablePosition]}
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
        style={[styles.pressable3, styles.pressablePosition]}
        onPress={() => navigation.navigate("AnaSayfa")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/041.png")}
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
  image7IconLayout: {
    width: "33.85%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  etkinliklerTypo: {
    textAlign: "center",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.libreFranklinSemiBold,
    fontWeight: "600",
    lineHeight: 25,
    letterSpacing: 0.2,
    fontSize: FontSize.size_xl,
    height: "6.64%",
    width: "33.85%",
    position: "absolute",
  },
  pressablePosition1: {
    top: "93.36%",
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
    top: "92.65%",
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
  simgeIcon: {
    height: "7.11%",
    width: "15.38%",
    top: "88.45%",
    right: "42.03%",
    bottom: "4.44%",
    left: "42.59%",
    position: "absolute",
  },
  psikolojikUnsurlar3Child: {
    height: "10.66%",
    top: "35.07%",
    right: "54.87%",
    bottom: "54.27%",
    left: "11.28%",
  },
  etkinlikler: {
    left: "12.05%",
    top: "46.68%",
    textAlign: "center",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.libreFranklinSemiBold,
    fontWeight: "600",
    lineHeight: 25,
    letterSpacing: 0.2,
    fontSize: FontSize.size_xl,
    height: "6.64%",
  },
  etkinlikler1: {
    left: "57.95%",
    top: "46.68%",
    textAlign: "center",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.libreFranklinSemiBold,
    fontWeight: "600",
    lineHeight: 25,
    letterSpacing: 0.2,
    fontSize: FontSize.size_xl,
    height: "6.64%",
  },
  etkinlikler2: {
    top: "70.85%",
    left: "31.54%",
    textAlign: "center",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.libreFranklinSemiBold,
    fontWeight: "600",
    lineHeight: 25,
    letterSpacing: 0.2,
    fontSize: FontSize.size_xl,
    height: "6.64%",
  },
  image6Icon: {
    height: "10.43%",
    width: "22.56%",
    top: "60.43%",
    right: "40.26%",
    bottom: "29.15%",
    left: "37.18%",
    position: "absolute",
  },
  image7Icon: {
    height: "9.62%",
    top: "36.14%",
    right: "7.69%",
    bottom: "54.24%",
    left: "58.46%",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  backArrow114886332: {
    left: "7.95%",
    top: "17.18%",
    bottom: "78.79%",
    width: "10.26%",
    height: "4.03%",
    right: "81.79%",
    position: "absolute",
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
  pressable: {
    height: "4.38%",
    width: "7.69%",
    right: "9.23%",
    bottom: "2.25%",
    left: "83.08%",
  },
  pressable1: {
    left: "85.64%",
    right: "10.77%",
    width: "3.59%",
    height: "2.13%",
    bottom: "4.5%",
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
  pressable2: {
    height: "5.14%",
    width: "13.85%",
    bottom: "2.2%",
    left: "4.36%",
    right: "81.79%",
  },
  pressable3: {
    left: "7.44%",
    right: "86.41%",
    width: "6.15%",
    height: "2.84%",
    bottom: "4.5%",
  },
  psikolojikUnsurlar3: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default PsikolojikUnsurlar3;
