import { SET_LAUNCH_DATA } from "../types";

const initialState = {
  data: [],
};

const launchReducer = (state = initialState, action) => {
  console.log("ACTION", action.payload);
  switch (action.type) {
    case SET_LAUNCH_DATA:
      return {
        ...state,
        data: action.payload.data,
      };

    default:
      return state;
  }
};

export default launchReducer;
