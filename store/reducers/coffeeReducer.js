import { GET_COFFEESHOPS, COFFEESHOPS_LOADING } from "../actions/types";

const initialState = {
  coffeeShops: [],
  loading: true
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COFFEESHOPS:
      return { ...state, coffeeShops: payload, loading: false };
    case COFFEESHOPS_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};
