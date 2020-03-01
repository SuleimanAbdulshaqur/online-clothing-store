// reducer is a function that gets two properties
// 1. prev state 2. action(an object that has 2 props: type & payload)

// initialize initial state
const INITIAL_STATE = {
    currentUser: null
}


const userReducer = (state = INITIAL_STATE, action) => {
    //uses a switch method, set currentUSer to payload of action
    switch (action.type) {
        //case for action type justified
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        // if none of the cases fit, return default
        default:
            return state;
    }
}

export default userReducer;