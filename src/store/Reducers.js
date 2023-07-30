import { combineReducers } from "redux";

const categoryReducers = (state = "All Category", action) => {
  switch (action.type) {
    case "SELECT_CATEGORY":
      return action.payload;
    default:
      return state;
  }
};

const searchReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_SEARCH_QUERY":
      return action.payload;
    default:
      return state;
  }
};

const Reducers = combineReducers({
  selectedCategory: categoryReducers,
  searchQuery: searchReducer,
});
export default Reducers;
