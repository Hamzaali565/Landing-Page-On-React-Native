import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import AppInputText from './app/components/AppInputText';
import ImageAndTextPart from './app/components/ImageAndTextPart';
import OverViewPart from './app/components/OverViewPart';
import ReviewPart from './app/components/ReviewPart';
import Screen from './app/components/Screen';
import Footer from './app/screens/Footer';
import Header from './app/screens/Header';
import ImageAndText from './app/screens/ImageAndText';
import Ovreview from './app/screens/Ovreview';
import Review from './app/screens/Review';
import SignUpInput from './app/screens/SignUpInput';
import SignUpInput2 from './app/screens/SignUpInput2';
import { useFonts } from 'expo-font'
export default function App() {
  const [fontsLoaded] = useFonts({
    'Lato-Black': require('./app/assets/fonts/Lato-Black.ttf'),
    'Lato-BlackItalic': require('./app/assets/fonts/Lato-BlackItalic.ttf'),
    'Lato-Bold': require('./app/assets/fonts/Lato-Bold.ttf'),
    'Lato-BoldItalic': require('./app/assets/fonts/Lato-BoldItalic.ttf'),
    'Lato-Italic': require('./app/assets/fonts/Lato-Italic.ttf'),
    'Lato-Light': require('./app/assets/fonts/Lato-Light.ttf'),
    'Lato-LightItalic': require('./app/assets/fonts/Lato-LightItalic.ttf'),
    'Lato-Regular': require('./app/assets/fonts/Lato-Regular.ttf'),
    'Lato-Thin': require('./app/assets/fonts/Lato-Thin.ttf'),
    'Lato-ThinItalic': require('./app/assets/fonts/Lato-ThinItalic.ttf'),
  })
  return (
    <Screen>
      <ScrollView>
        <Header />
        <SignUpInput />
        <Ovreview />
        <ImageAndText />
        <Review />
        <SignUpInput2 />
        <Footer />
      </ScrollView>
      {/* <Text style={{ fontFamily: "Lato-Black" }}>Hamza</Text> */}

    </Screen>
  );
}


