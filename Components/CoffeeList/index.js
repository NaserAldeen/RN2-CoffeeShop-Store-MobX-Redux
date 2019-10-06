import React, { Component } from "react";
import { connect } from "react-redux";
// NativeBase Components
import { List, Content } from "native-base";

// Component
import CoffeeItem from "./CoffeeItem";

class CoffeeList extends Component {
  render() {
    let shops;
    if (this.props.coffeeShops) {
      shops = this.props.coffeeShops.map(coffeeShop => (
        <CoffeeItem coffeeShop={coffeeShop} key={coffeeShop.id} />
      ));
    }
    return (
      <Content>
        <List>{shops}</List>
      </Content>
    );
  }
}
const mapStateToProps = state => {
  return {
    coffeeShops: state.coffee.coffeeShops
  };
};
export default connect(mapStateToProps)(CoffeeList);
