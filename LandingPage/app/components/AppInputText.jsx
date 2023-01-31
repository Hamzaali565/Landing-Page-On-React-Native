import React from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";
import AppButton from "./AppButton";
import Screen from "./Screen";

const AppInputText = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.Email}>
          <TextInput placeholder="Email Address" />
        </View>
        <View style={styles.Button}>
          <Text style={styles.text}>Submit</Text>
        </View>
      </View>
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  Email: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 5,
  },
  Button: {
    borderRadius: 5,
    backgroundColor: colors.blue,
    padding: 20,
    alignItems: "center",
    marginVertical: 20,
  },
  text: {
    fontSize: 20,
    color: colors.white,
    fontFamily: "Lato-Regular",
  },
});
export default AppInputText;
