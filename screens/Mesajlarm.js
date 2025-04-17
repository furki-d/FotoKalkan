import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Mesajlarm = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mesajlarm}>
      <Image
        style={[styles.vectorIcon, styles.iconGroupLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={[styles.mesajlarm1, styles.groupPosition]}>
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
        <Text style={[styles.balk1, styles.balk1Typo]}>Mesajlarım</Text>
        <Image
          style={[styles.groupIcon, styles.resimPosition]}
          resizeMode="cover"
          source={require("../assets/group16.png")}
        />
        <Image
          style={[styles.mesajlarmChild, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-27.png")}
        />
        <Text style={[styles.twitter, styles.twitterTypo1]}>
          Twitter da paylaşıldı
        </Text>
        <View style={styles.beeni}>
          <Text style={[styles.kii, styles.kiiTypo]}>{`10 kişi `}</Text>
          <Text style={[styles.beendi, styles.kiiTypo]}>beğendi</Text>
        </View>
        <View style={[styles.twitter1, styles.twitterPosition2]}>
          <Text
            style={[styles.mays2024De, styles.twitterTypo]}
          >{`15 mayıs 2024 de `}</Text>
          <Text style={[styles.paylald, styles.twitterTypo]}>paylaşıldı</Text>
        </View>
        <Image
          style={[styles.groupIcon, styles.resimPosition]}
          resizeMode="cover"
          source={require("../assets/group16.png")}
        />
        <View style={styles.twitter2}>
          <Text
            style={[styles.siberSularlaMcadele, styles.twitterTypo1]}
          >{`Siber Suçlarla Mücadele `}</Text>
          <Text style={[styles.daireBakanl, styles.twitterTypo1]}>
            Daire Başkanlığı
          </Text>
        </View>
        <Text style={[styles.twitter3, styles.twitterPosition2]}>
          Son konuşma 19 Mayıs 2024
        </Text>
        <Image
          style={[styles.takvimconIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/takvimcon.png")}
        />
        <View style={[styles.resim, styles.resimPosition]}>
          <Image
            style={[styles.vectorIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group17.png")}
          />
          <Image
            style={[styles.resimChild, styles.resimLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-271.png")}
          />
          <Text style={styles.twitter4}>Twitter da paylaşıldı</Text>
          <View style={styles.beeni1}>
            <Text style={[styles.kii, styles.kiiTypo]}>{`10 kişi `}</Text>
            <Text style={[styles.beendi, styles.kiiTypo]}>beğendi</Text>
          </View>
          <View style={[styles.twitter5, styles.twitterPosition]}>
            <Text
              style={[styles.mays2024De, styles.twitterTypo]}
            >{`15 mayıs 2024 de `}</Text>
            <Text style={[styles.paylald, styles.twitterTypo]}>paylaşıldı</Text>
          </View>
          <Image
            style={[styles.vectorIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group17.png")}
          />
          <Text style={[styles.twitter6, styles.twitterTypo1]}>İŞKUR</Text>
          <Text style={[styles.twitter7, styles.twitterPosition]}>
            Son konuşma 20 Mayıs 2024
          </Text>
          <Image
            style={[styles.takvimconIcon1, styles.takvimconIconLayout]}
            resizeMode="cover"
            source={require("../assets/takvimcon1.png")}
          />
        </View>
        <View style={[styles.resim1, styles.resimPosition]}>
          <Image
            style={[styles.vectorIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group18.png")}
          />
          <Image
            style={[styles.resimItem, styles.resimLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-272.png")}
          />
          <Text style={styles.twitter4}>Twitter da paylaşıldı</Text>
          <View style={styles.beeni1}>
            <Text style={[styles.kii, styles.kiiTypo]}>{`10 kişi `}</Text>
            <Text style={[styles.beendi, styles.kiiTypo]}>beğendi</Text>
          </View>
          <View style={[styles.twitter9, styles.twitterPosition]}>
            <Text
              style={[styles.mays2024De, styles.twitterTypo]}
            >{`15 mayıs 2024 de `}</Text>
            <Text style={[styles.paylald, styles.twitterTypo]}>paylaşıldı</Text>
          </View>
          <Image
            style={[styles.vectorIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group18.png")}
          />
          <View style={styles.twitter10}>
            <Text
              style={[styles.siberSularlaMcadele, styles.twitterTypo1]}
            >{`Ankara Psikoterapi `}</Text>
            <Text style={[styles.daireBakanl, styles.twitterTypo1]}>
              Akademisi
            </Text>
          </View>
          <Text style={[styles.twitter11, styles.twitterPosition]}>
            Son konuşma 21 Mayıs 2024
          </Text>
          <Image
            style={[styles.takvimconIcon2, styles.takvimconIconLayout]}
            resizeMode="cover"
            source={require("../assets/takvimcon1.png")}
          />
        </View>
        <Image
          style={[styles.logoIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/logo2.png")}
        />
        <Image
          style={[styles.image1Icon, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/image-1.png")}
        />
        <Image
          style={[styles.image2Icon, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/image-2.png")}
        />
        <Image
          style={[styles.image3Icon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/image-31.png")}
        />
        <Pressable
          style={styles.mesajlarmInner}
          onPress={() => navigation.navigate("Profil")}
        >
          <View style={[styles.mesajlarm1, styles.groupPosition]}>
            <Image
              style={[styles.vectorIcon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-816.png")}
            />
            <Image
              style={[styles.groupItem, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/group-308.png")}
            />
            <View style={styles.leonardoWrapper}>
              <Text style={[styles.leonardo, styles.balk1Typo]}>Burak</Text>
            </View>
          </View>
        </Pressable>
      </View>
      <View style={[styles.groupParent, styles.groupPosition]}>
        <Image
          style={[styles.groupInner, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/group-102.png")}
        />
        <View style={styles.group}>
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
            style={[styles.icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/021.png")}
          />
          <Image
            style={[styles.icon1, styles.icon1Position]}
            resizeMode="cover"
            source={require("../assets/home1.png")}
          />
          <Pressable
            style={[styles.pressable1, styles.icon1Position]}
            onPress={() => navigation.navigate("Ikayetlerim")}
          >
            <Image
              style={[styles.icon2, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/calendar.png")}
            />
          </Pressable>
          <Pressable
            style={styles.iconPosition}
            onPress={() => navigation.navigate("Profil")}
          >
            <Image
              style={[styles.icon2, styles.iconGroupLayout]}
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
    </View>
  );
};

const styles = StyleSheet.create({
  iconGroupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
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
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  resimPosition: {
    right: "13.6%",
    width: "82.27%",
    height: "12.98%",
    left: "4.13%",
    position: "absolute",
  },
  twitterTypo1: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  kiiTypo: {
    color: Color.colorSlategray,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: "0%",
    position: "absolute",
  },
  twitterPosition2: {
    left: "31.55%",
    position: "absolute",
  },
  twitterTypo: {
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
  },
  resimLayout: {
    left: "2.24%",
    right: "78.22%",
    width: "19.55%",
    height: "68.12%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  twitterPosition: {
    left: "33.32%",
    position: "absolute",
  },
  takvimconIconLayout: {
    right: "68.33%",
    width: "5.54%",
    height: "16.22%",
    left: "26.13%",
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
    position: "absolute",
  },
  iconPosition: {
    left: "95.66%",
    bottom: "55.32%",
    width: "4.34%",
    height: "38.3%",
    top: "6.38%",
    right: "0%",
    position: "absolute",
  },
  icon1Position: {
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
  arrowBackIos24dpFill0WghtIcon: {
    height: "3.69%",
    width: "8%",
    top: "5.42%",
    right: "85.33%",
    bottom: "90.89%",
  },
  balk1: {
    top: "33.58%",
    fontSize: FontSize.size_xl,
    left: "4.13%",
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
  },
  groupIcon: {
    top: "38.13%",
    bottom: "48.89%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  mesajlarmChild: {
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
    left: "25.63%",
  },
  kii: {
    top: "0%",
  },
  beendi: {
    top: "50%",
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
    top: "0%",
    position: "absolute",
  },
  paylald: {
    top: "60%",
    left: "0%",
    position: "absolute",
  },
  twitter1: {
    height: "4.93%",
    width: "29.07%",
    top: "42.52%",
    right: "39.39%",
    bottom: "52.55%",
  },
  siberSularlaMcadele: {
    left: "0%",
    top: "0%",
  },
  daireBakanl: {
    top: "57.14%",
    left: "0%",
  },
  twitter2: {
    height: "5.17%",
    width: "45.6%",
    top: "39.19%",
    right: "25.79%",
    bottom: "55.64%",
    left: "28.61%",
    position: "absolute",
  },
  twitter3: {
    top: "46.76%",
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
  },
  takvimconIcon: {
    height: "2.09%",
    width: "4.53%",
    top: "46.67%",
    right: "69.07%",
    bottom: "51.23%",
    left: "26.4%",
    position: "absolute",
  },
  resimChild: {
    top: "9.68%",
    bottom: "22.2%",
  },
  twitter4: {
    left: "26.13%",
    top: "6.36%",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  beeni1: {
    height: "30.36%",
    width: "16.21%",
    top: "59.58%",
    right: "43.11%",
    bottom: "10.06%",
    left: "40.68%",
    position: "absolute",
  },
  twitter5: {
    top: "33.78%",
    bottom: "28.27%",
    right: "31.35%",
    width: "35.33%",
    height: "37.95%",
    left: "33.32%",
  },
  twitter6: {
    top: "5.6%",
    left: "46.84%",
  },
  twitter7: {
    top: "74.67%",
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
  },
  takvimconIcon1: {
    top: "73.43%",
    bottom: "10.34%",
  },
  resim: {
    top: "52.39%",
    bottom: "34.63%",
  },
  resimItem: {
    top: "9.77%",
    bottom: "22.11%",
  },
  twitter9: {
    top: "33.87%",
    bottom: "28.18%",
    right: "31.35%",
    width: "35.33%",
    height: "37.95%",
    left: "33.32%",
  },
  twitter10: {
    height: "39.85%",
    width: "43.11%",
    right: "17.67%",
    bottom: "53.8%",
    left: "39.22%",
    top: "6.36%",
    position: "absolute",
  },
  twitter11: {
    top: "80.93%",
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
  },
  takvimconIcon2: {
    top: "77.89%",
    bottom: "5.88%",
  },
  resim1: {
    top: "66.02%",
    bottom: "21%",
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
  image1Icon: {
    height: "7.51%",
    width: "16.27%",
    top: "40.76%",
    right: "77.07%",
    bottom: "51.72%",
  },
  image2Icon: {
    height: "5.54%",
    width: "21.33%",
    top: "53.69%",
    right: "72%",
    bottom: "40.76%",
  },
  image3Icon: {
    height: "6.53%",
    width: "23.2%",
    top: "67.49%",
    right: "68.53%",
    bottom: "25.99%",
    left: "8.27%",
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
  mesajlarm1: {
    left: "0%",
    top: "0%",
    height: "100%",
  },
  mesajlarmInner: {
    height: "5.42%",
    width: "31.47%",
    top: "3.82%",
    bottom: "90.76%",
    left: "68.53%",
    right: "0%",
    position: "absolute",
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
  icon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  icon1: {
    right: "88.84%",
    left: "3.72%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  icon2: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  pressable1: {
    left: "26.96%",
    right: "65.6%",
  },
  group: {
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
    top: "96.8%",
    left: "85.6%",
  },
  mesajlarm: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Mesajlarm;
