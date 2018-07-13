import React, { Component } from "react";
import {
  Text,
  Button,
  View,
  StyleSheet
} from "react-native";
import * as Actions from "../module/actions";
import { Navigation, Navigator } from 'react-native-navigation';
import { connect } from 'react-redux';
import { Dispatch, Action } from "redux";

type Props = {
  navigator: Navigator,
  counter: number,
  increment(): void,
  decrement(): void,
};

export class ModalScreen extends Component<Props> {

  constructor(props: Props) {
    super(props);

    this.props.navigator.setTitle({ title: "Modal!"});
  }

  public render() {
    const { counter } = this.props;
    console.log(`render(props.counter=${counter})`);

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>MODAL!!!!</Text>
        <Text style={styles.welcome}>{counter}</Text>
        <Button
          title="Increment"
          onPress={e => this.props.increment()}
        />
        <Button
          title="Decrement"
          onPress={e => this.props.decrement()}
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

const mapStateToProps = (state: { counter: number }) => {
  console.log(`render(state.counter=${state.counter})`);
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    increment: () => {
      dispatch(Actions.incrementCount())
    },
    decrement: () => {
      dispatch(Actions.decrementCount())
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalScreen);