const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Ana1 from "./screens/Ana1";
import Giri from "./screens/Giri";
import Frame from "./screens/Frame";
import IPhone13Mini from "./screens/IPhone13Mini";
import ClipIPhone13Mini from "./screens/ClipIPhone13Mini";
import Frame1 from "./screens/Frame1";
import IPhone13Mini1 from "./screens/IPhone13Mini1";
import IkurSonu from "./screens/IkurSonu";
import KaytOl from "./screens/KaytOl";
import Profil from "./screens/Profil";
import YklemeEkran from "./screens/YklemeEkran";
import SbmdbSonu from "./screens/SbmdbSonu";
import Ana from "./screens/Ana";
import AnaSayfa from "./screens/AnaSayfa";


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Ana1"
              component={Ana1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FotorafnIerii"
              component={FotorafnIerii}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FotorafnIerii1"
              component={FotorafnIerii1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Giri"
              component={Giri}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HakanBurakDemir"
              component={HakanBurakDemir}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Resim20240512021544273"
              component={Resim20240512021544273}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Instagram"
              component={Instagram}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13Mini"
              component={IPhone13Mini}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ClipIPhone13Mini"
              component={ClipIPhone13Mini}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame1"
              component={Frame1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13Mini1"
              component={IPhone13Mini1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IkurSonu"
              component={IkurSonu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="KaytOl"
              component={KaytOl}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Men"
              component={Men}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Mesajlar"
              component={Mesajlar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Mesajlarm"
              component={Mesajlarm}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profil"
              component={Profil}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Ikayetlerim"
              component={Ikayetlerim}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Ikayetlerim1"
              component={Ikayetlerim1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Twitter"
              component={Twitter}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Whatsapp"
              component={Whatsapp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Yakup"
              component={Yakup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Yakup1"
              component={Yakup1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Yakup2"
              component={Yakup2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Yakup3"
              component={Yakup3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Yakup31"
              component={Yakup31}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Yakup32"
              component={Yakup32}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Yakup33"
              component={Yakup33}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Yakup4"
              component={Yakup4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Yakup5"
              component={Yakup5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Yakup6"
              component={Yakup6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Yakup41"
              component={Yakup41}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Yakup42"
              component={Yakup42}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Yakup43"
              component={Yakup43}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Yakup51"
              component={Yakup51}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Yakup7"
              component={Yakup7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="YklemeEkran"
              component={YklemeEkran}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FotorafnIerii2"
              component={FotorafnIerii2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Mesajlarm1"
              component={Mesajlarm1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PsikiyatriSonu"
              component={PsikiyatriSonu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PsikolojikUnsurlar"
              component={PsikolojikUnsurlar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PsikolojikUnsurlar1"
              component={PsikolojikUnsurlar1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PsikolojikUnsurlar2"
              component={PsikolojikUnsurlar2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PsikolojikUnsurlar3"
              component={PsikolojikUnsurlar3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PsikolojikUnsurlar4"
              component={PsikolojikUnsurlar4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SbmdbSonu"
              component={SbmdbSonu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Mesajlar1"
              component={Mesajlar1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Ana"
              component={Ana}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AnaSayfa"
              component={AnaSayfa}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Mesajlar2"
              component={Mesajlar2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PsikolojikUnsurlar5"
              component={PsikolojikUnsurlar5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PsikolojikUnsurlar6"
              component={PsikolojikUnsurlar6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PsikolojikUnsurlar7"
              component={PsikolojikUnsurlar7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PsikolojikUnsurlar8"
              component={PsikolojikUnsurlar8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PsikolojikUnsurlar9"
              component={PsikolojikUnsurlar9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PsikolojikUnsurlar10"
              component={PsikolojikUnsurlar10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PsikolojikUnsurlar11"
              component={PsikolojikUnsurlar11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PsikolojikUnsurlar12"
              component={PsikolojikUnsurlar12}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
