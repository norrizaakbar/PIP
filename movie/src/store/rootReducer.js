import { combineReducers } from "redux";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  movies: productReducer,
});
export default rootReducer;
