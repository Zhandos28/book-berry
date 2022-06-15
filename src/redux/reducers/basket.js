const initialState = [];

function Basket(state = initialState, action) {
    switch (action.type) {
        case "SET_BASKETS":
          if (state.includes(action.payload)) {
            return state;
          }
          return [...state, action.payload];
        default:
            return state;
    }
}

export default Basket;