import React from "react";
import OverViewPart from "../components/OverViewPart";
import { ScrollView, StyleSheet, View } from "react-native";
import colors from "../config/colors";
const Ovreview = () => {
  return (
    <View style={styles.container}>
      <OverViewPart
        style={{ marginTop: 20 }}
        name="screen-lock-landscape"
        heading="Fully Responsive."
        text="This theme will Look great on any device, no matter the size!"
      />
      <OverViewPart
        style={{ marginTop: 80 }}
        textStyle={styles.text}
        name="layers"
        heading="Bootstrap 5 ready"
        text="Featuring the new build of the new Bootstrap 5 framework"
      />
      <OverViewPart
        style={{ marginTop: 80 }}
        name="apps"
        textStyle={styles.text}
        heading="Easy to Use"
        text="Ready to use with you own content, or customize the source file"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 120,
    backgroundColor: colors.mediumGrey,
  },
  text: {
    paddingHorizontal: 20,
  },
});
export default Ovreview;
