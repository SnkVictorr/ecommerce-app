import colors from "@//styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 6,
  },
  ProductItem: {
    padding: 12,
    width: 200,
    minHeight: 250,
    backgroundColor: colors.gray[200],

    borderRadius: 12,
    marginRight: 12,
  },
  image: {
    alignSelf: "center",
    width: 150,
    height: 150,
    borderRadius: 12,
  },
  title: {
    marginTop: 5,
    maxWidth: 200,
    fontSize: 16,
    fontWeight: "bold",
    color: colors.gray[800],
  },
  price: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "bold",
    color: "#26c93b",
  },
});
