import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Yakup5 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.yakup3}>
      <Image
        style={[styles.vectorIcon, styles.iconGroupLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={[styles.yakup31, styles.iconPosition]}>
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
        <View style={styles.yakup3Inner}>
          <View style={[styles.yakup31, styles.iconPosition]}>
            <Image
              style={[styles.vectorIcon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-816.png")}
            />
            <Image
              style={[styles.groupItem, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/group-3013.png")}
            />
            <View style={styles.leonardoWrapper}>
              <Text style={[styles.leonardo, styles.profileTypo]}>Yakup</Text>
            </View>
          </View>
        </View>
        <Image
          style={[styles.yakup3Child, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/group-96.png")}
        />
        <View style={[styles.grup1, styles.grup1Layout]}>
          <Image
            style={[styles.groupIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group28.png")}
          />
          <Text style={[styles.balk1, styles.twitterTypo]}>
            Son Paylaştığım Resimler
          </Text>
          <Text style={[styles.twitter, styles.twitterTypo]}>Twitter</Text>
          <Text style={[styles.instagram, styles.twitterTypo]}>İnstagram</Text>
          <Text style={[styles.instagram1, styles.twitterTypo]}>İnstagram</Text>
          <Text style={[styles.twitter, styles.twitterTypo]}>Twitter</Text>
          <Text style={[styles.instagram, styles.twitterTypo]}>İnstagram</Text>
          <Text style={[styles.instagram1, styles.twitterTypo]}>İnstagram</Text>
          <Image
            style={[styles.instagramIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/instagram1.png")}
          />
        </View>
        <Image
          style={[styles.groupIcon1, styles.grup1Layout]}
          resizeMode="cover"
          source={require("../assets/group30.png")}
        />
        <Text style={styles.balk11}>Son Şüpheli Davranışlar</Text>
        <Text style={[styles.twitter2, styles.twitterTypo]}>Twitter</Text>
        <Text style={[styles.instagram4, styles.twitterTypo]}>İnstagram</Text>
        <Text style={[styles.instagram5, styles.twitterTypo]}>İnstagram</Text>
        <Text style={[styles.twitter2, styles.twitterTypo]}>Twitter</Text>
        <Text style={[styles.instagram4, styles.twitterTypo]}>İnstagram</Text>
        <Text style={[styles.instagram5, styles.twitterTypo]}>İnstagram</Text>
        <Image
          style={[styles.instagramIcon1, styles.instagramIconLayout]}
          resizeMode="cover"
          source={require("../assets/instagram6.png")}
        />
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/12.png")}
        />
        <View style={[styles.grup1, styles.grup1Layout]}>
          <Image
            style={[styles.groupIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group28.png")}
          />
          <Text style={[styles.balk1, styles.twitterTypo]}>
            Son Paylaştığım Resimler
          </Text>
          <Text style={[styles.twitter, styles.twitterTypo]}>Twitter</Text>
          <Text style={[styles.instagram, styles.twitterTypo]}>İnstagram</Text>
          <Text style={[styles.instagram1, styles.twitterTypo]}>İnstagram</Text>
          <Text style={[styles.twitter, styles.twitterTypo]}>Twitter</Text>
          <Text style={[styles.instagram, styles.twitterTypo]}>İnstagram</Text>
          <Text style={[styles.instagram1, styles.twitterTypo]}>İnstagram</Text>
          <Image
            style={[styles.instagramIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/instagram1.png")}
          />
          <Image
            style={[styles.instagramIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/instagram1.png")}
          />
        </View>
        <Image
          style={[styles.instagramIcon1, styles.instagramIconLayout]}
          resizeMode="cover"
          source={require("../assets/instagram7.png")}
        />
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/13.png")}
        />
        <Image
          style={[styles.icon2, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/14.png")}
        />
        <Image
          style={[styles.instagramIcon5, styles.instagramIconLayout]}
          resizeMode="cover"
          source={require("../assets/instagram8.png")}
        />
        <Image
          style={styles.instagramIcon6}
          resizeMode="cover"
          source={require("../assets/instagram4.png")}
        />
        <Image
          style={[styles.logoIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/logo4.png")}
        />
        <Image
          style={[styles.yakup3Item, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/group-107.png")}
        />
        <View style={styles.group}>
          <View style={[styles.yakup31, styles.iconPosition]}>
            <Image
              style={[styles.profileicon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/profileicon2.png")}
            />
            <Text style={[styles.profile, styles.profileTypo]}>profil</Text>
          </View>
          <Image
            style={[styles.profileicon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/profileicon2.png")}
          />
        </View>
        <Image
          style={[styles.altlogoIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/altlogo.png")}
        />
        <Image
          style={[styles.layerX00201Icon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/layer-x0020-16.png")}
        />
        <Pressable
          style={styles.uyuarlar1}
          onPress={() => navigation.navigate("Yakup33")}
        >
          <Image
            style={[styles.icon4, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/uyuarlar-1.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={[styles.instagram21114631, styles.twitter5969020Position]}
        onPress={() => navigation.navigate("Yakup42")}
      >
        <Image
          style={[styles.icon4, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/instagram-21114631.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.twitter5969020, styles.twitter5969020Position]}
        onPress={() => navigation.navigate("Yakup41")}
      >
        <Image
          style={[styles.icon4, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/twitter-5969020.png")}
        />
      </Pressable>
      <Pressable
        style={styles.facebook59687641}
        onPress={() => navigation.navigate("Yakup43")}
      >
        <Image
          style={[styles.icon4, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/facebook-59687641.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.backArrow114886332, styles.iconPosition]}
        onPress={() => navigation.navigate("Yakup1")}
      >
        <Image
          style={[styles.icon4, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/backarrow-11488633-2.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.anasayfa1, styles.anasayfa1Layout]}
        onPress={() => navigation.navigate("AnaSayfa")}
      >
        <Image
          style={[styles.icon4, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/anasayfa-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.pheliler1, styles.anasayfa1Layout]}
        onPress={() => navigation.navigate("Yakup")}
      >
        <Image
          style={[styles.icon4, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/pheliler-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.hepsiniGr1, styles.hepsiniLayout]}
        onPress={() => navigation.navigate("Yakup4")}
      >
        <Image
          style={[styles.icon4, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/hepsini-gr-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.hepsiniGr2, styles.hepsiniLayout]}
        onPress={() => navigation.navigate("Yakup")}
      >
        <Image
          style={[styles.icon4, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/hepsini-gr-1.png")}
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
  iconPosition: {
    left: "0%",
    position: "absolute",
  },
  profileTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: "0%",
    position: "absolute",
  },
  grup1Layout: {
    width: "96%",
    position: "absolute",
  },
  twitterTypo: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  instagramIconLayout: {
    left: "77.23%",
    right: "7.84%",
    width: "14.93%",
    height: "9.74%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    right: "75.92%",
    width: "18.13%",
    height: "8.6%",
    left: "5.95%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  twitter5969020Position: {
    height: "3.57%",
    bottom: "71.55%",
    top: "24.88%",
    position: "absolute",
  },
  anasayfa1Layout: {
    height: "4.68%",
    position: "absolute",
  },
  hepsiniLayout: {
    height: "1.72%",
    width: "19.47%",
    position: "absolute",
  },
  vectorIcon: {
    left: "0%",
    position: "absolute",
    bottom: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
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
  yakup31: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  yakup3Inner: {
    height: "5.42%",
    width: "31.47%",
    top: "5.42%",
    bottom: "89.16%",
    left: "68.53%",
    right: "0%",
    position: "absolute",
  },
  yakup3Child: {
    height: "5.07%",
    width: "54.48%",
    top: "24.91%",
    right: "22.75%",
    bottom: "70.01%",
    left: "22.77%",
    position: "absolute",
  },
  groupIcon: {
    height: "79.55%",
    top: "20.45%",
    left: "0%",
    position: "absolute",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  balk1: {
    left: "3.86%",
    top: "0%",
  },
  twitter: {
    top: "80.55%",
    left: "5.86%",
  },
  instagram: {
    top: "78.41%",
    left: "41.67%",
  },
  instagram1: {
    top: "81.08%",
    left: "75%",
  },
  instagramIcon: {
    height: "52.87%",
    width: "15.56%",
    top: "24%",
    right: "40.03%",
    bottom: "23.13%",
    left: "44.42%",
    position: "absolute",
  },
  grup1: {
    height: "18.42%",
    top: "34.42%",
    right: "2%",
    bottom: "47.16%",
    left: "2%",
  },
  groupIcon1: {
    height: "14.66%",
    top: "59.36%",
    right: "1.79%",
    bottom: "25.99%",
    left: "2.21%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  balk11: {
    top: "55.64%",
    left: "5.95%",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  twitter2: {
    top: "70.42%",
    left: "7.81%",
  },
  instagram4: {
    top: "70.04%",
    left: "42.21%",
  },
  instagram5: {
    top: "70.53%",
    left: "74.21%",
  },
  instagramIcon1: {
    top: "38.46%",
    bottom: "51.8%",
  },
  icon: {
    top: "39.61%",
    bottom: "51.8%",
  },
  icon2: {
    top: "60.87%",
    bottom: "30.53%",
  },
  instagramIcon5: {
    top: "59.72%",
    bottom: "30.54%",
  },
  instagramIcon6: {
    top: "60.3%",
    right: "40.32%",
    bottom: "29.96%",
    left: "44.75%",
    width: "14.93%",
    height: "9.74%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
  yakup3Item: {
    height: "9.82%",
    top: "90.18%",
    left: "0%",
    position: "absolute",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  profileicon: {
    height: "41.86%",
    width: "48.28%",
    right: "25.17%",
    bottom: "58.14%",
    left: "26.55%",
    top: "0%",
    position: "absolute",
  },
  profile: {
    top: "65.12%",
    fontSize: FontSize.size_xs,
    color: Color.colorDarkslategray_300,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  group: {
    height: "5.3%",
    width: "7.73%",
    top: "93.72%",
    right: "6.93%",
    bottom: "0.99%",
    left: "85.33%",
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
  icon4: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
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
  instagram21114631: {
    left: "25.87%",
    right: "65.87%",
    width: "8.27%",
  },
  twitter5969020: {
    left: "44.53%",
    right: "46.93%",
    width: "8.53%",
  },
  facebook59687641: {
    left: "63.47%",
    right: "29.07%",
    bottom: "71.92%",
    width: "7.47%",
    height: "3.2%",
    top: "24.88%",
    position: "absolute",
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
  hepsiniGr1: {
    left: "75.47%",
    top: "34.85%",
    right: "5.07%",
    bottom: "63.42%",
  },
  hepsiniGr2: {
    left: "75.2%",
    top: "56.77%",
    right: "5.33%",
    bottom: "41.5%",
  },
  yakup3: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Yakup5;
