import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Ikayetlerim = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ikayetlerim}>
      <Image
        style={[styles.vectorIcon, styles.iconGroupLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={[styles.ikayetlerim1, styles.groupPosition]}>
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
        <Text style={[styles.balk1, styles.balk1Typo]}>Şikayetlerim</Text>
        <Image
          style={[styles.groupIcon, styles.resim1Position]}
          resizeMode="cover"
          source={require("../assets/group16.png")}
        />
        <Image
          style={[styles.ikayetlerimChild, styles.iconGroupLayout]}
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
        <View style={[styles.twitter1, styles.twitterLayout1]}>
          <Text
            style={[styles.mays2024De, styles.paylaldTypo]}
          >{`15 mayıs 2024 de `}</Text>
          <Text style={[styles.paylald, styles.paylaldTypo]}>paylaşıldı</Text>
        </View>
        <Image
          style={[styles.groupIcon, styles.resim1Position]}
          resizeMode="cover"
          source={require("../assets/group16.png")}
        />
        <Text style={[styles.twitter2, styles.twitterTypo1]}>İnstagram</Text>
        <View style={[styles.twitter3, styles.twitterLayout1]}>
          <Text
            style={[styles.mays2024De, styles.paylaldTypo]}
          >{`Oluşturulma tarihi 19 Mayıs `}</Text>
          <Text style={[styles.paylald, styles.paylaldTypo]}>2024</Text>
        </View>
        <Image
          style={[styles.takvimconIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/takvimcon.png")}
        />
        <View style={styles.resim}>
          <Image
            style={[styles.vectorIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group19.png")}
          />
          <Image
            style={[styles.resimChild, styles.resimLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-273.png")}
          />
          <Text style={[styles.twitter4, styles.twitterTypo]}>
            Twitter da paylaşıldı
          </Text>
          <View style={styles.beeni1}>
            <Text style={[styles.kii, styles.kiiTypo]}>{`10 kişi `}</Text>
            <Text style={[styles.beendi, styles.kiiTypo]}>beğendi</Text>
          </View>
          <View style={[styles.twitter5, styles.twitterLayout]}>
            <Text
              style={[styles.mays2024De, styles.paylaldTypo]}
            >{`15 mayıs 2024 de `}</Text>
            <Text style={[styles.paylald, styles.paylaldTypo]}>paylaşıldı</Text>
          </View>
          <Image
            style={[styles.vectorIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group19.png")}
          />
          <Text style={[styles.twitter6, styles.twitterTypo1]}>Twitter</Text>
          <View style={[styles.twitter7, styles.twitterLayout]}>
            <Text
              style={[styles.mays2024De, styles.paylaldTypo]}
            >{`Oluşturulma tarihi 20 Mayıs `}</Text>
            <Text style={[styles.paylald, styles.paylaldTypo]}>2024</Text>
          </View>
          <Image
            style={[styles.takvimconIcon1, styles.takvimconIconLayout]}
            resizeMode="cover"
            source={require("../assets/takvimcon1.png")}
          />
        </View>
        <View style={[styles.resim1, styles.resim1Position]}>
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
          <Text style={[styles.twitter4, styles.twitterTypo]}>
            Twitter da paylaşıldı
          </Text>
          <View style={styles.beeni1}>
            <Text style={[styles.kii, styles.kiiTypo]}>{`10 kişi `}</Text>
            <Text style={[styles.beendi, styles.kiiTypo]}>beğendi</Text>
          </View>
          <View style={[styles.twitter5, styles.twitterLayout]}>
            <Text
              style={[styles.mays2024De, styles.paylaldTypo]}
            >{`15 mayıs 2024 de `}</Text>
            <Text style={[styles.paylald, styles.paylaldTypo]}>paylaşıldı</Text>
          </View>
          <Image
            style={[styles.vectorIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group18.png")}
          />
          <Text style={[styles.twitter10, styles.twitterTypo]}>Whatsapp</Text>
          <View style={[styles.twitter11, styles.twitterLayout]}>
            <Text
              style={[styles.mays2024De, styles.paylaldTypo]}
            >{`Oluşturulma tarihi 21 Mayıs `}</Text>
            <Text style={[styles.paylald, styles.paylaldTypo]}>2024</Text>
          </View>
          <Image
            style={[styles.takvimconIcon2, styles.takvimconIconLayout]}
            resizeMode="cover"
            source={require("../assets/takvimcon1.png")}
          />
        </View>
        <Image
          style={[styles.logoIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/logo3.png")}
        />
        <Pressable
          style={styles.ikayetlerimInner}
          onPress={() => navigation.navigate("Profil")}
        >
          <View style={[styles.ikayetlerim1, styles.groupPosition]}>
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
        <Image
          style={[styles.groupIcon6, styles.groupIconPosition]}
          resizeMode="cover"
          source={require("../assets/group7.png")}
        />
        <Image
          style={[styles.groupIcon7, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group20.png")}
        />
        <Image
          style={[styles.groupIcon8, styles.iconPosition2]}
          resizeMode="cover"
          source={require("../assets/group20.png")}
        />
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
            style={[styles.icon, styles.iconPosition1]}
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
            style={styles.iconPosition1}
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
      <Image
        style={[styles.whatsapp36700511Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/whatsapp-3670051-11.png")}
      />
      <Image
        style={[styles.instagram211146311Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/instagram-21114631-12.png")}
      />
      <Image
        style={[styles.resim202405120215442732Icon, styles.iconPosition2]}
        resizeMode="cover"
        source={require("../assets/resim-20240512-021544273-2.png")}
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
  groupPosition: {
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
  resim1Position: {
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
  twitterLayout1: {
    height: "4.93%",
    position: "absolute",
  },
  paylaldTypo: {
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
    left: "0%",
    position: "absolute",
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
  twitterTypo: {
    top: "6.36%",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  twitterLayout: {
    height: "37.95%",
    position: "absolute",
  },
  takvimconIconLayout: {
    width: "5.54%",
    height: "16.22%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconPosition: {
    left: "8.27%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconLayout: {
    width: "17.6%",
    height: "8.13%",
  },
  iconPosition2: {
    right: "72.8%",
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
  iconPosition1: {
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
  iconPosition: {
    left: "10.93%",
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
  arrowBackIos24dpFill0WghtIcon: {
    height: "3.69%",
    width: "8%",
    top: "5.42%",
    right: "85.33%",
    bottom: "90.89%",
    left: "6.67%",
    position: "absolute",
  },
  balk1: {
    top: "33.56%",
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
  ikayetlerimChild: {
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
    top: "0%",
  },
  paylald: {
    top: "60%",
  },
  twitter1: {
    width: "29.07%",
    top: "42.52%",
    right: "39.39%",
    bottom: "52.55%",
    left: "31.55%",
  },
  twitter2: {
    top: "38.82%",
    left: "28.61%",
  },
  twitter3: {
    width: "44.27%",
    top: "45.1%",
    right: "19.87%",
    bottom: "49.98%",
    left: "35.87%",
  },
  takvimconIcon: {
    height: "2.09%",
    width: "4.53%",
    top: "45.69%",
    right: "66.13%",
    left: "29.33%",
    bottom: "52.22%",
    position: "absolute",
  },
  resimChild: {
    top: "9.68%",
    bottom: "22.2%",
  },
  twitter4: {
    left: "26.13%",
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
    width: "35.33%",
    top: "33.87%",
    right: "31.35%",
    bottom: "28.18%",
    left: "33.32%",
  },
  twitter6: {
    top: "8.63%",
    left: "46.84%",
  },
  twitter7: {
    width: "54.46%",
    right: "6.19%",
    bottom: "6.74%",
    left: "39.35%",
    top: "55.31%",
  },
  takvimconIcon1: {
    top: "58.35%",
    right: "62.46%",
    bottom: "25.43%",
    left: "31.99%",
  },
  resim: {
    top: "52.75%",
    right: "14.67%",
    bottom: "34.27%",
    left: "3.07%",
    width: "82.27%",
    height: "12.98%",
    position: "absolute",
  },
  resimItem: {
    top: "9.77%",
    bottom: "22.11%",
  },
  twitter10: {
    left: "39.22%",
  },
  twitter11: {
    width: "53.81%",
    top: "50.19%",
    right: "3.47%",
    bottom: "11.86%",
    left: "42.72%",
  },
  takvimconIcon2: {
    right: "59.9%",
    bottom: "28.46%",
    left: "34.55%",
    top: "55.31%",
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
  ikayetlerim1: {
    left: "0%",
    top: "0%",
    height: "100%",
  },
  ikayetlerimInner: {
    height: "5.42%",
    width: "31.47%",
    top: "3.82%",
    bottom: "90.76%",
    left: "68.53%",
    right: "0%",
    position: "absolute",
  },
  groupIcon6: {
    height: "7.39%",
    width: "16%",
    top: "40.39%",
    right: "75.73%",
    bottom: "52.22%",
  },
  groupIcon7: {
    top: "55.17%",
    right: "74.13%",
    bottom: "36.7%",
    left: "8.27%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon8: {
    top: "68.23%",
    bottom: "23.65%",
    left: "9.6%",
    width: "17.6%",
    height: "8.13%",
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
    top: "97.29%",
    left: "85.33%",
  },
  whatsapp36700511Icon: {
    height: "7.02%",
    width: "15.2%",
    top: "68.72%",
    right: "73.87%",
    bottom: "24.26%",
  },
  instagram211146311Icon: {
    height: "6.28%",
    width: "13.6%",
    top: "40.89%",
    right: "75.47%",
    bottom: "52.83%",
  },
  resim202405120215442732Icon: {
    height: "7.27%",
    width: "15.73%",
    top: "55.54%",
    bottom: "37.19%",
    left: "11.47%",
  },
  ikayetlerim: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Ikayetlerim;
