import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ReviewPart from "../components/ReviewPart";
import Screen from "../components/Screen";
import colors from "../config/colors";

const Review = () => {
  return (
    <Screen style={styles.container}>
      <Text style={styles.text}>What people are saying...</Text>

      <ReviewPart
        heading="Margaret E."
        ImageURI={require("../assets/review.jpg")}
        text='"This is fantastic! Thanks so much guys!"'
      />
      <ReviewPart
        style={styles.pad}
        heading="Fred S."
        ImageURI={require("../assets/review2.jpg")}
        text='"Bootstrap is amazing. Ive been using it to create a lots of super nice landing pages."'
      />
      <ReviewPart
        style={styles.pad}
        heading="Sarah W."
        ImageURI={require("../assets/review3.jpg")}
        text='"Thanks so much for making these free resources available for us!"'
      />
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mediumGrey,
    paddingTop: 120,
    paddingVertical: 140,
  },
  text: {
    alignSelf: "center",
    fontSize: 28,
    color: "#343434",

    // fontWeight: "bold",
    fontFamily: "Lato-Bold",
  },
  pad: {
    paddingHorizontal: 40,
    lineHeight: 25,
  },
});
export default Review;
