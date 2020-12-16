import { call, put, takeEvery, takeLatest, select } from "redux-saga/effects";
import { setLaunchData } from "../actions";
import { fetchLaunches } from "../../utils/api";
import { FETCH_LAUNCH_DATA } from "../types";
import { FETCH_MORE_LAUNCHES } from "../types";


export function* fetchLaunchSaga({payload: {page} = {page: 0}}) {
  console.log({page})
  const data = yield call(fetchLaunches, {
    order: "desc",
    sort: "launch_date_utc",
    limit: 6,
    offset: page * 6,
  });
  console.log("++fetchLaunchSaga", page);
  yield put(setLaunchData(...data));
}

export function* watchLaunchSaga() {
  yield takeLatest(FETCH_LAUNCH_DATA, fetchLaunchSaga);
}

export function* watchLaunchMoreSaga() {
  // yield takeLatest(FETCH_MORE_LAUNCHES, console.log("LA page", page));
  yield takeEvery(FETCH_MORE_LAUNCHES, fetchLaunchSaga);
}
