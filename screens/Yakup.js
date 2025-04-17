import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Yakup = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.yakup1}>
      <Image
        style={[styles.vectorIcon, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={[styles.yakup51, styles.paylaldPosition]}>
        <Image
          style={[styles.vectorIcon, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/vector3.png")}
        />
        <Image
          style={[styles.arrowBackIos24dpFill0WghtIcon, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/arrow-back-ios-24dp-fill0-wght400-grad0-opsz241.png")}
        />
        <View style={[styles.profil, styles.profilPosition]}>
          <View style={[styles.yakup51, styles.paylaldPosition]}>
            <Image
              style={[styles.vectorIcon, styles.iconChildLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-816.png")}
            />
            <Image
              style={[styles.groupItem, styles.iconChildLayout]}
              resizeMode="cover"
              source={require("../assets/group-3011.png")}
            />
            <View style={styles.leonardoWrapper}>
              <Text style={[styles.leonardo, styles.profileTypo]}>Yakup</Text>
            </View>
          </View>
        </View>
        <Text style={styles.balk1}>Tüm Şüpheli Algılananlar</Text>
        <Image
          style={[styles.yakup51Child, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/group-96.png")}
        />
        <Image
          style={[styles.logoIcon, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/logo4.png")}
        />
        <Image
          style={[styles.groupIcon, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group24.png")}
        />
        <Image
          style={[styles.yakup51Item, styles.yakup51Layout]}
          resizeMode="cover"
          source={require("../assets/rectangle-27.png")}
        />
        <Text style={[styles.twitter, styles.twitterTypo1]}>
          Twitter da paylaşıldı
        </Text>
        <View style={[styles.beeni, styles.beeniPosition]}>
          <Text style={[styles.kii, styles.kiiTypo]}>{`10 kişi `}</Text>
          <Text style={[styles.beendi, styles.kiiTypo]}>beğendi</Text>
        </View>
        <View style={[styles.twitter1, styles.twitterPosition1]}>
          <Text
            style={[styles.mays2024De, styles.twitterTypo]}
          >{`15 mayıs 2024 de `}</Text>
          <Text style={[styles.paylald, styles.twitterTypo]}>paylaşıldı</Text>
        </View>
        <Image
          style={[styles.groupIcon, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group24.png")}
        />
        <View style={[styles.twitter2, styles.twitterLayout]}>
          <Text
            style={[styles.xdekiResminFurkan, styles.twitterTypo1]}
          >{`X'deki resmin Furkan `}</Text>
          <Text style={[styles.tarafndanPaylald, styles.twitterTypo1]}>
            tarafından paylaşıldı
          </Text>
        </View>
        <Text style={styles.beeni1}>Furkan</Text>
        <Image
          style={styles.kiilerIcon}
          resizeMode="cover"
          source={require("../assets/kiiler.png")}
        />
        <Text style={[styles.twitter3, styles.twitterPosition1]}>
          19 mayıs 2024 de paylaşıldı
        </Text>
        <Image
          style={[styles.takvimconIcon, styles.takvimconIconLayout]}
          resizeMode="cover"
          source={require("../assets/takvimcon.png")}
        />
        <Image
          style={[styles.icon, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/1.png")}
        />
        <Image
          style={[styles.groupIcon2, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group25.png")}
        />
        <Image
          style={[styles.yakup51Inner, styles.yakup51Layout]}
          resizeMode="cover"
          source={require("../assets/rectangle-274.png")}
        />
        <Text style={[styles.twitter4, styles.twitterTypo1]}>
          Twitter da paylaşıldı
        </Text>
        <View style={[styles.beeni2, styles.beeniPosition]}>
          <Text style={[styles.kii, styles.kiiTypo]}>{`10 kişi `}</Text>
          <Text style={[styles.beendi, styles.kiiTypo]}>beğendi</Text>
        </View>
        <View style={[styles.twitter5, styles.twitterPosition1]}>
          <Text
            style={[styles.mays2024De, styles.twitterTypo]}
          >{`15 mayıs 2024 de `}</Text>
          <Text style={[styles.paylald, styles.twitterTypo]}>paylaşıldı</Text>
        </View>
        <Image
          style={[styles.groupIcon2, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group25.png")}
        />
        <View style={styles.twitter6}>
          <Text
            style={[styles.xdekiResminFurkan, styles.twitterTypo1]}
          >{`İnstagramdaki resmine Eren `}</Text>
          <Text style={[styles.tarafndanPaylald, styles.twitterTypo1]}>
            tarafında yorum yapıldı.
          </Text>
        </View>
        <Text style={[styles.beeni3, styles.beeniTypo]}>Eren</Text>
        <Text style={[styles.twitter7, styles.twitterPosition1]}>
          15 mayıs 2024 de paylaşıldı
        </Text>
        <Image
          style={[styles.takvimconIcon1, styles.takvimconIconLayout]}
          resizeMode="cover"
          source={require("../assets/takvimcon.png")}
        />
        <Image
          style={[styles.kiilerIcon1, styles.kiilerIconLayout]}
          resizeMode="cover"
          source={require("../assets/kiiler1.png")}
        />
        <Image
          style={[styles.instagramIcon, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/instagram.png")}
        />
        <Image
          style={[styles.groupIcon4, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group26.png")}
        />
        <Image
          style={[styles.rectangleIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-275.png")}
        />
        <Text style={[styles.twitter8, styles.twitterPosition]}>
          Twitter da paylaşıldı
        </Text>
        <View style={[styles.beeni4, styles.beeniPosition]}>
          <Text style={[styles.kii, styles.kiiTypo]}>{`10 kişi `}</Text>
          <Text style={[styles.beendi, styles.kiiTypo]}>beğendi</Text>
        </View>
        <View style={[styles.twitter9, styles.twitterPosition1]}>
          <Text
            style={[styles.mays2024De, styles.twitterTypo]}
          >{`15 mayıs 2024 de `}</Text>
          <Text style={[styles.paylald, styles.twitterTypo]}>paylaşıldı</Text>
        </View>
        <Image
          style={[styles.groupIcon4, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group26.png")}
        />
        <View style={[styles.twitter10, styles.twitterPosition]}>
          <Text
            style={[styles.xdekiResminFurkan, styles.twitterTypo1]}
          >{`Facebooktaki resmin  `}</Text>
          <Text style={[styles.tarafndanPaylald, styles.twitterTypo1]}>
            yeninden paylaşıldı.
          </Text>
        </View>
        <Text style={[styles.beeni5, styles.beeniTypo]}>Eren</Text>
        <Text style={[styles.twitter11, styles.twitterPosition1]}>
          15 mayıs 2024 de paylaşıldı
        </Text>
        <Image
          style={[styles.takvimconIcon2, styles.takvimconIconLayout]}
          resizeMode="cover"
          source={require("../assets/takvimcon.png")}
        />
        <Image
          style={[styles.kiilerIcon2, styles.kiilerIconLayout]}
          resizeMode="cover"
          source={require("../assets/kiiler1.png")}
        />
        <Image
          style={[styles.icon1, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/388.png")}
        />
        <Image
          style={[styles.yakup51Child1, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/group-107.png")}
        />
        <View style={styles.group}>
          <View style={[styles.yakup51, styles.paylaldPosition]}>
            <Image
              style={[styles.profileicon, styles.iconChildLayout]}
              resizeMode="cover"
              source={require("../assets/profileicon2.png")}
            />
            <Text style={[styles.profile, styles.profileTypo]}>profil</Text>
          </View>
          <Image
            style={[styles.profileicon, styles.iconChildLayout]}
            resizeMode="cover"
            source={require("../assets/profileicon2.png")}
          />
        </View>
        <Image
          style={[styles.altlogoIcon, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/altlogo.png")}
        />
        <Image
          style={[styles.layerX00201Icon, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/layer-x0020-15.png")}
        />
      </View>
      <Pressable
        style={[styles.instagram21114631, styles.twitter5969020Position]}
        onPress={() => navigation.navigate("Yakup51")}
      >
        <Image
          style={[styles.icon3, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/instagram-21114631.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.twitter5969020, styles.twitter5969020Position]}
        onPress={() => navigation.navigate("Yakup2")}
      >
        <Image
          style={[styles.icon3, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/twitter-5969020.png")}
        />
      </Pressable>
      <Pressable
        style={styles.facebook59687641}
        onPress={() => navigation.navigate("Yakup6")}
      >
        <Image
          style={[styles.icon3, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/facebook-59687641.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.backArrow114886332, styles.paylaldPosition]}
        onPress={() => navigation.navigate("Yakup5")}
      >
        <Image
          style={[styles.icon3, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/backarrow-11488633-2.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.anasayfa1, styles.anasayfa1Layout]}
        onPress={() => navigation.navigate("AnaSayfa")}
      >
        <Image
          style={[styles.icon3, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/anasayfa-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.pheliler1, styles.anasayfa1Layout]}
        onPress={() => navigation.navigate("Yakup")}
      >
        <Image
          style={[styles.icon3, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/pheliler-1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.uyuarlar1}
        onPress={() => navigation.navigate("Yakup33")}
      >
        <Image
          style={[styles.icon3, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/uyuarlar-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconChildLayout: {
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
  profilPosition: {
    right: "0%",
    position: "absolute",
  },
  profileTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: "0%",
    position: "absolute",
  },
  groupIconLayout: {
    right: "13.6%",
    width: "82.27%",
    height: "12.98%",
    left: "4.13%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  yakup51Layout: {
    left: "5.97%",
    right: "77.95%",
    width: "16.08%",
    height: "8.84%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  twitterTypo1: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
  },
  beeniPosition: {
    left: "37.6%",
    right: "49.07%",
    width: "13.33%",
    height: "3.94%",
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
  twitterPosition1: {
    left: "31.55%",
    position: "absolute",
  },
  twitterTypo: {
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
  },
  twitterLayout: {
    right: "35.17%",
    width: "39.2%",
    height: "5.17%",
  },
  takvimconIconLayout: {
    left: "25.6%",
    right: "69.87%",
    width: "4.53%",
    height: "2.09%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  beeniTypo: {
    left: "33.6%",
    fontFamily: FontFamily.interLight,
    fontStyle: "italic",
    color: Color.colorSlategray,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  kiilerIconLayout: {
    left: "25.87%",
    right: "68.53%",
    width: "5.6%",
    height: "2.59%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    bottom: "20.62%",
    left: "5.97%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  twitterPosition: {
    top: "70.11%",
    left: "25.63%",
    position: "absolute",
  },
  twitter5969020Position: {
    height: "3.57%",
    bottom: "72.54%",
    top: "23.89%",
    position: "absolute",
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
  yakup51: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  profil: {
    height: "5.42%",
    width: "31.47%",
    top: "5.42%",
    bottom: "89.16%",
    left: "68.53%",
  },
  balk1: {
    top: "33.56%",
    fontSize: FontSize.size_xl,
    left: "4.13%",
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  yakup51Child: {
    height: "5.07%",
    width: "54.48%",
    top: "24.91%",
    right: "22.75%",
    bottom: "70.01%",
    left: "22.77%",
    position: "absolute",
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
  groupIcon: {
    top: "38.13%",
    bottom: "48.89%",
  },
  yakup51Item: {
    top: "39.4%",
    bottom: "51.76%",
  },
  twitter: {
    left: "25.63%",
    position: "absolute",
    top: "38.97%",
  },
  kii: {
    top: "0%",
  },
  beendi: {
    top: "50%",
  },
  beeni: {
    top: "45.86%",
    bottom: "50.2%",
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
    top: "42.52%",
    bottom: "52.55%",
    right: "39.39%",
    width: "29.07%",
    height: "4.93%",
    left: "31.55%",
  },
  xdekiResminFurkan: {
    left: "0%",
    position: "absolute",
    top: "0%",
  },
  tarafndanPaylald: {
    top: "57.14%",
    left: "0%",
    position: "absolute",
  },
  twitter2: {
    bottom: "55.86%",
    left: "25.63%",
    position: "absolute",
    top: "38.97%",
  },
  beeni1: {
    top: "48.08%",
    left: "31.47%",
    fontFamily: FontFamily.interLight,
    fontStyle: "italic",
    color: Color.colorSlategray,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  kiilerIcon: {
    top: "47.41%",
    right: "69.33%",
    bottom: "50%",
    left: "25.07%",
    width: "5.6%",
    height: "2.59%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  twitter3: {
    top: "44.64%",
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
  },
  takvimconIcon: {
    top: "44.46%",
    bottom: "53.45%",
  },
  icon: {
    height: "8.6%",
    width: "18.13%",
    top: "39.61%",
    right: "75.92%",
    bottom: "51.8%",
    left: "5.95%",
    position: "absolute",
  },
  groupIcon2: {
    top: "53.71%",
    bottom: "33.31%",
  },
  yakup51Inner: {
    top: "54.96%",
    bottom: "36.19%",
  },
  twitter4: {
    top: "54.53%",
    left: "25.63%",
    position: "absolute",
  },
  beeni2: {
    top: "61.44%",
    bottom: "34.62%",
  },
  twitter5: {
    top: "58.1%",
    bottom: "36.97%",
    right: "39.39%",
    width: "29.07%",
    height: "4.93%",
    left: "31.55%",
  },
  twitter6: {
    width: "52.53%",
    top: "54.14%",
    right: "21.84%",
    bottom: "40.69%",
    height: "5.17%",
    left: "25.63%",
    position: "absolute",
  },
  beeni3: {
    top: "63.65%",
  },
  twitter7: {
    top: "60.22%",
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
  },
  takvimconIcon1: {
    top: "60.02%",
    bottom: "37.88%",
  },
  kiilerIcon1: {
    top: "62.98%",
    bottom: "34.43%",
  },
  instagramIcon: {
    height: "9.74%",
    width: "14.93%",
    top: "55.04%",
    right: "78.4%",
    bottom: "35.22%",
  },
  groupIcon4: {
    top: "69.27%",
    bottom: "17.75%",
  },
  rectangleIcon: {
    top: "70.54%",
    right: "77.95%",
    width: "16.08%",
    height: "8.84%",
    bottom: "20.62%",
  },
  twitter8: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
  },
  beeni4: {
    top: "77.01%",
    bottom: "19.05%",
  },
  twitter9: {
    top: "73.67%",
    bottom: "21.4%",
    right: "39.39%",
    width: "29.07%",
    height: "4.93%",
    left: "31.55%",
  },
  twitter10: {
    bottom: "24.72%",
    right: "35.17%",
    width: "39.2%",
    height: "5.17%",
  },
  beeni5: {
    top: "79.21%",
  },
  twitter11: {
    top: "75.79%",
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
  },
  takvimconIcon2: {
    top: "75.6%",
    bottom: "22.3%",
  },
  kiilerIcon2: {
    top: "78.56%",
    bottom: "18.85%",
  },
  icon1: {
    height: "9.11%",
    width: "15.87%",
    top: "70.27%",
    right: "78.16%",
  },
  yakup51Child1: {
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
    width: "43.75%",
    bottom: "58.14%",
    left: "56.25%",
    right: "0%",
    position: "absolute",
    top: "0%",
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
    top: "93.72%",
    right: "8.88%",
    bottom: "0.99%",
    left: "82.59%",
    width: "8.53%",
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
  icon3: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  instagram21114631: {
    left: "26.67%",
    width: "8.27%",
    right: "65.07%",
  },
  twitter5969020: {
    left: "45.33%",
    right: "46.13%",
    width: "8.53%",
  },
  facebook59687641: {
    left: "64.27%",
    top: "24.01%",
    right: "28.27%",
    bottom: "72.78%",
    width: "7.47%",
    height: "3.2%",
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
    bottom: "1.48%",
    width: "13.07%",
    right: "65.07%",
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
  yakup1: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Yakup;
