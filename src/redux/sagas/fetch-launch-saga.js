import { call, put, takeLatest, select } from "redux-saga/effects";
import { setLaunchData } from "../actions";
import { fetchLaunches } from "../../utils/api";
import { FETCH_LAUNCH_DATA } from "../types";
import { getLaunchData } from "../selectors/index";

export function* fetchLaunchSaga() {
  yield takeLatest(FETCH_LAUNCH_DATA, function* () {
    const data = yield call(fetchLaunches, {
      sort: "launch_date_utc",
      order: "desc",
    });
    const upcomingLaunches = data.filter((launch) => launch.upcoming == true);
    const historyLaunches = data.filter((launch) => launch.upcoming == false);
    yield put(setLaunchData(upcomingLaunches, historyLaunches));
  });
}
