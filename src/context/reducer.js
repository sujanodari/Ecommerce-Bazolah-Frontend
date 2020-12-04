//data layer logic

export const initialState = {
  user: null,
  product: [],
  category: [],
  basket: [],
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_PRODUCT: "SET_PRODUCT",
  ADD_PRODUCT: "ADD_PRODUCT",
  SET_CATEGORY: "SET_CATEGORY",
  ADD_CATEGORY: "ADD_CATEGORY",
  ADD_TO_BASKET: "ADD_TO_BASKET",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.SET_PRODUCT:
      return {
        ...state,
        product: action.product,
      };

    case actionTypes.ADD_PRODUCT:
      return {
        ...state,
        product: action.product,
      };

    case actionTypes.SET_CATEGORY:
      return {
        ...state,
        category: action.category,
      };

    case actionTypes.ADD_CATEGORY:
      return {
        ...state,
        category: action.category,
      };
    case actionTypes.ADD_TO_BASKET:
      //logic for adding basket
      return {
        ...state,
        basket: action.basket,
      };
    default:
      return state;
  }
};
export default reducer;
