import { SET_LAUNCH_DATA } from "../types";
import { FETCH_LAUNCH_DATA } from "../types";
import { FETCH_MORE_LAUNCHES } from "../types";
// import { SET_MORE_LAUNCHES } from "../types";

export const fetchLaunch = () => ({
  type: FETCH_LAUNCH_DATA,
});

export const fetchMoreLaunches = () => ({
  type: FETCH_MORE_LAUNCHES,
});

export const setLaunchData = (...data) => ({
  type: SET_LAUNCH_DATA,
  payload: {
    data,
  },
});

