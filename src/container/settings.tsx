import React, { Component, ReactNode } from "react";
import {
  TouchableOpacity,
  Text,
  Button,
  View,
  StyleSheet
} from "react-native";
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';

type Props = {
};

export class SettingsScreen extends Component<Props> {

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Settings!!!!</Text>
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

export default connect()(SettingsScreen);