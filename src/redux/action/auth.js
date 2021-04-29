import {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  request,
  success,
  error,
} from "../../constants/ActionTypes";
import { postData } from "../../util/apiCall";
export const signinRequest = () => {
  return {
    type: SIGNIN_REQUEST,
    exec: request,
  };
};

export const signinSuccess = (payload, status) => {
  return {
    type: SIGNIN_SUCCESS,
    exec: success,
    payload,
    status,
  };
};

export const signinError = (payload, status) => {
  return {
    type: SIGNIN_ERROR,
    exec: error,
    status,
  };
};

export const signin = (body) => {
  return async (dispatch) => {
    dispatch(signinRequest());
    try {
      const url = `login`;
      const result = await postData(url, body);
      const json = result.data;
      if (json.error) throw new Error(json.message);
      if (json.code === 200) {
        localStorage.setItem("token", json.results.token);
        return dispatch(signinSuccess(json.results, json.code));
      } else {
        return dispatch(signinError(json.message, json.code));
      }
    } catch (e) {
      return dispatch(signinError(e, e));
    }
  };
};
