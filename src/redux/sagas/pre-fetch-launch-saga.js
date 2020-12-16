import { call, put } from "redux-saga/effects";
import { setLaunchData } from "../actions";
import { fetchLaunches } from "../../utils/api";

export function* fetchLaunchSaga(page) {
  const data = yield call(fetchLaunches, {
    order: "desc",
    sort: "launch_date_utc",
    limit: 6,
    offset: page * 6,
  });
  console.log("++page", page, ++page);
  yield put(setLaunchData(...data));
}
