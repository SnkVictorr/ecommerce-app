import colors from "@//styles/colors";
import { StyleSheet } from "react-native";
import CategoryItem from ".";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  CategoryItem: {
    padding: 12,

    borderBottomColor: colors.gray[200],
    borderRadius: 12,
    marginRight: 12,
  },
});
