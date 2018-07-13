import React, { Component } from 'react';
import { Action } from "redux";
import { Provider } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { store } from "./module";
import * as Actions from "./module/actions";
import { Navigation } from "react-native-navigation";
import {
  registerComponents,
  SCREEN_HOME,
  SCREEN_LOGIN,
  SCREEN_SEARCH,
  SCREEN_MAIN
} from "./container";

registerComponents(store, Provider);

type Props = {
}

export default class App extends Component<Props> {

  private currentRoot: string | undefined;

  constructor(props: Props) {
    super(props);

    store.subscribe(this.onStoreUpdate.bind(this));
    (store.dispatch as ThunkDispatch<any, any, Action>)(Actions.appInitialized())
  }

  onStoreUpdate() {
    const { root } = store.getState().screen;
    console.log(`#onStoreUpdate(root=${root})`);

    if (this.currentRoot != root) {
      this.currentRoot = root;
      this.startScreen(root);
    }
  }

  private startScreen(root: string) {
    switch (root) {
      case SCREEN_LOGIN:
        Navigation.startSingleScreenApp({
          screen: {
            screen: SCREEN_LOGIN, // unique ID registered with Navigation.registerScreen
            title: 'Welcome', // title of the screen as appears in the nav bar (optional)
            // navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
            // navigatorButtons: {

            // } // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
          },
        });
        break;
      case SCREEN_MAIN:
        Navigation.startTabBasedApp({
          tabs: [
            {
              label: 'Home',
              screen: SCREEN_HOME,
              icon: require('./img/home.png'),
              title: 'Hey',
            },
            {
              label: 'Search',
              screen: SCREEN_SEARCH,
              icon: require('./img/search.png'),
              title: 'Hey',
            },
          ],
          tabsStyle: {
            tabBarBackgroundColor: '#003a66',
            tabBarButtonColor: '#ffffff',
            tabBarSelectedButtonColor: '#ff505c',
          },
        });
        break;
      default:
        console.log(`Unknown root: ${root}`);
        break;
    }
  }
}