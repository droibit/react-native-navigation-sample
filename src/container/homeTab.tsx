import React, { Component } from "react";
import {
  Text,
  Button,
  View,
  StyleSheet
} from "react-native";
import { Navigator, NavigatorButtons, NavigatorEvent } from 'react-native-navigation';
import { connect } from 'react-redux';
import { SCREEN_SETTINGS, SCREEN_MODAL } from ".";
import { ScreenStateProps } from "../module/reducer";

type Props = {
  navigator: Navigator,
  screen: string
};

const NAV_BUTTON_ID_HOME = "NAV_BUTTON_ID_HOME";
const NAV_BUTTON_ID_SETTINGS = "NAV_BUTTON_ID_SETTINGS";

export class HomeTabScreen extends Component<Props> {

  static navigatorButtons: NavigatorButtons = {
    rightButtons: [
      {
        id: NAV_BUTTON_ID_HOME,
        icon: require("../img/home.png"),
      },
      {
        id: NAV_BUTTON_ID_SETTINGS,
        title: "Settings",
        showAsAction: "never"
      }
    ],
  };

  constructor(props: Props) {
    super(props);

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event: NavigatorEvent) {
    if (event.type != "NavBarButtonPress") {
      return;
    }

    switch (event.id) {
      case NAV_BUTTON_ID_HOME:
        console.log("Select: NAV_BUTTON_ID_HOME");
        break;
      case NAV_BUTTON_ID_SETTINGS:
        console.log("Select: NAV_BUTTON_ID_SETTINGS");
        this.navigateToSettings();
        break;
    }
  }

  private navigateToSettings() {
    this.props.navigator.push({
      title: "Settings",
      screen: SCREEN_SETTINGS
    });
  }

  public render() {
    console.log(`render(state.screen.root=${this.props.screen})`);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>HOME!!!!</Text>
        <Button
          title="SHOW MODAL"
          onPress={e => this.props.navigator.showModal({ screen: SCREEN_MODAL })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

const mapStateToProps = (state: { screen: ScreenStateProps }) => {
  console.log(`mapStateToProps(state.screen.root=${state.screen.root})`);
  return {
    screen: state.screen.root
  };
};

export default connect(mapStateToProps)(HomeTabScreen);