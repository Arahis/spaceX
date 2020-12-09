import { call, put, takeEvery } from "redux-saga/effects";
import { getLaunch } from "../actions";
import { fetchLaunches } from "../../utils/api";
import { GET_LAUNCH } from "../types";

export function* fetchLaunchSaga() {
  const data = yield call(fetchLaunches, {
    sort: "launch_date_utc",
    order: "desc",
  });
  yield put(getLaunch(data));
}

// export function* fetchLaunchSaga() {
//   yield takeEvery(GET_LAUNCH, function* () {
//     const data = yield call(fetchLaunches, {
//       sort: "launch_date_utc",
//       order: "desc",
//     });
//     // const upcoming = yield select(getLaunchData);
//     // console.log("upcoming", upcoming);
//     yield put(getLaunch(data));
//   });
// }
