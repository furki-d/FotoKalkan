import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const IkurSonu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ikurSonu}>
      <Image
        style={[styles.vectorIcon, styles.iconGroupLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={[styles.ikurSonu1, styles.groupPosition]}>
        <Image
          style={[styles.vectorIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/vector3.png")}
        />
        <Text style={[styles.letilecekMesaj, styles.textTypo]}>
          İletilecek Mesaj :
        </Text>
        <View style={styles.groupParent}>
          <Image
            style={[styles.vectorIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group12.png")}
          />
          <View style={styles.kuraIsimliKii}>
            <Text style={[styles.kura, styles.textClr]}>İŞKUR'a ;</Text>
            <Text
              style={[styles.isimliKii, styles.textClr]}
            >{`**** isimli kişi **** tarihinde `}</Text>
            <Text
              style={[styles.whatsappUygulamas, styles.textClr]}
            >{`whatsapp uygulaması `}</Text>
            <Text
              style={[styles.zerindenSiberZorbala, styles.textClr]}
            >{`üzerinden siber zorbalığa `}</Text>
            <Text
              style={[styles.uradnIddiaEtmi, styles.textClr]}
            >{`uğradığını iddia etmiş `}</Text>
            <Text style={[styles.bulunmaktadr, styles.textClr]}>
              bulunmaktadır.
            </Text>
            <Text
              style={[styles.zorbalkTanmVe, styles.textClr]}
            >{`Zorbalık tanımı ve kanıt `}</Text>
            <Text
              style={[styles.minvalindeOlacakGrntler, styles.textClr]}
            >{`minvalinde olacak görüntüler `}</Text>
            <Text style={[styles.ekteBulunmaktadr, styles.textClr]}>
              ekte bulunmaktadır.
            </Text>
            <Text
              style={[
                styles.uradmSiberZorbalk,
                styles.uradmSiberZorbalkPosition,
              ]}
            >{`Uğradığım siber zorbalık `}</Text>
            <Text
              style={[styles.sonucuIArkadalarmn, styles.textClr]}
            >{`sonucu iş arkadaşlarımın bana `}</Text>
            <Text
              style={[styles.olanSaygsnVe, styles.textClr]}
            >{`olan saygısını ve bunun `}</Text>
            <Text
              style={[styles.sonucundaIimiKaybetmi, styles.textClr]}
            >{`sonucunda işimi kaybetmiş `}</Text>
            <Text
              style={[styles.bulunmaktaymBulma, styles.textClr]}
            >{`bulunmaktayım. İş bulma `}</Text>
            <Text
              style={[styles.konusundaSizdenYardm, styles.textClr]}
            >{`konusunda sizden yardım `}</Text>
            <Text style={[styles.istiyorum, styles.textClr]}>istiyorum.</Text>
            <Text
              style={[styles.madurlaIletiimeGemek, styles.textClr]}
            >{`Mağdurla iletişime geçmek `}</Text>
            <Text style={[styles.iin, styles.textClr]}>için ;</Text>
            <Text style={[styles.text, styles.textClr]}>******</Text>
            <Text style={[styles.text1, styles.textClr]}>*****</Text>
          </View>
        </View>
        <View style={styles.groupContainer}>
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate("Mesajlar2")}
          >
            <Image
              style={[styles.icon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-16.png")}
            />
          </Pressable>
          <View
            style={[styles.yukardakiMetninSsmdeIletil, styles.groupPosition]}
          >
            <Text
              style={[styles.yukardakiMetninSsmde, styles.textTypo]}
            >{`Yukardaki metnin SSMD'e `}</Text>
            <Text
              style={[
                styles.iletilmesineOnayVeriyorum,
                styles.uradmSiberZorbalkPosition,
              ]}
            >
              iletilmesine onay veriyorum.
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
        <Pressable
          style={styles.ikurSonuInner}
          onPress={() => navigation.navigate("Profil")}
        >
          <View style={[styles.ikurSonu1, styles.groupPosition]}>
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
              <Text style={styles.leonardo}>Burak</Text>
            </View>
          </View>
        </Pressable>
        <Image
          style={[
            styles.arrowBackIos24dpFill0WghtIcon,
            styles.layerX00201Position,
          ]}
          resizeMode="cover"
          source={require("../assets/arrow-back-ios-24dp-fill0-wght400-grad0-opsz24.png")}
        />
      </View>
      <View style={[styles.groupView, styles.groupPosition]}>
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
            style={[styles.icon2, styles.icon2Position]}
            resizeMode="cover"
            source={require("../assets/02.png")}
          />
          <Image
            style={[styles.icon3, styles.icon3Position]}
            resizeMode="cover"
            source={require("../assets/home1.png")}
          />
          <Pressable
            style={[styles.pressable1, styles.icon3Position]}
            onPress={() => navigation.navigate("Ikayetlerim")}
          >
            <Image
              style={[styles.icon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/calendar.png")}
            />
          </Pressable>
          <Pressable
            style={styles.icon2Position}
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
        <Text style={[styles.profile, styles.homeTypo]}>profil</Text>
      </View>
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
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  textClr: {
    color: Color.colorDimgray,
    fontSize: FontSize.size_sm,
  },
  uradmSiberZorbalkPosition: {
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: "0%",
    position: "absolute",
  },
  layerX00201Position: {
    left: "2.93%",
    position: "absolute",
  },
  homeTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorDarkslategray_300,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  icon2Position: {
    left: "95.66%",
    bottom: "55.32%",
    width: "4.34%",
    height: "38.3%",
    top: "6.38%",
    right: "0%",
    position: "absolute",
  },
  icon3Position: {
    bottom: "48.94%",
    width: "7.44%",
    height: "51.06%",
    top: "0%",
    position: "absolute",
  },
  vectorIcon: {
    left: "0%",
    bottom: "0%",
    position: "absolute",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  letilecekMesaj: {
    top: "14%",
    color: Color.colorDarkslategray_300,
    fontSize: FontSize.size_mini,
    left: "18.93%",
  },
  kura: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    left: "0%",
    top: "0%",
  },
  isimliKii: {
    top: "7.69%",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    left: "0%",
  },
  whatsappUygulamas: {
    top: "11.54%",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    left: "0%",
  },
  zerindenSiberZorbala: {
    top: "15.38%",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    left: "0%",
  },
  uradnIddiaEtmi: {
    top: "19.23%",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    left: "0%",
  },
  bulunmaktadr: {
    top: "23.08%",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    left: "0%",
  },
  zorbalkTanmVe: {
    top: "30.77%",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    left: "0%",
  },
  minvalindeOlacakGrntler: {
    top: "34.62%",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    left: "0%",
  },
  ekteBulunmaktadr: {
    top: "38.46%",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    left: "0%",
  },
  uradmSiberZorbalk: {
    color: Color.colorDimgray,
    fontSize: FontSize.size_sm,
  },
  sonucuIArkadalarmn: {
    top: "53.85%",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    left: "0%",
  },
  olanSaygsnVe: {
    top: "57.69%",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    left: "0%",
  },
  sonucundaIimiKaybetmi: {
    top: "61.54%",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    left: "0%",
  },
  bulunmaktaymBulma: {
    top: "65.38%",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    left: "0%",
  },
  konusundaSizdenYardm: {
    top: "69.23%",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    left: "0%",
  },
  istiyorum: {
    top: "73.08%",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    left: "0%",
  },
  madurlaIletiimeGemek: {
    top: "84.62%",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    left: "0%",
  },
  iin: {
    top: "88.46%",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    left: "0%",
  },
  text: {
    top: "92.31%",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    left: "0%",
  },
  text1: {
    top: "96.15%",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    left: "0%",
  },
  kuraIsimliKii: {
    height: "96.72%",
    width: "85.41%",
    top: "1.01%",
    right: "8.15%",
    bottom: "2.28%",
    left: "6.44%",
    position: "absolute",
  },
  groupParent: {
    height: "56.28%",
    width: "62.13%",
    top: "18.97%",
    right: "18.93%",
    bottom: "24.75%",
    left: "18.93%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: "90.09%",
    top: "25.83%",
    bottom: "18.61%",
    width: "9.91%",
    height: "55.56%",
    right: "0%",
    position: "absolute",
  },
  yukardakiMetninSsmde: {
    color: Color.colorDarkslategray_300,
    fontSize: FontSize.size_mini,
    left: "0%",
    top: "0%",
  },
  iletilmesineOnayVeriyorum: {
    color: Color.colorDarkslategray_300,
    fontSize: FontSize.size_mini,
  },
  yukardakiMetninSsmdeIletil: {
    width: "88.74%",
    right: "11.26%",
    left: "0%",
    top: "0%",
    height: "100%",
  },
  groupContainer: {
    height: "4.43%",
    width: "59.2%",
    top: "79.77%",
    right: "20.27%",
    bottom: "15.8%",
    left: "20.53%",
    position: "absolute",
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
    color: Color.colorGray,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: "0%",
    top: "0%",
    position: "absolute",
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
  ikurSonu1: {
    left: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  ikurSonuInner: {
    height: "5.42%",
    width: "31.47%",
    top: "3.82%",
    bottom: "90.76%",
    left: "68.53%",
    right: "0%",
    position: "absolute",
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
    position: "absolute",
    right: "0%",
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
  icon2: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  icon3: {
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
  profile: {
    top: "76.19%",
    left: "84.53%",
  },
  groupView: {
    height: "12.93%",
    top: "87.07%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  ikurSonu: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default IkurSonu;
