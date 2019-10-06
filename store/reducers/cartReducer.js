import { GET_COFFEESHOPS, COFFEESHOPS_LOADING } from "../actions/types";
const initialState = {
  items: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    //     case GET_COFFEESHOPS:
    //       return { ...state, ...payload };

    default:
      return state;
  }
};
