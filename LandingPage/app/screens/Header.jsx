import React from "react";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import { useFonts } from "expo-font";
import { AllFonts } from "../components/AllFonts";

const Header = () => {
  let fonts = AllFonts();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Start Bootstrap</Text>
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
  text: {
    fontFamily: "Lato-Regular",
    fontSize: 20,
  },
});
export default Header;
