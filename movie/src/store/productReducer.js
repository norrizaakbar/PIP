import { ADD, DETAIL, FETCH_PRODUCTS } from "./actionTypes";

const initialState = { movies: [], movie: {} };

function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        movies: action.payload,
      };
    case DETAIL:
      return {
        ...state,
        movie: action.payload,
      };
    default:
      return state;
  }
}

export default productReducer;
