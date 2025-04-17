import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const Mesajlarm1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mesajlarm1}>
      <Image
        style={[styles.vectorIcon, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <View style={styles.mesajlarm}>
        <Image
          style={[styles.vectorIcon1, styles.vectorIcon1Position]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={[styles.mesajlarmChild, styles.vectorIcon1Position]}
          resizeMode="cover"
          source={require("../assets/group-1405.png")}
        />
        <View style={[styles.groupParent, styles.groupParentPosition]}>
          <Image
            style={[styles.vectorIcon, styles.iconChildLayout]}
            resizeMode="cover"
            source={require("../assets/group.png")}
          />
          <View style={styles.group}>
            <View style={[styles.view, styles.viewGroupPosition]}>
              <Text style={[styles.calendar, styles.profileTypo]}>
                Şilkayetlerim
              </Text>
            </View>
            <View style={styles.view1}>
              <Image
                style={[styles.cahtIcon, styles.iconChildLayout]}
                resizeMode="cover"
                source={require("../assets/caht.png")}
              />
              <Text style={[styles.messages, styles.profileTypo]}>
                mesjlarım
              </Text>
            </View>
            <View style={styles.view2}>
              <Image
                style={[styles.profileicon, styles.iconChildLayout]}
                resizeMode="cover"
                source={require("../assets/profileicon4.png")}
              />
              <Text style={[styles.profile, styles.profileTypo]}>profil</Text>
            </View>
            <View style={[styles.view, styles.viewGroupPosition]}>
              <Text style={[styles.calendar, styles.profileTypo]}>
                Şilkayetlerim
              </Text>
            </View>
            <View style={styles.view1}>
              <Image
                style={[styles.cahtIcon, styles.iconChildLayout]}
                resizeMode="cover"
                source={require("../assets/caht.png")}
              />
              <Text style={[styles.messages, styles.profileTypo]}>
                mesjlarım
              </Text>
            </View>
            <View style={styles.view2}>
              <Image
                style={[styles.profileicon, styles.iconChildLayout]}
                resizeMode="cover"
                source={require("../assets/profileicon4.png")}
              />
              <Text style={[styles.profile, styles.profileTypo]}>profil</Text>
            </View>
          </View>
          <Image
            style={[styles.homeIcon, styles.iconChildLayout]}
            resizeMode="cover"
            source={require("../assets/home.png")}
          />
        </View>
        <Text style={[styles.mesajlarm2, styles.profile3Typo]}>Mesajlarım</Text>
        <Image
          style={[styles.mesajlarmItem, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/group-10.png")}
        />
        <Image
          style={[styles.mesajlarmInner, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/group-98.png")}
        />
        <Image
          style={[styles.mesajlarmChild1, styles.groupParentPosition]}
          resizeMode="cover"
          source={require("../assets/group-122.png")}
        />
        <View style={styles.vectorParent}>
          <Image
            style={[styles.vectorIcon, styles.iconChildLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-8451.png")}
          />
          <Text style={[styles.typeYouMessage, styles.profileTypo]}>
            Arayın
          </Text>
        </View>
        <Image
          style={[styles.mesajlarmChild2, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/group-13.png")}
        />
        <Image
          style={[styles.mikrofonIcon, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/mikrofon.png")}
        />
        <View style={[styles.groupGroup, styles.viewGroupPosition]}>
          <Image
            style={[styles.groupIcon1, styles.groupChildPosition]}
            resizeMode="cover"
            source={require("../assets/group37.png")}
          />
          <View style={[styles.groupContainer, styles.viewGroupPosition]}>
            <View style={[styles.vectorGroup, styles.vectorPosition]}>
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/vector-25284.png")}
              />
              <View
                style={[
                  styles.backarrowClipContentParent,
                  styles.backarrowContentPosition1,
                ]}
              >
                <Image
                  style={[
                    styles.backarrowClipContent,
                    styles.backarrowContentPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/backarrow-clip-content12.png")}
                />
                <View
                  style={[styles.settingsWrapper, styles.viewGroupPosition]}
                >
                  <Text style={[styles.settings, styles.settingsPosition]}>
                    Başka bir talep
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.vectorContainer, styles.vectorPosition]}>
              <Image
                style={[styles.groupInner, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/vector-25264.png")}
              />
              <View
                style={[
                  styles.backarrowClipContentGroup,
                  styles.backarrowContentPosition1,
                ]}
              >
                <Image
                  style={[
                    styles.backarrowClipContent1,
                    styles.backarrowContentPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/backarrow-clip-content13.png")}
                />
                <View
                  style={[styles.bookmarkedWrapper, styles.viewGroupPosition]}
                >
                  <Text
                    style={[styles.settings, styles.settingsPosition]}
                  >{`Kişisel Verileri Koruma `}</Text>
                </View>
              </View>
            </View>
            <Image
              style={[styles.groupChild1, styles.groupChildPosition]}
              resizeMode="cover"
              source={require("../assets/vector-25284.png")}
            />
            <View style={[styles.groupView, styles.viewGroupPosition]}>
              <Image
                style={[styles.groupChild2, styles.groupChildPosition]}
                resizeMode="cover"
                source={require("../assets/vector-25254.png")}
              />
              <View style={styles.backarrowClipContentContainer}>
                <Image
                  style={[
                    styles.backarrowClipContent2,
                    styles.backarrowContentPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/backarrow-clip-content14.png")}
                />
                <View style={[styles.profileWrapper, styles.viewGroupPosition]}>
                  <Text style={[styles.settings, styles.settingsPosition]}>
                    Siber Asistan
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Text style={[styles.profile3, styles.profile3Typo]}>rofil</Text>
        <Pressable
          style={styles.home}
          onPress={() => navigation.navigate("AnaSayfa")}
        >
          <Text style={[styles.anasayfa, styles.profile3Typo]}>AnaSayfa</Text>
        </Pressable>
        <Text style={[styles.calendar2, styles.profile3Typo]}>
          Şikayetlerim
        </Text>
        <Text style={[styles.messages2, styles.profile3Typo]}>Mesajlarım</Text>
        <Image
          style={[styles.layerX00201Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/layer-x0020-1.png")}
        />
        <View style={styles.mesajlarmInner1}>
          <View style={[styles.groupContainer, styles.viewGroupPosition]}>
            <Image
              style={[styles.vectorIcon, styles.iconChildLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-816.png")}
            />
            <Image
              style={[styles.groupChild3, styles.iconChildLayout]}
              resizeMode="cover"
              source={require("../assets/group-3018.png")}
            />
            <View style={styles.leonardoWrapper}>
              <Text style={[styles.leonardo, styles.settingsPosition]}>
                Yakup
              </Text>
            </View>
          </View>
        </View>
        <Image
          style={[styles.arrowBackIos24dpFill0WghtIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/arrow-back-ios-24dp-fill0-wght400-grad0-opsz24.png")}
        />
      </View>
      <Pressable
        style={[styles.backArrow114886332, styles.viewGroupPosition]}
        onPress={() => navigation.navigate("FotorafnIerii2")}
      >
        <Image
          style={[styles.icon, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/backarrow-11488633-2.png")}
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
  vectorIcon1Position: {
    left: "2.26%",
    width: "97.74%",
    right: "0%",
  },
  groupParentPosition: {
    top: "87.46%",
    position: "absolute",
  },
  viewGroupPosition: {
    left: "0%",
    position: "absolute",
  },
  profileTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  profile3Typo: {
    color: Color.colorDarkslategray_300,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  groupChildPosition: {
    right: "2.26%",
    width: "97.74%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorPosition: {
    right: "0.25%",
    width: "99.75%",
    left: "0%",
    position: "absolute",
  },
  groupPosition: {
    right: "2.01%",
    width: "97.99%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  backarrowContentPosition1: {
    left: "13.57%",
    width: "86.43%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  backarrowContentPosition: {
    left: "93.02%",
    width: "6.98%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  settingsPosition: {
    color: Color.colorGray,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  iconPosition: {
    right: "86.47%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    left: "0%",
    position: "absolute",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  vectorIcon1: {
    height: "98.89%",
    bottom: "1.11%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    top: "0%",
    position: "absolute",
  },
  mesajlarmChild: {
    height: "71.79%",
    top: "19.07%",
    bottom: "9.14%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  calendar: {
    color: Color.colorWhitesmoke_100,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    left: "0%",
    top: "0%",
  },
  view: {
    height: "33.56%",
    width: "28.06%",
    top: "58.39%",
    right: "71.94%",
    bottom: "8.05%",
  },
  cahtIcon: {
    height: "53.69%",
    width: "44.44%",
    right: "28.15%",
    bottom: "46.31%",
    left: "27.41%",
    top: "0%",
    position: "absolute",
  },
  messages: {
    top: "66.44%",
    color: Color.colorWhitesmoke_100,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    left: "0%",
  },
  view1: {
    width: "21.04%",
    right: "26.81%",
    left: "52.14%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  profileicon: {
    height: "43.9%",
    width: "44.03%",
    bottom: "56.1%",
    left: "55.97%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  profile: {
    top: "63.41%",
    color: Color.colorWhitesmoke_100,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    left: "0%",
  },
  view2: {
    height: "91.72%",
    width: "12.39%",
    bottom: "8.28%",
    left: "87.61%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  group: {
    height: "41.78%",
    width: "65.79%",
    top: "25.05%",
    right: "10.05%",
    bottom: "33.18%",
    left: "24.15%",
    position: "absolute",
  },
  homeIcon: {
    height: "22.43%",
    width: "6.15%",
    top: "21.96%",
    right: "87.69%",
    bottom: "55.61%",
    left: "6.15%",
    position: "absolute",
  },
  groupParent: {
    height: "12.54%",
    left: "2.26%",
    width: "97.74%",
    right: "0%",
    bottom: "0%",
  },
  mesajlarm2: {
    top: "7.15%",
    left: "28.07%",
    fontSize: FontSize.size_6xl,
    position: "absolute",
  },
  mesajlarmItem: {
    height: "4.25%",
    width: "9.3%",
    top: "89.58%",
    right: "63.93%",
    bottom: "6.16%",
    left: "26.77%",
    position: "absolute",
  },
  mesajlarmInner: {
    height: "3.82%",
    width: "8.72%",
    top: "89.81%",
    right: "22.31%",
    bottom: "6.37%",
    left: "68.97%",
    position: "absolute",
  },
  mesajlarmChild1: {
    height: "7.78%",
    width: "14.46%",
    right: "41.63%",
    bottom: "4.76%",
    left: "43.91%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  typeYouMessage: {
    top: "19.58%",
    left: "14.21%",
    color: Color.colorSlategray,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  vectorParent: {
    height: "5.62%",
    width: "94.54%",
    top: "13.23%",
    right: "2.06%",
    bottom: "81.15%",
    left: "3.41%",
    position: "absolute",
  },
  mesajlarmChild2: {
    height: "1.76%",
    width: "3.76%",
    top: "14.81%",
    right: "85.84%",
    bottom: "83.43%",
    left: "10.4%",
    position: "absolute",
  },
  mikrofonIcon: {
    height: "2.67%",
    width: "3.71%",
    top: "14.53%",
    right: "7.32%",
    bottom: "82.8%",
    left: "88.97%",
    position: "absolute",
  },
  groupIcon1: {
    height: "61.16%",
    top: "16.33%",
    bottom: "22.51%",
  },
  groupItem: {
    height: "2.58%",
    bottom: "-2.58%",
    top: "100%",
  },
  backarrowClipContent: {
    height: "54.79%",
    top: "45.21%",
    bottom: "0%",
  },
  settings: {
    fontSize: FontSize.size_base,
  },
  settingsWrapper: {
    height: "43.38%",
    width: "32.56%",
    right: "67.44%",
    bottom: "56.62%",
    top: "0%",
  },
  backarrowClipContentParent: {
    height: "75.26%",
    bottom: "24.74%",
  },
  vectorGroup: {
    height: "27.7%",
    top: "72.3%",
    bottom: "0%",
  },
  groupInner: {
    height: "3.41%",
    top: "81.82%",
    bottom: "14.77%",
  },
  backarrowClipContent1: {
    height: "54.55%",
    top: "45.23%",
    bottom: "0.23%",
  },
  bookmarkedWrapper: {
    height: "43.18%",
    width: "48.55%",
    right: "51.45%",
    bottom: "56.82%",
    top: "0%",
  },
  backarrowClipContentGroup: {
    bottom: "0%",
    height: "100%",
  },
  vectorContainer: {
    height: "20.94%",
    top: "36.65%",
    bottom: "42.41%",
  },
  groupChild1: {
    height: "0.71%",
    bottom: "-0.71%",
    top: "100%",
  },
  groupChild2: {
    height: "3.44%",
    top: "75.69%",
    bottom: "20.87%",
  },
  backarrowClipContent2: {
    height: "55.05%",
    top: "44.95%",
    bottom: "0%",
  },
  profileWrapper: {
    height: "43.58%",
    width: "29.07%",
    right: "70.93%",
    bottom: "56.42%",
    top: "0%",
  },
  backarrowClipContentContainer: {
    width: "86.22%",
    left: "13.78%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  groupView: {
    height: "20.75%",
    bottom: "79.25%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  groupContainer: {
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  groupGroup: {
    height: "24.62%",
    top: "26.01%",
    bottom: "49.37%",
    right: "0%",
    width: "100%",
  },
  profile3: {
    top: "93.83%",
    left: "81.35%",
    fontSize: FontSize.size_xs,
    color: Color.colorDarkslategray_300,
    position: "absolute",
  },
  anasayfa: {
    fontSize: FontSize.size_xs,
    color: Color.colorDarkslategray_300,
  },
  home: {
    left: "4.64%",
    top: "93.94%",
    position: "absolute",
  },
  calendar2: {
    top: "94.67%",
    left: "22.26%",
    fontSize: FontSize.size_xs,
    color: Color.colorDarkslategray_300,
    position: "absolute",
  },
  messages2: {
    top: "94.9%",
    left: "65.16%",
    fontSize: FontSize.size_xs,
    color: Color.colorDarkslategray_300,
    position: "absolute",
  },
  layerX00201Icon: {
    height: "2.98%",
    width: "7.17%",
    top: "4.69%",
    bottom: "92.34%",
    left: "6.37%",
  },
  groupChild3: {
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
  mesajlarmInner1: {
    height: "5.16%",
    width: "29.57%",
    top: "3.63%",
    right: "3.76%",
    bottom: "91.21%",
    left: "66.67%",
    position: "absolute",
  },
  arrowBackIos24dpFill0WghtIcon: {
    height: "3.51%",
    width: "7.52%",
    top: "13.59%",
    bottom: "82.89%",
    left: "6.02%",
  },
  mesajlarm: {
    height: "101.13%",
    width: "102.31%",
    bottom: "-1.13%",
    left: "-2.31%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backArrow114886332: {
    top: "9.83%",
    right: "88.44%",
    bottom: "84.82%",
    width: "11.56%",
    height: "5.34%",
  },
  mesajlarm1: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Mesajlarm1;
