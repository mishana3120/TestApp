import { SET_LIST_PHOTOS } from "./constants";

const Photos = {
  list: [],
};

export const photoReducer = (state = Photos, action) => {
  switch (action.type) {
    case SET_LIST_PHOTOS:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};
