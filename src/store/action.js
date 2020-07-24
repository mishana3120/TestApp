import { SET_LIST_PHOTOS, LOAD_RANDOM_LIST_PHOTOS } from "./constants";

const loadRandomPhotos = (payload) => ({
  type: LOAD_RANDOM_LIST_PHOTOS,
  payload,
});

const setPhotos = (payload) => ({
  type: SET_LIST_PHOTOS,
  payload,
});

export { loadRandomPhotos, setPhotos };
