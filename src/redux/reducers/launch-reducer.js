import { SET_ERROR, SET_LAUNCH_DATA, IS_DATA_LOADING } from "../types";

const initialState = {
  upcoming: [],
  history: [],
  page: 0,
  error: false,
  loading: false,
};

const launchReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_DATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_LAUNCH_DATA:
      const data = action.payload.data;
      const upcomingLaunches = data.filter(
        (launch) => launch.upcoming === true
      );
      const historyLaunches = data.filter(
        (launch) => launch.upcoming === false
      );
      return {
        ...state,
        loading: false,
        page: state.page + 1,
        upcoming: [...state.upcoming, ...upcomingLaunches],
        history: [...state.history, ...historyLaunches],
      };
    case SET_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default launchReducer;
