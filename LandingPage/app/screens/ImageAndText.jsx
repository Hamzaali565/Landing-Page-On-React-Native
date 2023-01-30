import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import ImageAndTextPart from "../components/ImageAndTextPart";

const ImageAndText = () => {
  return (
    <ScrollView>
      <ImageAndTextPart
        ImageURI={require("../assets/iphone.jpg")}
        heading="Fully Responsive Design"
        text="When you use a theme created by Start Bootstrap ,you know that the
      theme will look great on any device, whether it's a phone, tablet,
      or desktop the page will behave responsively!"
      />

      <ImageAndTextPart
        style={styles.twoContainers}
        ImageURI={require("../assets/code.jpg")}
        heading="Updated for Bootstrap 5"
        text="Newly improved and full of great utility classes,Bootstrap 5 is leading the way in
        mobile responsive web development! All of the themes on start Bootstrap are now using Bootstrap 5"
      />

      <ImageAndTextPart
        ImageURI={require("../assets/kid.jpg")}
        heading="Easy to Use & Customize"
        text="Landing Page is just HTML and CSS with a splash of SCSS for user who demand some deeper
        customization options. Out of the box, just add your content and images, and your new landing 
        page will be ready to go!"
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  twoContainers: {
    paddingHorizontal: 41,
  },
});
export default ImageAndText;
