import {
  TASKS_REQUEST,
  TASKS_SUCCESS,
  TASKS_ERROR,
  request,
  success,
  error,
  handle_change,
} from "../../constants/ActionTypes";
import { getData } from "../../util/apiCall";
export const tasksRequest = () => {
  return {
    type: TASKS_REQUEST,
    exec: request,
  };
};

export const tasksSuccess = (payload, status) => {
  return {
    type: TASKS_SUCCESS,
    exec: success,
    payload,
    status,
  };
};

export const tasksError = (payload, status) => {
  return {
    type: TASKS_ERROR,
    exec: error,
    status,
  };
};

export const handleChange = (data) => {
  return {
    type: handle_change,
    data,
  };
};

export const tasks = () => {
  return async (dispatch) => {
    dispatch(tasksRequest());
    try {
      const url = `task/lead_58be137bfde045e7a0c8d107783c4598`;
      const result = await getData(url);
      const json = result.data;
      if (json.error) throw new Error(json.message);
      if (json.code === 200) {
        localStorage.setItem("token", json.results.token);
        return dispatch(tasksSuccess(json.results, json.code));
      } else {
        return dispatch(tasksError(json.message, json.code));
      }
    } catch (e) {
      return dispatch(tasksError(e, e));
    }
  };
};
