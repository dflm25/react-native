import { View, Text } from 'react-native';
import LottieView from "lottie-react-native";

import NetflixLogo from '../../../assets/lottie/netflix.json';

export default function TextComponent() {
  return (
    <View style={{ flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' }}>
        <LottieView
            source={NetflixLogo}
            style={{width: "100%", height: "100%"}}
            autoPlay
            loop
        />
    </View>
  );
}