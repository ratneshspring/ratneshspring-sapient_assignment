import {
  INITIAL_LOAD,
  INITIAL_LOAD_SUCCESS,
  INITIAL_LOAD_ERROR,
} from "./actions";

const initialState = {
  isFetching: false,
  data: [],
  error: "",
  query: "",
};

function apps(state = initialState, action) {
 // console.log("action", action);
  switch (action.type) {
    case INITIAL_LOAD:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case INITIAL_LOAD_SUCCESS:
      return { ...state, isFetching: false, data: action.data };
    case INITIAL_LOAD_ERROR:
      return { ...state, isFetching: false, error: action.error };
    default:
      return state;
  }
}

export default apps;
