export const initialState = {
  card: null,
  user: null,
};

export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => item.price + amount, 0);

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "ADD_CARD_DETAILS":
      return {
        ...state,
        card: action.card,
      };
    case "CARD_PUBLISHED":
      return {
        ...state,
        card: { ...state.card, key: action.key },
      };
    default:
      return state;
  }
};
