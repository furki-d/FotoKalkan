import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const Yakup32 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.yakup33}>
      <Image
        style={[styles.vectorIcon, styles.iconGroupLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={[styles.yakup331, styles.yakup331Position]}>
        <Image
          style={[styles.vectorIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/vector3.png")}
        />
        <Image
          style={[styles.groupIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/group31.png")}
        />
        <Image
          style={[styles.arrowBackIos24dpFill0WghtIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-back-ios-24dp-fill0-wght400-grad0-opsz24.png")}
        />
        <View style={[styles.yakup33Inner, styles.icon4Position]}>
          <View style={[styles.yakup331, styles.yakup331Position]}>
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
        <Text style={[styles.balk1, styles.balkTypo]}>
          Facebookta Son Paylaştıklarım
        </Text>
        <Text style={[styles.twitter, styles.twitterTypo]}>Facebook</Text>
        <Image
          style={[styles.yakup33Child, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-141.png")}
        />
        <Image
          style={[styles.facebook5968764Icon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/twitter-5968958.png")}
        />
        <Image
          style={[styles.groupIcon1, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/group32.png")}
        />
        <Text style={[styles.balk11, styles.balkTypo]}>
          Son Şüpheli Davranışlar Facebook
        </Text>
        <Image
          style={[styles.icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/3881.png")}
        />
        <Text style={[styles.twitter1, styles.twitterTypo]}>Facebook</Text>
        <Image
          style={[styles.icon1, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/3882.png")}
        />
        <Text style={[styles.twitter2, styles.groupPosition]}>Facebook</Text>
        <Image
          style={[styles.p865h3102Icon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/306907p865h3102.png")}
        />
        <Image
          style={[styles.logoIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/logo6.png")}
        />
        <Image
          style={[styles.yakup33Item, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/group-107.png")}
        />
        <View style={[styles.group, styles.groupPosition]}>
          <Pressable
            style={[styles.pressable, styles.yakup331Position]}
            onPress={() => navigation.navigate("AnaSayfa")}
          >
            <Image
              style={[styles.homeIcon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/home2.png")}
            />
            <Text style={[styles.home, styles.homeTypo]}>AnaSayfa</Text>
          </Pressable>
          <View style={styles.view}>
            <Image
              style={[styles.cahtIcon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/caht1.png")}
            />
            <Text style={[styles.messages, styles.homeTypo]}>Uyarılar</Text>
          </View>
          <View style={[styles.view1, styles.view1Position]}>
            <Image
              style={[styles.profileicon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/profileicon2.png")}
            />
            <Text style={[styles.profile, styles.homeTypo]}>rofil</Text>
          </View>
          <Image
            style={[styles.icon2, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/home2.png")}
          />
          <Image
            style={[styles.icon3, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/caht1.png")}
          />
          <Image
            style={[styles.icon4, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/021.png")}
          />
        </View>
        <Image
          style={[styles.altlogoIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/altlogo3.png")}
        />
        <Image
          style={[styles.layerX00201Icon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/layer-x0020-16.png")}
        />
      </View>
      <Image
        style={[styles.facebook59687641Icon, styles.iconGroupLayout]}
        resizeMode="cover"
        source={require("../assets/facebook-59687641.png")}
      />
      <Pressable
        style={[styles.backArrow114886332, styles.yakup331Position]}
        onPress={() => navigation.navigate("Yakup5")}
      >
        <Image
          style={[styles.icon5, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/backarrow-11488633-2.png")}
        />
      </Pressable>
      <Pressable
        style={styles.pheliler1}
        onPress={() => navigation.navigate("Yakup")}
      >
        <Image
          style={[styles.icon5, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/pheliler-1.png")}
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
  yakup331Position: {
    left: "0%",
    position: "absolute",
  },
  icon4Position: {
    right: "0%",
    position: "absolute",
  },
  balkTypo: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
  },
  twitterTypo: {
    top: "54.3%",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iconLayout1: {
    left: "7.01%",
    right: "77.12%",
    width: "15.87%",
    height: "9.11%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition: {
    left: "5.07%",
    position: "absolute",
  },
  homeTypo: {
    color: Color.colorDarkslategray_300,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: "0%",
    position: "absolute",
  },
  view1Position: {
    bottom: "0%",
    right: "0%",
  },
  iconLayout: {
    width: "7.44%",
    height: "52.17%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    left: "0%",
    position: "absolute",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  groupIcon: {
    height: "16.13%",
    width: "93.33%",
    top: "42.12%",
    right: "5.07%",
    bottom: "41.75%",
    left: "1.6%",
    position: "absolute",
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
    textAlign: "left",
    color: Color.colorGray,
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
  yakup331: {
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  yakup33Inner: {
    height: "5.42%",
    width: "31.47%",
    top: "5.42%",
    bottom: "89.16%",
    left: "68.53%",
  },
  balk1: {
    top: "37.98%",
    left: "5.65%",
    position: "absolute",
  },
  twitter: {
    left: "5.49%",
  },
  yakup33Child: {
    height: "5.05%",
    width: "17.2%",
    top: "24.94%",
    right: "41.41%",
    bottom: "70.01%",
    left: "41.39%",
    position: "absolute",
  },
  facebook5968764Icon: {
    height: "3.33%",
    width: "7.2%",
    top: "25.8%",
    right: "46.48%",
    bottom: "70.87%",
    left: "46.32%",
    position: "absolute",
  },
  groupIcon1: {
    height: "14.66%",
    width: "96%",
    top: "64.16%",
    right: "2%",
    bottom: "21.18%",
    left: "2%",
    position: "absolute",
  },
  balk11: {
    top: "60.44%",
    left: "5.76%",
    position: "absolute",
  },
  icon: {
    top: "43.98%",
    bottom: "46.91%",
  },
  twitter1: {
    left: "41.07%",
  },
  icon1: {
    top: "65.9%",
    bottom: "24.99%",
  },
  twitter2: {
    top: "75.48%",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
  },
  p865h3102Icon: {
    height: "10.38%",
    width: "16.99%",
    top: "43.35%",
    right: "41.01%",
    bottom: "46.27%",
    left: "42%",
    position: "absolute",
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
  yakup33Item: {
    height: "9.82%",
    top: "90.18%",
    left: "0%",
    position: "absolute",
    bottom: "0%",
    right: "0%",
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
    top: "0%",
  },
  cahtIcon: {
    height: "59.55%",
    width: "54.55%",
    right: "22.73%",
    bottom: "40.45%",
    left: "22.73%",
    top: "0%",
    position: "absolute",
  },
  messages: {
    top: "62.78%",
  },
  view: {
    height: "87.61%",
    width: "13.63%",
    right: "21.6%",
    bottom: "5.87%",
    left: "64.77%",
    top: "6.52%",
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
  view1: {
    height: "93.48%",
    width: "9.92%",
    left: "90.08%",
    top: "6.52%",
    position: "absolute",
  },
  icon2: {
    right: "88.84%",
    bottom: "47.83%",
    left: "3.72%",
    top: "0%",
  },
  icon3: {
    right: "24.7%",
    bottom: "41.3%",
    left: "67.86%",
    top: "6.52%",
  },
  icon4: {
    height: "39.13%",
    width: "4.34%",
    bottom: "54.35%",
    left: "95.66%",
    top: "6.52%",
    right: "0%",
    position: "absolute",
  },
  group: {
    height: "5.67%",
    width: "86.05%",
    top: "93.35%",
    right: "8.88%",
    bottom: "0.99%",
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
  facebook59687641Icon: {
    height: "3.2%",
    width: "7.47%",
    top: "25.86%",
    right: "46.13%",
    bottom: "70.94%",
    left: "46.4%",
    position: "absolute",
  },
  icon5: {
    height: "100%",
    width: "100%",
  },
  backArrow114886332: {
    top: "10.22%",
    right: "87.97%",
    bottom: "84.22%",
    width: "12.03%",
    height: "5.55%",
  },
  pheliler1: {
    left: "21.87%",
    top: "93.84%",
    right: "65.07%",
    bottom: "1.48%",
    width: "13.07%",
    height: "4.68%",
    position: "absolute",
  },
  yakup33: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Yakup32;
