import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Yakup7 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.yakup1}>
      <Image
        style={[styles.vectorIcon, styles.iconGroupLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={[styles.yakup11, styles.yakup1Position]}>
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
        <View style={[styles.yakup1Inner, styles.yakup1Position]}>
          <View style={[styles.yakup11, styles.yakup1Position]}>
            <Image
              style={[styles.vectorIcon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-816.png")}
            />
            <Image
              style={[styles.groupItem, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/group-3016.png")}
            />
            <View style={styles.leonardoWrapper}>
              <Text style={styles.leonardo}>Yakup</Text>
            </View>
          </View>
        </View>
        <Image
          style={[styles.groupIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/group36.png")}
        />
        <View style={styles.sosyalMedyalarnzdanBirGv}>
          <Text
            style={[styles.sosyalMedyalarnzdan, styles.hadiBalayalmTypo]}
          >{`Sosyal medyalarınızdan `}</Text>
          <Text
            style={[styles.birGvenlikIhlali, styles.hadiBalayalmTypo]}
          >{`bir güvenlik ihlali `}</Text>
          <Text
            style={[styles.olduundaBildirimMi, styles.hadiBalayalmTypo]}
          >{`olduğunda bildirim mi `}</Text>
          <Text
            style={[styles.almakIstiyorsunuz, styles.hadiBalayalmTypo]}
          >{`almak istiyorsunuz `}</Text>
          <Text style={[styles.hadiBalayalm, styles.hadiBalayalmTypo]}>
            hadi başlayalım.
          </Text>
        </View>
        <Image
          style={[styles.arrowBackIos24dpFill0WghtIcon1, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-back-ios-24dp-fill0-wght400-grad0-opsz242.png")}
        />
        <Image
          style={[styles.layerX00201Icon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/layer-x0020-16.png")}
        />
        <Image
          style={[styles.yakup1Child, styles.iconGroupLayout]}
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
            <Text style={[styles.profile, styles.homeTypo]}>rofil</Text>
          </View>
          <Pressable
            style={styles.pressable1}
            onPress={() => navigation.navigate("AnaSayfa")}
          >
            <Image
              style={[styles.icon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/home2.png")}
            />
          </Pressable>
          <Image
            style={[styles.icon1, styles.viewPosition]}
            resizeMode="cover"
            source={require("../assets/021.png")}
          />
        </View>
        <Image
          style={[styles.logoIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/logo8.png")}
        />
        <Image
          style={[styles.altlogoIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/altlogo6.png")}
        />
      </View>
      <Pressable
        style={styles.backArrow114886331}
        onPress={() => navigation.navigate("Yakup1")}
      >
        <Image
          style={[styles.icon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/backarrow-11488633-1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.backArrow114886332}
        onPress={() => navigation.navigate("AnaSayfa")}
      >
        <Image
          style={[styles.icon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/backarrow-11488633-2.png")}
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
  yakup1Position: {
    right: "0%",
    position: "absolute",
  },
  hadiBalayalmTypo: {
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  groupLayout: {
    height: "5.67%",
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
  viewPosition: {
    top: "6.52%",
    right: "0%",
    position: "absolute",
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
    right: "86.4%",
    bottom: "86.45%",
    left: "5.6%",
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
  yakup11: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  yakup1Inner: {
    height: "5.42%",
    width: "31.47%",
    top: "3.82%",
    bottom: "90.76%",
    left: "68.53%",
  },
  groupIcon: {
    height: "18.72%",
    width: "73.33%",
    top: "32.88%",
    right: "12%",
    bottom: "48.4%",
    left: "14.67%",
    position: "absolute",
  },
  sosyalMedyalarnzdan: {
    left: "0%",
    top: "0%",
  },
  birGvenlikIhlali: {
    top: "20.16%",
    left: "14.21%",
  },
  olduundaBildirimMi: {
    top: "40.32%",
    left: "4.38%",
  },
  almakIstiyorsunuz: {
    top: "60.48%",
    left: "9.91%",
  },
  hadiBalayalm: {
    top: "80.65%",
    left: "16.01%",
  },
  sosyalMedyalarnzdanBirGv: {
    height: "15.27%",
    width: "62.13%",
    top: "34.73%",
    right: "17.6%",
    bottom: "50%",
    left: "20.27%",
    position: "absolute",
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
  layerX00201Icon: {
    height: "3.13%",
    width: "7.63%",
    top: "4.93%",
    right: "88%",
    bottom: "91.95%",
    left: "4.37%",
    position: "absolute",
  },
  yakup1Child: {
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
    height: "100%",
    width: "100%",
  },
  pressable1: {
    left: "3.72%",
    right: "88.84%",
    bottom: "47.83%",
    width: "7.44%",
    height: "52.17%",
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
  logoIcon: {
    height: "11.92%",
    width: "26.99%",
    top: "8.4%",
    right: "36.51%",
    bottom: "79.68%",
    left: "36.51%",
    position: "absolute",
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
  backArrow114886331: {
    left: "71.2%",
    top: "55.54%",
    right: "14.13%",
    bottom: "37.68%",
    width: "14.67%",
    height: "6.77%",
    position: "absolute",
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
  yakup1: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Yakup7;
