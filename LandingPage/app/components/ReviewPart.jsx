import React from "react";
import { Image, View, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

const ReviewPart = ({ heading, ImageURI, style, text }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.imageContainer} source={ImageURI} />
      </View>
      <AppText style={styles.heading}>{heading}</AppText>
      <AppText style={[styles.text, style]}>{text}</AppText>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 60,
  },
  heading: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: "700",
  },
  imageContainer: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  text: {
    marginTop: 10,
    color: colors.grey,
    textAlign: "center",
    // fontSize: 20,
  },
});
export default ReviewPart;
