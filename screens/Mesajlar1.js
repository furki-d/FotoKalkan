import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Mesajlar1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mesajlar}>
      <Image
        style={[styles.vectorIcon, styles.iconGroupLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={[styles.mesajlar1, styles.vectorIconPosition]}>
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
        <View style={styles.sajibRahman}>
          <Text
            style={[styles.siberSularlaMcadele, styles.daireBakanlTypo]}
          >{`Siber Suçlarla Mücadele `}</Text>
          <Text style={[styles.daireBakanl, styles.daireBakanlTypo]}>
            Daire Başkanlığı
          </Text>
        </View>
        <Text style={[styles.activeNow, styles.helloTypo]}>Aktif</Text>
        <Image
          style={[styles.mesajlarChild, styles.mesajlarPosition]}
          resizeMode="cover"
          source={require("../assets/vector-2533.png")}
        />
        <Image
          style={styles.mesajlarItem}
          resizeMode="cover"
          source={require("../assets/rectangle-846.png")}
        />
        <View style={styles.groupParent}>
          <View style={[styles.groupContainer, styles.vectorIconPosition]}>
            <Image
              style={[styles.vectorIcon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/group-93.png")}
            />
            <View style={styles.thankYouVeryMouchForYourParent}>
              <View style={styles.thankYouVeryMouchForYour}>
                <Text
                  style={[styles.letmiOlduunuzMesaj, styles.helloTypo]}
                >{`İletmiş olduğunuz mesaj `}</Text>
                <Text
                  style={[styles.karakolumuzaUlatN, styles.helloTypo]}
                >{`karakolumuza ulaştı. n kısa süre `}</Text>
                <Text
                  style={[styles.ierisindeYetkiliKii, styles.helloTypo]}
                >{`içerisinde yetkili kişi tarafından `}</Text>
                <Text style={[styles.bilgilendirileceksiniz, styles.helloTypo]}>
                  bilgilendirileceksiniz.
                </Text>
              </View>
              <View style={[styles.wrapper, styles.vectorIconPosition]}>
                <Text style={[styles.text, styles.textTypo]}>9:30</Text>
              </View>
            </View>
          </View>
          <Image
            style={[styles.groupChild1, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group-14.png")}
          />
        </View>
        <View style={styles.groupGroup}>
          <Image
            style={[styles.vectorIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group14.png")}
          />
          <Text style={[styles.hello, styles.helloTypo]}>Merhaba</Text>
          <Image
            style={[styles.groupChild2, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group-14.png")}
          />
          <Text style={[styles.text1, styles.textTypo]}>9:24</Text>
        </View>
        <View style={[styles.groupView, styles.groupPosition]}>
          <View style={[styles.groupParent1, styles.vectorIconPosition]}>
            <Image
              style={[styles.vectorIcon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/group-94.png")}
            />
            <View
              style={[
                styles.thankYouVeryMouchForYour1,
                styles.groupChild5Layout,
              ]}
            >
              <Text
                style={[styles.letmiOlduunuzMesaj, styles.helloTypo]}
              >{`Teşekkürler sizden en kısa `}</Text>
              <Text style={[styles.sredeDnBekliyorum, styles.helloTypo]}>
                sürede dönüş bekliyorum.
              </Text>
            </View>
            <View style={styles.parent}>
              <Text style={[styles.text, styles.textTypo]}>9:30</Text>
              <Image
                style={[styles.groupChild4, styles.iconGroupLayout]}
                resizeMode="cover"
                source={require("../assets/group-165.png")}
              />
            </View>
          </View>
          <Image
            style={[styles.groupChild5, styles.groupChild5Layout]}
            resizeMode="cover"
            source={require("../assets/group-309.png")}
          />
        </View>
        <Image
          style={[styles.mesajlarInner, styles.mesajlarPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-852.png")}
        />
        <Text style={[styles.today, styles.todayTypo]}>Bugün</Text>
        <Image
          style={[styles.homeIndicatorIcon, styles.iconGroupLayout]}
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
        <View style={[styles.groupParent2, styles.groupPosition]}>
          <Image
            style={[styles.groupChild6, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group-309.png")}
          />
          <View style={[styles.groupParent3, styles.vectorIconPosition]}>
            <Image
              style={[styles.vectorIcon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/group14.png")}
            />
            <Text style={[styles.hello, styles.helloTypo]}>Merhaba</Text>
            <Image
              style={[styles.groupChild2, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/group-14.png")}
            />
            <Text style={[styles.text1, styles.textTypo]}>9:24</Text>
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
  vectorIconPosition: {
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
    color: Color.colorSlategray,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  daireBakanlTypo: {
    fontSize: FontSize.size_lg,
    color: Color.colorGray,
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
  mesajlarPosition: {
    top: "14.78%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorSlategray,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  groupPosition: {
    left: "2.74%",
    position: "absolute",
  },
  groupChild5Layout: {
    height: "75.51%",
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
  siberSularlaMcadele: {
    color: Color.colorGray,
    left: "0%",
    top: "0%",
  },
  daireBakanl: {
    top: "49.43%",
    left: "15.37%",
    color: Color.colorGray,
  },
  sajibRahman: {
    height: "5.36%",
    width: "54.52%",
    top: "5.54%",
    right: "22.87%",
    bottom: "89.1%",
    left: "22.61%",
    position: "absolute",
  },
  activeNow: {
    top: "12.81%",
    left: "45.74%",
    color: Color.colorLimegreen,
  },
  mesajlarChild: {
    height: "0.18%",
    bottom: "85.04%",
    right: "0.27%",
    width: "99.73%",
    left: "0%",
  },
  mesajlarItem: {
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
  karakolumuzaUlatN: {
    top: "25.97%",
    color: Color.colorGray,
    left: "0%",
  },
  ierisindeYetkiliKii: {
    top: "51.95%",
    color: Color.colorGray,
    left: "0%",
  },
  bilgilendirileceksiniz: {
    top: "77.92%",
    color: Color.colorGray,
    left: "0%",
  },
  thankYouVeryMouchForYour: {
    height: "85.56%",
    bottom: "14.44%",
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
    height: "16.67%",
    width: "12.38%",
    top: "83.33%",
    right: "8.1%",
    left: "79.52%",
  },
  thankYouVeryMouchForYourParent: {
    height: "94.74%",
    width: "88.98%",
    top: "2.84%",
    right: "7.2%",
    bottom: "2.42%",
    left: "3.81%",
    position: "absolute",
  },
  groupContainer: {
    left: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  groupChild1: {
    height: "7.37%",
    width: "5.08%",
    top: "86.95%",
    right: "5.51%",
    bottom: "5.68%",
    left: "89.41%",
    position: "absolute",
  },
  groupParent: {
    height: "11.7%",
    width: "62.77%",
    top: "51.72%",
    right: "3.72%",
    bottom: "36.58%",
    left: "33.51%",
    position: "absolute",
  },
  hello: {
    top: "33.17%",
    left: "12.41%",
    color: Color.colorGray,
  },
  groupChild2: {
    height: "17.07%",
    width: "8.28%",
    top: "50.24%",
    right: "4.83%",
    bottom: "32.68%",
    left: "86.9%",
    position: "absolute",
  },
  text1: {
    top: "43.9%",
    left: "65.52%",
  },
  groupGroup: {
    height: "5.05%",
    width: "38.56%",
    top: "40.64%",
    right: "3.99%",
    bottom: "54.31%",
    left: "57.45%",
    position: "absolute",
  },
  sredeDnBekliyorum: {
    top: "54.05%",
    color: Color.colorGray,
    left: "0%",
  },
  thankYouVeryMouchForYour1: {
    width: "74.15%",
    top: "11.43%",
    right: "22.03%",
    bottom: "13.06%",
    left: "3.81%",
  },
  groupChild4: {
    height: "46.67%",
    width: "27.91%",
    top: "30.67%",
    bottom: "22.67%",
    left: "72.09%",
    right: "0%",
    position: "absolute",
  },
  parent: {
    height: "30.61%",
    width: "18.22%",
    top: "59.18%",
    right: "2.75%",
    bottom: "10.2%",
    left: "79.03%",
    position: "absolute",
  },
  groupParent1: {
    width: "83.78%",
    left: "16.22%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  groupChild5: {
    width: "13.53%",
    top: "12.24%",
    right: "86.47%",
    bottom: "12.24%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    left: "0%",
  },
  groupView: {
    height: "6.03%",
    width: "74.92%",
    top: "78.82%",
    right: "22.34%",
    bottom: "15.15%",
  },
  mesajlarInner: {
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
  },
  homeIndicatorIcon: {
    height: "0.62%",
    width: "35.64%",
    top: "98.4%",
    right: "32.18%",
    bottom: "0.99%",
    left: "32.18%",
    position: "absolute",
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
  groupChild6: {
    height: "82.22%",
    width: "19.67%",
    right: "80.33%",
    bottom: "17.78%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  groupParent3: {
    height: "91.11%",
    width: "74.86%",
    top: "8.89%",
    left: "25.14%",
    right: "0%",
  },
  groupParent2: {
    height: "5.54%",
    width: "51.52%",
    top: "67.98%",
    right: "45.74%",
    bottom: "26.48%",
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
  mesajlar1: {
    width: "100.27%",
    right: "-0.27%",
    left: "0%",
    top: "0%",
    height: "100%",
  },
  mesajlar: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Mesajlar1;
