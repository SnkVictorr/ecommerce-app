import colors from "@//styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 350,
    height: 150,
    resizeMode: "cover",
    borderRadius: 8,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: colors.gray[300],
  },
});
