import React from "react";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
const Header = () => {
  return (
    <View style={styles.container}>
      <AppText>Start Bootstrap</AppText>
      <AppButton />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: colors.mediumGrey,
  },
});
export default Header;
