import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Yakup33 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.yakup34}>
      <Image
        style={[styles.vectorIcon, styles.iconItemLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={[styles.yakup341, styles.yakup341Position]}>
        <Image
          style={[styles.vectorIcon, styles.iconItemLayout]}
          resizeMode="cover"
          source={require("../assets/vector3.png")}
        />
        <Image
          style={[styles.arrowBackIos24dpFill0WghtIcon, styles.iconItemLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-back-ios-24dp-fill0-wght400-grad0-opsz241.png")}
        />
        <View style={styles.yakup34Inner}>
          <View style={[styles.yakup341, styles.yakup341Position]}>
            <Image
              style={[styles.vectorIcon, styles.iconItemLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-816.png")}
            />
            <Image
              style={[styles.groupItem, styles.iconItemLayout]}
              resizeMode="cover"
              source={require("../assets/group-3012.png")}
            />
            <View style={styles.leonardoWrapper}>
              <Text style={[styles.leonardo, styles.uyarFlexBox]}>Yakup</Text>
            </View>
          </View>
        </View>
        <Text style={[styles.today, styles.todayTypo]}>Dün</Text>
        <Text style={[styles.uyar, styles.uyarFlexBox]}>Uyarılar</Text>
        <View style={[styles.yakup34Child, styles.groupViewPosition]}>
          <View style={[styles.yakup341, styles.yakup341Position]}>
            <Image
              style={[styles.vectorIcon, styles.iconItemLayout]}
              resizeMode="cover"
              source={require("../assets/group33.png")}
            />
            <View style={[styles.yaz, styles.yazPosition]}>
              <Text
                style={[styles.leonardo, styles.uyarFlexBox]}
              >{`İnstagram 15 mayısta paylaştığın `}</Text>
              <Text style={[styles.resmineErenTarafndan, styles.uyarFlexBox]}>
                resmine Eren tarafından yorum yapıldı.
              </Text>
            </View>
            <Text style={[styles.saat, styles.saatTypo]}>9:24</Text>
          </View>
        </View>
        <View style={[styles.groupView, styles.groupViewPosition]}>
          <View style={[styles.yakup341, styles.yakup341Position]}>
            <Image
              style={[styles.vectorIcon, styles.iconItemLayout]}
              resizeMode="cover"
              source={require("../assets/group33.png")}
            />
            <View style={[styles.yaz1, styles.yazPosition]}>
              <Text
                style={[styles.leonardo, styles.uyarFlexBox]}
              >{`X' Paylaştığın resmin Furkan tarafından `}</Text>
              <Text style={[styles.resmineErenTarafndan, styles.uyarFlexBox]}>
                19 mayıs tarihinde tekrardan paylaşıldı.
              </Text>
            </View>
            <Text style={[styles.saat1, styles.saatTypo]}>20:46</Text>
          </View>
        </View>
        <Text style={[styles.today1, styles.todayTypo]}>Bugün</Text>
        <Image
          style={[styles.logoIcon, styles.iconItemLayout]}
          resizeMode="cover"
          source={require("../assets/logo6.png")}
        />
        <Image
          style={[styles.robot3558860Icon, styles.robot3558860IconLayout]}
          resizeMode="cover"
          source={require("../assets/robot-3558860.png")}
        />
        <Image
          style={[styles.robot3558860Icon1, styles.robot3558860IconLayout]}
          resizeMode="cover"
          source={require("../assets/robot-35588601.png")}
        />
        <Image
          style={[styles.yakup34Item, styles.iconItemLayout]}
          resizeMode="cover"
          source={require("../assets/group-107.png")}
        />
        <View style={styles.group}>
          <Pressable
            style={[styles.pressable, styles.yakup341Position]}
            onPress={() => navigation.navigate("AnaSayfa")}
          >
            <Image
              style={[styles.homeIcon, styles.iconItemLayout]}
              resizeMode="cover"
              source={require("../assets/home2.png")}
            />
            <Text style={[styles.home, styles.homeTypo]}>AnaSayfa</Text>
          </Pressable>
          <View style={[styles.view, styles.viewPosition]}>
            <Image
              style={[styles.profileicon, styles.iconItemLayout]}
              resizeMode="cover"
              source={require("../assets/profileicon2.png")}
            />
            <Text style={[styles.profile, styles.homeTypo]}>profil</Text>
          </View>
          <Image
            style={[styles.icon, styles.iconItemLayout]}
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
          style={[styles.altlogoIcon, styles.iconItemLayout]}
          resizeMode="cover"
          source={require("../assets/altlogo3.png")}
        />
        <Image
          style={[styles.layerX00201Icon, styles.iconItemLayout]}
          resizeMode="cover"
          source={require("../assets/layer-x0020-16.png")}
        />
      </View>
      <Pressable
        style={[styles.backArrow114886332, styles.yakup341Position]}
        onPress={() => navigation.navigate("Yakup5")}
      >
        <Image
          style={[styles.icon2, styles.iconItemLayout]}
          resizeMode="cover"
          source={require("../assets/backarrow-11488633-2.png")}
        />
      </Pressable>
      <Pressable
        style={styles.pheliler1}
        onPress={() => navigation.navigate("Yakup")}
      >
        <Image
          style={[styles.icon2, styles.iconItemLayout]}
          resizeMode="cover"
          source={require("../assets/pheliler-1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.uyuarlar1}
        onPress={() => navigation.navigate("Yakup33")}
      >
        <Image
          style={[styles.icon2, styles.iconItemLayout]}
          resizeMode="cover"
          source={require("../assets/uyuarlar-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconItemLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  yakup341Position: {
    left: "0%",
    position: "absolute",
  },
  uyarFlexBox: {
    textAlign: "left",
    color: Color.colorGray,
    position: "absolute",
  },
  todayTypo: {
    color: Color.colorSlategray,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  groupViewPosition: {
    left: "14.67%",
    right: "6.93%",
    width: "78.4%",
    height: "8%",
    position: "absolute",
  },
  yazPosition: {
    left: "3.4%",
    height: "56.92%",
    position: "absolute",
  },
  saatTypo: {
    fontSize: FontSize.size_xs,
    top: "72.31%",
    color: Color.colorSlategray,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  robot3558860IconLayout: {
    width: "8.67%",
    height: "5.02%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
    position: "absolute",
    bottom: "0%",
    right: "0%",
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
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    color: Color.colorGray,
    left: "0%",
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
  yakup341: {
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  yakup34Inner: {
    height: "5.42%",
    width: "31.47%",
    top: "5.42%",
    bottom: "89.16%",
    left: "68.53%",
    right: "0%",
    position: "absolute",
  },
  today: {
    top: "32.81%",
    left: "39.28%",
  },
  uyar: {
    top: "23.3%",
    left: "11.81%",
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  resmineErenTarafndan: {
    top: "54.05%",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    color: Color.colorGray,
    left: "0%",
  },
  yaz: {
    top: "11.69%",
    right: "10.54%",
    bottom: "31.38%",
    width: "86.05%",
  },
  saat: {
    left: "87.07%",
  },
  yakup34Child: {
    top: "38.79%",
    bottom: "53.2%",
  },
  yaz1: {
    width: "87.07%",
    top: "16.31%",
    right: "9.52%",
    bottom: "26.77%",
  },
  saat1: {
    left: "83.67%",
  },
  groupView: {
    top: "52.71%",
    bottom: "39.29%",
  },
  today1: {
    top: "49.06%",
    left: "37.31%",
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
  robot3558860Icon: {
    top: "38.28%",
    right: "87.2%",
    bottom: "56.7%",
    left: "4.13%",
  },
  robot3558860Icon1: {
    top: "51.69%",
    right: "87.73%",
    bottom: "43.29%",
    left: "3.6%",
  },
  yakup34Item: {
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
  profileicon: {
    height: "41.86%",
    width: "43.75%",
    bottom: "58.14%",
    left: "56.25%",
    right: "0%",
    top: "0%",
    position: "absolute",
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
    height: "5.67%",
    top: "93.35%",
    right: "8.88%",
    bottom: "0.99%",
    left: "5.07%",
    width: "86.05%",
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
  layerX00201Icon: {
    height: "3.13%",
    width: "7.63%",
    top: "4.93%",
    right: "88%",
    bottom: "91.95%",
    left: "4.37%",
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
  uyuarlar1: {
    left: "63.73%",
    top: "94.21%",
    right: "25.49%",
    bottom: "1.58%",
    width: "10.77%",
    height: "4.21%",
    position: "absolute",
  },
  yakup34: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Yakup33;
