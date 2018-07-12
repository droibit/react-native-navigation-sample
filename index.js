import App from './App';
import { Navigation } from 'react-native-navigation';

Navigation.registerComponent("app", () => App);
Navigation.startSingleScreenApp({
  screen: {
    screen: "app",
    title: "react-native-navigation-sample"
  }
});
