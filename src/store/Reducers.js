const Reducers = (state = "All Category", action) => {
  switch (action.type) {
    case "SELECT_CATEGORY":
      return action.payload;
    default:
      return state;
  }
};
export default Reducers;
