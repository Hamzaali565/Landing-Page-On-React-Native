import React from "react";
import { Image, View, StyleSheet, Text, ImageBackground } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
// import { Lato_300Light_Italic } from "@expo-google-fonts/dev";
// import { Lato_300Light } from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";

const ImageAndTextPart = ({ heading, ImageURI, style, text }) => {
  return (
    <View>
      <ImageBackground
        source={ImageURI}
        style={{ height: 500, width: "100%" }}
      />
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
    fontFamily: "Lato-Regular",
    color: "#343434",
  },
  Image: {
    // height: "100%",
    // backgroundColor: "red",
  },
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
    // fontWeight: "100",
    fontFamily: "Lato-Light",
  },
});
export default ImageAndTextPart;
