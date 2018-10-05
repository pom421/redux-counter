import { ADD, MIN } from "./types";

// reducers
export const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case ADD:
      return {
        count: state.count + 1
      };
    case MIN:
      return {
        count: state.count - 1
      };
    // always put a default
    default:
      return state;
  }
};

