import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Frame1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13Mini3Parent}>
      <View style={[styles.iphone13Mini3, styles.childPosition]}>
        <Image
          style={[styles.vectorIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/vector4.png")}
        />
        <Image
          style={[styles.iphone13Mini3Child, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/group-105.png")}
        />
        <Text style={styles.antajnAmac}>Şantajın Amacı</Text>
        <Image
          style={[styles.arrowBackIos24dpFill0WghtIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-back-ios-24dp-fill0-wght400-grad0-opsz241.png")}
        />
        <Image
          style={[styles.layerX00201Icon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/layer-x0020-13.png")}
        />
        <View style={styles.setiinizBlmleIlgiliAyr}>
          <Text
            style={[styles.setiinizBlmleIlgili, styles.yaznzTypo]}
          >{`Seçtiğiniz bölümle ilgili ayrıntıları `}</Text>
          <Text style={[styles.yaznz, styles.yaznzTypo]}>yazınız.</Text>
        </View>
        <Image
          style={[styles.groupIcon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/group11.png")}
        />
        <Text style={[styles.birMesajYazn, styles.gnderTypo]}>
          Bir mesaj yazın
        </Text>
        <Image
          style={[styles.g10Icon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/g102.png")}
        />
        <View style={styles.vectorParent}>
          <Image
            style={[styles.groupChild, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-816.png")}
          />
          <Image
            style={[styles.groupItem, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group-306.png")}
          />
          <View style={styles.leonardoWrapper}>
            <Text style={styles.leonardo}>Yakup</Text>
          </View>
        </View>
        <Image
          style={[styles.whatsappImage20240519At2, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/whatsapp-image-20240519-at-2220002.png")}
        />
        <View style={styles.group}>
          <View style={[styles.view, styles.childPosition]}>
            <Text style={[styles.home, styles.homeTypo]}>AnaSayfa</Text>
          </View>
          <View style={[styles.view1, styles.childPosition1]}>
            <Image
              style={[styles.profileicon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/profileicon2.png")}
            />
            <Text style={[styles.profile, styles.homeTypo]}>Profil</Text>
          </View>
          <Image
            style={[styles.icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/02.png")}
          />
          <Pressable
            style={styles.pressable}
            onPress={() => navigation.navigate("AnaSayfa")}
          >
            <Image
              style={[styles.icon1, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/041.png")}
            />
          </Pressable>
        </View>
        <Pressable
          style={styles.iphone13Mini3Item}
          onPress={() => navigation.navigate("IPhone13Mini1")}
        />
        <Text style={[styles.gnder, styles.gnderTypo]}>Gönder</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    left: "0%",
    position: "absolute",
  },
  iconGroupLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  yaznzTypo: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    left: "0%",
    position: "absolute",
  },
  gnderTypo: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  homeTypo: {
    color: Color.colorDarkslategray_300,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    left: "0%",
    position: "absolute",
  },
  childPosition1: {
    bottom: "0%",
    right: "0%",
  },
  iconPosition: {
    bottom: "58.14%",
    height: "41.86%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
  },
  vectorIcon: {
    width: "99.73%",
    left: "0.27%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  iphone13Mini3Child: {
    height: "12.01%",
    top: "87.99%",
    left: "0%",
    position: "absolute",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  antajnAmac: {
    top: "19.09%",
    left: "27.66%",
    fontSize: FontSize.size_6xl,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  arrowBackIos24dpFill0WghtIcon: {
    height: "3.69%",
    width: "7.98%",
    top: "8.25%",
    right: "81.91%",
    bottom: "88.05%",
    left: "10.11%",
    position: "absolute",
  },
  layerX00201Icon: {
    height: "3.13%",
    width: "7.61%",
    top: "2.19%",
    right: "86.09%",
    bottom: "94.68%",
    left: "6.3%",
    position: "absolute",
  },
  setiinizBlmleIlgili: {
    top: "0%",
  },
  yaznz: {
    top: "50%",
  },
  setiinizBlmleIlgiliAyr: {
    height: "5.67%",
    width: "77.39%",
    top: "28.57%",
    right: "16.22%",
    bottom: "65.76%",
    left: "6.38%",
    position: "absolute",
  },
  groupIcon: {
    height: "28.45%",
    width: "78.19%",
    top: "39.53%",
    right: "10.64%",
    bottom: "32.02%",
    left: "11.17%",
    position: "absolute",
  },
  birMesajYazn: {
    top: "40.17%",
    left: "13.56%",
  },
  g10Icon: {
    height: "8.33%",
    width: "19.57%",
    top: "7.88%",
    right: "39.71%",
    bottom: "83.79%",
    left: "40.72%",
    position: "absolute",
  },
  groupChild: {
    left: "0%",
    position: "absolute",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
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
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    left: "0%",
    top: "0%",
    position: "absolute",
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
  vectorParent: {
    height: "5.42%",
    width: "31.38%",
    top: "3.82%",
    right: "2.13%",
    bottom: "90.76%",
    left: "66.49%",
    position: "absolute",
  },
  whatsappImage20240519At2: {
    height: "8.83%",
    width: "16.3%",
    top: "86.77%",
    right: "41.17%",
    bottom: "4.4%",
    left: "42.53%",
    position: "absolute",
  },
  home: {
    top: "0%",
  },
  view: {
    height: "34.88%",
    width: "16.31%",
    top: "59.07%",
    right: "83.69%",
    bottom: "6.05%",
  },
  profileicon: {
    width: "46.67%",
    right: "27.67%",
    left: "25.67%",
  },
  profile: {
    top: "65.12%",
  },
  view1: {
    width: "9.06%",
    left: "90.94%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  icon: {
    width: "4.23%",
    right: "2.51%",
    left: "93.26%",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  pressable: {
    left: "4.53%",
    right: "88.22%",
    bottom: "44.19%",
    width: "7.25%",
    height: "55.81%",
    top: "0%",
    position: "absolute",
  },
  group: {
    height: "5.3%",
    width: "88.03%",
    top: "93.72%",
    right: "6.91%",
    bottom: "0.99%",
    left: "5.05%",
    position: "absolute",
  },
  iphone13Mini3Item: {
    top: 567,
    left: 244,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorDimgray,
    borderWidth: 1,
    width: 91,
    height: 40,
    position: "absolute",
  },
  gnder: {
    top: "71.43%",
    left: "70.74%",
  },
  iphone13Mini3: {
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  iphone13Mini3Parent: {
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default Frame1;
