import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigator from "./src/Navigator/BottomNavigator";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";

const queryClient = new QueryClient();

export default function App() {
  const [fontsLoaded] = useFonts({
    "font-inter": require("./assets/fonts/font-inter.ttf"),
    "font-raleway": require("./assets/fonts/Raleway-VariableFont_wght.ttf"),
    "font-mooli": require("./assets/fonts/Mooli-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer onReady={onLayoutRootView}>
          <BottomNavigator />
        </NavigationContainer>
      </QueryClientProvider>
    </>
  );
}
