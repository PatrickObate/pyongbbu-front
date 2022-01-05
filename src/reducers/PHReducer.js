export const PHReducer = (state = false, action) => {
  switch (action.type) {
    case "PH":
      return action.payload;
    default:
      return state;
  }
};
