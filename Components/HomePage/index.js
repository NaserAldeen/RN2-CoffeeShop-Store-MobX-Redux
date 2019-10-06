import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
// NativeBase Components
import { Container, Header } from "native-base";

// Style
import styles from "./styles";

// Components
import CoffeeList from "../CoffeeList";
import CoffeeCart from "../CoffeeCart";
import CoffeeDetail from "../CoffeeDetail";
import Login from "../Login";
import { Spinner } from "native-base";
import {
  getCoffeeShops,
  setCoffeeShopsLoading
} from "../../store/actions/coffeeActions";
class HomePage extends Component {
  async componentDidMount() {
    await this.props.getCoffeeShops();
  }
  render() {
    if (!this.props.loading)
      return (
        <Container style={styles.transparent}>
          <View style={styles.overlay} />
          <Header style={styles.transparent} />
          <CoffeeList />
        </Container>
      );
    else return <Spinner color="white" />;
  }
}
const mapDispatchToProps = dispatch => {
  return {
    //Syntax
    getCoffeeShops: () => dispatch(getCoffeeShops()),
    setSpinnerTrue: () => dispatch(setCoffeeShopsLoading())
  };
};
const mapStateToProps = state => {
  return {
    loading: state.coffee.loading
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
