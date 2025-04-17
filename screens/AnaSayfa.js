import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const AnaSayfa = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.anasayfa}>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector3.png")}
      />
      <View style={[styles.anasayfaInner, styles.groupViewPosition]}>
        <View
          style={[styles.bestDestinationWrapper, styles.vectorIconPosition]}
        >
          <Text style={styles.bestDestination}>Güvenlik İhlali</Text>
        </View>
      </View>
      <View style={styles.siberZorbalaKarLkKal}>
        <Text
          style={[styles.siberZorbalaKar, styles.lkKalkannzTypo]}
        >{`Siber Zorbalığa Karşı `}</Text>
        <Text style={[styles.lkKalkannz, styles.lkKalkannzTypo]}>
          İlk Kalkanınız!
        </Text>
      </View>
      <Image
        style={[styles.anasayfaChild, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector-2524.png")}
      />
      <Image
        style={[styles.anasayfaItem, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/group-109.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-24.png")}
      />
      <View style={[styles.groupView, styles.groupViewPosition]}>
        <View
          style={[styles.bestDestinationWrapper, styles.vectorIconPosition]}
        >
          <Text style={styles.bestDestination}>İtibar Zedelenmesi</Text>
        </View>
      </View>
      <View style={[styles.anasayfaInner1, styles.anasayfaInnerLayout]}>
        <View
          style={[styles.bestDestinationWrapper, styles.vectorIconPosition]}
        >
          <Text style={styles.bestDestination}>Santajın Amacı</Text>
        </View>
      </View>
      <View style={[styles.anasayfaInner2, styles.anasayfaInnerLayout]}>
        <View
          style={[styles.bestDestinationWrapper, styles.vectorIconPosition]}
        >
          <Text style={styles.bestDestination}>Fotoğraf İçeriği</Text>
        </View>
      </View>
      <View style={[styles.anasayfaInner3, styles.anasayfaInnerLayout]}>
        <View
          style={[styles.bestDestinationWrapper, styles.vectorIconPosition]}
        >
          <Text style={styles.bestDestination}>Psikolojik Unsurlar</Text>
        </View>
      </View>
      <Image
        style={[styles.anasayfaChild1, styles.rectangleIconLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-28.png")}
      />
      <Image
        style={[styles.arrowBackIos24dpFill0WghtIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/arrow-back-ios-24dp-fill0-wght400-grad0-opsz24.png")}
      />
      <Image
        style={[styles.layerX00201Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/layer-x0020-18.png")}
      />
      <Image
        style={[styles.simge1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/simge-11.png")}
      />
      <View style={[styles.anasayfaInner3, styles.anasayfaInnerLayout]}>
        <View
          style={[styles.bestDestinationWrapper, styles.vectorIconPosition]}
        >
          <Text style={styles.bestDestination}>Psikolojik Unsurlar</Text>
        </View>
      </View>
      <Pressable
        style={[styles.anasayfaInner3, styles.anasayfaInnerLayout]}
        onPress={() => navigation.navigate("PsikolojikUnsurlar")}
      >
        <View
          style={[styles.bestDestinationWrapper, styles.vectorIconPosition]}
        >
          <Text style={styles.bestDestination}>Psikolojik Unsurlar</Text>
        </View>
      </Pressable>
      <Pressable
        style={styles.ekranGrnts20240603152}
        onPress={() => navigation.navigate("PsikolojikUnsurlar")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/ekran-grnts-20240603-152203-1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.logo11}
        onPress={() => navigation.navigate("Yakup7")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/logo1-1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.burak1}
        onPress={() => navigation.navigate("HakanBurakDemir")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/burak-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.furkan1, styles.furkan1Position]}
        onPress={() => navigation.navigate("Frame")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/furkan-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.halime1, styles.furkan1Position]}
        onPress={() => navigation.navigate("Ikayetlerim1")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/halime-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupViewPosition: {
    bottom: "63.97%",
    top: "33.08%",
    height: "2.96%",
    position: "absolute",
  },
  vectorIconPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  lkKalkannzTypo: {
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_xl,
    left: "0%",
    position: "absolute",
  },
  rectangleIconLayout: {
    width: "11.2%",
    height: "5.17%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  anasayfaInnerLayout: {
    height: "2.96%",
    position: "absolute",
  },
  furkan1Position: {
    bottom: "37.81%",
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
  bestDestination: {
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  bestDestinationWrapper: {
    top: "0%",
    height: "100%",
  },
  anasayfaInner: {
    width: "34.67%",
    right: "62.75%",
    left: "2.59%",
  },
  siberZorbalaKar: {
    top: "0%",
  },
  lkKalkannz: {
    top: "50%",
  },
  siberZorbalaKarLkKal: {
    height: "5.91%",
    width: "54.67%",
    top: "18%",
    right: "40%",
    bottom: "76.08%",
    left: "5.33%",
    position: "absolute",
  },
  anasayfaChild: {
    height: "1.33%",
    width: "26.4%",
    top: "25.34%",
    right: "60.35%",
    bottom: "73.33%",
    left: "13.25%",
    position: "absolute",
  },
  anasayfaItem: {
    height: "12.07%",
    top: "87.93%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  rectangleIcon: {
    top: "37.97%",
    right: "73.55%",
    bottom: "56.86%",
    left: "15.25%",
  },
  groupView: {
    width: "46.67%",
    right: "3.33%",
    left: "50%",
  },
  anasayfaInner1: {
    width: "37.33%",
    top: "49.58%",
    right: "57.95%",
    bottom: "47.46%",
    left: "4.72%",
  },
  anasayfaInner2: {
    width: "38.13%",
    top: "49.21%",
    right: "9.2%",
    bottom: "47.83%",
    left: "52.67%",
  },
  anasayfaInner3: {
    width: "46.13%",
    top: "65.97%",
    right: "27.07%",
    bottom: "31.07%",
    left: "26.8%",
  },
  anasayfaChild1: {
    top: "70.42%",
    right: "46.48%",
    bottom: "24.41%",
    left: "42.32%",
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
  layerX00201Icon: {
    height: "3.13%",
    width: "7.63%",
    top: "4.93%",
    right: "88%",
    bottom: "91.95%",
    left: "4.37%",
    position: "absolute",
  },
  simge1Icon: {
    height: "5.42%",
    width: "11.73%",
    top: "70.69%",
    right: "46.13%",
    bottom: "23.89%",
    left: "42.13%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  ekranGrnts20240603152: {
    left: "43.2%",
    top: "71.55%",
    right: "47.47%",
    bottom: "24.63%",
    width: "9.33%",
    height: "3.82%",
    position: "absolute",
  },
  logo11: {
    top: "37.81%",
    right: "73.07%",
    bottom: "55.79%",
    width: "13.07%",
    height: "6.4%",
    left: "13.87%",
    position: "absolute",
  },
  burak1: {
    left: "67.73%",
    top: "37.32%",
    bottom: "56.16%",
    width: "13.6%",
    height: "6.53%",
    right: "18.67%",
    position: "absolute",
  },
  furkan1: {
    top: "54.93%",
    right: "70.93%",
    width: "15.2%",
    height: "7.27%",
    left: "13.87%",
  },
  halime1: {
    left: "68%",
    top: "55.91%",
    width: "13.33%",
    height: "6.28%",
    right: "18.67%",
  },
  anasayfa: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default AnaSayfa;
