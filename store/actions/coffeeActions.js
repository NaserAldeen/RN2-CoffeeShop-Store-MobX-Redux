import { GET_COFFEESHOPS, COFFEESHOPS_LOADING } from "./types";
import axios from "axios";
export const getCoffeeShops = () => {
  return async dispatch => {
    try {
      const res = await axios.get("http://178.128.114.232/api/?format=json");
      const shops = res.data;
      dispatch({ type: GET_COFFEESHOPS, payload: shops });
    } catch (err) {
      console.error(err);
    }
  };
};

export const setCoffeeShopsLoading = () => {
  return {
    type: COFFEESHOPS_LOADING
  };
};
