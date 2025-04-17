import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const IPhone13Mini1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13Mini4}>
      <Image
        style={[styles.vectorIcon, styles.iconItemLayout]}
        resizeMode="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconItemLayout]}
        resizeMode="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={[styles.iphone13Mini4Child, styles.iconItemLayout]}
        resizeMode="cover"
        source={require("../assets/group-105.png")}
      />
      <Text style={[styles.antajnAmac, styles.antajnAmacFlexBox]}>
        Şantajın Amacı
      </Text>
      <Image
        style={[styles.arrowBackIos24dpFill0WghtIcon, styles.iconItemLayout]}
        resizeMode="cover"
        source={require("../assets/arrow-back-ios-24dp-fill0-wght400-grad0-opsz241.png")}
      />
      <Image
        style={[styles.layerX00201Icon, styles.iconItemLayout]}
        resizeMode="cover"
        source={require("../assets/layer-x0020-14.png")}
      />
      <Image
        style={[styles.g10Icon, styles.iconItemLayout]}
        resizeMode="cover"
        source={require("../assets/g103.png")}
      />
      <Text style={[styles.ikayetinizAlnmtr, styles.antajnAmacFlexBox]}>
        Şikayetiniz alınmıştır.
      </Text>
      <Image
        style={[styles.iphone13Mini4Item, styles.iconItemLayout]}
        resizeMode="cover"
        source={require("../assets/group-1402.png")}
      />
      <View style={styles.group}>
        <View style={[styles.view, styles.viewPosition]}>
          <Text style={[styles.home, styles.homeTypo]}>AnaSayfa</Text>
        </View>
        <View style={[styles.view1, styles.view1Position]}>
          <Image
            style={[styles.profileicon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/profileicon3.png")}
          />
          <Text style={[styles.profile, styles.homeTypo]}>Profil</Text>
        </View>
        <Image
          style={[styles.icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/profileicon3.png")}
        />
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("AnaSayfa")}
        >
          <Image
            style={[styles.icon1, styles.iconItemLayout]}
            resizeMode="cover"
            source={require("../assets/042.png")}
          />
        </Pressable>
      </View>
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon, styles.iconItemLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-8162.png")}
        />
        <Image
          style={[styles.groupItem, styles.iconItemLayout]}
          resizeMode="cover"
          source={require("../assets/group-307.png")}
        />
        <View style={styles.leonardoWrapper}>
          <Text style={styles.leonardo}>Yakup</Text>
        </View>
      </View>
      <Image
        style={[styles.whatsappImage20240519At2, styles.iconItemLayout]}
        resizeMode="cover"
        source={require("../assets/whatsapp-image-20240519-at-2220003.png")}
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
  antajnAmacFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  viewPosition: {
    left: "0%",
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
  view1Position: {
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
    position: "absolute",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  iphone13Mini4Child: {
    height: "12.01%",
    width: "100.27%",
    top: "87.99%",
    left: "-0.27%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  antajnAmac: {
    top: "19.33%",
    left: "27.47%",
    fontSize: FontSize.size_6xl,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
  },
  arrowBackIos24dpFill0WghtIcon: {
    height: "3.69%",
    width: "8%",
    top: "8.25%",
    right: "82.13%",
    bottom: "88.05%",
    left: "9.87%",
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
  g10Icon: {
    height: "8.33%",
    width: "19.63%",
    top: "7.88%",
    right: "39.79%",
    bottom: "83.79%",
    left: "40.59%",
    position: "absolute",
  },
  ikayetinizAlnmtr: {
    top: "32.88%",
    left: "25.07%",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoRegular,
  },
  iphone13Mini4Item: {
    height: "28.04%",
    width: "37.17%",
    top: "37.94%",
    right: "29.41%",
    bottom: "34.01%",
    left: "33.41%",
    opacity: 0.87,
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
    maxWidth: "100%",
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
  group: {
    height: "5.3%",
    width: "88.27%",
    top: "93.72%",
    right: "6.67%",
    bottom: "0.99%",
    left: "5.07%",
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
    top: "3.82%",
    right: "2.13%",
    bottom: "90.76%",
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
  iphone13Mini4: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13Mini1;
