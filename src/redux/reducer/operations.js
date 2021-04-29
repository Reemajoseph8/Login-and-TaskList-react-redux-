import {
  TASKS_REQUEST,
  TASKS_SUCCESS,
  TASKS_ERROR,
  handle_change,
} from "../../constants/ActionTypes";

const initialState = {
  addEnable: false,
  editEnable: false,
  editId: undefined,
  addFormData: {
    assigned_user: "",
    task_date: "", //yyyy-mm-dd
    task_time: "", //integer seconds
    is_completed: 0, // boolean 0, 1
    time_zone: 330 * 60,
    task_msg: "",
  },
  editFormData: {
    assigned_user: "",
    task_date: "", //yyyy-mm-dd
    task_time: "", //integer seconds
    is_completed: 0, // boolean 0, 1
    time_zone: 330 * 60,
    task_msg: "",
  },
  deleteId: 0,
  tasksList: [],
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case TASKS_REQUEST:
      return {
        ...state,
        // loading: true,
        // exec: action.exec,
      };
    case TASKS_SUCCESS:
      console.log(action);
      return {
        ...state,
        // loading: false,
        // status: action.status,
        // exec: action.exec,
        // token: action.payload.token,
      };
    case TASKS_ERROR:
      return {
        ...state,
        // ...state,
        // loading: false,
        // status: action.status,
        // exec: action.exec,
      };

    case handle_change: {
      return {
        ...state,
        ...action.data,
      };
    }

    default:
      return state;
  }
};
