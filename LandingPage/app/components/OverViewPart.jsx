import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import colors from "../config/colors";
const OverViewPart = ({ style, name, heading, text, textStyle }) => {
  return (
    <View style={[styles.container, style]}>
      <View>
        <MaterialIcons name={name} size={150} color={colors.blue} />
      </View>
      <AppText style={styles.heading}>{heading}</AppText>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  heading: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: "700",
  },
  text: {
    textAlign: "center",
    fontSize: 23,
    paddingHorizontal: 30,
    color: colors.grey,
    marginTop: 10,
    lineHeight: 30,
    fontWeight: "300",
  },
});
export default OverViewPart;
