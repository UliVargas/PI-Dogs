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
    SORT_DOGS_WEIGHT_LOWER
} = require("./types")


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

export const searchDogs = (query) => (dispatch) => {
	dispatch({ type: SEARCH_DOGS, payload: query });
};


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