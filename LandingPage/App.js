import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
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

export default function App() {
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
      {/* <Text style={{ fontWeight: "100" }}>Hamza</Text> */}
      {/* <Image source={require('./app/assets/kid.jpg')} style={{ width: "100vw" }} /> */}
    </Screen>
  );
}


