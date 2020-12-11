import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { setLaunchData } from "../actions";
import { fetchLaunches } from "../../utils/api";
import { FETCH_LAUNCH_DATA } from "../types";
import { FETCH_MORE_LAUNCHES } from "../types";



export const fetchLaunchSaga = function* (limit = 6, offset = 0) {
  const data = yield call(fetchLaunches, {
    sort: "launch_date_utc",
    order: "desc",
    limit,
    offset,
  });
  const upcomingLaunches = data.filter((launch) => launch.upcoming === true);
  const historyLaunches = data.filter((launch) => launch.upcoming === false);
  yield put(setLaunchData(upcomingLaunches, historyLaunches));
};

export function* watchLaunchSaga() {
  yield takeLatest(FETCH_LAUNCH_DATA, fetchLaunchSaga());
}
export function* watchLaunchMoreSaga() {
  yield takeEvery(FETCH_MORE_LAUNCHES, fetchLaunchSaga());
}
