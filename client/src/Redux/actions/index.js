import axios from "axios";

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
    FILTER_BY_USER
} = require("../actions/types")


export const fetchDogs = () => async (dispatch) => {
    dispatch({type: FETCH_DOGS_REQUEST});

    try {
        const data = await axios.get('http://localhost:3001/dogs');
        dispatch({type: FETCH_DOGS_SUCCESS, payload: data.data})
        }
    catch(error) {
        dispatch({type: FETCH_DOGS_FAILED, payload: error.message});
        console.log(error.message)
    }
}


export const fetchDogsId = (id) => async(dispatch) => {
    dispatch({type: FETCH_DOGS_ID_REQUEST})

    try{
        const data = await axios.get(`http://localhost:3001/dogs/${id}`);
            dispatch({type: FETCH_DOGS_ID_SUCCESS, payload: data.data})
    }
    catch (error) {
        dispatch({type: FETCH_DOGS_ID_FAILED, payload: error.message})
        console.log(error.message)
    }
}

export const fetchTemperaments = () => async (dispatch) => {
    dispatch({type: FETCH_TEMPERAMENTS_REQUEST});

    try {
        const data = await axios.get('http://localhost:3001/temperament');
        dispatch({type: FETCH_TEMPERAMENTS_SUCCESS, payload: data.data})
        }
    catch(error) {
        dispatch({type: FETCH_TEMPERAMENTS_FAILED, payload: error.message});
        console.log(error.message)
    }
}

export const searchDogs = (query) => (dispatch) => {
	dispatch({ type: SEARCH_DOGS, payload: query });
};

export const filterByTemperament = (temps) => async (dispatch) => {
    dispatch({type: FILTER_BY_TEMPERAMENT, payload: temps})
}

export const filterByApi = () => async (dispatch, getState) => {
    const { breeds } = getState();
    dispatch({type: FILTER_BY_API, payload: breeds})
}

export const filterByUser = () => async (dispatch, getState) => {
    const { breeds } = getState();
    dispatch({type: FILTER_BY_USER, payload: breeds})
}

export const sortDogsDesc = () => (dispatch, getState) => {
	const { breeds } = getState();
	dispatch({ type: SORT_DOGS_ASC, payload: breeds });
};

export const sortDogsAsc = () => (dispatch, getState) => {
	const { breeds } = getState();
	dispatch({ type: SORT_DOGS_DESC, payload: breeds });
};

export const sortDogsHigher = () => (dispatch, getState) => {
	const { breeds } = getState();
	dispatch({ type: SORT_DOGS_WEIGHT_HIGHER, payload: breeds });
};

export const sortDogsLower = () => (dispatch, getState) => {
	const { breeds } = getState();
	dispatch({ type: SORT_DOGS_WEIGHT_LOWER, payload: breeds });
};