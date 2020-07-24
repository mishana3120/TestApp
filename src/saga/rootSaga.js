import { fork } from "redux-saga/effects";
import { watchLoadData } from "./wathLoadData";

export function* rootSaga() {
  yield fork(watchLoadData);
}
