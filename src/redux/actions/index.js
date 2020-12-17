import { SET_LAUNCH_DATA } from "../types";
import { FETCH_LAUNCH_DATA } from "../types";
import { FETCH_MORE_LAUNCHES } from "../types";
import { SET_ERROR } from "../types";
import { IS_DATA_LOADING } from "../types";

export const fetchLaunch = () => ({
  type: FETCH_LAUNCH_DATA,
});

export const isDataLoading = () => ({
  type: IS_DATA_LOADING,
})

export const fetchMoreLaunches = (page) => ({
  type: FETCH_MORE_LAUNCHES,
  payload: {
    page
  }
});
export const setErrorPage = () => ({
  type: SET_ERROR,
});

export const setLaunchData = (...data) => ({
  type: SET_LAUNCH_DATA,
  payload: {
    data,
  },
});

