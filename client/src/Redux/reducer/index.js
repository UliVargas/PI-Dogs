const {
    SEARCH_DOGS,
    SORT_DOGS_ASC,
    SORT_DOGS_DESC,
    FETCH_DOGS_FAILED,
    FETCH_DOGS_SUCCESS,
    FETCH_DOGS_REQUEST,
    FETCH_DOGS_ID_SUCCESS,
    FETCH_DOGS_ID_REQUEST,
    FETCH_DOGS_ID_FAILED,
    SORT_DOGS_WEIGHT_HIGHER,
    SORT_DOGS_WEIGHT_LOWER,
    FETCH_TEMPERAMENTS_FAILED,
    FETCH_TEMPERAMENTS_SUCCESS,
    FETCH_TEMPERAMENTS_REQUEST,
    FILTER_BY_TEMPERAMENT,
    ADD_BREED_TO_DATABASE,
    FILTER_BY_API,
    FILTER_BY_USER,
    FILTER_BY_ALL,
    REMOVE_DOGS_ID
} = require("../actions/types")

const initialState = {
    breeds: [],
    searchResults: [],
    breed: [],
    temperaments: [],
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
        case REMOVE_DOGS_ID:
            return {
                ...state,
                loading: false,
                breed: initialState.breed
            }
        case FETCH_TEMPERAMENTS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_TEMPERAMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                temperaments: action.payload
            };
        case FETCH_TEMPERAMENTS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case SORT_DOGS_ASC:
            const sortAsc = action.payload.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? 1 : a.name > b.name ? -1 : 0));
            return {
                ...state,
                breeds: sortAsc
            };
        case SORT_DOGS_DESC:
            const sortDesc = action.payload.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : a.name > b.name ? 1 : 0));
            return {
                ...state,
                breeds: sortDesc
            };
        case SORT_DOGS_WEIGHT_LOWER:
            const sortHeigher = action.payload.sort((a, b) => (Number(a.weight.split("-")[0]) - Number(b.weight.split("-")[0])));

            return {
                ...state,
                breeds: sortHeigher
            };
        case SORT_DOGS_WEIGHT_HIGHER:
            const sortLower = action.payload.sort((a, b) => (Number(b.weight.split("-")[0]) - Number(a.weight.split("-")[0])));
            return {
                ...state,
                breeds: sortLower
            };
        case SEARCH_DOGS:
            return {
                ...state,
                breeds: state.searchResults.filter((dog) =>
                    dog.name.toLowerCase().includes(action.payload.toLowerCase()))
            };

        case FILTER_BY_TEMPERAMENT:
            let resultTemps = state.searchResults.filter(temp => {
                if (!temp.temperaments) return undefined;
                else return temp.temperaments.includes(action.payload)
            })

            return {
                ...state,
                breeds: resultTemps
            }
        case FILTER_BY_API:
            return {
                ...state,
                breeds: state.searchResults.filter(breed => breed.id < 500)
            }
        case FILTER_BY_USER:
            return {
                ...state,
                breeds: state.searchResults.filter(breed => breed.id > 600)
            }
        case FILTER_BY_ALL:
            return {
                ...state,
                breeds: state.searchResults
            }
        case ADD_BREED_TO_DATABASE:
            return {
                ...state,
                dogAdded: action.payload,
            }
        default:
            return state
    }
}
