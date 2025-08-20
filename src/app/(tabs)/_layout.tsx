import { Tabs } from "expo-router";

import Feather from "@expo/vector-icons/Feather";
import colors from "@//styles/colors";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, //Esconde o cabeçalho padrão
        tabBarActiveTintColor: colors.gray[100], //cor de icone ativo
        tabBarShowLabel: false, // esconde rótulo do icone
        tabBarInactiveTintColor: colors.gray[400], // cor de icone inativo

        tabBarStyle: {
          // estilo da barra de navegação
          backgroundColor: colors.gray[700], // cor de fundo
          borderTopColor: colors.gray[400], // cor da borda superior
          paddingTop: 10, // espaçamento superior
          height: 80,
        },
      }}
    >
      {/* Define a ordem da tela */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-bag" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={colors.blue[500]} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
