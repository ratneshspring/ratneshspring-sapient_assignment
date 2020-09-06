export const INITIAL_LOAD = "INITIAL_LOAD";
export const INITIAL_LOAD_SUCCESS = "INITIAL_LOAD_SUCCESS";
export const INITIAL_LOAD_ERROR = "INITIAL_LOAD_ERROR";

function initialLoad() {
  return {
    type: INITIAL_LOAD,
  };
}

function initialLoadSuccess(json) {
  return {
    type: INITIAL_LOAD_SUCCESS,
    data: json,
  };
}

function initialLoadError(error) {
  return {
    type: INITIAL_LOAD_ERROR,
    error,
  };
}

export function fetchLaunches() {
  return (dispatch, getState) => {
    const { query } = getState();
    dispatch(initialLoad());
    try {
      return fetch(`https://api.spacexdata.com/v3/launches${query}`)
        .then((response) => response.json())
        .then((json) => {
          dispatch(initialLoadSuccess(json));
        });
    } catch (e) {
      dispatch(initialLoadError("There Seems to be an Issue."));
    }
  };
}
