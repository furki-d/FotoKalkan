import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const Yakup4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.yakup41}>
      <Image
        style={[styles.vectorIcon, styles.iconGroupLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={[styles.yakup411, styles.paylaldPosition]}>
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
        <View style={[styles.profil, styles.profilPosition]}>
          <View style={[styles.yakup411, styles.paylaldPosition]}>
            <Image
              style={[styles.vectorIcon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-816.png")}
            />
            <Image
              style={[styles.groupItem, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/group-3011.png")}
            />
            <View style={styles.leonardoWrapper}>
              <Text style={[styles.leonardo, styles.profileTypo]}>Yakup</Text>
            </View>
          </View>
        </View>
        <Text style={styles.balk1}>Tüm Resimler</Text>
        <Image
          style={[styles.groupIcon, styles.resimPosition]}
          resizeMode="cover"
          source={require("../assets/group34.png")}
        />
        <Image
          style={[styles.yakup41Child, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-27.png")}
        />
        <Text style={styles.twitter}>Twitter da paylaşıldı</Text>
        <View style={[styles.beeni, styles.beeniPosition1]}>
          <Text style={[styles.kii, styles.kiiTypo]}>{`10 kişi `}</Text>
          <Text style={[styles.beendi, styles.kiiTypo]}>beğendi</Text>
        </View>
        <View style={[styles.twitter1, styles.twitterPosition2]}>
          <Text
            style={[styles.mays2024De, styles.twitterTypo1]}
          >{`15 mayıs 2024 de `}</Text>
          <Text style={[styles.paylald, styles.twitterTypo1]}>paylaşıldı</Text>
        </View>
        <Image
          style={[styles.groupIcon, styles.resimPosition]}
          resizeMode="cover"
          source={require("../assets/group34.png")}
        />
        <Text style={styles.twitter}>X'de paylaşıldı</Text>
        <Text style={[styles.beeni1, styles.beeniTypo]}>10 kişi beğendi</Text>
        <Image
          style={[styles.kiilerIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/kiiler2.png")}
        />
        <Text style={[styles.twitter3, styles.twitterPosition2]}>
          15 mayıs 2024 de paylaşıldı
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
            source={require("../assets/rectangle-277.png")}
          />
          <Text style={[styles.twitter4, styles.twitterTypo]}>
            Twitter da paylaşıldı
          </Text>
          <View style={[styles.beeni2, styles.beeniPosition]}>
            <Text style={[styles.kii, styles.kiiTypo]}>{`10 kişi `}</Text>
            <Text style={[styles.beendi, styles.kiiTypo]}>beğendi</Text>
          </View>
          <View style={[styles.twitter5, styles.twitterPosition1]}>
            <Text
              style={[styles.mays2024De, styles.twitterTypo1]}
            >{`15 mayıs 2024 de `}</Text>
            <Text style={[styles.paylald, styles.twitterTypo1]}>
              paylaşıldı
            </Text>
          </View>
          <Image
            style={[styles.vectorIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group17.png")}
          />
          <Text style={[styles.twitter6, styles.twitterTypo]}>
            İnstagramda paylaşıldı
          </Text>
          <Text style={[styles.beeni3, styles.beeniPosition]}>
            10 kişi beğendi
          </Text>
          <Image
            style={[styles.kiilerIcon1, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/kiiler3.png")}
          />
          <Text style={[styles.twitter7, styles.twitterPosition1]}>
            15 mayıs 2024 de paylaşıldı
          </Text>
          <Image
            style={[styles.takvimconIcon1, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/takvimcon1.png")}
          />
        </View>
        <View style={[styles.resim1, styles.resimPosition]}>
          <Image
            style={[styles.vectorIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group35.png")}
          />
          <Image
            style={[styles.resimItem, styles.resimLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-278.png")}
          />
          <Text style={[styles.twitter4, styles.twitterTypo]}>
            Twitter da paylaşıldı
          </Text>
          <View style={[styles.beeni2, styles.beeniPosition]}>
            <Text style={[styles.kii, styles.kiiTypo]}>{`10 kişi `}</Text>
            <Text style={[styles.beendi, styles.kiiTypo]}>beğendi</Text>
          </View>
          <View style={[styles.twitter9, styles.twitterPosition]}>
            <Text
              style={[styles.mays2024De, styles.twitterTypo1]}
            >{`15 mayıs 2024 de `}</Text>
            <Text style={[styles.paylald, styles.twitterTypo1]}>
              paylaşıldı
            </Text>
          </View>
          <Image
            style={[styles.vectorIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group35.png")}
          />
          <Text style={[styles.twitter4, styles.twitterTypo]}>
            Facebookta paylaşıldı
          </Text>
          <Text style={[styles.beeni5, styles.beeniPosition]}>
            10 kişi beğendi
          </Text>
          <Image
            style={[styles.kiilerIcon1, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/kiiler4.png")}
          />
          <Text style={[styles.twitter11, styles.twitterPosition]}>
            15 mayıs 2024 de paylaşıldı
          </Text>
          <Image
            style={[styles.takvimconIcon1, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/takvimcon1.png")}
          />
        </View>
        <Image
          style={[styles.kiilerIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/kiiler2.png")}
        />
        <Image
          style={[styles.yakup41Item, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/group-96.png")}
        />
        <Image
          style={[styles.icon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/11.png")}
        />
        <Image
          style={[styles.instagramIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/instagram5.png")}
        />
        <Image
          style={[styles.p865h3102Icon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/306907p865h31021.png")}
        />
        <Image
          style={[styles.logoIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/logo7.png")}
        />
        <Image
          style={[styles.yakup41Inner, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/group-107.png")}
        />
        <View style={styles.group}>
          <View style={[styles.yakup411, styles.paylaldPosition]}>
            <Image
              style={[styles.profileicon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/profileicon2.png")}
            />
            <Text style={[styles.profile, styles.profileTypo]}>rofil</Text>
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
          source={require("../assets/altlogo4.png")}
        />
        <Image
          style={[styles.layerX00201Icon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/layer-x0020-16.png")}
        />
      </View>
      <Pressable
        style={[styles.backArrow114886332, styles.paylaldPosition]}
        onPress={() => navigation.navigate("Yakup5")}
      >
        <Image
          style={[styles.icon2, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/backarrow-11488633-2.png")}
        />
      </Pressable>
      <Image
        style={[styles.instagram21114631Icon, styles.iconGroupLayout]}
        resizeMode="cover"
        source={require("../assets/instagram-21114631.png")}
      />
      <Image
        style={[styles.twitter5969020Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/twitter-5969020.png")}
      />
      <Image
        style={[styles.facebook59687641Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/facebook-59687641.png")}
      />
      <Pressable
        style={[styles.anasayfa1, styles.anasayfa1Layout]}
        onPress={() => navigation.navigate("AnaSayfa")}
      >
        <Image
          style={[styles.icon2, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/anasayfa-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.pheliler1, styles.anasayfa1Layout]}
        onPress={() => navigation.navigate("Yakup")}
      >
        <Image
          style={[styles.icon2, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/pheliler-1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.uyuarlar1}
        onPress={() => navigation.navigate("Yakup33")}
      >
        <Image
          style={[styles.icon2, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/uyuarlar-1.png")}
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
  paylaldPosition: {
    left: "0%",
    position: "absolute",
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
  resimPosition: {
    right: "13.6%",
    width: "82.27%",
    height: "12.98%",
    left: "4.13%",
    position: "absolute",
  },
  beeniPosition1: {
    left: "37.6%",
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
    top: "42.52%",
    position: "absolute",
  },
  twitterTypo1: {
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
  },
  beeniTypo: {
    fontFamily: FontFamily.interLight,
    fontStyle: "italic",
    color: Color.colorSlategray,
    fontSize: FontSize.size_smi,
    textAlign: "left",
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
    left: "26.13%",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  beeniPosition: {
    left: "40.68%",
    position: "absolute",
  },
  twitterPosition1: {
    left: "33.32%",
    top: "33.78%",
    position: "absolute",
  },
  twitterPosition: {
    top: "33.87%",
    left: "33.32%",
    position: "absolute",
  },
  iconPosition: {
    bottom: "71.92%",
    maxHeight: "100%",
    maxWidth: "100%",
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
  yakup411: {
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
    top: "33.58%",
    fontSize: FontSize.size_xl,
    left: "4.13%",
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  groupIcon: {
    top: "38.13%",
    bottom: "48.89%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  yakup41Child: {
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
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
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
  beeni1: {
    top: "45.74%",
    left: "37.6%",
    position: "absolute",
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
  resimChild: {
    top: "9.68%",
    bottom: "22.2%",
  },
  twitter4: {
    top: "6.36%",
  },
  beeni2: {
    height: "30.36%",
    width: "16.21%",
    top: "59.58%",
    right: "43.11%",
    bottom: "10.06%",
  },
  twitter5: {
    bottom: "28.27%",
    right: "31.35%",
    width: "35.33%",
    height: "37.95%",
  },
  twitter6: {
    top: "3.32%",
  },
  beeni3: {
    top: "58.54%",
    fontFamily: FontFamily.interLight,
    fontStyle: "italic",
    color: Color.colorSlategray,
    fontSize: FontSize.size_smi,
    textAlign: "left",
  },
  kiilerIcon1: {
    height: "19.54%",
    width: "14.17%",
    top: "54.74%",
    right: "60.97%",
    bottom: "25.71%",
    left: "24.86%",
    position: "absolute",
  },
  twitter7: {
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
  },
  takvimconIcon1: {
    height: "16.22%",
    width: "5.54%",
    top: "31.21%",
    right: "67.94%",
    bottom: "52.56%",
    left: "26.52%",
    position: "absolute",
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
    bottom: "28.18%",
    right: "31.35%",
    width: "35.33%",
    height: "37.95%",
  },
  beeni5: {
    top: "58.63%",
    fontFamily: FontFamily.interLight,
    fontStyle: "italic",
    color: Color.colorSlategray,
    fontSize: FontSize.size_smi,
    textAlign: "left",
  },
  twitter11: {
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
  },
  resim1: {
    top: "66.64%",
    bottom: "20.38%",
  },
  yakup41Item: {
    height: "5.07%",
    width: "54.48%",
    top: "24.91%",
    right: "22.75%",
    bottom: "70.01%",
    left: "22.77%",
    position: "absolute",
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
  instagramIcon: {
    height: "9.74%",
    width: "14.93%",
    top: "54%",
    right: "77.97%",
    bottom: "36.26%",
    left: "7.09%",
    position: "absolute",
  },
  p865h3102Icon: {
    height: "10.38%",
    width: "16.99%",
    top: "67.93%",
    right: "76.48%",
    bottom: "21.69%",
    left: "6.53%",
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
  yakup41Inner: {
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
  icon2: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  backArrow114886332: {
    top: "10.22%",
    right: "87.97%",
    bottom: "84.22%",
    width: "12.03%",
    height: "5.55%",
  },
  instagram21114631Icon: {
    width: "8.27%",
    top: "24.14%",
    right: "65.33%",
    bottom: "72.29%",
    left: "26.4%",
    height: "3.57%",
    position: "absolute",
  },
  twitter5969020Icon: {
    top: "24.51%",
    right: "46.13%",
    left: "45.33%",
    height: "3.57%",
    width: "8.53%",
  },
  facebook59687641Icon: {
    height: "3.2%",
    width: "7.47%",
    top: "24.88%",
    right: "27.73%",
    left: "64.8%",
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
  yakup41: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Yakup4;
