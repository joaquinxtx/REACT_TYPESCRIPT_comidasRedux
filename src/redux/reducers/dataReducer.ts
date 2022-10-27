import {
  FETCHING_DATA,
  FETCHING_DATA_FAILURE,
  FETCHING_DATA_SUCCESS,
} from "../constans";

const initialState = {
  data: [],
  isFetching: false,
  error: "",
};

const dataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        data: [],
        isFetching: true,
      };
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      };
    case FETCHING_DATA_FAILURE:
      return {
        ...state,

        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
