import { put } from "redux-saga/effects";
import axios from "axios";

import * as actions from "../actions/auth";

export function* authUserSaga(action) {
  // Web API key = AIzaSyDQBgEr7T4S4a1WhLj6qj8b6RWnaW2K4YI
  let url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDugriK9JCLc9hrkqDJoutuhqjvuGN3cPQ";

  if (action.isSignUp) {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDugriK9JCLc9hrkqDJoutuhqjvuGN3cPQ";
  }
  try {
    yield put(actions.authStart());
    const response = yield axios.post(url, action.authData);
    yield put(
      actions.authSuccess(response.data.idToken, response.data.localId)
    );
  } catch (error) {
    yield put(actions.authFailed(error.response.data.error.message));
  }
}
