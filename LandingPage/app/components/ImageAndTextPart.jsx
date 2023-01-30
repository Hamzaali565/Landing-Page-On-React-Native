import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

const ImageAndTextPart = ({ heading, ImageURI, style, text }) => {
  return (
    <View>
      <Image source={ImageURI} style={styles.Image} />
      <View style={[styles.twoContainers, style]}>
        <View>
          <AppText style={styles.heading}>{heading}</AppText>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    fontWeight: "700",
  },
  Image: {},
  twoContainers: {
    alignItems: "center",
    paddingVertical: 70,
    paddingHorizontal: 40,
  },
  text: {
    marginTop: 10,
    color: colors.grey,
    fontSize: 22,
    lineHeight: 32,
    fontWeight: "300",
  },
});
export default ImageAndTextPart;
