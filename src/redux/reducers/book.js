const initialState = {
    item: null,
    isLoaded: false
}

function Books(state = initialState, action) {
    switch (action.type) {
        case "SET_BOOK":
            return { 
                ...state,
                item: action.payload 
            };
        default:
            return state;
    }
}

export default Books;