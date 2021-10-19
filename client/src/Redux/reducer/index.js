const {
    SEARCH_DOGS,
    SORT_DOGS_ASC,
    SORT_DOGS_DESC,
    FETCH_DOGS_FAILED,
    FETCH_DOGS_SUCCESS,
    FETCH_DOGS_REQUEST,
    FETCH_DOGS_ID_SUCCESS,
    FETCH_DOGS_ID_REQUEST,
    FETCH_DOGS_ID_FAILED
} = require("../actions/types")

const initialState = {
    breeds: [],
    searchResults: [],
    breed: []
}

export const DogsReducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DOGS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_DOGS_SUCCESS:
            return {
                ...state,
                loading: false,
                breeds: action.payload.data,
                searchResults: action.payload.data
            };
        case FETCH_DOGS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case FETCH_DOGS_ID_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_DOGS_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                breed: action.payload
            };
        case FETCH_DOGS_ID_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case SORT_DOGS_ASC:
            const sortAsc = action.payload.sort((a, b) => (a.name < b.name ? 1 : a.name > b.name ? -1 : 0));
            return {
                ...state,
                breeds: sortAsc
            };
        case SORT_DOGS_DESC:
            const sortDesc = action.payload.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
            return {
                ...state,
                breeds: sortDesc
            };
        case SEARCH_DOGS:
            return {
                ...state,
                breeds: state.searchResults.filter((dog) => 
                dog.name.toLowerCase().includes(action.payload.toLowerCase()))
            };
        default:
            return state
    }
}
