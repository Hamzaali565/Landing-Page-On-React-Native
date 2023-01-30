import React from "react";
import { ImageBackground, Text, StyleSheet, View } from "react-native";
import AppInputText from "../components/AppInputText";
import AppText from "../components/AppText";
import colors from "../config/colors";

const SignUpInput = () => {
  return (
    <ImageBackground
      source={require("../assets/sea.jpg")}
      style={styles.bgImage}
    >
      <AppText style={styles.text}>
        Generate More Leads with a professional landing page!
      </AppText>
      <View style={styles.twoFields}>
        <AppInputText />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  bgImage: {
    height: 790,
    justifyContent: "center",
  },
  text: {
    color: colors.white,
    fontWeight: "700",
    fontSize: 35,
    textAlign: "center",
    paddingHorizontal: 15,
    lineHeight: 45,
  },
  twoFields: {
    marginTop: 20,
  },
});
export default SignUpInput;
