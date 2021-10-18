const {
    GET_ALL_DOGS,
    LOAD_RESULT,
    GET_DOG_DETAILS,
    GET_ALL_TEMPERAMENTS
} = require("../actions/types")

const initialState = {
    breeds: [],
    breed: [],
    temperaments: []
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_DOGS:
            return {
                ...state,
                breeds: action.payload
            };
        case LOAD_RESULT:
            return {
                ...state,
                breeds: action.payload
            };
        case GET_DOG_DETAILS:
            return {
                ...state,
                breed: action.payload
            }
        case GET_ALL_TEMPERAMENTS:
            return {
                ...state,
                temperaments: action.payload
            }
        default:
            return state
    }
}