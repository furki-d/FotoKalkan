import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Twitter = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.twitter}>
      <Image
        style={[styles.vectorIcon, styles.iconGroupLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={[styles.twitter1, styles.groupPosition1]}>
        <Image
          style={[styles.vectorIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/vector3.png")}
        />
        <View style={[styles.group, styles.groupPosition]}>
          <Text style={styles.twtter}>Twıtter</Text>
        </View>
        <Text style={[styles.zorbalaUradnzTarih, styles.leonardoTypo]}>
          Zorbalığa Uğradığınız Tarih :
        </Text>
        <Text style={[styles.zorbalkTanm, styles.leonardoTypo]}>
          Zorbalık Tanımı :
        </Text>
        <Text style={[styles.olayaDairEkran, styles.leonardoTypo]}>
          Olaya Dair Ekran Görüntüleri :
        </Text>
        <Text style={[styles.szeNaslUlaabiliriz, styles.leonardoTypo]}>
          Sİze Nasıl Ulaşabiliriz :
        </Text>
        <Image
          style={[styles.groupIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/group6.png")}
        />
        <Image
          style={[styles.groupIcon1, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/group20.png")}
        />
        <Pressable
          style={[styles.layerX00201, styles.layerX00201Position]}
          onPress={() => navigation.navigate("Men")}
        >
          <Image
            style={[styles.icon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/layer-x0020-11.png")}
          />
        </Pressable>
        <Pressable
          style={styles.twitterInner}
          onPress={() => navigation.navigate("Profil")}
        >
          <View style={[styles.twitter1, styles.groupPosition1]}>
            <Image
              style={[styles.vectorIcon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-816.png")}
            />
            <Image
              style={[styles.groupItem, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/group-3010.png")}
            />
            <View style={styles.leonardoWrapper}>
              <Text style={[styles.leonardo, styles.leonardoTypo]}>Burak</Text>
            </View>
          </View>
        </Pressable>
        <Image
          style={[styles.groupIcon2, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group4.png")}
        />
        <Image
          style={[styles.groupIcon3, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group4.png")}
        />
        <Image
          style={[styles.groupIcon4, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group4.png")}
        />
        <Image
          style={[styles.groupIcon5, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group4.png")}
        />
        <Image
          style={[
            styles.arrowBackIos24dpFill0WghtIcon,
            styles.layerX00201Position,
          ]}
          resizeMode="cover"
          source={require("../assets/arrow-back-ios-24dp-fill0-wght400-grad0-opsz24.png")}
        />
      </View>
      <View style={[styles.groupParent, styles.groupPosition1]}>
        <Image
          style={[styles.groupInner, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/group-102.png")}
        />
        <View style={styles.group1}>
          <View style={styles.view}>
            <Image
              style={[styles.homeIcon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/home1.png")}
            />
            <Text style={[styles.home, styles.homeTypo]}>AnaSayfa</Text>
          </View>
          <View style={styles.view1}>
            <Image
              style={[styles.calendarIcon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/calendar.png")}
            />
            <Text style={[styles.calendar, styles.homeTypo]}>Şikayetlerim</Text>
          </View>
          <Pressable
            style={styles.pressable}
            onPress={() => navigation.navigate("Mesajlarm")}
          >
            <Image
              style={[styles.cahtIcon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/caht1.png")}
            />
            <Text style={[styles.messages, styles.homeTypo]}>Mesajlar</Text>
          </Pressable>
          <Image
            style={[styles.icon1, styles.icon1Position]}
            resizeMode="cover"
            source={require("../assets/021.png")}
          />
          <Image
            style={[styles.icon2, styles.icon2Position]}
            resizeMode="cover"
            source={require("../assets/home1.png")}
          />
          <Pressable
            style={[styles.pressable1, styles.icon2Position]}
            onPress={() => navigation.navigate("Ikayetlerim")}
          >
            <Image
              style={[styles.icon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/calendar.png")}
            />
          </Pressable>
          <Pressable
            style={styles.icon1Position}
            onPress={() => navigation.navigate("Profil")}
          >
            <Image
              style={[styles.icon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/021.png")}
            />
          </Pressable>
        </View>
        <Image
          style={[styles.groupChild1, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/group-263.png")}
        />
      </View>
      <Text style={[styles.profile, styles.homeTypo]}>profil</Text>
      <Image
        style={[styles.resim202405120215442731Icon, styles.groupPosition]}
        resizeMode="cover"
        source={require("../assets/resim-20240512-021544273-1.png")}
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
  groupPosition1: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupPosition: {
    right: "39.47%",
    position: "absolute",
  },
  leonardoTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  layerX00201Position: {
    left: "2.93%",
    position: "absolute",
  },
  groupIconLayout: {
    left: "17.33%",
    right: "20.53%",
    width: "62.13%",
    height: "5.05%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homeTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorDarkslategray_300,
    position: "absolute",
  },
  icon1Position: {
    left: "95.66%",
    bottom: "55.32%",
    width: "4.34%",
    height: "38.3%",
    top: "6.38%",
    right: "0%",
    position: "absolute",
  },
  icon2Position: {
    bottom: "48.94%",
    width: "7.44%",
    height: "51.06%",
    top: "0%",
    position: "absolute",
  },
  vectorIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  twtter: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    color: Color.colorDarkslategray_300,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  group: {
    height: "2.96%",
    width: "18.93%",
    top: "17.39%",
    bottom: "79.66%",
    left: "41.6%",
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
  },
  zorbalaUradnzTarih: {
    top: "25.36%",
    fontSize: FontSize.size_mini,
    left: "18.93%",
    fontFamily: FontFamily.interRegular,
    color: Color.colorDarkslategray_300,
  },
  zorbalkTanm: {
    top: "39.27%",
    fontSize: FontSize.size_mini,
    left: "18.93%",
    fontFamily: FontFamily.interRegular,
    color: Color.colorDarkslategray_300,
  },
  olayaDairEkran: {
    top: "53.17%",
    fontSize: FontSize.size_mini,
    left: "18.93%",
    fontFamily: FontFamily.interRegular,
    color: Color.colorDarkslategray_300,
  },
  szeNaslUlaabiliriz: {
    top: "66.71%",
    fontSize: FontSize.size_mini,
    left: "18.93%",
    fontFamily: FontFamily.interRegular,
    color: Color.colorDarkslategray_300,
  },
  groupIcon: {
    height: "4.43%",
    width: "9.6%",
    top: "77.96%",
    right: "9.33%",
    bottom: "17.61%",
    left: "81.07%",
    position: "absolute",
  },
  groupIcon1: {
    height: "8.13%",
    width: "17.6%",
    right: "41.07%",
    bottom: "83.87%",
    left: "41.33%",
    top: "8%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  layerX00201: {
    right: "89.44%",
    bottom: "88.87%",
    width: "7.63%",
    height: "3.13%",
    top: "8%",
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
    left: "0%",
    top: "0%",
  },
  leonardoWrapper: {
    height: "38.64%",
    width: "32.2%",
    top: "32.95%",
    right: "27.97%",
    bottom: "28.41%",
    left: "39.83%",
    position: "absolute",
  },
  twitter1: {
    left: "0%",
    top: "0%",
    height: "100%",
  },
  twitterInner: {
    height: "5.42%",
    width: "31.47%",
    top: "3.82%",
    bottom: "90.76%",
    left: "68.53%",
    right: "0%",
    position: "absolute",
  },
  groupIcon2: {
    top: "29.19%",
    bottom: "65.76%",
  },
  groupIcon3: {
    top: "57.02%",
    bottom: "37.93%",
  },
  groupIcon4: {
    top: "70.94%",
    bottom: "24.01%",
  },
  groupIcon5: {
    top: "43.1%",
    bottom: "51.85%",
  },
  arrowBackIos24dpFill0WghtIcon: {
    height: "3.69%",
    width: "8%",
    top: "38.79%",
    right: "89.07%",
    bottom: "57.51%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupInner: {
    height: "75.9%",
    top: "24.1%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
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
    left: "0%",
  },
  view: {
    height: "92.34%",
    width: "16.73%",
    right: "83.27%",
    bottom: "7.66%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  calendarIcon: {
    height: "54.3%",
    width: "34.29%",
    right: "39.29%",
    bottom: "45.7%",
    left: "26.43%",
    top: "0%",
    position: "absolute",
  },
  calendar: {
    top: "66.06%",
    left: "0%",
  },
  view1: {
    height: "94.04%",
    width: "21.69%",
    right: "57.08%",
    bottom: "5.96%",
    left: "21.23%",
    top: "0%",
    position: "absolute",
  },
  cahtIcon: {
    height: "54.55%",
    width: "50%",
    right: "35.42%",
    bottom: "45.45%",
    left: "14.58%",
    top: "0%",
    position: "absolute",
  },
  messages: {
    top: "65.91%",
    left: "0%",
  },
  pressable: {
    height: "93.62%",
    width: "14.87%",
    right: "19.43%",
    left: "65.7%",
    top: "6.38%",
    bottom: "0%",
    position: "absolute",
  },
  icon1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  icon2: {
    right: "88.84%",
    left: "3.72%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  pressable1: {
    left: "26.96%",
    right: "65.6%",
  },
  group1: {
    height: "44.76%",
    width: "86.05%",
    top: "48.57%",
    right: "8.88%",
    bottom: "6.67%",
    left: "5.07%",
    position: "absolute",
  },
  groupChild1: {
    height: "48.19%",
    width: "14.11%",
    right: "44.03%",
    bottom: "51.81%",
    left: "41.87%",
    top: "0%",
    position: "absolute",
  },
  groupParent: {
    height: "12.93%",
    top: "87.07%",
    left: "0%",
  },
  profile: {
    top: "97.29%",
    left: "86.4%",
  },
  resim202405120215442731Icon: {
    height: "9.61%",
    width: "20.8%",
    top: "8.25%",
    bottom: "82.14%",
    left: "39.73%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  twitter: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Twitter;
