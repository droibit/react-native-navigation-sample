import { Navigation } from "react-native-navigation";
import SearchTabScreen from "./searchTab";
import HomeTabScreen from "./homeTab";
import LoginScreen from "./login";

export const SCREEN_LOGIN = "SCREEN_LOGIN";
export const SCREEN_SEARCH = "SCREEN_SEARCH";
export const SCREEN_HOME = "SCREEN_HOME";

export function registerComponents(store: any, provider: any) {
  Navigation.registerComponent(SCREEN_LOGIN, () => LoginScreen, store, provider);
  Navigation.registerComponent(SCREEN_SEARCH, () => SearchTabScreen, store, provider);
  Navigation.registerComponent(SCREEN_HOME, () => HomeTabScreen, store, provider);
}

export const SCREEN_MAIN = "SCREEN_MAIN";