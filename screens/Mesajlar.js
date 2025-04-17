import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Mesajlar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mesajlar2}>
      <Image
        style={[styles.vectorIcon, styles.iconGroupLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={styles.mesajlar21}>
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
          <Image
            style={[styles.vectorIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/sajib-rahman-frame-background.png")}
          />
          <View style={styles.sajibRahman1}>
            <Text
              style={[styles.ankaraPsikoterapi, styles.akademisiTypo]}
            >{`Ankara Psikoterapi `}</Text>
            <Text style={[styles.akademisi, styles.akademisiTypo]}>
              Akademisi
            </Text>
          </View>
        </View>
        <Text style={[styles.activeNow, styles.helloTypo]}>Aktif</Text>
        <Image
          style={[styles.mesajlar2Child, styles.vectorIcon1Position]}
          resizeMode="cover"
          source={require("../assets/vector-2533.png")}
        />
        <Image
          style={styles.mesajlar2Item}
          resizeMode="cover"
          source={require("../assets/rectangle-846.png")}
        />
        <View style={[styles.groupParent, styles.groupPosition1]}>
          <View style={[styles.groupContainer, styles.groupPosition2]}>
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
                  style={[styles.merkezimizeUlatEn, styles.helloTypo]}
                >{`merkezimize ulaştı. En yakın `}</Text>
                <Text
                  style={[styles.randevuTarihimiz19072024, styles.helloTypo]}
                >{`randevu tarihimiz 19.07.2024 `}</Text>
                <Text style={[styles.saat1400, styles.helloTypo]}>
                  saat 14:00
                </Text>
              </View>
              <View style={[styles.wrapper, styles.groupPosition2]}>
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
        <View style={[styles.groupGroup, styles.groupLayout]}>
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
          <Image
            style={[styles.vectorIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group14.png")}
          />
          <Text style={[styles.hello, styles.helloTypo]}>{`Tabi `}</Text>
          <Image
            style={[styles.groupChild2, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group-14.png")}
          />
          <Text style={[styles.text1, styles.textTypo]}>9:24</Text>
        </View>
        <View style={[styles.groupParent1, styles.groupPosition]}>
          <Image
            style={[styles.vectorIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group15.png")}
          />
          <View style={styles.hello2}>
            <Text
              style={[styles.letmiOlduunuzMesaj, styles.helloTypo]}
            >{`Randevunuz `}</Text>
            <Text style={[styles.oluturulmutur, styles.helloTypo]}>
              oluşturulmuştur.
            </Text>
          </View>
          <Image
            style={[styles.groupChild4, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group-14.png")}
          />
          <Text style={[styles.text3, styles.textTypo]}>9:24</Text>
        </View>
        <View style={[styles.groupParent2, styles.groupParentLayout]}>
          <View style={[styles.groupParent3, styles.groupPosition2]}>
            <Image
              style={[styles.vectorIcon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/group-94.png")}
            />
            <View
              style={[
                styles.thankYouVeryMouchForYour1,
                styles.groupChild6Layout,
              ]}
            >
              <Text
                style={[styles.letmiOlduunuzMesaj, styles.helloTypo]}
              >{`Tarih benim için uygun randevu `}</Text>
              <Text style={[styles.oluturulmutur, styles.helloTypo]}>
                almak istiyorum.
              </Text>
            </View>
            <View style={[styles.container, styles.parentPosition]}>
              <Text style={[styles.text, styles.textTypo]}>9:30</Text>
            </View>
          </View>
          <Image
            style={[styles.groupChild6, styles.groupChild6Layout]}
            resizeMode="cover"
            source={require("../assets/group-308.png")}
          />
        </View>
        <View style={[styles.groupParent4, styles.groupParent4Position]}>
          <View style={[styles.groupParent3, styles.groupPosition2]}>
            <Image
              style={[styles.vectorIcon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/group-94.png")}
            />
            <Text
              style={[styles.thankYouVery, styles.helloTypo]}
            >{`Teşekkürler. Görüşmek üzere `}</Text>
            <View style={[styles.parent, styles.parentPosition]}>
              <Text style={[styles.text, styles.textTypo]}>9:30</Text>
              <Image
                style={[styles.groupChild8, styles.iconGroupLayout]}
                resizeMode="cover"
                source={require("../assets/group-165.png")}
              />
            </View>
          </View>
          <Image
            style={[styles.groupChild6, styles.groupChild6Layout]}
            resizeMode="cover"
            source={require("../assets/group-309.png")}
          />
        </View>
        <Image
          style={[styles.mesajlar2Inner, styles.groupIcon4Position]}
          resizeMode="cover"
          source={require("../assets/rectangle-852.png")}
        />
        <Text style={[styles.today, styles.todayTypo]}>Bugün</Text>
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
        <Image
          style={[styles.mesajlar2Child1, styles.groupParent4Position]}
          resizeMode="cover"
          source={require("../assets/group-308.png")}
        />
        <Image
          style={[styles.groupIcon4, styles.groupIcon4Position]}
          resizeMode="cover"
          source={require("../assets/group14.png")}
        />
        <Text style={[styles.hello3, styles.helloTypo]}>Merhaba</Text>
        <Image
          style={[styles.mesajlar2Child2, styles.mesajlar2ChildPosition]}
          resizeMode="cover"
          source={require("../assets/vector-2531.png")}
        />
        <Image
          style={[styles.mesajlar2Child3, styles.mesajlar2ChildLayout]}
          resizeMode="cover"
          source={require("../assets/vector-2532.png")}
        />
        <Image
          style={[styles.mesajlar2Child4, styles.mesajlar2ChildLayout]}
          resizeMode="cover"
          source={require("../assets/vector-2532.png")}
        />
        <Text style={[styles.text6, styles.textTypo]}>9:24</Text>
        <Image
          style={[
            styles.arrowBackIos24dpFill0WghtIcon,
            styles.layerX00201Position,
          ]}
          resizeMode="cover"
          source={require("../assets/arrow-back-ios-24dp-fill0-wght400-grad0-opsz24.png")}
        />
        <Image
          style={[styles.mesajlar2Child5, styles.mesajlar2ChildLayout1]}
          resizeMode="cover"
          source={require("../assets/vector-25311.png")}
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
  vectorIcon1Position: {
    right: "0.27%",
    width: "99.73%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  todayTypo: {
    textAlign: "left",
    color: Color.colorSlategray,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  akademisiTypo: {
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
  groupPosition1: {
    right: "4.79%",
    position: "absolute",
  },
  groupPosition2: {
    right: "0%",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorSlategray,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  groupLayout: {
    width: "38.56%",
    height: "5.05%",
  },
  groupPosition: {
    right: "6.12%",
    position: "absolute",
  },
  groupParentLayout: {
    width: "74.92%",
    height: "6.03%",
  },
  groupChild6Layout: {
    height: "75.51%",
    position: "absolute",
  },
  parentPosition: {
    left: "79.03%",
    bottom: "10.2%",
    top: "59.18%",
    height: "30.61%",
    position: "absolute",
  },
  groupParent4Position: {
    left: "3.8%",
    position: "absolute",
  },
  groupIcon4Position: {
    right: "44.68%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  layerX00201Position: {
    left: "2.93%",
    position: "absolute",
  },
  mesajlar2ChildPosition: {
    bottom: "46.72%",
    top: "52.41%",
  },
  mesajlar2ChildLayout: {
    width: "1.65%",
    height: "0.86%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  mesajlar2ChildLayout1: {
    width: "2.42%",
    height: "0.86%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
    bottom: "0%",
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
    top: "0%",
    height: "100%",
    position: "absolute",
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
    right: "0%",
    position: "absolute",
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
  ankaraPsikoterapi: {
    color: Color.colorGray,
    left: "0%",
    top: "0%",
  },
  akademisi: {
    top: "50%",
    left: "20.82%",
    color: Color.colorGray,
  },
  sajibRahman1: {
    height: "95.65%",
    width: "75%",
    right: "12.74%",
    bottom: "4.35%",
    left: "12.26%",
    top: "0%",
    position: "absolute",
  },
  sajibRahman: {
    height: "5.67%",
    width: "56.38%",
    top: "5.79%",
    right: "21.81%",
    bottom: "88.55%",
    left: "21.81%",
    position: "absolute",
  },
  activeNow: {
    top: "12.07%",
    left: "41.49%",
    color: Color.colorLimegreen,
  },
  mesajlar2Child: {
    height: "0.18%",
    bottom: "85.04%",
    top: "14.78%",
  },
  mesajlar2Item: {
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
  merkezimizeUlatEn: {
    top: "25.97%",
    color: Color.colorGray,
    left: "0%",
  },
  randevuTarihimiz19072024: {
    top: "51.95%",
    color: Color.colorGray,
    left: "0%",
  },
  saat1400: {
    top: "77.92%",
    color: Color.colorGray,
    left: "0%",
  },
  thankYouVeryMouchForYour: {
    height: "85.56%",
    width: "98.45%",
    right: "1.55%",
    bottom: "14.44%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  text: {
    left: "0%",
    top: "0%",
  },
  wrapper: {
    height: "16.67%",
    width: "13.47%",
    top: "83.33%",
    left: "86.53%",
    bottom: "0%",
  },
  thankYouVeryMouchForYourParent: {
    height: "94.74%",
    width: "81.78%",
    top: "2.84%",
    right: "14.41%",
    bottom: "2.42%",
    left: "3.81%",
    position: "absolute",
  },
  groupContainer: {
    left: "0%",
    bottom: "0%",
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
    top: "34.85%",
    bottom: "53.45%",
    left: "32.45%",
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
    top: "26.48%",
    bottom: "68.47%",
    left: "56.65%",
    right: "4.79%",
    position: "absolute",
  },
  groupView: {
    top: "66.63%",
    bottom: "28.33%",
    left: "55.32%",
    width: "38.56%",
    height: "5.05%",
  },
  oluturulmutur: {
    top: "54.05%",
    color: Color.colorGray,
    left: "0%",
  },
  hello2: {
    height: "82.22%",
    width: "61.85%",
    top: "10.22%",
    right: "33.53%",
    bottom: "7.56%",
    left: "4.62%",
    position: "absolute",
  },
  groupChild4: {
    height: "15.56%",
    width: "6.94%",
    top: "45.78%",
    right: "4.62%",
    bottom: "38.67%",
    left: "88.44%",
    position: "absolute",
  },
  text3: {
    top: "40%",
    left: "70.52%",
  },
  groupParent1: {
    height: "5.54%",
    width: "46.01%",
    top: "73.52%",
    bottom: "20.94%",
    left: "47.87%",
  },
  thankYouVeryMouchForYour1: {
    width: "87.29%",
    top: "11.43%",
    right: "8.9%",
    bottom: "13.06%",
    left: "3.81%",
  },
  container: {
    width: "11.02%",
    right: "9.96%",
  },
  groupParent3: {
    width: "83.78%",
    left: "16.22%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  groupChild6: {
    width: "13.53%",
    top: "12.24%",
    right: "86.47%",
    bottom: "12.24%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    left: "0%",
  },
  groupParent2: {
    top: "57.27%",
    right: "22.34%",
    bottom: "36.7%",
    left: "2.74%",
    position: "absolute",
  },
  thankYouVery: {
    top: "29.59%",
    left: "3.81%",
    color: Color.colorGray,
  },
  groupChild8: {
    height: "46.67%",
    width: "27.91%",
    top: "30.67%",
    bottom: "22.67%",
    left: "72.09%",
    right: "0%",
    position: "absolute",
  },
  parent: {
    width: "18.22%",
    right: "2.75%",
  },
  groupParent4: {
    top: "80.42%",
    right: "21.28%",
    bottom: "13.55%",
    width: "74.92%",
    height: "6.03%",
  },
  mesajlar2Inner: {
    height: "3.94%",
    width: "15.69%",
    bottom: "81.28%",
    left: "39.63%",
    top: "14.78%",
  },
  today: {
    top: "19.74%",
    left: "37.61%",
    fontSize: FontSize.size_smi,
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
  mesajlar2Child1: {
    height: "4.56%",
    width: "10.13%",
    top: "49.38%",
    right: "86.06%",
    bottom: "46.06%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupIcon4: {
    top: "49.88%",
    bottom: "45.07%",
    left: "16.76%",
    width: "38.56%",
    height: "5.05%",
  },
  hello3: {
    top: "51.55%",
    left: "21.54%",
    color: Color.colorGray,
  },
  mesajlar2Child2: {
    right: "47.31%",
    left: "50.27%",
    width: "2.42%",
    height: "0.86%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  mesajlar2Child3: {
    right: "46.54%",
    left: "51.81%",
    bottom: "46.72%",
    top: "52.41%",
  },
  mesajlar2Child4: {
    top: "61.53%",
    right: "24.47%",
    bottom: "37.61%",
    left: "73.88%",
  },
  text6: {
    top: "52.09%",
    left: "42.02%",
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
  mesajlar2Child5: {
    top: "61.4%",
    right: "25.4%",
    bottom: "37.73%",
    left: "72.18%",
  },
  mesajlar21: {
    width: "100.27%",
    right: "-0.27%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  mesajlar2: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Mesajlar;
