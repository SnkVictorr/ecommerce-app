import colors from "@//styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  title: {
    alignSelf: "center",
    color: colors.white,
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
});
