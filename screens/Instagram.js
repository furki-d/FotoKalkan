import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const Instagram = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.instagram}>
      <View style={[styles.instagram1, styles.groupPosition]}>
        <Image
          style={[styles.vectorIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/vector3.png")}
        />
        <Text style={[styles.zorbalaUradnzTarih, styles.leonardoFlexBox]}>
          Zorbalığa Uğradığınız Tarih :
        </Text>
        <Text style={[styles.zorbalkTanm, styles.leonardoFlexBox]}>
          Zorbalık Tanımı :
        </Text>
        <Text style={[styles.olayaDairEkran, styles.leonardoFlexBox]}>
          Olaya Dair Ekran Görüntüleri :
        </Text>
        <Text style={[styles.szeNaslUlaabiliriz, styles.leonardoFlexBox]}>
          Sİze Nasıl Ulaşabiliriz :
        </Text>
        <Image
          style={[styles.groupIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/group6.png")}
        />
        <Image
          style={[styles.groupIcon1, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/group7.png")}
        />
        <View style={styles.group}>
          <View style={[styles.instagram1, styles.groupPosition]}>
            <Text style={[styles.instagram3, styles.leonardoFlexBox]}>
              Instagram
            </Text>
          </View>
        </View>
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
        <View style={styles.instagramInner}>
          <View style={[styles.instagram1, styles.groupPosition]}>
            <Image
              style={[styles.vectorIcon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-816.png")}
            />
            <Image
              style={[styles.groupItem, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/group-303.png")}
            />
            <View style={styles.leonardoWrapper}>
              <Text style={[styles.leonardo, styles.leonardoFlexBox]}>
                Burak
              </Text>
            </View>
          </View>
        </View>
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
      <View style={[styles.groupParent, styles.groupPosition]}>
        <Image
          style={[styles.groupInner, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/group-103.png")}
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
            source={require("../assets/02.png")}
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
              source={require("../assets/02.png")}
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
        style={[styles.instagram211146311Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/instagram-21114631-11.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  iconGroupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  leonardoFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  iconPosition: {
    left: "42.13%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
    textAlign: "left",
    color: Color.colorDarkslategray_300,
    fontFamily: FontFamily.interRegular,
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
  zorbalaUradnzTarih: {
    top: "25.36%",
    color: Color.colorDarkslategray_300,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    left: "18.93%",
  },
  zorbalkTanm: {
    top: "39.27%",
    color: Color.colorDarkslategray_300,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    left: "18.93%",
  },
  olayaDairEkran: {
    top: "53.17%",
    color: Color.colorDarkslategray_300,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    left: "18.93%",
  },
  szeNaslUlaabiliriz: {
    top: "66.71%",
    color: Color.colorDarkslategray_300,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    left: "18.93%",
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
    height: "7.39%",
    width: "16%",
    top: "8.74%",
    right: "41.87%",
    bottom: "83.87%",
  },
  instagram3: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorDarkslategray_300,
    textAlign: "left",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  instagram1: {
    left: "0%",
    top: "0%",
    height: "100%",
  },
  group: {
    height: "2.96%",
    width: "35.47%",
    top: "17.39%",
    right: "27.2%",
    bottom: "79.66%",
    left: "37.33%",
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  layerX00201: {
    top: "8%",
    right: "89.44%",
    bottom: "88.87%",
    width: "7.63%",
    height: "3.13%",
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
  instagramInner: {
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
    top: "97.04%",
    left: "85.33%",
  },
  instagram211146311Icon: {
    height: "9.61%",
    width: "20.8%",
    top: "6.9%",
    right: "37.07%",
    bottom: "83.5%",
  },
  instagram: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Instagram;
