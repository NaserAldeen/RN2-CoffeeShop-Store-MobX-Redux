import React, { Component } from "react";
import { Spinner } from "native-base";
import HomePage from "./Components/HomePage";
import { Provider } from "react-redux";
import { setCoffeeShopsLoading } from "./store/actions/coffeeActions";
import store from "./store";
import { connect } from "react-redux";
export default class App extends Component {
  state = {
    loading: false
  };
  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <Provider store={store}>
          <Spinner color="white" />
        </Provider>
      );
    }
    return (
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
  }
}
