import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Mesajlar2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mesajlar1}>
      <Image
        style={[styles.vectorIcon, styles.iconGroupLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={[styles.mesajlar11, styles.containerIconPosition]}>
        <Image
          style={[styles.vectorIcon1, styles.vectorIcon1Position]}
          resizeMode="cover"
          source={require("../assets/vector6.png")}
        />
        <Image
          style={styles.chatsFrameBackground}
          resizeMode="cover"
          source={require("../assets/chats-frame-background.png")}
        />
        <View style={styles.vectorParent}>
          <Image
            style={[styles.groupChild, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-845.png")}
          />
          <Text style={[styles.typeYouMessage, styles.todayTypo]}>
            Mesajınızı yazın
          </Text>
          <Image
            style={[styles.groupItem, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group-200.png")}
          />
          <Image
            style={[styles.groupInner, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group-199.png")}
          />
        </View>
        <Text style={[styles.sajibRahman, styles.todayTypo]}>İŞKUR</Text>
        <Text style={[styles.activeNow, styles.helloTypo]}>Aktif</Text>
        <Image
          style={[styles.mesajlar1Child, styles.mesajlar1Position]}
          resizeMode="cover"
          source={require("../assets/vector-2533.png")}
        />
        <Image
          style={styles.mesajlar1Item}
          resizeMode="cover"
          source={require("../assets/rectangle-846.png")}
        />
        <View style={styles.groupParent}>
          <View style={[styles.groupContainer, styles.containerIconPosition]}>
            <Image
              style={[styles.vectorIcon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/group-99.png")}
            />
            <View
              style={[
                styles.thankYouVeryMouchForYourParent,
                styles.thankPosition,
              ]}
            >
              <View style={styles.thankYouVeryMouchForYour}>
                <Text
                  style={[styles.letmiOlduunuzMesaj, styles.helloTypo]}
                >{`İletmiş olduğunuz mesaj `}</Text>
                <Text
                  style={[styles.tarafmzaUlatSize, styles.helloTypo]}
                >{`tarafımıza ulaştı. Size yardımcı `}</Text>
                <Text
                  style={[styles.olabilmemizAdnaGemi, styles.helloTypo]}
                >{`olabilmemiz adına geçmiş iş `}</Text>
                <Text
                  style={[styles.tecrbelerinizdenBahseder, styles.helloTypo]}
                >{`tecrübelerinizden bahseder `}</Text>
                <Text style={[styles.misiniz, styles.helloTypo]}>misiniz?</Text>
              </View>
              <View style={[styles.wrapper, styles.containerIconPosition]}>
                <Text style={[styles.text, styles.textTypo]}>9:30</Text>
              </View>
            </View>
          </View>
          <Image
            style={[styles.groupChild1, styles.groupChildPosition]}
            resizeMode="cover"
            source={require("../assets/group-141.png")}
          />
        </View>
        <View style={[styles.groupView, styles.groupPosition]}>
          <View style={[styles.groupContainer, styles.containerIconPosition]}>
            <Image
              style={[styles.vectorIcon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/group-910.png")}
            />
            <View
              style={[
                styles.thankYouVeryMouchForYourGroup,
                styles.thankPosition,
              ]}
            >
              <Text style={[styles.letmiOlduunuzMesaj, styles.helloTypo]}>
                Son iş deneyiminiz ?
              </Text>
              <View style={[styles.container, styles.containerIconPosition]}>
                <Text style={[styles.text, styles.textTypo]}>10:38</Text>
              </View>
            </View>
          </View>
          <Image
            style={[styles.groupChild3, styles.groupChildPosition]}
            resizeMode="cover"
            source={require("../assets/group-142.png")}
          />
        </View>
        <View style={[styles.groupParent2, styles.groupParent2Position]}>
          <View style={[styles.groupContainer, styles.containerIconPosition]}>
            <Image
              style={[styles.vectorIcon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/group-910.png")}
            />
            <View
              style={[
                styles.thankYouVeryMouchForYourContainer,
                styles.thankPosition,
              ]}
            >
              <Text style={[styles.letmiOlduunuzMesaj, styles.helloTypo]}>
                Size uygun olabilecek işler ;
              </Text>
              <View style={[styles.frame, styles.containerIconPosition]}>
                <Text style={[styles.text, styles.textTypo]}>10:38</Text>
              </View>
            </View>
          </View>
          <Image
            style={[styles.groupChild3, styles.groupChildPosition]}
            resizeMode="cover"
            source={require("../assets/group-142.png")}
          />
        </View>
        <View style={[styles.groupGroup, styles.groupPosition]}>
          <Image
            style={[styles.vectorIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group14.png")}
          />
          <Text style={[styles.hello, styles.helloTypo]}>Merhaba</Text>
          <Image
            style={[styles.groupChild6, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group-14.png")}
          />
          <Text style={[styles.text3, styles.textTypo]}>9:24</Text>
        </View>
        <View style={styles.groupParent4}>
          <View style={[styles.groupParent5, styles.containerIconPosition]}>
            <Image
              style={[styles.vectorIcon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/group-911.png")}
            />
            <View
              style={[styles.thankYouVeryMouchForYour1, styles.thankPosition]}
            >
              <Text
                style={[styles.letmiOlduunuzMesaj, styles.helloTypo]}
              >{`Daha önce garsonluk, satış `}</Text>
              <Text
                style={[styles.danmanlVeKasiyerlik, styles.helloTypo]}
              >{`danışmanlığı ve kasiyerlik `}</Text>
              <Text style={[styles.pozisyonlarndaAltm, styles.helloTypo]}>
                pozisyonlarında çalıştım.
              </Text>
            </View>
            <View style={styles.wrapper1}>
              <Text style={[styles.text, styles.textTypo]}>9:30</Text>
            </View>
          </View>
          <Image
            style={[styles.groupChild8, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group-308.png")}
          />
        </View>
        <Image
          style={[styles.mesajlar1Inner, styles.mesajlar1Position]}
          resizeMode="cover"
          source={require("../assets/rectangle-852.png")}
        />
        <Text style={[styles.today, styles.todayTypo]}>Bugün</Text>
        <Image
          style={[styles.homeIndicatorIcon, styles.groupParent2Position]}
          resizeMode="cover"
          source={require("../assets/home-indicator.png")}
        />
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
        <View style={styles.groupParent6}>
          <Image
            style={[styles.groupChild9, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group-3020.png")}
          />
          <View style={[styles.groupParent7, styles.containerIconPosition]}>
            <Image
              style={[styles.vectorIcon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/group38.png")}
            />
            <View style={styles.hello1}>
              <Text
                style={[styles.letmiOlduunuzMesaj, styles.helloTypo]}
              >{`Ankara Cepa alışveriş `}</Text>
              <Text
                style={[styles.danmanlVeKasiyerlik, styles.helloTypo]}
              >{`merkezinde arabicada `}</Text>
              <Text style={[styles.pozisyonlarndaAltm, styles.helloTypo]}>
                garsonluk yaptım.
              </Text>
            </View>
            <Image
              style={[styles.groupChild10, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/group-164.png")}
            />
            <Text style={[styles.text5, styles.textTypo]}>10:39</Text>
          </View>
        </View>
        <Image
          style={[
            styles.arrowBackIos24dpFill0WghtIcon,
            styles.layerX00201Position,
          ]}
          resizeMode="cover"
          source={require("../assets/arrow-back-ios-24dp-fill0-wght400-grad0-opsz24.png")}
        />
        <Image
          style={[styles.mesajlar1Child1, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/group-1641.png")}
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
  containerIconPosition: {
    bottom: "0%",
    position: "absolute",
  },
  vectorIcon1Position: {
    right: "0.27%",
    width: "99.73%",
    left: "0%",
  },
  todayTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  helloTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  mesajlar1Position: {
    top: "14.78%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  thankPosition: {
    left: "3.81%",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorSlategray,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  groupChildPosition: {
    left: "89.41%",
    right: "5.51%",
    width: "5.08%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition: {
    right: "3.99%",
    position: "absolute",
  },
  groupParent2Position: {
    left: "32.18%",
    position: "absolute",
  },
  layerX00201Position: {
    left: "2.93%",
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
  vectorIcon1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    bottom: "0%",
    position: "absolute",
    top: "0%",
    height: "100%",
  },
  chatsFrameBackground: {
    left: "0.27%",
    width: "99.73%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    width: "82.09%",
    right: "17.91%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
    top: "0%",
    height: "100%",
  },
  typeYouMessage: {
    top: "32.71%",
    left: "4.78%",
    fontSize: FontSize.size_base,
    color: Color.colorSlategray,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  groupItem: {
    height: "50%",
    width: "7.16%",
    top: "25%",
    right: "21.49%",
    bottom: "25%",
    left: "71.34%",
    position: "absolute",
  },
  groupInner: {
    width: "14.33%",
    left: "85.67%",
    bottom: "0%",
    position: "absolute",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  vectorParent: {
    height: "5.91%",
    width: "89.1%",
    top: "90.15%",
    right: "5.59%",
    bottom: "3.94%",
    left: "5.32%",
    position: "absolute",
  },
  sajibRahman: {
    top: "6.28%",
    left: "42.82%",
    fontSize: FontSize.size_lg,
    color: Color.colorGray,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  activeNow: {
    top: "12.44%",
    left: "45.74%",
    color: Color.colorLimegreen,
  },
  mesajlar1Child: {
    height: "0.18%",
    bottom: "85.04%",
    right: "0.27%",
    width: "99.73%",
    left: "0%",
  },
  mesajlar1Item: {
    width: "36.94%",
    top: "39.29%",
    right: "11.17%",
    left: "51.89%",
    height: 0,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  letmiOlduunuzMesaj: {
    color: Color.colorGray,
    left: "0%",
    top: "0%",
  },
  tarafmzaUlatSize: {
    top: "20.62%",
    color: Color.colorGray,
    left: "0%",
  },
  olabilmemizAdnaGemi: {
    top: "41.24%",
    color: Color.colorGray,
    left: "0%",
  },
  tecrbelerinizdenBahseder: {
    top: "61.86%",
    color: Color.colorGray,
    left: "0%",
  },
  misiniz: {
    top: "82.47%",
    color: Color.colorGray,
    left: "0%",
  },
  thankYouVeryMouchForYour: {
    height: "96.04%",
    bottom: "3.96%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  text: {
    left: "0%",
    top: "0%",
  },
  wrapper: {
    height: "14.85%",
    width: "13%",
    top: "85.15%",
    right: "3.5%",
    left: "83.5%",
  },
  thankYouVeryMouchForYourParent: {
    height: "86.32%",
    top: "11.71%",
    bottom: "1.97%",
    right: "11.44%",
    width: "84.75%",
    left: "3.81%",
  },
  groupContainer: {
    left: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  groupChild1: {
    height: "5.98%",
    top: "89.4%",
    bottom: "4.62%",
  },
  groupParent: {
    height: "14.41%",
    top: "32.14%",
    right: "2.39%",
    bottom: "53.45%",
    left: "34.84%",
    width: "62.77%",
    position: "absolute",
  },
  container: {
    height: "56.18%",
    width: "16.08%",
    top: "43.82%",
    left: "83.92%",
    right: "0%",
  },
  thankYouVeryMouchForYourGroup: {
    height: "58.04%",
    width: "84.32%",
    top: "35.87%",
    right: "11.86%",
    bottom: "6.09%",
  },
  groupChild3: {
    height: "15.22%",
    top: "71.96%",
    bottom: "12.83%",
  },
  groupView: {
    top: "63.3%",
    bottom: "31.03%",
    left: "33.24%",
    height: "5.67%",
    width: "62.77%",
  },
  frame: {
    height: "47.62%",
    width: "16%",
    top: "52.38%",
    left: "84%",
    right: "0%",
  },
  thankYouVeryMouchForYourContainer: {
    height: "68.48%",
    top: "29.35%",
    bottom: "2.17%",
    right: "11.44%",
    width: "84.75%",
    left: "3.81%",
  },
  groupParent2: {
    top: "82.88%",
    right: "5.05%",
    bottom: "11.45%",
    height: "5.67%",
    width: "62.77%",
  },
  hello: {
    top: "33.17%",
    left: "12.41%",
    color: Color.colorGray,
  },
  groupChild6: {
    height: "17.07%",
    width: "8.28%",
    top: "50.24%",
    right: "4.83%",
    bottom: "32.68%",
    left: "86.9%",
    position: "absolute",
  },
  text3: {
    top: "43.9%",
    left: "65.52%",
  },
  groupGroup: {
    height: "5.05%",
    width: "38.56%",
    top: "25.25%",
    bottom: "69.7%",
    left: "57.45%",
  },
  danmanlVeKasiyerlik: {
    top: "35.09%",
    color: Color.colorGray,
    left: "0%",
  },
  pozisyonlarndaAltm: {
    top: "70.18%",
    color: Color.colorGray,
    left: "0%",
  },
  thankYouVeryMouchForYour1: {
    height: "67.86%",
    width: "75.42%",
    top: "6.67%",
    right: "20.76%",
    bottom: "25.48%",
  },
  wrapper1: {
    height: "17.86%",
    width: "11.02%",
    top: "73.81%",
    right: "11.23%",
    bottom: "8.33%",
    left: "77.75%",
    position: "absolute",
  },
  groupParent5: {
    width: "83.78%",
    left: "16.22%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  groupChild8: {
    height: "44.05%",
    width: "13.53%",
    top: "7.14%",
    right: "86.47%",
    bottom: "48.81%",
    left: "0%",
    position: "absolute",
  },
  groupParent4: {
    height: "10.34%",
    width: "74.92%",
    top: "49.63%",
    right: "19.41%",
    bottom: "40.02%",
    left: "5.66%",
    position: "absolute",
  },
  mesajlar1Inner: {
    height: "3.94%",
    width: "15.69%",
    right: "44.68%",
    bottom: "81.28%",
    left: "39.63%",
  },
  today: {
    top: "19.74%",
    left: "37.61%",
    fontSize: FontSize.size_smi,
    color: Color.colorSlategray,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  homeIndicatorIcon: {
    height: "0.62%",
    width: "35.64%",
    top: "98.4%",
    right: "32.18%",
    bottom: "0.99%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  layerX00201: {
    top: "8%",
    right: "89.47%",
    bottom: "88.87%",
    width: "7.61%",
    height: "3.13%",
  },
  groupChild9: {
    height: "46.25%",
    width: "13.34%",
    right: "86.66%",
    bottom: "53.75%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  hello1: {
    height: "75%",
    width: "62.03%",
    top: "13.82%",
    right: "32.91%",
    bottom: "11.18%",
    left: "5.06%",
    position: "absolute",
  },
  groupChild10: {
    height: "9.21%",
    width: "5.06%",
    top: "72.37%",
    right: "2.95%",
    bottom: "18.42%",
    left: "91.98%",
    position: "absolute",
  },
  text5: {
    top: "67.11%",
    left: "76.79%",
  },
  groupParent7: {
    height: "95%",
    width: "82.95%",
    top: "5%",
    left: "17.05%",
    right: "0%",
  },
  groupParent6: {
    height: "9.85%",
    width: "75.98%",
    top: "70.81%",
    right: "20.21%",
    bottom: "19.33%",
    left: "3.8%",
    position: "absolute",
  },
  arrowBackIos24dpFill0WghtIcon: {
    height: "3.69%",
    width: "7.98%",
    top: "38.79%",
    right: "89.1%",
    bottom: "57.51%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  mesajlar1Child1: {
    height: "0.86%",
    width: "3.19%",
    top: "57.96%",
    right: "21.68%",
    bottom: "41.18%",
    left: "75.13%",
    position: "absolute",
  },
  mesajlar11: {
    width: "100.27%",
    right: "-0.27%",
    left: "0%",
    top: "0%",
    height: "100%",
  },
  mesajlar1: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Mesajlar2;
