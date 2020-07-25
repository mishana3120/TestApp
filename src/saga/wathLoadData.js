import { call, put, takeEvery } from "redux-saga/effects";
import api from "../services/api";
import { LOAD_RANDOM_LIST_PHOTOS, SET_LIST_PHOTOS } from "../store/constants";

export function* watchLoadData() {
  yield takeEvery(LOAD_RANDOM_LIST_PHOTOS, workLoadPhotos);
}

function* workLoadPhotos(action) {
  try {
    const payload = yield call(loadPhotos, action.payload);
    yield put({ type: SET_LIST_PHOTOS, payload });
  } catch (error) {
    yield console.log(error);
  }
}

async function loadPhotos(payload) {
  let result = (await api.reqPhotos().feetchRandomList(payload)).data;
  return result;
}
