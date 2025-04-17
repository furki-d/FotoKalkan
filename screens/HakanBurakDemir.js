import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const HakanBurakDemir = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.hakanBurakDemir}>
      <Image
        style={[styles.vectorIcon, styles.iconGroupLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={[styles.hakanBurakDemir1, styles.vectorIconPosition]}>
        <Image
          style={[styles.vectorIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/vector3.png")}
        />
        <Image
          style={[styles.hakanBurakDemirChild, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/group-6.png")}
        />
        <Image
          style={[styles.hakanBurakDemirItem, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/group-92.png")}
        />
        <Image
          style={[styles.groupIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/group5.png")}
        />
        <Text style={[styles.balk1, styles.balk1Typo]}>
          Yardım Alabileceğiniz Kurumlar
        </Text>
        <Pressable
          style={styles.hakanBurakDemirInner}
          onPress={() => navigation.navigate("Profil")}
        >
          <View style={[styles.hakanBurakDemir1, styles.vectorIconPosition]}>
            <Image
              style={[styles.vectorIcon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-816.png")}
            />
            <Image
              style={[styles.groupItem, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/group-302.png")}
            />
            <View style={styles.leonardoWrapper}>
              <Text style={[styles.leonardo, styles.balk1Typo]}>Burak</Text>
            </View>
          </View>
        </Pressable>
        <View
          style={[
            styles.siberSularlaMcadeleDaire,
            styles.psikolojikDanmaHattSpoPosition,
          ]}
        >
          <Text
            style={[styles.siberSularlaMcadele, styles.kurTypo]}
          >{`Siber Suçlarla Mücadele `}</Text>
          <Text style={[styles.daireBakanl, styles.image1IconPosition]}>
            Daire Başkanlığı
          </Text>
        </View>
        <Text style={[styles.kur, styles.kurTypo]}>İşkur</Text>
        <View
          style={[
            styles.psikolojikDanmaHattSpo,
            styles.psikolojikDanmaHattSpoPosition,
          ]}
        >
          <Text
            style={[styles.siberSularlaMcadele, styles.kurTypo]}
          >{`Psikolojik Danışma Hattı `}</Text>
          <Text style={[styles.daireBakanl, styles.image1IconPosition]}>
            (sponsorumuz)
          </Text>
        </View>
        <Image
          style={[styles.image1Icon, styles.image1IconPosition]}
          resizeMode="cover"
          source={require("../assets/image-1.png")}
        />
        <Image
          style={[styles.image2Icon, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/image-2.png")}
        />
        <Image
          style={[styles.image3Icon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/image-3.png")}
        />
        <Pressable
          style={styles.layerX00201}
          onPress={() => navigation.navigate("Men")}
        >
          <Image
            style={[styles.icon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/layer-x0020-11.png")}
          />
        </Pressable>
        <View style={[styles.groupParent, styles.vectorIconPosition]}>
          <Image
            style={[styles.vectorIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group-102.png")}
          />
          <View style={[styles.group, styles.groupPosition]}>
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
              <Text style={[styles.calendar, styles.homeTypo]}>
                Şikayetlerim
              </Text>
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
        </View>
      </View>
      <Text style={[styles.profile, styles.homeTypo]}>profil</Text>
      <Image
        style={[styles.whatsapp36700511Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/whatsapp-3670051-1.png")}
      />
      <Image
        style={[styles.instagram211146311Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/instagram-21114631-1.png")}
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
  vectorIconPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  balk1Typo: {
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  psikolojikDanmaHattSpoPosition: {
    left: "41.33%",
    height: "4.43%",
    position: "absolute",
  },
  kurTypo: {
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  image1IconPosition: {
    top: "50%",
    position: "absolute",
  },
  groupPosition: {
    left: "5.07%",
    position: "absolute",
  },
  homeTypo: {
    color: Color.colorDarkslategray_300,
    fontSize: FontSize.size_xs,
    textAlign: "left",
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
  iconLayout: {
    bottom: "70.44%",
    top: "25.37%",
    width: "9.07%",
    height: "4.19%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
  hakanBurakDemirChild: {
    height: "10.55%",
    width: "23.92%",
    top: "9.77%",
    right: "38.03%",
    bottom: "79.68%",
    left: "38.05%",
    position: "absolute",
  },
  hakanBurakDemirItem: {
    height: "5.07%",
    width: "54.48%",
    top: "24.91%",
    right: "22.75%",
    bottom: "70.01%",
    left: "22.77%",
    position: "absolute",
  },
  groupIcon: {
    height: "43.72%",
    width: "96%",
    top: "44.72%",
    right: "4%",
    bottom: "11.56%",
    left: "0%",
    position: "absolute",
  },
  balk1: {
    top: "37.55%",
    left: "12.27%",
    fontSize: FontSize.size_xl,
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
  hakanBurakDemir1: {
    left: "0%",
    top: "0%",
    height: "100%",
  },
  hakanBurakDemirInner: {
    height: "5.42%",
    width: "31.47%",
    top: "3.82%",
    bottom: "90.76%",
    left: "68.53%",
    right: "0%",
    position: "absolute",
  },
  siberSularlaMcadele: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  daireBakanl: {
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: "0%",
  },
  siberSularlaMcadeleDaire: {
    width: "45.6%",
    top: "52.18%",
    right: "13.07%",
    bottom: "43.39%",
  },
  kur: {
    top: "66.1%",
    left: "57.07%",
    position: "absolute",
  },
  psikolojikDanmaHattSpo: {
    width: "45.07%",
    top: "81.76%",
    right: "13.6%",
    bottom: "13.81%",
  },
  image1Icon: {
    height: "7.51%",
    width: "16.27%",
    right: "77.33%",
    bottom: "42.49%",
    left: "6.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  image2Icon: {
    height: "5.54%",
    width: "21.33%",
    top: "64.9%",
    right: "73.6%",
    bottom: "29.56%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  image3Icon: {
    height: "6.53%",
    width: "23.2%",
    top: "79.8%",
    right: "72.53%",
    bottom: "13.67%",
    left: "4.27%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  layerX00201: {
    left: "2.93%",
    top: "8%",
    right: "89.44%",
    bottom: "88.87%",
    width: "7.63%",
    height: "3.13%",
    position: "absolute",
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
  group: {
    height: "58.97%",
    width: "86.05%",
    top: "32.25%",
    right: "8.88%",
    bottom: "8.78%",
  },
  groupParent: {
    height: "9.82%",
    top: "90.18%",
    left: "0%",
  },
  profile: {
    top: "97.29%",
    left: "86.4%",
  },
  whatsapp36700511Icon: {
    right: "64.27%",
    left: "26.67%",
  },
  instagram211146311Icon: {
    right: "45.6%",
    left: "45.33%",
  },
  hakanBurakDemir: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default HakanBurakDemir;
