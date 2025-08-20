import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import colors from "@//styles/colors";
import { DrawerActions, useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer());
        }}
      >
        <Feather name="menu" size={25} color="white" />
      </TouchableOpacity>

      <Text style={styles.title}>Logotipo</Text>
      <Feather name="shopping-cart" style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingTop: 50,
    justifyContent: "space-between",
    backgroundColor: colors.gray[700],
  },
  icon: {
    color: colors.white,
    fontSize: 25,
  },
  title: {
    color: colors.white,
    fontSize: 18,
  },
});
