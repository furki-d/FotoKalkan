import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Frame = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13Mini1Parent}>
      <View style={[styles.iphone13Mini1, styles.childPosition]}>
        <Image
          style={[styles.vectorIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/vector4.png")}
        />
        <Image
          style={[styles.iphone13Mini1Child, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/group-104.png")}
        />
        <Image
          style={[styles.groupIcon, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group8.png")}
        />
        <Text style={styles.antajnAmac}>Şantajın Amacı</Text>
        <Image
          style={[styles.arrowBackIos24dpFill0WghtIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-back-ios-24dp-fill0-wght400-grad0-opsz24.png")}
        />
        <Image
          style={[styles.layerX00201Icon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/layer-x0020-12.png")}
        />
        <View
          style={[
            styles.maddiKazanEldeEtmekIin,
            styles.maddiKazanEldeEtmekIinLayout,
          ]}
        >
          <Text
            style={[styles.maddiKazanElde, styles.yaplmasTypo]}
          >{`Maddi kazanç elde etmek için şantaj `}</Text>
          <Text style={[styles.yaplmas, styles.yaplmasTypo]}>yapılması.</Text>
        </View>
        <Text style={[styles.paraTalebi, styles.ntikamTypo]}>Para Talebi</Text>
        <Image
          style={[styles.groupIcon1, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group8.png")}
        />
        <View style={[styles.kiiselNedenlerdenDolayKur, styles.groupPosition]}>
          <Text
            style={[styles.maddiKazanElde, styles.yaplmasTypo]}
          >{`Kişisel nedenlerden dolayı kurbanlara zarar `}</Text>
          <Text style={[styles.yaplmas, styles.yaplmasTypo]}>
            vermeye çalışılması.
          </Text>
        </View>
        <Text style={[styles.ntikam, styles.ntikamTypo]}>İntikam</Text>
        <Image
          style={[styles.groupIcon2, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group8.png")}
        />
        <View
          style={[
            styles.kurbanlarZerindeKontrolSa,
            styles.maddiKazanEldeEtmekIinLayout,
          ]}
        >
          <Text
            style={[styles.maddiKazanElde, styles.yaplmasTypo]}
          >{`Kurbanlar üzerinde kontrol sağlanmak `}</Text>
          <Text style={[styles.yaplmas, styles.yaplmasTypo]}>istenmesi.</Text>
        </View>
        <Text style={[styles.kontrolVeTaat, styles.ntikamTypo]}>
          Kontrol ve İtaat
        </Text>
        <View style={styles.aadakiBlmlereBaknzVe}>
          <Text
            style={[styles.aadakiBlmlereBaknz, styles.ntikamTypo]}
          >{`Aşağıdaki bölümlere bakınız ve sonraki `}</Text>
          <Text
            style={[styles.sayfayaGeerekYaadnz, styles.ntikamTypo]}
          >{`sayfaya geçerek yaşadığınız şantajı `}</Text>
          <Text style={[styles.seiniz, styles.ntikamTypo]}>seçiniz.</Text>
        </View>
        <Image
          style={[styles.g10Icon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/g10.png")}
        />
        <View style={styles.vectorParent}>
          <Image
            style={[styles.groupChild, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-8161.png")}
          />
          <Image
            style={[styles.groupItem, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group-304.png")}
          />
          <View style={styles.leonardoWrapper}>
            <Text style={styles.leonardo}>Yakup</Text>
          </View>
        </View>
        <Image
          style={[styles.whatsappImage20240519At2, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/whatsapp-image-20240519-at-222000.png")}
        />
        <Pressable
          style={styles.ekranGrnts20240604145}
          onPress={() => navigation.navigate("IPhone13Mini")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/ekran-grnts-20240604-145510-1.png")}
          />
        </Pressable>
        <View style={[styles.group, styles.groupPosition]}>
          <View style={styles.view}>
            <Text style={[styles.home, styles.homeTypo]}>AnaSayfa</Text>
          </View>
          <View style={[styles.view1, styles.childPosition]}>
            <Image
              style={[styles.profileicon, styles.icon1Position]}
              resizeMode="cover"
              source={require("../assets/profileicon1.png")}
            />
            <Text style={[styles.profile, styles.homeTypo]}>Profil</Text>
          </View>
          <Image
            style={[styles.icon1, styles.icon1Position]}
            resizeMode="cover"
            source={require("../assets/profileicon1.png")}
          />
          <Pressable
            style={styles.pressable}
            onPress={() => navigation.navigate("AnaSayfa")}
          >
            <Image
              style={[styles.icon2, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/04.png")}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  iconGroupLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  groupIconLayout: {
    left: "1.33%",
    right: "1.06%",
    width: "97.61%",
    height: "13.05%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  maddiKazanEldeEtmekIinLayout: {
    height: "5.17%",
    left: "2.39%",
  },
  yaplmasTypo: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    color: Color.colorBlack,
    left: "0%",
    position: "absolute",
  },
  ntikamTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  groupPosition: {
    right: "6.65%",
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
  icon1Position: {
    bottom: "58.14%",
    height: "41.86%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
  },
  vectorIcon: {
    width: "99.73%",
    left: "0.27%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    top: "0%",
    height: "100%",
  },
  iphone13Mini1Child: {
    height: "12.01%",
    top: "87.99%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupIcon: {
    top: "38.55%",
    bottom: "48.4%",
  },
  antajnAmac: {
    top: "20.2%",
    left: "27.66%",
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    position: "absolute",
  },
  arrowBackIos24dpFill0WghtIcon: {
    height: "3.69%",
    width: "7.98%",
    top: "8.25%",
    right: "81.91%",
    bottom: "88.05%",
    left: "10.11%",
    position: "absolute",
  },
  layerX00201Icon: {
    height: "3.13%",
    width: "7.61%",
    top: "2.19%",
    right: "86.09%",
    bottom: "94.68%",
    left: "6.3%",
    position: "absolute",
  },
  maddiKazanElde: {
    fontFamily: FontFamily.robotoRegular,
    top: "0%",
  },
  yaplmas: {
    top: "50%",
    fontFamily: FontFamily.robotoRegular,
  },
  maddiKazanEldeEtmekIin: {
    width: "77.39%",
    top: "46.24%",
    right: "20.21%",
    bottom: "48.58%",
    left: "2.39%",
    position: "absolute",
  },
  paraTalebi: {
    top: "39.9%",
    left: "2.39%",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  groupIcon1: {
    top: "54.68%",
    bottom: "32.27%",
  },
  kiiselNedenlerdenDolayKur: {
    width: "90.96%",
    top: "61.76%",
    bottom: "33.07%",
    left: "2.39%",
    height: "5.17%",
  },
  ntikam: {
    top: "55.07%",
    left: "2.39%",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  groupIcon2: {
    top: "70.2%",
    bottom: "16.75%",
  },
  kurbanlarZerindeKontrolSa: {
    width: "80.59%",
    top: "76.91%",
    right: "17.02%",
    bottom: "17.92%",
    left: "2.39%",
    position: "absolute",
  },
  kontrolVeTaat: {
    top: "70.96%",
    left: "2.39%",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  aadakiBlmlereBaknz: {
    fontFamily: FontFamily.robotoRegular,
    left: "0%",
    top: "0%",
  },
  sayfayaGeerekYaadnz: {
    top: "33.33%",
    left: "4.58%",
    fontFamily: FontFamily.robotoRegular,
  },
  seiniz: {
    top: "66.67%",
    left: "40.14%",
    fontFamily: FontFamily.robotoRegular,
  },
  aadakiBlmlereBaknzVe: {
    height: "8.5%",
    width: "91.76%",
    top: "26.23%",
    right: "3.99%",
    bottom: "65.27%",
    left: "4.26%",
    position: "absolute",
  },
  g10Icon: {
    height: "8.33%",
    width: "19.57%",
    top: "7.88%",
    right: "39.71%",
    bottom: "83.79%",
    left: "40.72%",
    position: "absolute",
  },
  groupChild: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  groupItem: {
    height: "84.09%",
    width: "32.29%",
    top: "9.09%",
    right: "65%",
    bottom: "6.82%",
    left: "2.71%",
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
    width: "31.38%",
    top: "1.6%",
    right: "2.13%",
    bottom: "92.98%",
    left: "66.49%",
    position: "absolute",
  },
  whatsappImage20240519At2: {
    height: "8.83%",
    width: "16.3%",
    top: "86.77%",
    right: "41.17%",
    bottom: "4.4%",
    left: "42.53%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  ekranGrnts20240604145: {
    left: 303,
    top: 680,
    width: 73,
    height: 62,
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
    left: "0%",
    position: "absolute",
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
  },
  icon1: {
    width: "4.23%",
    right: "2.51%",
    left: "93.26%",
  },
  icon2: {
    height: "100%",
    width: "100%",
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
    width: "88.03%",
    top: "93.72%",
    bottom: "0.99%",
    left: "5.32%",
  },
  iphone13Mini1: {
    left: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  iphone13Mini1Parent: {
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default Frame;
