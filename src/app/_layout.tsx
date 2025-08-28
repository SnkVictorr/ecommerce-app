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
        <Drawer.Screen
          name="category/index"
          options={{
            title: "Categorias",
            drawerIcon: ({ color, size }) => (
              <Feather name="grid" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="product/index"
          options={{
            title: "Produtos",
            drawerIcon: ({ color, size }) => (
              <Feather name="box" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="productDetail/[id]"
          options={{
            title: "Detalhes",
            drawerIcon: ({ color, size }) => (
              <Feather name="info" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
