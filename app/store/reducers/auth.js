import * as actionTypes from "../actions/actionTypes";

const initialState = {
  token: null,
  userID: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        token: action.token,
        userID: action.userID,
      };
    case actionTypes.AUTH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        userID: null,
      };
    default:
      return state;
  }
};

export default reducer;
