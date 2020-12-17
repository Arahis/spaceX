import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { setErrorPage, setLaunchData, isDataLoading } from "../actions";
import { fetchLaunches } from "../../utils/api";
import { FETCH_LAUNCH_DATA } from "../types";
import { FETCH_MORE_LAUNCHES } from "../types";

export function* fetchLaunchSaga({ payload: { page } = { page: 0 } }) {
  yield put(isDataLoading());
  const { data, error } = yield call(fetchLaunches, {
    order: "desc",
    sort: "launch_date_utc",
    limit: 6,
    offset: page * 6,
  });
  if (error) {
    yield put(setErrorPage());
  } else {
    yield put(setLaunchData(...data));
  }
}

export function* watchLaunchSaga() {
  yield takeLatest(FETCH_LAUNCH_DATA, fetchLaunchSaga);
}

export function* watchLaunchMoreSaga() {
  yield takeEvery(FETCH_MORE_LAUNCHES, fetchLaunchSaga);
}
