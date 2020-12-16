import { SET_LAUNCH_DATA } from "../types";

const initialState = {
  upcoming: [],
  history: [],
  page: 1,
};

const launchReducer = (state = initialState, action) => {
  switch (action.type) {
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
        page: state.page + 1,
        upcoming: [...state.upcoming, ...upcomingLaunches],
        history: [...state.history, ...historyLaunches],
      };

    default:
      return state;
  }
};

export default launchReducer;
