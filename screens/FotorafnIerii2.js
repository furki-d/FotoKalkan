import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const FotorafnIerii2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.fotorafnIerii2}>
      <Image
        style={[styles.vectorIcon, styles.iconItemLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <View style={styles.fotorafnIerii21}>
        <Image
          style={[styles.vectorIcon1, styles.iconItemLayout]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={[styles.fotorafnIerii2Child, styles.view2Position]}
          resizeMode="cover"
          source={require("../assets/group-140.png")}
        />
        <Image
          style={[styles.fotorafnIerii2Item, styles.iconItemLayout]}
          resizeMode="cover"
          source={require("../assets/group-1404.png")}
        />
        <View style={[styles.groupParent, styles.groupParentPosition]}>
          <Image
            style={[styles.vectorIcon, styles.iconItemLayout]}
            resizeMode="cover"
            source={require("../assets/group.png")}
          />
          <View style={styles.group}>
            <View style={styles.view}>
              <Text style={[styles.calendar, styles.profileTypo]}>
                Şilkayetlerim
              </Text>
            </View>
            <View style={[styles.view1, styles.viewLayout]}>
              <Image
                style={[styles.cahtIcon, styles.iconItemLayout]}
                resizeMode="cover"
                source={require("../assets/caht.png")}
              />
              <Text style={[styles.messages, styles.profileTypo]}>
                mesjlarım
              </Text>
            </View>
            <View style={[styles.view2, styles.view2Position]}>
              <Image
                style={[styles.profileicon, styles.iconItemLayout]}
                resizeMode="cover"
                source={require("../assets/profileicon4.png")}
              />
              <Text style={[styles.profile, styles.profileTypo]}>profil</Text>
            </View>
            <View style={[styles.view3, styles.viewLayout]}>
              <Text style={[styles.calendar, styles.profileTypo]}>
                AnaSayfa
              </Text>
            </View>
            <View style={styles.view}>
              <Text style={[styles.calendar, styles.profileTypo]}>
                Şilkayetlerim
              </Text>
            </View>
            <View style={[styles.view1, styles.viewLayout]}>
              <Image
                style={[styles.cahtIcon, styles.iconItemLayout]}
                resizeMode="cover"
                source={require("../assets/caht.png")}
              />
              <Text style={[styles.messages, styles.profileTypo]}>
                mesjlarım
              </Text>
            </View>
            <View style={[styles.view2, styles.view2Position]}>
              <Image
                style={[styles.profileicon, styles.iconItemLayout]}
                resizeMode="cover"
                source={require("../assets/profileicon4.png")}
              />
              <Text style={[styles.profile, styles.profileTypo]}>profil</Text>
            </View>
          </View>
        </View>
        <Image
          style={[styles.fotorafnIerii2Inner, styles.iconItemLayout]}
          resizeMode="cover"
          source={require("../assets/group-10.png")}
        />
        <Image
          style={[styles.fotorafnIerii2Child1, styles.iconItemLayout]}
          resizeMode="cover"
          source={require("../assets/group-9.png")}
        />
        <Image
          style={[styles.fotorafnIerii2Child2, styles.groupParentPosition]}
          resizeMode="cover"
          source={require("../assets/group-121.png")}
        />
        <Image
          style={[styles.fotorafnIerii2Child3, styles.iconItemLayout]}
          resizeMode="cover"
          source={require("../assets/group-7.png")}
        />
        <Image
          style={[styles.fotorafnIerii2Child3, styles.iconItemLayout]}
          resizeMode="cover"
          source={require("../assets/group-7.png")}
        />
        <Text style={[styles.profile2, styles.profile2Typo]}>rofil</Text>
        <Pressable
          style={styles.home1}
          onPress={() => navigation.navigate("AnaSayfa")}
        >
          <Text style={[styles.anasayfa, styles.profile2Typo]}>AnaSayfa</Text>
        </Pressable>
        <Text style={[styles.calendar2, styles.profile2Typo]}>
          Şikayetlerim
        </Text>
        <Text style={[styles.messages2, styles.profile2Typo]}>Mesajlarım</Text>
        <Text style={[styles.talebinizAlnmtr, styles.profile2Typo]}>
          {" "}
          Talebiniz alınmıştır.
        </Text>
        <View style={styles.enKsaSredeTalebinizDeer}>
          <Text
            style={[styles.enKsaSrede, styles.enKsaSredeTypo]}
          >{` En kısa sürede talebiniz değerlendirilip geri `}</Text>
          <Text style={[styles.dnYaplacaktr, styles.enKsaSredeTypo]}>
            dönüş yapılacaktır.
          </Text>
        </View>
        <Image
          style={[styles.layerX00201Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/layer-x0020-1.png")}
        />
        <View style={styles.groupView}>
          <View style={styles.vectorParent}>
            <Image
              style={[styles.vectorIcon, styles.iconItemLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-816.png")}
            />
            <Image
              style={[styles.groupItem, styles.iconItemLayout]}
              resizeMode="cover"
              source={require("../assets/group-3017.png")}
            />
            <View style={styles.leonardoWrapper}>
              <Text style={[styles.leonardo, styles.profileTypo]}>Yakup</Text>
            </View>
          </View>
        </View>
        <Image
          style={[styles.arrowBackIos24dpFill0WghtIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/arrow-back-ios-24dp-fill0-wght400-grad0-opsz24.png")}
        />
      </View>
      <Pressable
        style={styles.backArrow114886332}
        onPress={() => navigation.navigate("FotorafnIerii1")}
      >
        <Image
          style={[styles.icon, styles.iconItemLayout]}
          resizeMode="cover"
          source={require("../assets/backarrow-11488633-2.png")}
        />
      </Pressable>
      <Image
        style={[styles.homeIcon, styles.iconItemLayout]}
        resizeMode="cover"
        source={require("../assets/home.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconItemLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  view2Position: {
    bottom: "8.28%",
    right: "0%",
    position: "absolute",
  },
  groupParentPosition: {
    top: "87.46%",
    position: "absolute",
  },
  profileTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: "0%",
    position: "absolute",
  },
  viewLayout: {
    width: "16.42%",
    position: "absolute",
  },
  profile2Typo: {
    color: Color.colorDarkslategray_300,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  enKsaSredeTypo: {
    color: Color.colorDimgray,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iconPosition: {
    right: "88.46%",
    maxHeight: "100%",
    maxWidth: "100%",
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
  vectorIcon1: {
    height: "98.89%",
    bottom: "1.11%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  fotorafnIerii2Child: {
    height: "73.67%",
    top: "18.04%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    left: "0%",
    width: "100%",
  },
  fotorafnIerii2Item: {
    height: "26.68%",
    width: "35.74%",
    top: "36.1%",
    right: "32.13%",
    bottom: "37.22%",
    left: "32.13%",
    opacity: 0.87,
    position: "absolute",
  },
  calendar: {
    color: Color.colorWhitesmoke_100,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    top: "0%",
  },
  view: {
    width: "21.9%",
    top: "58.39%",
    right: "56.14%",
    bottom: "8.05%",
    left: "21.96%",
    height: "33.56%",
    position: "absolute",
  },
  cahtIcon: {
    height: "53.69%",
    width: "44.44%",
    right: "28.15%",
    bottom: "46.31%",
    left: "27.41%",
    top: "0%",
    position: "absolute",
  },
  messages: {
    top: "66.44%",
    color: Color.colorWhitesmoke_100,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
  },
  view1: {
    right: "20.92%",
    left: "62.65%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  profileicon: {
    height: "43.9%",
    width: "44.03%",
    bottom: "56.1%",
    left: "55.97%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  profile: {
    top: "63.41%",
    color: Color.colorWhitesmoke_100,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
  },
  view2: {
    height: "91.72%",
    width: "9.67%",
    left: "90.33%",
    top: "0%",
  },
  view3: {
    top: "59.51%",
    right: "83.58%",
    bottom: "6.94%",
    height: "33.56%",
    left: "0%",
  },
  group: {
    height: "41.78%",
    width: "84.31%",
    top: "25.05%",
    right: "10.05%",
    bottom: "33.18%",
    left: "5.64%",
    position: "absolute",
  },
  groupParent: {
    height: "12.54%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  fotorafnIerii2Inner: {
    height: "4.25%",
    width: "9.51%",
    top: "89.58%",
    right: "65.41%",
    bottom: "6.16%",
    left: "25.08%",
    position: "absolute",
  },
  fotorafnIerii2Child1: {
    height: "3.82%",
    width: "8.92%",
    top: "89.81%",
    right: "22.82%",
    bottom: "6.37%",
    left: "68.26%",
    position: "absolute",
  },
  fotorafnIerii2Child2: {
    height: "7.78%",
    width: "14.79%",
    right: "42.62%",
    bottom: "4.76%",
    left: "42.59%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  fotorafnIerii2Child3: {
    height: "8.3%",
    width: "19.05%",
    top: "5.62%",
    right: "40.46%",
    bottom: "86.08%",
    left: "40.49%",
    opacity: 0.8,
    position: "absolute",
  },
  profile2: {
    top: "93.83%",
    left: "80.92%",
    fontSize: FontSize.size_xs,
    color: Color.colorDarkslategray_300,
    position: "absolute",
  },
  anasayfa: {
    fontSize: FontSize.size_xs,
    color: Color.colorDarkslategray_300,
  },
  home1: {
    left: "2.44%",
    top: "93.94%",
    position: "absolute",
  },
  calendar2: {
    top: "94.67%",
    left: "20.46%",
    fontSize: FontSize.size_xs,
    color: Color.colorDarkslategray_300,
    position: "absolute",
  },
  messages2: {
    top: "94.9%",
    left: "64.36%",
    fontSize: FontSize.size_xs,
    color: Color.colorDarkslategray_300,
    position: "absolute",
  },
  talebinizAlnmtr: {
    top: "29.88%",
    left: "21.79%",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  enKsaSrede: {
    left: "0%",
    top: "0%",
  },
  dnYaplacaktr: {
    top: "50%",
    left: "26.72%",
  },
  enKsaSredeTalebinizDeer: {
    height: "4.22%",
    width: "78.97%",
    top: "66.2%",
    right: "8.21%",
    bottom: "29.58%",
    left: "12.82%",
    position: "absolute",
  },
  layerX00201Icon: {
    height: "2.98%",
    width: "7.33%",
    top: "4.69%",
    bottom: "92.34%",
    left: "4.21%",
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
  vectorParent: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  groupView: {
    height: "5.16%",
    width: "30.26%",
    top: "3.63%",
    right: "3.85%",
    bottom: "91.21%",
    left: "65.9%",
    position: "absolute",
  },
  arrowBackIos24dpFill0WghtIcon: {
    height: "3.51%",
    width: "7.69%",
    top: "13.59%",
    bottom: "82.89%",
    left: "3.85%",
  },
  fotorafnIerii21: {
    height: "101.13%",
    bottom: "-1.13%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backArrow114886332: {
    top: "9.83%",
    right: "88.44%",
    bottom: "84.82%",
    width: "11.56%",
    height: "5.34%",
    left: "0%",
    position: "absolute",
  },
  homeIcon: {
    height: "2.84%",
    width: "6.15%",
    top: "91.94%",
    right: "87.69%",
    bottom: "5.21%",
    left: "6.15%",
    position: "absolute",
  },
  fotorafnIerii2: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default FotorafnIerii2;
