const initialState = {
    items: [],
    isLoaded: false
}

function Books(state = initialState, action) {
    switch (action.type) {
        case "SET_BOOKS":
            return { 
                ...state,
                items: action.payload 
            };
        default:
            return state;
    }
}

export default Books;