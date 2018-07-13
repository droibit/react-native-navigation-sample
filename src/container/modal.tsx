import React, { Component, ReactNode } from "react";
import {
  TouchableOpacity,
  Text,
  Button,
  View,
  StyleSheet
} from "react-native";
import { Navigation, Navigator } from 'react-native-navigation';
import { connect } from 'react-redux';

type Props = {
  navigator: Navigator
};

export class ModalScreen extends Component<Props> {

  constructor(props: Props) {
    super(props);

    this.props.navigator.setTitle({ title: "Modal!"});
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>MODAL!!!!</Text>
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

export default connect()(ModalScreen);