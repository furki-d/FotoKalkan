import * as React from "react";
import { Image, StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PsikolojikUnsurlar10 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.psikolojikUnsurlar31}>
      <Pressable
        style={styles.layerX00201}
        onPress={() => navigation.navigate("Men")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/layer-x0020-17.png")}
        />
      </Pressable>
      <Image
        style={styles.psikolojikUnsurlar31Child}
        resizeMode="cover"
        source={require("../assets/group-108.png")}
      />
      <View style={[styles.psikolojikUnsurlar31Inner, styles.groupChildLayout]}>
        <View style={[styles.rectangleParent, styles.childPosition]}>
          <View style={[styles.groupChild, styles.childPosition]} />
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/group-3019.png")}
          />
          <View style={styles.leonardoWrapper}>
            <Text style={styles.leonardo}>Yakup</Text>
          </View>
        </View>
      </View>
      <View style={[styles.simge, styles.simgeLayout]}>
        <View style={[styles.simgeChild, styles.simgeLayout]} />
        <Image
          style={[styles.simge1Icon, styles.childPosition]}
          resizeMode="cover"
          source={require("../assets/simge-1.png")}
        />
      </View>
      <Image
        style={styles.psikolojikUnsurlar31Item}
        resizeMode="cover"
        source={require("../assets/group-71.png")}
      />
      <Text style={styles.etkinlikler}>Çevrimiçi Aktiviteler</Text>
      <Text style={[styles.etkinlikler1, styles.etkinliklerTypo]}>
        Eğitim Seminerleri
      </Text>
      <Text style={[styles.etkinlikler2, styles.etkinliklerTypo]}>
        Canlı Sohbetler
      </Text>
      <Pressable
        style={styles.backArrow114886332}
        onPress={() => navigation.navigate("PsikolojikUnsurlar3")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/backarrow-11488633-21.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.pressable, styles.pressablePosition1]}
        onPress={() => navigation.navigate("AnaSayfa")}
      >
        <Image
          style={[styles.homeIcon, styles.homeIconPosition]}
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
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/041.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.pressable2, styles.pressablePosition]}
        onPress={() => navigation.navigate("Profil")}
      >
        <Image
          style={[styles.profileicon, styles.homeIconPosition]}
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
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/profileicon5.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 44,
    width: 118,
    position: "absolute",
  },
  childPosition: {
    top: 0,
    left: 0,
  },
  simgeLayout: {
    height: 60,
    width: 60,
    position: "absolute",
  },
  etkinliklerTypo: {
    width: 132,
    left: 129,
    height: 56,
    textAlign: "center",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.libreFranklinSemiBold,
    fontWeight: "600",
    lineHeight: 25,
    letterSpacing: 0.2,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  pressablePosition1: {
    top: "92.65%",
    position: "absolute",
  },
  homeIconPosition: {
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homeTypo: {
    color: Color.colorDarkslategray_300,
    fontSize: FontSize.size_xs,
    left: "0%",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  pressablePosition: {
    top: "93.36%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  layerX00201: {
    left: 16,
    top: 40,
    width: 29,
    height: 25,
    position: "absolute",
  },
  psikolojikUnsurlar31Child: {
    width: 390,
    height: 107,
    left: 0,
    top: 747,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_3xl,
    backgroundColor: Color.colorWhitesmoke_200,
    height: 44,
    width: 118,
    position: "absolute",
  },
  groupItem: {
    top: 4,
    left: 3,
    width: 38,
    height: 37,
    position: "absolute",
  },
  leonardo: {
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    color: Color.colorGray,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    width: 59,
    top: 0,
    left: 0,
    position: "absolute",
  },
  leonardoWrapper: {
    top: 14,
    left: 47,
    height: 16,
    width: 59,
    position: "absolute",
  },
  rectangleParent: {
    height: 44,
    width: 118,
    position: "absolute",
  },
  psikolojikUnsurlar31Inner: {
    top: 31,
    left: 257,
  },
  simgeChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorLavender,
    top: 0,
    left: 0,
  },
  simge1Icon: {
    width: 58,
    height: 58,
    position: "absolute",
  },
  simge: {
    left: 166,
    top: 747,
    height: 60,
    width: 60,
  },
  psikolojikUnsurlar31Item: {
    top: 48,
    left: 158,
    width: 74,
    height: 71,
    opacity: 0.8,
    position: "absolute",
  },
  etkinlikler: {
    top: 143,
    left: 50,
    width: 283,
    height: 56,
    textAlign: "center",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.libreFranklinSemiBold,
    fontWeight: "600",
    lineHeight: 25,
    letterSpacing: 0.2,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  etkinlikler1: {
    top: 342,
  },
  etkinlikler2: {
    top: 467,
  },
  icon1: {
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
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
  homeIcon: {
    height: "55.3%",
    width: "44.44%",
    right: "33.33%",
    bottom: "44.7%",
    left: "22.22%",
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
  },
  profile: {
    top: "59.46%",
  },
  pressable2: {
    height: "4.38%",
    width: "7.69%",
    right: "9.23%",
    bottom: "2.25%",
    left: "83.08%",
  },
  pressable3: {
    left: "85.64%",
    right: "10.77%",
    width: "3.59%",
    height: "2.13%",
    bottom: "4.5%",
  },
  psikolojikUnsurlar31: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default PsikolojikUnsurlar10;
