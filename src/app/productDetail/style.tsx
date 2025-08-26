import { StyleSheet } from "react-native";
import colors from "@//styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.gray[100],
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.gray[800],
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 12,
  },
  price: {
    fontSize: 20,
    marginTop: 8,
    fontWeight: "bold",
    color: "#0fe41a",
  },
});
