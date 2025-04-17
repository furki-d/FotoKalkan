import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Ikayetlerim1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ikayetlerim1}>
      <Image
        style={[styles.vectorIcon, styles.iconGroupLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <View style={styles.ikayetlerim}>
        <Image
          style={[styles.vectorIcon1, styles.vectorIcon1Position]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={[styles.ikayetlerim2, styles.hbarEtTypo]}>
          Şikayetlerim
        </Text>
        <Image
          style={[styles.layerX00201Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/layer-x0020-1.png")}
        />
        <Image
          style={[styles.ikayetlerimChild, styles.vectorIcon1Position]}
          resizeMode="cover"
          source={require("../assets/group-1403.png")}
        />
        <View style={[styles.groupParent, styles.groupParentPosition]}>
          <Image
            style={[styles.vectorIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group21.png")}
          />
          <View style={styles.group}>
            <View style={styles.view}>
              <Text style={[styles.calendar, styles.profileTypo]}>
                Şilkayetlerim
              </Text>
            </View>
            <View style={styles.view1}>
              <Image
                style={[styles.cahtIcon, styles.iconGroupLayout]}
                resizeMode="cover"
                source={require("../assets/caht.png")}
              />
              <Text style={[styles.messages, styles.profileTypo]}>
                mesjlarım
              </Text>
            </View>
            <View style={[styles.view2, styles.viewGroupPosition]}>
              <Image
                style={[styles.profileicon, styles.iconGroupLayout]}
                resizeMode="cover"
                source={require("../assets/profileicon.png")}
              />
              <Text style={[styles.profile, styles.profileTypo]}>profil</Text>
            </View>
            <View style={styles.view}>
              <Text style={[styles.calendar, styles.profileTypo]}>
                Şilkayetlerim
              </Text>
            </View>
            <View style={styles.view1}>
              <Image
                style={[styles.cahtIcon, styles.iconGroupLayout]}
                resizeMode="cover"
                source={require("../assets/caht.png")}
              />
              <Text style={[styles.messages, styles.profileTypo]}>
                mesjlarım
              </Text>
            </View>
            <View style={[styles.view2, styles.viewGroupPosition]}>
              <Image
                style={[styles.profileicon, styles.iconGroupLayout]}
                resizeMode="cover"
                source={require("../assets/profileicon.png")}
              />
              <Text style={[styles.profile, styles.profileTypo]}>profil</Text>
            </View>
          </View>
        </View>
        <Image
          style={[styles.ikayetlerimItem, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/group-262.png")}
        />
        <Text style={[styles.hbarEt, styles.hbarEtTypo]}>İhbar et</Text>
        <View style={styles.fikriMlkiyetHakkiIhlaliI}>
          <Text
            style={[styles.fikriMlkiyetHakki, styles.birisiUAndaTypo]}
          >{`Fikri mülkiyet hakki ihlali şikayet ettiğin durumlar `}</Text>
          <Text
            style={[styles.haricindeIkayetiniKimliin, styles.birisiUAndaTypo]}
          >{`haricinde, şikayetini kimliğini gizli tutarak yaparsın. `}</Text>
          <Text
            style={[styles.birisiUAnda, styles.birisiUAndaTypo]}
          >{`Birisi şu anda tehlikedeyse, hemen yerel acil durum `}</Text>
          <Text style={[styles.servisleriniAra, styles.birisiUAndaTypo]}>
            servislerini ara.
          </Text>
        </View>
        <Text style={[styles.neyiIkayetEtmek, styles.birisiUAndaTypo]}>
          Neyi şikayet etmek istiyorsun?
        </Text>
        <View style={[styles.groupGroup, styles.viewGroupPosition]}>
          <Image
            style={[styles.groupIcon1, styles.groupIconPosition]}
            resizeMode="cover"
            source={require("../assets/group22.png")}
          />
          <View style={[styles.groupContainer, styles.viewGroupPosition]}>
            <View style={[styles.vectorParent, styles.viewGroupPosition]}>
              <Image
                style={[styles.groupChild, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/vector-25282.png")}
              />
              <View
                style={[
                  styles.backarrowClipContentParent,
                  styles.viewGroupPosition,
                ]}
              >
                <Image
                  style={[
                    styles.backarrowClipContent,
                    styles.backarrowContentPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/backarrow-clip-content6.png")}
                />
                <View
                  style={[
                    styles.settingsWrapper,
                    styles.settingsWrapperPosition,
                  ]}
                >
                  <Text style={[styles.settings, styles.settingsPosition]}>
                    Uygunsuz şeyler paylaşıyor
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.vectorGroup, styles.viewGroupPosition]}>
              <Image
                style={[styles.groupItem, styles.groupLayout]}
                resizeMode="cover"
                source={require("../assets/vector-25262.png")}
              />
              <View
                style={[
                  styles.backarrowClipContentParent,
                  styles.viewGroupPosition,
                ]}
              >
                <Image
                  style={[
                    styles.backarrowClipContent1,
                    styles.backarrowContentPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/backarrow-clip-content7.png")}
                />
                <View
                  style={[
                    styles.bookmarkedWrapper,
                    styles.bookmarkedWrapperPosition,
                  ]}
                >
                  <Text style={[styles.settings, styles.settingsPosition]}>
                    Taciz veya zorbalık
                  </Text>
                </View>
              </View>
            </View>
            <Image
              style={[styles.groupInner, styles.groupIconPosition]}
              resizeMode="cover"
              source={require("../assets/vector-25282.png")}
            />
            <View style={[styles.vectorContainer, styles.viewGroupPosition]}>
              <Image
                style={[styles.groupChild1, styles.groupIconPosition]}
                resizeMode="cover"
                source={require("../assets/vector-25252.png")}
              />
              <View
                style={[
                  styles.backarrowClipContentParent,
                  styles.viewGroupPosition,
                ]}
              >
                <Image
                  style={[
                    styles.backarrowClipContent2,
                    styles.backarrowContentPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/backarrow-clip-content8.png")}
                />
                <View style={styles.profileWrapper}>
                  <Text style={[styles.profile2, styles.settingsPosition]}>
                    Birisini taklit ediyor
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.groupView, styles.viewGroupPosition]}>
          <Image
            style={[styles.groupIcon2, styles.groupIconPosition]}
            resizeMode="cover"
            source={require("../assets/group23.png")}
          />
          <View style={[styles.groupParent1, styles.viewGroupPosition]}>
            <View style={[styles.vectorParent1, styles.viewGroupPosition]}>
              <Image
                style={[styles.groupChild2, styles.groupLayout]}
                resizeMode="cover"
                source={require("../assets/vector-25283.png")}
              />
              <View
                style={[
                  styles.backarrowClipContentParent,
                  styles.viewGroupPosition,
                ]}
              >
                <Image
                  style={[
                    styles.backarrowClipContent1,
                    styles.backarrowContentPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/backarrow-clip-content9.png")}
                />
                <View
                  style={[
                    styles.settingsContainer,
                    styles.bookmarkedWrapperPosition,
                  ]}
                >
                  <Text style={[styles.settings, styles.settingsPosition]}>
                    Başka bir şey
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.vectorParent2, styles.viewGroupPosition]}>
              <Image
                style={[styles.groupChild3, styles.groupIconPosition]}
                resizeMode="cover"
                source={require("../assets/vector-25263.png")}
              />
              <View
                style={[
                  styles.backarrowClipContentParent,
                  styles.viewGroupPosition,
                ]}
              >
                <Image
                  style={[
                    styles.backarrowClipContent4,
                    styles.backarrowContentPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/backarrow-clip-content10.png")}
                />
                <View style={styles.bookmarkedContainer}>
                  <Text style={[styles.settings, styles.settingsPosition]}>
                    Sahte ad
                  </Text>
                </View>
              </View>
            </View>
            <Image
              style={[styles.groupChild4, styles.groupIconPosition]}
              resizeMode="cover"
              source={require("../assets/vector-25283.png")}
            />
            <View style={[styles.vectorParent3, styles.viewGroupPosition]}>
              <Image
                style={[styles.groupChild5, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/vector-25253.png")}
              />
              <View
                style={[
                  styles.backarrowClipContentParent,
                  styles.viewGroupPosition,
                ]}
              >
                <Image
                  style={[
                    styles.backarrowClipContent5,
                    styles.backarrowContentPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/backarrow-clip-content11.png")}
                />
                <View
                  style={[
                    styles.profileContainer,
                    styles.settingsWrapperPosition,
                  ]}
                >
                  <Text style={[styles.settings, styles.settingsPosition]}>
                    Sahte hesap
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Image
          style={[styles.ikayetlerimInner, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/group-95.png")}
        />
        <Image
          style={[styles.ikayetlerimChild1, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/group-106.png")}
        />
        <Image
          style={[styles.ikayetlerimChild2, styles.groupParentPosition]}
          resizeMode="cover"
          source={require("../assets/group-12.png")}
        />
        <Text style={[styles.profile4, styles.profile4Typo]}>rofil</Text>
        <Pressable
          style={styles.home}
          onPress={() => navigation.navigate("AnaSayfa")}
        >
          <Text style={styles.profile4Typo}>AnaSayfa</Text>
        </Pressable>
        <Text style={[styles.calendar2, styles.profile4Typo]}>
          Şikayetlerim
        </Text>
        <Text style={[styles.messages2, styles.profile4Typo]}>Mesajlarım</Text>
        <View style={styles.ikayetlerimInner1}>
          <View style={[styles.vectorParent4, styles.viewGroupPosition]}>
            <Image
              style={[styles.vectorIcon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-816.png")}
            />
            <Image
              style={[styles.groupChild6, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/group-30.png")}
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
        style={styles.backArrow114886332}
        onPress={() => navigation.navigate("FotorafnIerii")}
      >
        <Image
          style={[styles.icon, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/backarrow-11488633-3.png")}
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
  vectorIcon1Position: {
    bottom: "1.11%",
    right: "2.01%",
    width: "97.99%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  hbarEtTypo: {
    textAlign: "left",
    color: Color.colorDarkslategray_300,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_6xl,
    position: "absolute",
  },
  iconPosition: {
    right: "88.69%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupParentPosition: {
    top: "87.46%",
    position: "absolute",
  },
  profileTypo: {
    color: Color.colorWhitesmoke_100,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: "0%",
    position: "absolute",
  },
  viewGroupPosition: {
    right: "0%",
    position: "absolute",
  },
  birisiUAndaTypo: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorDarkslategray_300,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  groupIconPosition: {
    right: "2.01%",
    width: "97.99%",
    left: "0%",
  },
  groupChildLayout: {
    height: "3.46%",
    right: "2.01%",
    width: "97.99%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
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
  settingsWrapperPosition: {
    bottom: "56.22%",
    height: "43.78%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  settingsPosition: {
    color: Color.colorGray,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  groupLayout: {
    height: "3.42%",
    right: "2.01%",
    width: "97.99%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  bookmarkedWrapperPosition: {
    bottom: "56.62%",
    height: "43.38%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  profile4Typo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorDarkslategray_300,
    fontFamily: FontFamily.interRegular,
  },
  vectorIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  vectorIcon1: {
    height: "98.89%",
    top: "0%",
  },
  ikayetlerim2: {
    top: "10.08%",
    left: "30.9%",
  },
  layerX00201Icon: {
    height: "2.98%",
    width: "7.19%",
    top: "4.69%",
    bottom: "92.34%",
    left: "4.12%",
  },
  ikayetlerimChild: {
    height: "79.81%",
    top: "19.07%",
  },
  calendar: {
    top: "0%",
  },
  view: {
    height: "33.56%",
    width: "28.06%",
    top: "58.39%",
    right: "71.94%",
    bottom: "8.05%",
    left: "0%",
    position: "absolute",
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
    position: "absolute",
    top: "0%",
  },
  profile: {
    top: "63.41%",
  },
  view2: {
    height: "91.72%",
    width: "12.39%",
    bottom: "8.28%",
    left: "87.61%",
    top: "0%",
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
  groupParent: {
    height: "12.54%",
    right: "2.01%",
    width: "97.99%",
    left: "0%",
    bottom: "0%",
  },
  ikayetlerimItem: {
    height: "0.82%",
    width: "15.08%",
    top: "23.32%",
    right: "40.95%",
    bottom: "75.86%",
    left: "43.97%",
    position: "absolute",
  },
  hbarEt: {
    top: "25.54%",
    left: "39.45%",
  },
  fikriMlkiyetHakki: {
    left: "0%",
    top: "0%",
  },
  haricindeIkayetiniKimliin: {
    top: "25.64%",
    left: "0%",
  },
  birisiUAnda: {
    top: "51.28%",
    left: "0%",
  },
  servisleriniAra: {
    top: "76.92%",
    left: "0%",
  },
  fikriMlkiyetHakkiIhlaliI: {
    height: "9.14%",
    width: "90.7%",
    top: "35.61%",
    right: "7.54%",
    bottom: "55.25%",
    left: "1.76%",
    position: "absolute",
  },
  neyiIkayetEtmek: {
    top: "32.77%",
    left: "1.76%",
  },
  groupIcon1: {
    height: "97.01%",
    bottom: "2.99%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    top: "0%",
    position: "absolute",
  },
  groupChild: {
    top: "81.34%",
    bottom: "15.21%",
  },
  backarrowClipContent: {
    top: "44.93%",
    bottom: "-0.23%",
    left: "93.02%",
    width: "6.98%",
    height: "55.3%",
  },
  settings: {
    fontSize: FontSize.size_base,
  },
  settingsWrapper: {
    width: "59.88%",
    right: "40.12%",
  },
  backarrowClipContentParent: {
    width: "86.43%",
    left: "13.57%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  vectorParent: {
    height: "34.39%",
    top: "65.53%",
    bottom: "0.08%",
    left: "0%",
    width: "100%",
  },
  groupItem: {
    top: "81.74%",
    bottom: "14.84%",
  },
  backarrowClipContent1: {
    height: "54.79%",
    top: "45.21%",
    left: "93.02%",
    width: "6.98%",
    bottom: "0%",
  },
  bookmarkedWrapper: {
    width: "41.57%",
    right: "58.43%",
  },
  vectorGroup: {
    height: "34.71%",
    top: "32.88%",
    bottom: "32.41%",
    left: "0%",
    width: "100%",
  },
  groupInner: {
    height: "1.19%",
    top: "93.5%",
    bottom: "5.31%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  groupChild1: {
    height: "3.38%",
    top: "82.21%",
    bottom: "14.41%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  backarrowClipContent2: {
    height: "54.05%",
    top: "45.95%",
    left: "93.02%",
    width: "6.98%",
    bottom: "0%",
  },
  profile2: {
    fontSize: 17,
  },
  profileWrapper: {
    height: "47.3%",
    width: "44.19%",
    right: "55.81%",
    bottom: "52.7%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  vectorContainer: {
    height: "35.18%",
    bottom: "64.82%",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  groupContainer: {
    height: "82.11%",
    top: "17.89%",
    left: "0%",
    bottom: "0%",
    width: "100%",
  },
  groupGroup: {
    height: "18.01%",
    top: "45.58%",
    bottom: "36.41%",
    left: "0%",
    width: "100%",
  },
  groupIcon2: {
    height: "96.54%",
    bottom: "3.46%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    top: "0%",
    position: "absolute",
  },
  groupChild2: {
    top: "81.51%",
    bottom: "15.07%",
  },
  settingsContainer: {
    width: "29.36%",
    right: "70.64%",
  },
  vectorParent1: {
    height: "34.33%",
    top: "65.67%",
    left: "0%",
    bottom: "0%",
    width: "100%",
  },
  groupChild3: {
    height: "3.45%",
    top: "81.84%",
    bottom: "14.71%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  backarrowClipContent4: {
    height: "55.17%",
    top: "45.06%",
    bottom: "-0.23%",
    left: "93.02%",
    width: "6.98%",
  },
  bookmarkedContainer: {
    height: "43.68%",
    width: "19.77%",
    right: "80.23%",
    bottom: "56.32%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  vectorParent2: {
    height: "34.09%",
    top: "32.84%",
    bottom: "33.07%",
    left: "0%",
    width: "100%",
  },
  groupChild4: {
    height: "1.18%",
    top: "93.65%",
    bottom: "5.17%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  groupChild5: {
    top: "81.8%",
    bottom: "14.75%",
  },
  backarrowClipContent5: {
    top: "44.7%",
    left: "93.02%",
    width: "6.98%",
    bottom: "0%",
    height: "55.3%",
  },
  profileContainer: {
    width: "27.62%",
    right: "72.38%",
  },
  vectorParent3: {
    height: "34.01%",
    bottom: "65.99%",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  groupParent1: {
    height: "95.87%",
    top: "4.13%",
    left: "0%",
    bottom: "0%",
    width: "100%",
  },
  groupView: {
    height: "15.59%",
    top: "63.05%",
    bottom: "21.36%",
    left: "0%",
    width: "100%",
  },
  ikayetlerimInner: {
    height: "3.82%",
    width: "8.74%",
    top: "90.23%",
    right: "24.12%",
    bottom: "5.95%",
    left: "67.14%",
    position: "absolute",
  },
  ikayetlerimChild1: {
    height: "4.25%",
    width: "9.32%",
    top: "89.58%",
    right: "66.11%",
    bottom: "6.16%",
    left: "24.57%",
    position: "absolute",
  },
  ikayetlerimChild2: {
    height: "7.78%",
    width: "14.5%",
    right: "43.77%",
    bottom: "4.76%",
    left: "41.73%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  profile4: {
    top: "93.83%",
    left: "79.3%",
    position: "absolute",
  },
  home: {
    left: "2.39%",
    top: "93.94%",
    position: "absolute",
  },
  calendar2: {
    top: "94.67%",
    left: "20.05%",
    position: "absolute",
  },
  messages2: {
    top: "94.9%",
    left: "63.07%",
    position: "absolute",
  },
  groupChild6: {
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
  vectorParent4: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  ikayetlerimInner1: {
    height: "5.16%",
    width: "29.65%",
    top: "3.63%",
    right: "5.78%",
    bottom: "91.21%",
    left: "64.57%",
    position: "absolute",
  },
  arrowBackIos24dpFill0WghtIcon: {
    height: "3.51%",
    width: "7.54%",
    top: "13.59%",
    bottom: "82.89%",
    left: "3.77%",
  },
  ikayetlerim: {
    height: "101.13%",
    width: "102.05%",
    right: "-2.05%",
    bottom: "-1.13%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backArrow114886332: {
    left: "88.21%",
    top: "56.87%",
    right: "0.26%",
    bottom: "37.8%",
    width: "11.54%",
    height: "5.33%",
    position: "absolute",
  },
  ikayetlerim1: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Ikayetlerim1;
