export const initialState = {
  card: null,
};

export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => item.price + amount, 0);

export const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "ADD_CARD_DETAILS":
      return {
        ...state,
        card: action.card,
      };
    default:
      return state;
  }
};
