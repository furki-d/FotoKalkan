import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const FotorafnIerii = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.fotorafnIerii1}>
      <Image
        style={[styles.vectorIcon, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <View style={[styles.fotorafnIerii11, styles.vectorParentPosition]}>
        <Image
          style={[styles.vectorIcon1, styles.vectorIcon1Position]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={[styles.fotorafnIerii1Child, styles.view2Position]}
          resizeMode="cover"
          source={require("../assets/group-140.png")}
        />
        <View style={[styles.groupParent, styles.groupParentPosition]}>
          <Image
            style={[styles.vectorIcon, styles.iconChildLayout]}
            resizeMode="cover"
            source={require("../assets/group.png")}
          />
          <View style={styles.group}>
            <View style={[styles.view, styles.vectorParentPosition]}>
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
            <View style={[styles.view2, styles.view2Position]}>
              <Image
                style={[styles.profileicon, styles.iconChildLayout]}
                resizeMode="cover"
                source={require("../assets/profileicon.png")}
              />
              <Text style={[styles.profile, styles.profileTypo]}>profil</Text>
            </View>
            <View style={[styles.view, styles.vectorParentPosition]}>
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
            <View style={[styles.view2, styles.view2Position]}>
              <Image
                style={[styles.profileicon, styles.iconChildLayout]}
                resizeMode="cover"
                source={require("../assets/profileicon.png")}
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
        <Image
          style={[styles.fotorafnIerii1Item, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/group-10.png")}
        />
        <Image
          style={[styles.fotorafnIerii1Inner, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/group-9.png")}
        />
        <Image
          style={[
            styles.fotorafnIerii1Child1,
            styles.fotorafnIerii1Child1Position,
          ]}
          resizeMode="cover"
          source={require("../assets/group-1401.png")}
        />
        <View style={[styles.groupGroup, styles.groupPosition1]}>
          <Image
            style={[styles.groupIcon1, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/group1.png")}
          />
          <View style={[styles.groupContainer, styles.vectorParentPosition]}>
            <View style={[styles.vectorParent, styles.vectorParentPosition]}>
              <Image
                style={[styles.groupChild, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/vector-2528.png")}
              />
              <View style={styles.backarrowClipContentParent}>
                <Image
                  style={[
                    styles.backarrowClipContent,
                    styles.backarrowContentPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/backarrow-clip-content.png")}
                />
                <View
                  style={[styles.settingsWrapper, styles.settingsPosition1]}
                >
                  <Text style={[styles.settings, styles.settingsPosition]}>
                    Başka bir şey
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.vectorGroup, styles.vectorPosition]}>
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/vector-2526.png")}
              />
              <View style={styles.backarrowClipContentParent}>
                <Image
                  style={[
                    styles.backarrowClipContent1,
                    styles.backarrowContentPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/backarrow-clip-content1.png")}
                />
                <View
                  style={[
                    styles.bookmarkedWrapper,
                    styles.vectorParentPosition,
                  ]}
                >
                  <Text style={[styles.settings, styles.settingsPosition]}>
                    Sahtekarlık veya dolandırıcılık
                  </Text>
                </View>
              </View>
            </View>
            <Image
              style={[styles.groupInner, styles.groupPosition]}
              resizeMode="cover"
              source={require("../assets/vector-2528.png")}
            />
            <View style={[styles.vectorContainer, styles.vectorParentPosition]}>
              <Image
                style={[styles.groupChild1, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/vector-2525.png")}
              />
              <View style={styles.backarrowClipContentParent}>
                <Image
                  style={[
                    styles.backarrowClipContent2,
                    styles.backarrowContentLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/backarrow-clip-content2.png")}
                />
                <View style={[styles.profileWrapper, styles.profilePosition]}>
                  <Text style={[styles.settings, styles.settingsPosition]}>
                    Zorbalık veya taciz
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.groupView, styles.groupPosition1]}>
          <Image
            style={[styles.groupIcon1, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/group2.png")}
          />
          <View style={[styles.groupContainer, styles.vectorParentPosition]}>
            <View style={[styles.vectorParent, styles.vectorParentPosition]}>
              <Image
                style={[styles.groupChild, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/vector-25281.png")}
              />
              <View style={styles.backarrowClipContentParent}>
                <Image
                  style={[
                    styles.backarrowClipContent3,
                    styles.backarrowContentPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/backarrow-clip-content3.png")}
                />
                <View
                  style={[styles.settingsContainer, styles.settingsPosition1]}
                >
                  <Text style={[styles.settings, styles.settingsPosition]}>
                    Şiddet veya tehlikeli örgütler
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.vectorParent2, styles.vectorPosition]}>
              <Image
                style={[styles.groupChild3, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/vector-25261.png")}
              />
              <View style={styles.backarrowClipContentParent}>
                <Image
                  style={[
                    styles.backarrowClipContent4,
                    styles.backarrowContentPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/backarrow-clip-content4.png")}
                />
                <View
                  style={[
                    styles.bookmarkedContainer,
                    styles.vectorParentPosition,
                  ]}
                >
                  <Text style={[styles.settings, styles.settingsPosition]}>
                    Nefret söylemi veya sembolleri
                  </Text>
                </View>
              </View>
            </View>
            <Image
              style={[styles.groupInner, styles.groupPosition]}
              resizeMode="cover"
              source={require("../assets/vector-25281.png")}
            />
            <View style={[styles.vectorContainer, styles.vectorParentPosition]}>
              <Image
                style={[styles.groupChild1, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/vector-25251.png")}
              />
              <View style={styles.backarrowClipContentParent}>
                <Image
                  style={[
                    styles.backarrowClipContent5,
                    styles.backarrowContentLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/backarrow-clip-content5.png")}
                />
                <View style={[styles.profileContainer, styles.profilePosition]}>
                  <Text style={[styles.settings, styles.settingsPosition]}>
                    Çıplaklık veya cinsellik
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.fikriMlkiyetHakkiIhlaliI,
            styles.fotorafnIerii1Child1Position,
          ]}
        >
          <Text
            style={[styles.fikriMlkiyetHakki, styles.birisiSuAndaTypo]}
          >{`Fikri mülkiyet hakki ihlali şikayet ettiğin durumlar `}</Text>
          <Text
            style={[styles.haricindeIkayetiniKimliin, styles.birisiSuAndaTypo]}
          >{`haricinde, şikayetini kimliğini gizli tutarak yaparsın. `}</Text>
          <Text
            style={[styles.birisiSuAnda, styles.birisiSuAndaTypo]}
          >{`Birisi su anda tehlikedeyse, hemen yerel acil durum `}</Text>
          <Text
            style={[styles.servisleriniAraBekleme, styles.birisiSuAndaTypo]}
          >
            servislerini ara. Bekleme.
          </Text>
        </View>
        <Text style={[styles.buFotorafIkayet, styles.profile4Typo]}>
          Bu fotoğrafı şikayet etme nedenin nedir?
        </Text>
        <Image
          style={[styles.fotorafnIerii1Child2, styles.groupParentPosition]}
          resizeMode="cover"
          source={require("../assets/group-12.png")}
        />
        <Image
          style={[styles.fotorafnIerii1Child3, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/group-7.png")}
        />
        <Text style={[styles.profile4, styles.profile4Typo]}>rofil</Text>
        <Pressable
          style={styles.home}
          onPress={() => navigation.navigate("AnaSayfa")}
        >
          <Text style={[styles.anasayfa, styles.profile4Typo]}>AnaSayfa</Text>
        </Pressable>
        <Text style={[styles.calendar2, styles.profile4Typo]}>
          Şikayetlerim
        </Text>
        <Text style={[styles.messages2, styles.profile4Typo]}>Mesajlarım</Text>
        <Image
          style={[styles.layerX00201Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/layer-x0020-1.png")}
        />
        <View style={styles.fotorafnIerii1Inner1}>
          <View style={[styles.vectorParent4, styles.vectorParentPosition]}>
            <Image
              style={[styles.vectorIcon, styles.iconChildLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-816.png")}
            />
            <Image
              style={[styles.groupChild6, styles.iconChildLayout]}
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
        style={[styles.backArrow114886332, styles.vectorParentPosition]}
        onPress={() => navigation.navigate("Ikayetlerim1")}
      >
        <Image
          style={[styles.icon, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/backarrow-11488633-2.png")}
        />
      </Pressable>
      <Pressable
        style={styles.backArrow114886333}
        onPress={() => navigation.navigate("FotorafnIerii1")}
      >
        <Image
          style={[styles.icon, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/backarrow-11488633-3.png")}
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
  vectorParentPosition: {
    left: "0%",
    position: "absolute",
  },
  vectorIcon1Position: {
    right: "2.5%",
    width: "97.5%",
    left: "0%",
  },
  view2Position: {
    bottom: "8.28%",
    position: "absolute",
  },
  groupParentPosition: {
    top: "87.46%",
    position: "absolute",
  },
  profileTypo: {
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    left: "0%",
    position: "absolute",
  },
  fotorafnIerii1Child1Position: {
    left: "2.5%",
    position: "absolute",
  },
  groupPosition1: {
    right: "0.5%",
    width: "99.5%",
    height: "15.59%",
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
  groupChildLayout: {
    height: "3.42%",
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
  settingsPosition1: {
    bottom: "56.62%",
    height: "43.38%",
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
  vectorPosition: {
    bottom: "32.94%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  backarrowContentLayout: {
    height: "55.05%",
    left: "93.02%",
    width: "6.98%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  profilePosition: {
    bottom: "56.42%",
    height: "43.58%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  birisiSuAndaTypo: {
    color: Color.colorDimgray,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: "0%",
    position: "absolute",
  },
  profile4Typo: {
    color: Color.colorDarkslategray_300,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  iconPosition: {
    right: "88.75%",
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
  fotorafnIerii1Child: {
    height: "73.67%",
    top: "18.04%",
    right: "2.5%",
    width: "97.5%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
    top: "0%",
    position: "absolute",
  },
  profile: {
    top: "63.41%",
  },
  view2: {
    height: "91.72%",
    width: "12.39%",
    left: "87.61%",
    right: "0%",
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
  homeIcon: {
    height: "22.43%",
    width: "6.15%",
    top: "27.57%",
    right: "87.69%",
    bottom: "50%",
    left: "6.15%",
    position: "absolute",
  },
  groupParent: {
    height: "12.54%",
    right: "2.5%",
    width: "97.5%",
    left: "0%",
    bottom: "0%",
  },
  fotorafnIerii1Item: {
    height: "4.25%",
    width: "9.28%",
    top: "89.58%",
    right: "66.27%",
    bottom: "6.16%",
    left: "24.45%",
    position: "absolute",
  },
  fotorafnIerii1Inner: {
    height: "3.82%",
    width: "8.7%",
    top: "89.81%",
    right: "24.75%",
    bottom: "6.37%",
    left: "66.55%",
    position: "absolute",
  },
  fotorafnIerii1Child1: {
    height: "15.06%",
    top: "48.12%",
    bottom: "36.82%",
    width: "97.5%",
    left: "2.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    overflow: "hidden",
  },
  groupIcon1: {
    height: "96.54%",
    bottom: "3.46%",
    top: "0%",
  },
  groupChild: {
    top: "81.28%",
    bottom: "15.3%",
  },
  backarrowClipContent: {
    top: "45.21%",
    height: "54.79%",
    left: "93.02%",
    width: "6.98%",
    bottom: "0%",
  },
  settings: {
    fontSize: FontSize.size_base,
  },
  settingsWrapper: {
    width: "29.36%",
    right: "70.64%",
  },
  backarrowClipContentParent: {
    width: "86.43%",
    left: "13.57%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  vectorParent: {
    height: "34.27%",
    top: "65.81%",
    bottom: "-0.08%",
    right: "0%",
    width: "100%",
  },
  groupItem: {
    height: "3.45%",
    top: "81.84%",
    bottom: "14.71%",
  },
  backarrowClipContent1: {
    height: "55.17%",
    top: "45.06%",
    bottom: "-0.23%",
  },
  bookmarkedWrapper: {
    height: "43.68%",
    width: "64.83%",
    right: "35.17%",
    bottom: "56.32%",
    top: "0%",
  },
  vectorGroup: {
    height: "34.04%",
    top: "33.02%",
  },
  groupInner: {
    height: "1.17%",
    top: "93.66%",
    bottom: "5.16%",
  },
  groupChild1: {
    height: "3.44%",
    top: "82.11%",
    bottom: "14.45%",
  },
  backarrowClipContent2: {
    top: "45.18%",
    bottom: "-0.23%",
  },
  profileWrapper: {
    width: "41.28%",
    right: "58.72%",
  },
  vectorContainer: {
    height: "34.12%",
    bottom: "65.88%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  groupContainer: {
    height: "96.02%",
    top: "3.91%",
    bottom: "0.08%",
    right: "0%",
    width: "100%",
  },
  groupGroup: {
    top: "57.72%",
    bottom: "26.69%",
  },
  backarrowClipContent3: {
    top: "44.98%",
    bottom: "0.23%",
    height: "54.79%",
    left: "93.02%",
    width: "6.98%",
  },
  settingsContainer: {
    width: "62.5%",
    right: "37.5%",
  },
  groupChild3: {
    top: "82%",
    bottom: "14.58%",
  },
  backarrowClipContent4: {
    height: "54.67%",
    top: "45.33%",
    bottom: "0%",
  },
  bookmarkedContainer: {
    height: "43.28%",
    width: "67.44%",
    right: "32.56%",
    bottom: "56.72%",
    top: "0%",
  },
  vectorParent2: {
    height: "34.35%",
    top: "32.71%",
  },
  backarrowClipContent5: {
    top: "44.95%",
    bottom: "0%",
  },
  profileContainer: {
    width: "48.84%",
    right: "51.16%",
  },
  groupView: {
    top: "42.66%",
    bottom: "41.75%",
  },
  fikriMlkiyetHakki: {
    top: "0%",
  },
  haricindeIkayetiniKimliin: {
    top: "25%",
  },
  birisiSuAnda: {
    top: "50%",
  },
  servisleriniAraBekleme: {
    top: "75%",
  },
  fikriMlkiyetHakkiIhlaliI: {
    height: "8.44%",
    width: "90.25%",
    top: "27.87%",
    right: "7.25%",
    bottom: "63.69%",
  },
  buFotorafIkayet: {
    top: "21.99%",
    fontSize: FontSize.size_mini,
    color: Color.colorDarkslategray_300,
    left: "2.5%",
    position: "absolute",
  },
  fotorafnIerii1Child2: {
    height: "7.78%",
    width: "14.43%",
    right: "44.05%",
    bottom: "4.76%",
    left: "41.53%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  fotorafnIerii1Child3: {
    height: "8.3%",
    width: "18.58%",
    top: "5.62%",
    right: "41.95%",
    bottom: "86.08%",
    left: "39.48%",
    opacity: 0.8,
    position: "absolute",
  },
  profile4: {
    top: "93.83%",
    left: "78.9%",
    color: Color.colorDarkslategray_300,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  anasayfa: {
    color: Color.colorDarkslategray_300,
    fontSize: FontSize.size_xs,
  },
  home: {
    left: "2.38%",
    top: "93.94%",
    position: "absolute",
  },
  calendar2: {
    top: "94.67%",
    left: "19.95%",
    color: Color.colorDarkslategray_300,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  messages2: {
    top: "94.9%",
    left: "62.75%",
    color: Color.colorDarkslategray_300,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  layerX00201Icon: {
    height: "2.98%",
    width: "7.15%",
    top: "4.69%",
    bottom: "92.34%",
    left: "4.1%",
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
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  fotorafnIerii1Inner1: {
    height: "5.16%",
    width: "29.5%",
    top: "3.63%",
    right: "6.25%",
    bottom: "91.21%",
    left: "64.25%",
    position: "absolute",
  },
  arrowBackIos24dpFill0WghtIcon: {
    height: "3.51%",
    width: "7.5%",
    top: "13.59%",
    bottom: "82.89%",
    left: "3.75%",
  },
  fotorafnIerii11: {
    height: "101.13%",
    width: "102.56%",
    right: "-2.56%",
    bottom: "-1.13%",
    top: "0%",
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
  backArrow114886333: {
    left: "87.44%",
    top: "54.03%",
    right: "1.03%",
    bottom: "40.64%",
    width: "11.54%",
    height: "5.33%",
    position: "absolute",
  },
  fotorafnIerii1: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default FotorafnIerii;
