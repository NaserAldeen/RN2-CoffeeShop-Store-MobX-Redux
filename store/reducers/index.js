import { combineReducers } from "redux";
//import your reducer files here like the following two lines
import cartReducer from "./cartReducer";
import coffeeReducer from "./coffeeReducer";
const rootReducer = combineReducers({
  //the following two lines are an example
  cart: cartReducer,
  coffee: coffeeReducer
});

export default rootReducer;
