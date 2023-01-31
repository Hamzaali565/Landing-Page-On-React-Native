import React from "react";
import { Button, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import colors from "../config/colors";
const AppButton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  text: {
    backgroundColor: colors.blue,
    // width: 80,
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Lato-Regular",
    // paddingVertical: 10,
    borderRadius: 5,
    color: colors.white,
    fontWeight: "400",
  },
});

export default AppButton;
