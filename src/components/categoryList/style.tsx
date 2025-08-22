import colors from "@//styles/colors";
import { StyleSheet } from "react-native";
import CategoryItem from "../categoryItem";
import CategoryList from ".";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  CategoryList: {
    padding: 12,
    backgroundColor: colors.gray[200],
    borderRadius: 12,
    marginRight: 12,
  },
  title: {
    textAlign: "left",
    color: colors.white,
    fontSize: 24,
    padding: 20,
  },
  list: {
    marginRight: 20,
    marginLeft: 20,
  },
});
