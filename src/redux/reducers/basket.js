const initialState = {
    item: null,
    isLoaded: false
}

function Basket(state = initialState, action) {
    switch (action.type) {
        case "SET_BASKETS":
            return { 
                ...state,
                item: action.payload 
            };
        default:
            return state;
    }
}

export default Basket;