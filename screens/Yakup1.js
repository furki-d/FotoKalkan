import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Yakup1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.yakup2}>
      <Image
        style={[styles.vectorIcon, styles.iconGroupLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={[styles.yakup21, styles.yakup2Position]}>
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
        <View style={[styles.yakup2Inner, styles.yakup2Position]}>
          <View style={[styles.yakup21, styles.yakup2Position]}>
            <Image
              style={[styles.vectorIcon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-816.png")}
            />
            <Image
              style={[styles.groupItem, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/group-3012.png")}
            />
            <View style={styles.leonardoWrapper}>
              <Text style={styles.leonardo}>Yakup</Text>
            </View>
          </View>
        </View>
        <Image
          style={[styles.groupIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/group27.png")}
        />
        <View style={styles.ncelikleIstediinizSosyalMe}>
          <Text
            style={[styles.ncelikleIstediiniz, styles.sosyalMedyalarnzTypo]}
          >{`Öncelikle istediğiniz `}</Text>
          <Text
            style={[styles.sosyalMedyalarnz, styles.sosyalMedyalarnzTypo]}
          >{`sosyal medyalarınız `}</Text>
          <Text style={[styles.uygulamamzaBalayn, styles.sosyalMedyalarnzTypo]}>
            uygulamamıza bağlayın
          </Text>
        </View>
        <Image
          style={[styles.yakup2Child, styles.yakup2Layout]}
          resizeMode="cover"
          source={require("../assets/rectangle-13.png")}
        />
        <Image
          style={[styles.yakup2Item, styles.yakup2Layout]}
          resizeMode="cover"
          source={require("../assets/rectangle-14.png")}
        />
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-15.png")}
        />
        <Image
          style={[styles.facebook5968764Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/google-300221.png")}
        />
        <Image
          style={[styles.twitter5968958Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/google-300221.png")}
        />
        <Image
          style={[styles.arrowBackIos24dpFill0WghtIcon1, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-back-ios-24dp-fill0-wght400-grad0-opsz242.png")}
        />
        <Image
          style={[styles.instagram2111463Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/instagram-2111463.png")}
        />
        <Image
          style={[styles.logoIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/logo5.png")}
        />
        <Image
          style={[styles.yakup2Child1, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/group-107.png")}
        />
        <View style={[styles.group, styles.groupLayout]}>
          <Pressable
            style={styles.pressable}
            onPress={() => navigation.navigate("AnaSayfa")}
          >
            <Image
              style={[styles.homeIcon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/home2.png")}
            />
            <Text style={[styles.home, styles.homeTypo]}>AnaSayfa</Text>
          </Pressable>
          <View style={[styles.view, styles.viewPosition]}>
            <Image
              style={[styles.profileicon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/profileicon2.png")}
            />
            <Text style={[styles.profile, styles.homeTypo]}>Profil</Text>
          </View>
          <Image
            style={[styles.icon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/home2.png")}
          />
          <Image
            style={[styles.icon1, styles.viewPosition]}
            resizeMode="cover"
            source={require("../assets/021.png")}
          />
        </View>
        <Image
          style={[styles.altlogoIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/altlogo1.png")}
        />
        <Image
          style={[styles.layerX00201Icon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/layer-x0020-16.png")}
        />
      </View>
      <Image
        style={[styles.instagram21114631Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/instagram-211146311.png")}
      />
      <Image
        style={[styles.twitter5969020Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/twitter-59690201.png")}
      />
      <Image
        style={[styles.facebook59687641Icon, styles.iconGroupLayout]}
        resizeMode="cover"
        source={require("../assets/facebook-596876411.png")}
      />
      <Pressable
        style={styles.backArrow114886332}
        onPress={() => navigation.navigate("Yakup7")}
      >
        <Image
          style={[styles.icon2, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/backarrow-11488633-2.png")}
        />
      </Pressable>
      <Pressable
        style={styles.backArrow114886331}
        onPress={() => navigation.navigate("Yakup5")}
      >
        <Image
          style={[styles.icon2, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/backarrow-11488633-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconGroupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  yakup2Position: {
    right: "0%",
    position: "absolute",
  },
  sosyalMedyalarnzTypo: {
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  yakup2Layout: {
    bottom: "43.41%",
    top: "52.03%",
    width: "15.55%",
    height: "4.56%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout1: {
    bottom: "44.13%",
    top: "52.87%",
    width: "6.51%",
    height: "3%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    height: "5.67%",
    position: "absolute",
  },
  iconPosition: {
    left: "28.8%",
    right: "63.47%",
  },
  homeTypo: {
    color: Color.colorDarkslategray_300,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: "0%",
    position: "absolute",
  },
  viewPosition: {
    top: "6.52%",
    right: "0%",
    position: "absolute",
  },
  iconLayout: {
    bottom: "43.72%",
    top: "52.71%",
    width: "7.73%",
    height: "3.57%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    top: "0%",
    height: "100%",
    width: "100%",
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
  yakup21: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  yakup2Inner: {
    height: "5.42%",
    width: "31.47%",
    top: "3.82%",
    bottom: "90.76%",
    left: "68.53%",
  },
  groupIcon: {
    height: "13.55%",
    width: "73.33%",
    top: "32.88%",
    right: "12%",
    bottom: "53.57%",
    left: "14.67%",
    position: "absolute",
  },
  ncelikleIstediiniz: {
    left: "6.8%",
    top: "0%",
  },
  sosyalMedyalarnz: {
    top: "33.78%",
    left: "7.88%",
  },
  uygulamamzaBalayn: {
    top: "67.57%",
    left: "0%",
  },
  ncelikleIstediinizSosyalMe: {
    height: "9.11%",
    width: "61.6%",
    top: "33.99%",
    right: "19.2%",
    bottom: "56.9%",
    left: "19.2%",
    position: "absolute",
  },
  yakup2Child: {
    right: "42.11%",
    left: "42.35%",
  },
  yakup2Item: {
    right: "59.04%",
    left: "25.41%",
  },
  rectangleIcon: {
    top: "52.01%",
    right: "25.39%",
    bottom: "43.44%",
    left: "59.07%",
    width: "15.55%",
    height: "4.56%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  facebook5968764Icon: {
    right: "29.92%",
    left: "63.57%",
  },
  twitter5968958Icon: {
    right: "46.75%",
    left: "46.75%",
  },
  arrowBackIos24dpFill0WghtIcon1: {
    width: "12.27%",
    top: "56.9%",
    right: "13.6%",
    bottom: "37.44%",
    left: "74.13%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  instagram2111463Icon: {
    top: "52.5%",
    bottom: "43.93%",
    width: "7.73%",
    height: "3.57%",
    left: "28.8%",
    right: "63.47%",
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
  yakup2Child1: {
    height: "9.82%",
    top: "90.18%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    maxWidth: "100%",
  },
  homeIcon: {
    height: "55.3%",
    width: "44.44%",
    right: "33.33%",
    bottom: "44.7%",
    left: "22.22%",
    top: "0%",
    position: "absolute",
  },
  home: {
    top: "65.44%",
  },
  pressable: {
    height: "94.35%",
    width: "16.73%",
    right: "83.27%",
    bottom: "5.65%",
    left: "0%",
    top: "0%",
    position: "absolute",
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
  },
  view: {
    height: "93.48%",
    width: "9.92%",
    left: "90.08%",
    bottom: "0%",
  },
  icon: {
    height: "52.17%",
    width: "7.44%",
    right: "88.84%",
    bottom: "47.83%",
    left: "3.72%",
    top: "0%",
    position: "absolute",
  },
  icon1: {
    height: "39.13%",
    width: "4.34%",
    bottom: "54.35%",
    left: "95.66%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  group: {
    width: "86.05%",
    top: "93.35%",
    right: "8.88%",
    bottom: "0.99%",
    left: "5.07%",
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
  instagram21114631Icon: {
    left: "28.8%",
    right: "63.47%",
  },
  twitter5969020Icon: {
    right: "46.13%",
    left: "46.13%",
  },
  facebook59687641Icon: {
    height: "3.2%",
    width: "6.93%",
    top: "52.83%",
    right: "29.6%",
    bottom: "43.97%",
    left: "63.47%",
    position: "absolute",
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  backArrow114886332: {
    top: "10.22%",
    right: "87.97%",
    bottom: "84.22%",
    width: "12.03%",
    height: "5.55%",
    left: "0%",
    position: "absolute",
  },
  backArrow114886331: {
    left: "71.2%",
    top: "55.54%",
    right: "14.13%",
    bottom: "37.68%",
    width: "14.67%",
    height: "6.77%",
    position: "absolute",
  },
  yakup2: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Yakup1;
