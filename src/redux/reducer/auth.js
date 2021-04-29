import {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
} from "../../constants/ActionTypes";

const initialState = {
  authenticated: false,
  token: localStorage.getItem("token"),
  status: undefined,
  loading: false,
  exec: "request",
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case SIGNIN_REQUEST:
      return {
        ...state,
        loading: true,
        exec: action.exec,
      };
    case SIGNIN_SUCCESS:
      console.log(action);
      return {
        loading: false,
        status: action.status,
        exec: action.exec,
        token: action.payload.token,
      };
    case SIGNIN_ERROR:
      return {
        ...state,
        loading: false,
        status: action.status,
        exec: action.exec,
      };

    default:
      return state;
  }
};
