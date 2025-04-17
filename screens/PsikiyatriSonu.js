import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const PsikiyatriSonu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.psikiyatriSonu}>
      <Image
        style={[styles.vectorIcon, styles.iconGroupLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={styles.psikiyatriSonu1}>
        <Image
          style={[styles.vectorIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/vector3.png")}
        />
        <Text style={[styles.letilecekMesaj, styles.letilecekMesajTypo]}>
          İletilecek Mesaj :
        </Text>
        <View style={styles.groupParent}>
          <Image
            style={[styles.vectorIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group12.png")}
          />
          <View style={styles.ankaraPsikoterapiAkademisine}>
            <Text
              style={[styles.ankaraPsikoterapi, styles.textTypo]}
            >{`Ankara Psikoterapi `}</Text>
            <Text style={[styles.akademisine, styles.textTypo]}>
              Akademisine ;
            </Text>
            <Text
              style={[styles.isimliKii, styles.textTypo]}
            >{`**** isimli kişi **** tarihinde `}</Text>
            <Text
              style={[styles.whatsappUygulamas, styles.textTypo]}
            >{`whatsapp uygulaması `}</Text>
            <Text
              style={[styles.zerindenSiberZorbala, styles.textTypo]}
            >{`üzerinden siber zorbalığa `}</Text>
            <Text
              style={[styles.uradnIddiaEtmi, styles.textTypo]}
            >{`uğradığını iddia etmiş `}</Text>
            <Text style={[styles.bulunmaktadr, styles.textTypo]}>
              bulunmaktadır.
            </Text>
            <Text
              style={[styles.zorbalkTanmVe, styles.textTypo]}
            >{`Zorbalık tanımı ve kanıt `}</Text>
            <Text
              style={[styles.minvalindeOlacakGrntler, styles.textTypo]}
            >{`minvalinde olacak görüntüler `}</Text>
            <Text style={[styles.ekteBulunmaktadr, styles.textTypo]}>
              ekte bulunmaktadır.
            </Text>
            <Text
              style={[styles.uradmSiberZorbalk, styles.textTypo]}
            >{`Uğradığım siber zorbalık `}</Text>
            <Text
              style={[styles.sonucuEitliKonularda, styles.textTypo]}
            >{`sonucu çeşitli konularda `}</Text>
            <Text
              style={[styles.kendimiKtHissediyor, styles.textTypo]}
            >{`kendimi kötü hissediyor ve `}</Text>
            <Text
              style={[styles.psikolojikDestepeIhtiyacm, styles.textTypo]}
            >{`psikolojik destepe ihtiyacım `}</Text>
            <Text style={[styles.olduunuDnyorum, styles.textTypo]}>
              olduğunu düşünüyorum.
            </Text>
            <Text
              style={[styles.madurlaIletiimeGemek, styles.textTypo]}
            >{`Mağdurla iletişime geçmek `}</Text>
            <Text style={[styles.iin, styles.textTypo]}>için ;</Text>
            <Text style={[styles.text, styles.textTypo]}>******</Text>
            <Text style={[styles.text1, styles.textTypo]}>*****</Text>
          </View>
        </View>
        <View style={styles.groupContainer}>
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate("Mesajlar")}
          >
            <Image
              style={[styles.icon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-16.png")}
            />
          </Pressable>
          <View style={styles.yukardakiMetninSsmdeIletil}>
            <Text
              style={[styles.yukardakiMetninSsmde, styles.letilecekMesajTypo]}
            >{`Yukardaki metnin SSMD'e `}</Text>
            <Text
              style={[
                styles.iletilmesineOnayVeriyorum,
                styles.letilecekMesajTypo,
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
          style={styles.psikiyatriSonuInner}
          onPress={() => navigation.navigate("Profil")}
        >
          <View style={styles.psikiyatriSonu1}>
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
      <View style={styles.groupView}>
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
            style={[styles.pressable, styles.pressablePosition]}
            onPress={() => navigation.navigate("Mesajlarm")}
          >
            <Image
              style={[styles.cahtIcon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/caht1.png")}
            />
            <Text style={[styles.messages, styles.homeTypo]}>Mesajlar</Text>
          </Pressable>
          <View style={[styles.view2, styles.pressablePosition]}>
            <Image
              style={[styles.profileicon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/02.png")}
            />
            <Text style={[styles.profile, styles.homeTypo]}>profil</Text>
          </View>
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
            style={[styles.pressable2, styles.pressablePosition]}
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
  letilecekMesajTypo: {
    textAlign: "left",
    color: Color.colorDarkslategray_300,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorDimgray,
    fontSize: FontSize.size_sm,
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
    left: "0%",
    position: "absolute",
  },
  pressablePosition: {
    top: "6.38%",
    position: "absolute",
  },
  icon2Position: {
    bottom: "48.94%",
    width: "7.25%",
    height: "51.06%",
    top: "0%",
    position: "absolute",
  },
  vectorIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  letilecekMesaj: {
    top: "14%",
    left: "18.93%",
  },
  ankaraPsikoterapi: {
    top: "0%",
  },
  akademisine: {
    top: "4%",
  },
  isimliKii: {
    top: "12%",
  },
  whatsappUygulamas: {
    top: "16%",
  },
  zerindenSiberZorbala: {
    top: "20%",
  },
  uradnIddiaEtmi: {
    top: "24%",
  },
  bulunmaktadr: {
    top: "28%",
  },
  zorbalkTanmVe: {
    top: "36%",
  },
  minvalindeOlacakGrntler: {
    top: "40%",
  },
  ekteBulunmaktadr: {
    top: "44%",
  },
  uradmSiberZorbalk: {
    top: "56%",
  },
  sonucuEitliKonularda: {
    top: "60%",
  },
  kendimiKtHissediyor: {
    top: "64%",
  },
  psikolojikDestepeIhtiyacm: {
    top: "68%",
  },
  olduunuDnyorum: {
    top: "72%",
  },
  madurlaIletiimeGemek: {
    top: "84%",
  },
  iin: {
    top: "88%",
  },
  text: {
    top: "92%",
  },
  text1: {
    top: "96%",
  },
  ankaraPsikoterapiAkademisine: {
    height: "93%",
    width: "81.55%",
    top: "1.66%",
    right: "12.02%",
    bottom: "5.34%",
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
    left: "89.86%",
    top: "19.44%",
    bottom: "25%",
    width: "10.14%",
    height: "55.56%",
    right: "0%",
    position: "absolute",
  },
  yukardakiMetninSsmde: {
    left: "0%",
    top: "0%",
  },
  iletilmesineOnayVeriyorum: {
    top: "50%",
    left: "0%",
  },
  yukardakiMetninSsmdeIletil: {
    width: "90.78%",
    right: "9.22%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  groupContainer: {
    height: "4.43%",
    width: "57.87%",
    top: "80.05%",
    right: "20.27%",
    bottom: "15.52%",
    left: "21.87%",
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
  psikiyatriSonu1: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  psikiyatriSonuInner: {
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
  },
  view: {
    height: "92.34%",
    width: "16.31%",
    right: "83.69%",
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
  },
  view1: {
    height: "94.04%",
    width: "21.15%",
    right: "58.16%",
    bottom: "5.96%",
    left: "20.69%",
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
  },
  pressable: {
    height: "93.62%",
    width: "14.5%",
    right: "21.45%",
    left: "64.05%",
    bottom: "0%",
  },
  profileicon: {
    height: "41.86%",
    width: "48.28%",
    right: "28.62%",
    bottom: "58.14%",
    left: "23.1%",
    top: "0%",
    position: "absolute",
  },
  profile: {
    top: "65.12%",
  },
  view2: {
    height: "91.49%",
    width: "8.76%",
    bottom: "2.13%",
    left: "91.24%",
    right: "0%",
  },
  icon2: {
    right: "89.12%",
    left: "3.63%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  pressable1: {
    left: "26.28%",
    right: "66.47%",
  },
  pressable2: {
    left: "93.26%",
    right: "2.51%",
    bottom: "55.32%",
    width: "4.23%",
    height: "38.3%",
  },
  group: {
    height: "44.76%",
    width: "88.27%",
    top: "48.57%",
    right: "6.67%",
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
  groupView: {
    height: "12.93%",
    top: "87.07%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  psikiyatriSonu: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default PsikiyatriSonu;
