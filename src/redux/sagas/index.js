import { call } from "redux-saga/effects";

import { fetchLaunchSaga } from "./fetch-launch-saga";

export default function* rootSaga() {
  yield call(fetchLaunchSaga);
}
