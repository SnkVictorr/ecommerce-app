import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

import Header from "../components/header";
import Feather from "@expo/vector-icons/Feather";
import colors from "../styles/colors";


export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          header: () => <Header />,
          drawerActiveTintColor: colors.gray[100],
          drawerInactiveTintColor: colors.gray[400],
          drawerStyle: {
            backgroundColor: colors.gray[800],
            width: 300,
          },
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            title: "Home",
            drawerIcon: ({ color, size }) => (
              <Feather name="home" size={size} color={color} />
            ),
          }}
        />

      </Drawer>
    </GestureHandlerRootView>

  );
}
