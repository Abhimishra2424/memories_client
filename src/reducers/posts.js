import {
  CREATE,
  DELETE,
  FETCH_ALL,
  LIKE,
  UPDATE,
  FETCH_BY_SEARCH,
} from "../constants/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
      return {
        ...state,
        posts: action.payload,
      };
    case CREATE:
      return [...state, action.payload];
    case UPDATE:
    case LIKE:
      // if post id is same as action.payload.id, update the post
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE:
      return state.filter((post) => post._id !== action.payload);
    default:
      return state;
  }
};
