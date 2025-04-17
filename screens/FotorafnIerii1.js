import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const FotorafnIerii1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.fotorafnIerii}>
      <Image
        style={[styles.vectorIcon, styles.iconItemLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <View style={styles.fotorafnIerii1}>
        <Image
          style={[styles.vectorIcon1, styles.groupPosition1]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <View style={[styles.groupParent, styles.vectorParentPosition]}>
          <Image
            style={[styles.vectorIcon, styles.iconItemLayout]}
            resizeMode="cover"
            source={require("../assets/group3.png")}
          />
          <Text style={[styles.ltfenBirFotoraf, styles.leonardoTypo]}>
            Lütfen bir fotoğraf yükleyin.
          </Text>
        </View>
        <View style={[styles.groupGroup, styles.groupPosition]}>
          <Image
            style={[styles.vectorIcon, styles.iconItemLayout]}
            resizeMode="cover"
            source={require("../assets/group.png")}
          />
          <View style={styles.group}>
            <View style={[styles.view, styles.vectorParentPosition]}>
              <Text style={[styles.calendar, styles.profileTypo]}>
                Şilkayetlerim
              </Text>
            </View>
            <View style={styles.view1}>
              <Image
                style={[styles.cahtIcon, styles.iconItemLayout]}
                resizeMode="cover"
                source={require("../assets/caht.png")}
              />
              <Text style={[styles.messages, styles.profileTypo]}>
                mesjlarım
              </Text>
            </View>
            <View style={styles.view2}>
              <Image
                style={[styles.profileicon, styles.iconItemLayout]}
                resizeMode="cover"
                source={require("../assets/profileicon.png")}
              />
              <Text style={[styles.profile, styles.profileTypo]}>profil</Text>
            </View>
            <View style={[styles.view, styles.vectorParentPosition]}>
              <Text style={[styles.calendar, styles.profileTypo]}>
                Şilkayetlerim
              </Text>
            </View>
            <View style={styles.view1}>
              <Image
                style={[styles.cahtIcon, styles.iconItemLayout]}
                resizeMode="cover"
                source={require("../assets/caht.png")}
              />
              <Text style={[styles.messages, styles.profileTypo]}>
                mesjlarım
              </Text>
            </View>
            <View style={styles.view2}>
              <Image
                style={[styles.profileicon, styles.iconItemLayout]}
                resizeMode="cover"
                source={require("../assets/profileicon.png")}
              />
              <Text style={[styles.profile, styles.profileTypo]}>profil</Text>
            </View>
          </View>
        </View>
        <View style={styles.uAnTehlikedeysenEllerinde}>
          <Text
            style={[styles.uAnTehlikedeysen, styles.uAnTehlikedeysenTypo]}
          >{`Şu an tehlikedeysen, ellerinde olan fotoğrafınla  `}</Text>
          <Text
            style={[styles.zorbalanyorsanYardmAl, styles.uAnTehlikedeysenTypo]}
          >
            zorbalanıyorsan yardım al. Bekleme.
          </Text>
        </View>
        <Image
          style={[styles.fotorafnIeriiChild, styles.iconItemLayout]}
          resizeMode="cover"
          source={require("../assets/group-91.png")}
        />
        <Image
          style={[styles.fotorafnIeriiItem, styles.iconItemLayout]}
          resizeMode="cover"
          source={require("../assets/group-10.png")}
        />
        <Image
          style={[styles.fotorafnIeriiInner, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/group-12.png")}
        />
        <Image
          style={[styles.fotorafnIeriiChild1, styles.iconItemLayout]}
          resizeMode="cover"
          source={require("../assets/group-7.png")}
        />
        <Text style={[styles.profile2, styles.profile2Typo]}>rofil</Text>
        <Pressable
          style={styles.home}
          onPress={() => navigation.navigate("AnaSayfa")}
        >
          <Text style={styles.profile2Typo}>AnaSayfa</Text>
        </Pressable>
        <Text style={[styles.calendar2, styles.profile2Typo]}>
          Şikayetlerim
        </Text>
        <Text style={[styles.messages2, styles.profile2Typo]}>Mesajlarım</Text>
        <Image
          style={[styles.layerX00201Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/layer-x0020-1.png")}
        />
        <View style={styles.groupView}>
          <View style={[styles.vectorParent, styles.vectorParentPosition]}>
            <Image
              style={[styles.vectorIcon, styles.iconItemLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-816.png")}
            />
            <Image
              style={[styles.groupItem, styles.iconItemLayout]}
              resizeMode="cover"
              source={require("../assets/group-301.png")}
            />
            <View style={styles.leonardoWrapper}>
              <Text style={[styles.leonardo, styles.leonardoTypo]}>Yakup</Text>
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
        style={[styles.backArrow114886332, styles.vectorParentPosition]}
        onPress={() => navigation.navigate("FotorafnIerii")}
      >
        <Image
          style={[styles.icon, styles.iconItemLayout]}
          resizeMode="cover"
          source={require("../assets/backarrow-11488633-2.png")}
        />
      </Pressable>
      <Pressable
        style={styles.ekranGrnts20240604153}
        onPress={() => navigation.navigate("FotorafnIerii2")}
      >
        <Image
          style={[styles.icon, styles.iconItemLayout]}
          resizeMode="cover"
          source={require("../assets/ekran-grnts-20240604-153538-1.png")}
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
  groupPosition1: {
    left: "1.36%",
    right: "2.22%",
    width: "96.42%",
  },
  vectorParentPosition: {
    left: "0%",
    position: "absolute",
  },
  leonardoTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  groupPosition: {
    top: "87.46%",
    position: "absolute",
  },
  profileTypo: {
    color: Color.colorWhitesmoke_100,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: "0%",
    position: "absolute",
  },
  uAnTehlikedeysenTypo: {
    color: Color.colorDimgray,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    left: "0%",
    position: "absolute",
  },
  profile2Typo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorDarkslategray_300,
    fontFamily: FontFamily.interRegular,
  },
  iconPosition: {
    right: "87.52%",
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
  vectorIcon1: {
    height: "98.89%",
    bottom: "1.11%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    top: "0%",
    position: "absolute",
  },
  ltfenBirFotoraf: {
    top: "40.34%",
    left: "25.34%",
    color: Color.colorDarkslategray_300,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  groupParent: {
    height: "74.93%",
    top: "17.11%",
    bottom: "7.97%",
    right: "0%",
    width: "100%",
  },
  calendar: {
    top: "0%",
  },
  view: {
    height: "33.56%",
    width: "28.06%",
    top: "58.39%",
    right: "71.94%",
    bottom: "8.05%",
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
  },
  view1: {
    width: "21.04%",
    right: "26.81%",
    left: "52.14%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
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
  },
  view2: {
    height: "91.72%",
    width: "12.39%",
    bottom: "8.28%",
    left: "87.61%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  group: {
    height: "41.78%",
    width: "65.79%",
    top: "25.05%",
    right: "10.05%",
    bottom: "33.18%",
    left: "24.15%",
    position: "absolute",
  },
  groupGroup: {
    height: "12.54%",
    left: "1.36%",
    right: "2.22%",
    width: "96.42%",
    bottom: "0%",
  },
  uAnTehlikedeysen: {
    top: "0%",
  },
  zorbalanyorsanYardmAl: {
    top: "50%",
  },
  uAnTehlikedeysenEllerinde: {
    height: "4.22%",
    width: "81.83%",
    top: "32.42%",
    right: "10.88%",
    bottom: "63.36%",
    left: "7.29%",
    position: "absolute",
  },
  fotorafnIeriiChild: {
    height: "3.82%",
    width: "8.6%",
    top: "90.12%",
    right: "25.22%",
    bottom: "6.06%",
    left: "66.18%",
    position: "absolute",
  },
  fotorafnIeriiItem: {
    height: "4.25%",
    width: "9.17%",
    top: "89.58%",
    right: "65.29%",
    bottom: "6.16%",
    left: "25.54%",
    position: "absolute",
  },
  fotorafnIeriiInner: {
    height: "7.78%",
    width: "14.26%",
    right: "43.31%",
    bottom: "4.76%",
    left: "42.42%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  fotorafnIeriiChild1: {
    height: "8.3%",
    width: "18.37%",
    top: "5.62%",
    right: "41.24%",
    bottom: "86.08%",
    left: "40.4%",
    opacity: 0.8,
    position: "absolute",
  },
  profile2: {
    top: "93.83%",
    left: "79.36%",
    position: "absolute",
  },
  home: {
    left: "3.71%",
    top: "93.94%",
    position: "absolute",
  },
  calendar2: {
    top: "94.67%",
    left: "21.09%",
    position: "absolute",
  },
  messages2: {
    top: "94.9%",
    left: "63.41%",
    position: "absolute",
  },
  layerX00201Icon: {
    height: "2.98%",
    width: "7.07%",
    top: "4.69%",
    bottom: "92.34%",
    left: "5.41%",
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
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  groupView: {
    height: "5.16%",
    width: "29.17%",
    top: "3.63%",
    right: "5.93%",
    bottom: "91.21%",
    left: "64.89%",
    position: "absolute",
  },
  arrowBackIos24dpFill0WghtIcon: {
    height: "3.51%",
    width: "7.42%",
    top: "13.59%",
    bottom: "82.89%",
    left: "5.07%",
  },
  fotorafnIerii1: {
    height: "101.13%",
    width: "103.72%",
    right: "-2.31%",
    bottom: "-1.13%",
    left: "-1.41%",
    top: "0%",
    position: "absolute",
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
  },
  ekranGrnts20240604153: {
    left: "39.74%",
    top: "59.6%",
    right: "39.49%",
    bottom: "32.7%",
    width: "20.77%",
    height: "7.7%",
    position: "absolute",
  },
  homeIcon: {
    height: "2.84%",
    width: "6.15%",
    top: "91.59%",
    right: "87.69%",
    bottom: "5.57%",
    left: "6.15%",
    position: "absolute",
  },
  fotorafnIerii: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default FotorafnIerii1;
