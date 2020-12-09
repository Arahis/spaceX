import { GET_LAUNCH } from "../types";

const initialState = {
  data: [],
};

const launchReducer = (state = initialState, action) => {
  // console.log("ACTION", action.payload)
  switch (action.type) {
    case GET_LAUNCH:
      return {
        ...state,
        data: action.payload.data,
      };

    default:
      return state;
  }
};

export default launchReducer;
