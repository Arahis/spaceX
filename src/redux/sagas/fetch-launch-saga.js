import { call, put, takeLatest } from "redux-saga/effects";
import { setLaunchData } from "../actions";
import { fetchLaunches } from "../../utils/api";
import { FETCH_LAUNCH_DATA } from "../types";

export function* fetchLaunchSaga() {
  yield takeLatest(FETCH_LAUNCH_DATA, function* () {
    const data = yield call(fetchLaunches, {
      sort: "launch_date_utc",
      order: "desc",
    });
    // const upcoming = yield select(getLaunchData);
    // console.log("upcoming", upcoming);
    yield put(setLaunchData(data));
  });
}
