import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Yakup42 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.yakup43}>
      <Image
        style={[styles.vectorIcon, styles.iconGroupLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={[styles.yakup431, styles.paylaldPosition]}>
        <Image
          style={[styles.vectorIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/vector3.png")}
        />
        <Image
          style={[styles.arrowBackIos24dpFill0WghtIcon, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/arrow-back-ios-24dp-fill0-wght400-grad0-opsz241.png")}
        />
        <View style={styles.profil}>
          <View style={[styles.yakup431, styles.paylaldPosition]}>
            <Image
              style={[styles.vectorIcon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-816.png")}
            />
            <Image
              style={[styles.groupItem, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/group-3015.png")}
            />
            <View style={styles.leonardoWrapper}>
              <Text style={[styles.leonardo, styles.balk1Typo]}>Yakup</Text>
            </View>
          </View>
        </View>
        <Text style={[styles.balk1, styles.balk1Position]}>
          İnstagramdaki Resimlerim
        </Text>
        <Image
          style={[styles.yakup43Child, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-141.png")}
        />
        <Image
          style={[styles.instagram2111463Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/instagram-2111463.png")}
        />
        <Image
          style={[styles.groupIcon, styles.balk1Position]}
          resizeMode="cover"
          source={require("../assets/group34.png")}
        />
        <Image
          style={[styles.yakup43Item, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-276.png")}
        />
        <Text style={[styles.twitter, styles.twitterTypo]}>
          Twitter da paylaşıldı
        </Text>
        <View style={styles.beeni}>
          <Text style={[styles.kii, styles.kiiTypo]}>{`10 kişi `}</Text>
          <Text style={[styles.beendi, styles.kiiTypo]}>beğendi</Text>
        </View>
        <View style={[styles.twitter1, styles.twitterPosition]}>
          <Text
            style={[styles.mays2024De, styles.paylaldTypo]}
          >{`15 mayıs 2024 de `}</Text>
          <Text style={[styles.paylald, styles.paylaldTypo]}>paylaşıldı</Text>
        </View>
        <Image
          style={[styles.groupIcon, styles.balk1Position]}
          resizeMode="cover"
          source={require("../assets/group34.png")}
        />
        <Text style={[styles.twitter2, styles.twitterTypo]}>
          İnstagramda paylaşıldı
        </Text>
        <Text style={[styles.beeni1, styles.kiiTypo]}>10 kişi beğendi</Text>
        <Image
          style={[styles.kiilerIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/kiiler2.png")}
        />
        <Text style={[styles.twitter3, styles.twitterPosition]}>
          15 mayıs 2024 de paylaşıldı
        </Text>
        <Image
          style={[styles.takvimconIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/takvimcon.png")}
        />
        <Image
          style={[styles.kiilerIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/kiiler2.png")}
        />
        <Image
          style={[styles.instagramIcon, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/instagram9.png")}
        />
        <Image
          style={[styles.logoIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/logo7.png")}
        />
        <Image
          style={[styles.yakup43Inner, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/group-107.png")}
        />
        <View style={styles.group}>
          <View style={[styles.view, styles.viewPosition]}>
            <Image
              style={[styles.profileicon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/profileicon2.png")}
            />
            <Text style={[styles.profile, styles.balk1Typo]}>rofil</Text>
          </View>
          <Image
            style={[styles.icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/021.png")}
          />
        </View>
        <Image
          style={[styles.altlogoIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/altlogo5.png")}
        />
        <Image
          style={[styles.layerX00201Icon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/layer-x0020-15.png")}
        />
      </View>
      <Pressable
        style={[styles.backArrow114886332, styles.paylaldPosition]}
        onPress={() => navigation.navigate("Yakup5")}
      >
        <Image
          style={[styles.icon1, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/backarrow-11488633-2.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.anasayfa1, styles.anasayfa1Layout]}
        onPress={() => navigation.navigate("AnaSayfa")}
      >
        <Image
          style={[styles.icon1, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/anasayfa-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.pheliler1, styles.anasayfa1Layout]}
        onPress={() => navigation.navigate("Yakup")}
      >
        <Image
          style={[styles.icon1, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/pheliler-1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.uyuarlar1}
        onPress={() => navigation.navigate("Yakup33")}
      >
        <Image
          style={[styles.icon1, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/uyuarlar-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.instagram21114631Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/instagram-21114631.png")}
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
  paylaldPosition: {
    left: "0%",
    position: "absolute",
  },
  iconPosition1: {
    left: "6.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  balk1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  balk1Position: {
    left: "4.13%",
    position: "absolute",
  },
  iconLayout: {
    height: "3.57%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  twitterTypo: {
    fontSize: FontSize.size_mini,
    left: "25.63%",
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  kiiTypo: {
    color: Color.colorSlategray,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  twitterPosition: {
    left: "31.55%",
    top: "42.52%",
    position: "absolute",
  },
  paylaldTypo: {
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
  },
  viewPosition: {
    bottom: "0%",
    right: "0%",
  },
  iconPosition: {
    bottom: "58.14%",
    height: "41.86%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  anasayfa1Layout: {
    height: "4.68%",
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
    left: "0%",
    position: "absolute",
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
  yakup431: {
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  profil: {
    height: "5.42%",
    width: "31.47%",
    top: "5.42%",
    bottom: "89.16%",
    left: "68.53%",
    right: "0%",
    position: "absolute",
  },
  balk1: {
    top: "33.07%",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray,
  },
  yakup43Child: {
    height: "5.05%",
    width: "17.2%",
    top: "24.94%",
    right: "41.41%",
    bottom: "70.01%",
    left: "41.39%",
    position: "absolute",
  },
  instagram2111463Icon: {
    width: "7.73%",
    top: "25.75%",
    right: "46.27%",
    bottom: "70.68%",
    left: "46%",
  },
  groupIcon: {
    height: "12.98%",
    width: "82.27%",
    top: "38.13%",
    right: "13.6%",
    bottom: "48.89%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  yakup43Item: {
    height: "8.84%",
    width: "16.08%",
    top: "39.4%",
    right: "77.95%",
    bottom: "51.76%",
    left: "5.97%",
    position: "absolute",
  },
  twitter: {
    top: "38.97%",
  },
  kii: {
    fontFamily: FontFamily.interRegular,
    color: Color.colorSlategray,
    left: "0%",
    top: "0%",
  },
  beendi: {
    top: "50%",
    fontFamily: FontFamily.interRegular,
    color: Color.colorSlategray,
    left: "0%",
  },
  beeni: {
    height: "3.94%",
    width: "13.33%",
    top: "45.86%",
    right: "49.07%",
    bottom: "50.2%",
    left: "37.6%",
    position: "absolute",
  },
  mays2024De: {
    left: "0%",
    position: "absolute",
    top: "0%",
  },
  paylald: {
    top: "60%",
    left: "0%",
    position: "absolute",
  },
  twitter1: {
    height: "4.93%",
    width: "29.07%",
    right: "39.39%",
    bottom: "52.55%",
  },
  twitter2: {
    top: "38.57%",
  },
  beeni1: {
    top: "45.74%",
    fontStyle: "italic",
    fontFamily: FontFamily.interLight,
    left: "37.6%",
  },
  kiilerIcon: {
    height: "2.59%",
    width: "11.73%",
    top: "45.2%",
    right: "63.73%",
    bottom: "52.22%",
    left: "24.53%",
    position: "absolute",
  },
  twitter3: {
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
  },
  takvimconIcon: {
    height: "2.09%",
    width: "4.53%",
    top: "42.24%",
    right: "69.6%",
    bottom: "55.67%",
    left: "25.87%",
    position: "absolute",
  },
  instagramIcon: {
    height: "9.74%",
    width: "14.93%",
    top: "39.47%",
    right: "78.4%",
    bottom: "50.79%",
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
  yakup43Inner: {
    height: "9.82%",
    top: "90.18%",
    left: "0%",
    position: "absolute",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  profileicon: {
    width: "43.75%",
    left: "56.25%",
  },
  profile: {
    top: "65.12%",
    fontSize: FontSize.size_xs,
    color: Color.colorDarkslategray_300,
    left: "0%",
    position: "absolute",
  },
  view: {
    width: "30.86%",
    left: "69.14%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  icon: {
    width: "13.5%",
    left: "86.5%",
  },
  group: {
    height: "5.3%",
    width: "27.65%",
    top: "93.72%",
    right: "8.88%",
    bottom: "0.99%",
    left: "63.47%",
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
  icon1: {
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
  anasayfa1: {
    left: "4%",
    top: "93.6%",
    right: "83.73%",
    bottom: "1.72%",
    width: "12.27%",
  },
  pheliler1: {
    left: "21.87%",
    top: "93.84%",
    right: "65.07%",
    bottom: "1.48%",
    width: "13.07%",
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
  instagram21114631Icon: {
    width: "8.27%",
    top: "24.88%",
    right: "45.87%",
    bottom: "71.55%",
    left: "45.87%",
  },
  yakup43: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Yakup42;
