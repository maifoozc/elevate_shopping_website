
let categoryAction = (value) => {
  return (dispatch) => {
    dispatch({
      type: "category",
      payload: value,
    });
  };
};

export default categoryAction;
