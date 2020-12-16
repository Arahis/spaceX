import { call, put, takeEvery, takeLatest, select } from "redux-saga/effects";
import { setLaunchData } from "../actions";
import { fetchLaunches } from "../../utils/api";
import { FETCH_LAUNCH_DATA } from "../types";
import { FETCH_MORE_LAUNCHES } from "../types";
import { pageSelector } from "../selectors";
import { fetchLaunchSaga } from "./pre-fetch-launch-saga";

export function* watchLaunchSaga() {
  console.log("ololo");
  yield takeLatest(FETCH_LAUNCH_DATA, function* () {
    yield call(fetchLaunchSaga);
  });
}

export function* watchLaunchMoreSaga() {
  let page = yield select(pageSelector);

  console.log("props", page, ++page);

  // yield takeLatest(FETCH_MORE_LAUNCHES, console.log("LA page", page));
  yield takeEvery(FETCH_MORE_LAUNCHES, function* () {
    yield call(fetchLaunchSaga, page);
  });
}
