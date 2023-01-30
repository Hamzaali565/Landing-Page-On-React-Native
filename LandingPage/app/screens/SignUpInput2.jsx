import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import AppInputText from "../components/AppInputText";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../config/colors";

const SignUpInput2 = () => {
  return (
    <ImageBackground
      source={require("../assets/sea.jpg")}
      style={styles.bgImage}
    >
      <AppText style={styles.text}>Ready to get Started?Sign up now!</AppText>
      <View style={styles.twoFields}>
        <AppInputText />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    paddingVertical: 130,
    justifyContent: "center",
  },
  text: {
    color: colors.white,
    fontWeight: "900",
    fontSize: 25,
    textAlign: "center",
    paddingHorizontal: 15,
    lineHeight: 30,
  },
  twoFields: {
    marginTop: 20,
  },
});
export default SignUpInput2;
