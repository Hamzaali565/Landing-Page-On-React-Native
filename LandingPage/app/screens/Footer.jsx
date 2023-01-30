import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Footer = () => {
  return (
    <View style={styles.container}>
      {/* About - Contact -terms of Use */}
      <View style={styles.threeText}>
        <AppText style={styles.text}>About</AppText>
        <AppText style={styles.text}>Contact</AppText>
        <AppText style={styles.text}>Terms of Use</AppText>
      </View>
      {/* Privacy Policy */}
      <AppText style={styles.PP}>Privacy Policy</AppText>
      {/* CopyRight */}
      <AppText style={styles.copyRight}>
        ©Your Website 2022.All Right Reserved.
      </AppText>
      {/* Icons */}
      <View style={styles.icons}>
        <MaterialCommunityIcons name="facebook" color={colors.blue} size={40} />
        <MaterialCommunityIcons name="twitter" color={colors.blue} size={40} />
        <MaterialCommunityIcons
          name="instagram"
          color={colors.blue}
          size={40}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mediumGrey,
    paddingVertical: 70,
  },
  copyRight: {
    color: colors.grey,
    alignSelf: "center",
    marginTop: 18,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 100,
    marginTop: 30,
  },
  text: {
    color: colors.blue,
    textDecorationLine: "underline",
  },
  threeText: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 40,
  },
  PP: {
    alignSelf: "center",
    textDecorationLine: "underline",
    color: colors.blue,
    marginTop: 10,
  },
});
export default Footer;
