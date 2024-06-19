import { StatusBar } from "expo-status-bar";

// custom components
import Layout from "./src/components/view";
import TextComponent from "./src/components/text";
import ButtonComponent from "./src/components/button";
import ImageComponent from "./src/components/image";

//
import SplashScreen from "./src/pages/splashScreen";

export default function App() {
  return <SplashScreen />;
}
