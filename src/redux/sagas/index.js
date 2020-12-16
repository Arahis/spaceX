import { all, call } from "redux-saga/effects";

import { watchLaunchSaga, watchLaunchMoreSaga } from "./fetch-launch-saga";

export default function* rootSaga() {
  yield all([call(watchLaunchSaga), call(watchLaunchMoreSaga)]);
}
