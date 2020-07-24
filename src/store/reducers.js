import { combineReducers } from "redux";
import { photoReducer } from "./reducer";

export default combineReducers({
  photo: photoReducer,
});
