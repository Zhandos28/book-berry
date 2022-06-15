const initialState = {
    item: [],
    isLoaded: false
}

function Basket(state = initialState, action) {
    switch (action.type) {
        case "SET_BASKETS":
            return { 
                ...state,
                item: action.payload 
            };
            case 'PLUS_CART_ITEM': {
                const newObjItems = [
                  ...state.items[action.payload].items,
                  state.items[action.payload].items[0],
                ];
                const newItems = {
                  ...state.items,
                  [action.payload]: {
                    items: newObjItems
                  },
                };
                
                return {
                  ...state,
                  items: newItems
                };
              }
          
              case 'MINUS_CART_ITEM': {
                const oldItems = state.items[action.payload].items;
                const newObjItems =
                  oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
                const newItems = {
                  ...state.items,
                  [action.payload]: {
                    items: newObjItems
                  },
                };
          
                return {
                  ...state,
                  items: newItems
                };
              }
        default:
            return state;
    }
}

export default Basket;