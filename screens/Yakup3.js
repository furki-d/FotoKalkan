import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Yakup3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.yakup31}>
      <Image
        style={[styles.vectorIcon, styles.iconGroupLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={[styles.yakup311, styles.iconPosition]}>
        <Image
          style={[styles.vectorIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/vector3.png")}
        />
        <Image
          style={[styles.arrowBackIos24dpFill0WghtIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-back-ios-24dp-fill0-wght400-grad0-opsz241.png")}
        />
        <View style={[styles.profil, styles.profilPosition]}>
          <View style={[styles.yakup311, styles.iconPosition]}>
            <Image
              style={[styles.vectorIcon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-816.png")}
            />
            <Image
              style={[styles.groupItem, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/group-3013.png")}
            />
            <View style={styles.leonardoWrapper}>
              <Text style={[styles.leonardo, styles.profileTypo]}>Yakup</Text>
            </View>
          </View>
        </View>
        <Image
          style={[styles.yakup31Child, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-131.png")}
        />
        <Image
          style={[styles.twitter5968958Icon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/twitter-5968958.png")}
        />
        <View style={[styles.grup1, styles.grup1Layout]}>
          <Image
            style={[styles.groupIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group28.png")}
          />
          <Text style={[styles.balk1, styles.balk1Typo]}>
            Son Paylaştığım Resimler X
          </Text>
          <Text style={[styles.twitter, styles.twitterTypo]}>X</Text>
          <Text style={[styles.twitter1, styles.twitterTypo]}>X</Text>
        </View>
        <Image
          style={[styles.groupIcon1, styles.grup1Layout]}
          resizeMode="cover"
          source={require("../assets/group29.png")}
        />
        <Text style={styles.balk11}>Son Şüpheli Davranışlar X</Text>
        <Text style={[styles.twitter2, styles.balk1Typo]}>X</Text>
        <Image
          style={[styles.twitterIcon, styles.twitterIconLayout]}
          resizeMode="cover"
          source={require("../assets/twitter.png")}
        />
        <Image
          style={[styles.twitterIcon, styles.twitterIconLayout]}
          resizeMode="cover"
          source={require("../assets/twitter.png")}
        />
        <Image
          style={[styles.twitterIcon2, styles.twitterIconLayout]}
          resizeMode="cover"
          source={require("../assets/twitter1.png")}
        />
        <Image
          style={styles.twitterIcon3}
          resizeMode="cover"
          source={require("../assets/twitter2.png")}
        />
        <Image
          style={styles.twitterIcon3}
          resizeMode="cover"
          source={require("../assets/twitter2.png")}
        />
        <Image
          style={[styles.logoIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/logo4.png")}
        />
        <Image
          style={[styles.yakup31Item, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/group-107.png")}
        />
        <View style={[styles.group, styles.groupLayout]}>
          <View style={[styles.yakup311, styles.iconPosition]}>
            <Image
              style={[styles.profileicon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/profileicon2.png")}
            />
            <Text style={[styles.profile, styles.profileTypo]}>rofil</Text>
          </View>
          <Image
            style={[styles.profileicon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/profileicon2.png")}
          />
        </View>
        <Image
          style={[styles.altlogoIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/altlogo.png")}
        />
        <Image
          style={[styles.layerX00201Icon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/layer-x0020-15.png")}
        />
      </View>
      <Image
        style={[styles.backArrow114886332Icon, styles.iconGroupLayout]}
        resizeMode="cover"
        source={require("../assets/backarrow-11488633-2.png")}
      />
      <Pressable
        style={[styles.anasayfa1, styles.anasayfa1Layout]}
        onPress={() => navigation.navigate("AnaSayfa")}
      >
        <Image
          style={[styles.icon1, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/anasayfa-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.pheliler1, styles.anasayfa1Layout]}
        onPress={() => navigation.navigate("Yakup")}
      >
        <Image
          style={[styles.icon1, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/pheliler-1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.uyuarlar1}
        onPress={() => navigation.navigate("Yakup33")}
      >
        <Image
          style={[styles.icon1, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/uyuarlar-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.twitter5969020Icon, styles.groupLayout]}
        resizeMode="cover"
        source={require("../assets/twitter-5969020.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconGroupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconPosition: {
    left: "0%",
    position: "absolute",
  },
  profilPosition: {
    right: "0%",
    position: "absolute",
  },
  profileTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: "0%",
    position: "absolute",
  },
  grup1Layout: {
    width: "96%",
    position: "absolute",
  },
  balk1Typo: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  twitterTypo: {
    top: "83.82%",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  twitterIconLayout: {
    right: "75.92%",
    width: "18.13%",
    height: "8.6%",
    left: "5.95%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    width: "8.53%",
    position: "absolute",
  },
  anasayfa1Layout: {
    height: "4.68%",
    position: "absolute",
  },
  vectorIcon: {
    left: "0%",
    position: "absolute",
    bottom: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  arrowBackIos24dpFill0WghtIcon: {
    height: "3.69%",
    width: "8%",
    top: "9.85%",
    right: "85.33%",
    bottom: "86.45%",
    left: "6.67%",
    position: "absolute",
  },
  groupItem: {
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
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    top: "0%",
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
  yakup311: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  profil: {
    height: "5.42%",
    width: "31.47%",
    top: "5.42%",
    bottom: "89.16%",
    left: "68.53%",
  },
  yakup31Child: {
    height: "5.05%",
    width: "17.2%",
    top: "24.94%",
    right: "41.41%",
    bottom: "70.01%",
    left: "41.39%",
    position: "absolute",
  },
  twitter5968958Icon: {
    height: "3.33%",
    width: "7.2%",
    top: "25.87%",
    right: "46.53%",
    bottom: "70.8%",
    left: "46.27%",
    position: "absolute",
  },
  groupIcon: {
    height: "79.55%",
    top: "20.45%",
    left: "0%",
    position: "absolute",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  balk1: {
    left: "3.86%",
    top: "0%",
  },
  twitter: {
    left: "11.47%",
  },
  twitter1: {
    left: "52.5%",
  },
  grup1: {
    height: "18.42%",
    top: "34.42%",
    right: "2%",
    bottom: "47.16%",
    left: "2%",
  },
  groupIcon1: {
    height: "14.66%",
    top: "59.36%",
    right: "1.79%",
    bottom: "25.99%",
    left: "2.21%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  balk11: {
    top: "55.64%",
    left: "5.95%",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  twitter2: {
    top: "70.42%",
    left: "13.01%",
  },
  twitterIcon: {
    top: "39.61%",
    bottom: "51.8%",
  },
  twitterIcon2: {
    top: "60.87%",
    bottom: "30.53%",
  },
  twitterIcon3: {
    top: "39.41%",
    right: "37.12%",
    bottom: "52%",
    left: "44.75%",
    width: "18.13%",
    height: "8.6%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  logoIcon: {
    height: "11.92%",
    width: "26.99%",
    top: "8.4%",
    right: "36.51%",
    bottom: "79.68%",
    left: "36.51%",
    position: "absolute",
  },
  yakup31Item: {
    height: "9.82%",
    top: "90.18%",
    left: "0%",
    position: "absolute",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  profileicon: {
    height: "41.86%",
    width: "43.75%",
    bottom: "58.14%",
    left: "56.25%",
    right: "0%",
    position: "absolute",
    top: "0%",
  },
  profile: {
    top: "65.12%",
    fontSize: FontSize.size_xs,
    color: Color.colorDarkslategray_300,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  group: {
    height: "5.3%",
    top: "93.72%",
    right: "8.88%",
    bottom: "0.99%",
    left: "82.59%",
  },
  altlogoIcon: {
    height: "6.07%",
    width: "11.01%",
    top: "88.13%",
    right: "45.39%",
    bottom: "5.8%",
    left: "43.6%",
    position: "absolute",
  },
  layerX00201Icon: {
    height: "3.13%",
    width: "7.63%",
    top: "4.93%",
    right: "88%",
    bottom: "91.95%",
    left: "4.37%",
    position: "absolute",
  },
  backArrow114886332Icon: {
    height: "5.55%",
    width: "12.03%",
    top: "10.22%",
    right: "87.97%",
    bottom: "84.22%",
    left: "0%",
    position: "absolute",
  },
  icon1: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  anasayfa1: {
    left: "4%",
    top: "93.6%",
    right: "83.73%",
    bottom: "1.72%",
    width: "12.27%",
  },
  pheliler1: {
    left: "21.87%",
    top: "93.84%",
    right: "65.07%",
    bottom: "1.48%",
    width: "13.07%",
  },
  uyuarlar1: {
    left: "63.73%",
    top: "94.21%",
    right: "25.49%",
    bottom: "1.58%",
    width: "10.77%",
    height: "4.21%",
    position: "absolute",
  },
  twitter5969020Icon: {
    height: "3.57%",
    top: "25%",
    right: "45.07%",
    bottom: "71.43%",
    left: "46.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  yakup31: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Yakup3;
