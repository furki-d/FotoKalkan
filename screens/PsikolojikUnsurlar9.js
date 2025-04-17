import * as React from "react";
import { Image, StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const PsikolojikUnsurlar9 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.psikolojikUnsurlar32}>
      <Pressable
        style={[styles.layerX00201, styles.layerX00201Layout]}
        onPress={() => navigation.navigate("Men")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/layer-x0020-17.png")}
        />
      </Pressable>
      <Image
        style={styles.psikolojikUnsurlar32Child}
        resizeMode="cover"
        source={require("../assets/group-108.png")}
      />
      <View
        style={[styles.psikolojikUnsurlar32Inner, styles.groupChildLayout1]}
      >
        <View style={[styles.rectangleParent, styles.groupChildLayout1]}>
          <View style={[styles.groupChild, styles.groupChildLayout1]} />
          <Image
            style={[styles.groupItem, styles.groupItemLayout]}
            resizeMode="cover"
            source={require("../assets/group-3023.png")}
          />
          <View style={styles.leonardoWrapper}>
            <Text style={styles.leonardo}>Yakup</Text>
          </View>
        </View>
      </View>
      <View style={styles.simge}>
        <View style={styles.simgeChild} />
        <Image
          style={styles.simge1Icon}
          resizeMode="cover"
          source={require("../assets/simge-1.png")}
        />
      </View>
      <Image
        style={styles.psikolojikUnsurlar32Item}
        resizeMode="cover"
        source={require("../assets/group-73.png")}
      />
      <Text style={styles.etkinlikler}>Eğitici Videolara Erişim Kanalları</Text>
      <View style={styles.rectangleGroup}>
        <View style={[styles.groupInner, styles.groupChildLayout]} />
        <View style={[styles.rectangleView, styles.groupChildLayout]} />
        <View style={[styles.groupChild1, styles.groupChildLayout]} />
        <Image
          style={[styles.facebook5968764Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/facebook-5968764.png")}
        />
        <Image
          style={[styles.facebook5968764Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/facebook-59687642.png")}
        />
        <Image
          style={[styles.twitter5968958Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/twitter-59689581.png")}
        />
        <Image
          style={[styles.instagram2111463Icon, styles.layerX00201Layout]}
          resizeMode="cover"
          source={require("../assets/instagram-21114632.png")}
        />
      </View>
      <View
        style={[styles.psikolojikUnsurlar32Child1, styles.groupChildLayout]}
      />
      <Image
        style={[styles.facebook5968764Icon2, styles.groupItemLayout]}
        resizeMode="cover"
        source={require("../assets/facebook-59687643.png")}
      />
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
          source={require("../assets/home.png")}
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
          source={require("../assets/home.png")}
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
  layerX00201Layout: {
    width: 29,
    position: "absolute",
  },
  groupChildLayout1: {
    height: 44,
    width: 118,
    position: "absolute",
  },
  groupItemLayout: {
    width: 38,
    position: "absolute",
  },
  groupChildLayout: {
    width: 65,
    borderRadius: Border.br_5xl,
    height: 41,
    backgroundColor: Color.colorLavender,
    position: "absolute",
  },
  iconLayout: {
    height: 27,
    width: 27,
    top: 8,
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
    height: 25,
  },
  psikolojikUnsurlar32Child: {
    width: 390,
    height: 107,
    left: 0,
    top: 747,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_3xl,
    backgroundColor: Color.colorWhitesmoke_200,
    top: 0,
    left: 0,
  },
  groupItem: {
    top: 4,
    left: 3,
    height: 37,
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
    top: 0,
    left: 0,
  },
  psikolojikUnsurlar32Inner: {
    top: 31,
    left: 257,
  },
  simgeChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorLavender,
    height: 60,
    width: 60,
    top: 0,
    left: 0,
    position: "absolute",
  },
  simge1Icon: {
    width: 58,
    height: 58,
    top: 0,
    left: 0,
    position: "absolute",
  },
  simge: {
    left: 166,
    height: 60,
    width: 60,
    top: 747,
    position: "absolute",
  },
  psikolojikUnsurlar32Item: {
    top: 48,
    left: 158,
    width: 74,
    height: 71,
    opacity: 0.8,
    position: "absolute",
  },
  etkinlikler: {
    top: 338,
    left: 48,
    fontSize: FontSize.size_xl,
    letterSpacing: 0.2,
    lineHeight: 25,
    fontWeight: "600",
    fontFamily: FontFamily.libreFranklinSemiBold,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    width: 283,
    height: 56,
    position: "absolute",
  },
  groupInner: {
    left: 70,
    top: 0,
  },
  rectangleView: {
    top: 0,
    left: 0,
  },
  groupChild1: {
    left: 140,
    top: 0,
  },
  facebook5968764Icon: {
    left: 159,
  },
  twitter5968958Icon: {
    left: 89,
  },
  instagram2111463Icon: {
    top: 7,
    left: 17,
    borderRadius: Border.br_mini,
    height: 29,
  },
  rectangleGroup: {
    top: 401,
    left: 36,
    width: 204,
    height: 41,
    position: "absolute",
  },
  psikolojikUnsurlar32Child1: {
    top: 402,
    left: 249,
  },
  facebook5968764Icon2: {
    top: 405,
    left: 262,
    height: 34,
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
  psikolojikUnsurlar32: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default PsikolojikUnsurlar9;
