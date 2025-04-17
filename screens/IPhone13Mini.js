import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const IPhone13Mini = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13Mini2}>
      <Image
        style={[styles.vectorIcon, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.iphone13Mini2Child, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-105.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/group9.png")}
      />
      <Text style={styles.antajnAmac}>Şantajın Amacı</Text>
      <Image
        style={[styles.layerX00201Icon, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/layer-x0020-13.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/group10.png")}
      />
      <Image
        style={[styles.g10Icon, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/g101.png")}
      />
      <Pressable
        style={[styles.group, styles.groupShadowBox]}
        onPress={() => navigation.navigate("Frame1")}
      >
        <View style={[styles.groupChild, styles.groupItemShadowBox]} />
        <Text style={[styles.paraTalebi, styles.ntikamTypo]}>Para Talebi</Text>
      </Pressable>
      <Pressable
        style={[styles.group1, styles.groupShadowBox]}
        onPress={() => navigation.navigate("Frame1")}
      >
        <View style={[styles.groupItem, styles.groupItemShadowBox]} />
        <Text style={[styles.ntikam, styles.ntikamTypo]}>İntikam</Text>
      </Pressable>
      <Pressable
        style={[styles.iphone13Mini2Item, styles.groupItemShadowBox]}
        onPress={() => navigation.navigate("Frame1")}
      />
      <Text style={[styles.kontrolVeTaat, styles.ntikamTypo]}>
        Kontrol ve İtaat
      </Text>
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-816.png")}
        />
        <Image
          style={[styles.groupChild1, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/group-305.png")}
        />
        <View style={styles.leonardoWrapper}>
          <Text style={styles.leonardo}>Yakup</Text>
        </View>
      </View>
      <Image
        style={[styles.whatsappImage20240519At2, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/whatsapp-image-20240519-at-2220001.png")}
      />
      <View style={styles.group2}>
        <View style={styles.view}>
          <Text style={[styles.home, styles.homeTypo]}>AnaSayfa</Text>
        </View>
        <View style={[styles.view1, styles.groupChildPosition]}>
          <Image
            style={[styles.profileicon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/profileicon2.png")}
          />
          <Text style={[styles.profile, styles.homeTypo]}>Profil</Text>
        </View>
        <Image
          style={[styles.icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/02.png")}
        />
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("AnaSayfa")}
        >
          <Image
            style={[styles.icon1, styles.iconChildLayout]}
            resizeMode="cover"
            source={require("../assets/041.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={styles.resim1}
        onPress={() => navigation.navigate("Frame")}
      >
        <Image
          style={[styles.icon1, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/resim-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupIconLayout: {
    width: "43.71%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(0, 0, 0, 0.16)",
    width: "43.47%",
    height: "3.94%",
    position: "absolute",
  },
  groupItemShadowBox: {
    borderWidth: 1,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xl,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    position: "absolute",
  },
  ntikamTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    position: "absolute",
  },
  homeTypo: {
    color: Color.colorDarkslategray_300,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    left: "0%",
    position: "absolute",
  },
  groupChildPosition: {
    bottom: "0%",
    right: "0%",
  },
  iconPosition: {
    bottom: "58.14%",
    height: "41.86%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  iphone13Mini2Child: {
    height: "12.01%",
    width: "100.27%",
    top: "87.99%",
    left: "-0.27%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  groupIcon: {
    height: "13.45%",
    top: "65.52%",
    right: "27.6%",
    bottom: "21.03%",
    left: "28.69%",
  },
  antajnAmac: {
    top: "20.44%",
    left: "27.47%",
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    position: "absolute",
  },
  layerX00201Icon: {
    height: "3.13%",
    width: "7.63%",
    top: "2.19%",
    right: "86.32%",
    bottom: "94.68%",
    left: "6.05%",
    position: "absolute",
  },
  groupIcon1: {
    height: "13.82%",
    top: "48.52%",
    right: "28.03%",
    bottom: "37.66%",
    left: "28.27%",
  },
  g10Icon: {
    height: "8.33%",
    width: "19.63%",
    top: "7.88%",
    right: "39.79%",
    bottom: "83.79%",
    left: "40.59%",
    position: "absolute",
  },
  groupChild: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  paraTalebi: {
    left: "19.63%",
    top: "15.63%",
    fontSize: FontSize.size_xl,
  },
  group: {
    top: "38.05%",
    right: "29.87%",
    bottom: "58%",
    left: "26.67%",
  },
  groupItem: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  ntikam: {
    left: "29.45%",
    top: "15.63%",
    fontSize: FontSize.size_xl,
  },
  group1: {
    top: "53.34%",
    right: "28.16%",
    bottom: "42.72%",
    left: "28.37%",
  },
  iphone13Mini2Item: {
    top: "70.09%",
    right: "28%",
    bottom: "25.97%",
    left: "28.53%",
    width: "43.47%",
    height: "3.94%",
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xl,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  kontrolVeTaat: {
    top: "70.7%",
    left: "32.53%",
  },
  groupChild1: {
    height: "84.09%",
    width: "32.29%",
    top: "9.09%",
    right: "64.92%",
    bottom: "6.82%",
    left: "2.8%",
    position: "absolute",
  },
  leonardo: {
    fontSize: FontSize.size_sm,
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  leonardoWrapper: {
    height: "38.64%",
    width: "34.75%",
    top: "32.95%",
    right: "25.42%",
    bottom: "28.41%",
    left: "39.83%",
    position: "absolute",
  },
  vectorParent: {
    height: "5.42%",
    width: "31.47%",
    top: "2.46%",
    right: "2.13%",
    bottom: "92.12%",
    left: "66.4%",
    position: "absolute",
  },
  whatsappImage20240519At2: {
    height: "8.83%",
    width: "16.35%",
    top: "86.77%",
    right: "41.28%",
    bottom: "4.4%",
    left: "42.37%",
    position: "absolute",
  },
  home: {
    top: "0%",
  },
  view: {
    height: "34.88%",
    width: "16.31%",
    top: "59.07%",
    right: "83.69%",
    bottom: "6.05%",
    left: "0%",
    position: "absolute",
  },
  profileicon: {
    width: "46.67%",
    right: "27.67%",
    left: "25.67%",
  },
  profile: {
    top: "65.12%",
  },
  view1: {
    width: "9.06%",
    left: "90.94%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  icon: {
    width: "4.23%",
    right: "2.51%",
    left: "93.26%",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  pressable: {
    left: "4.53%",
    right: "88.22%",
    bottom: "44.19%",
    width: "7.25%",
    height: "55.81%",
    top: "0%",
    position: "absolute",
  },
  group2: {
    height: "5.3%",
    width: "88.27%",
    top: "93.72%",
    right: "6.67%",
    bottom: "0.99%",
    left: "5.07%",
    position: "absolute",
  },
  resim1: {
    top: "83%",
    right: "80.53%",
    bottom: "9.36%",
    width: "19.47%",
    height: "7.64%",
    left: "0%",
    position: "absolute",
  },
  iphone13Mini2: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13Mini;
