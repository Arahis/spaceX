import { SET_LAUNCH_DATA } from "../types";
import { FETCH_LAUNCH_DATA } from "../types";

export const setLaunchData = (...data) => ({
  type: SET_LAUNCH_DATA,
  payload: {
    data,
  },
});

export const fetchLaunch = () => ({
  type: FETCH_LAUNCH_DATA,
});
