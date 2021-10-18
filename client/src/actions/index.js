import axios from "axios";

const {
    GET_ALL_DOGS,
    LOAD_RESULT,
    GET_DOG_DETAILS,
    GET_ALL_TEMPERAMENTS
} = require("./types")

export function getAllDogs() {
    return async function (dispatch) {
        await axios.get(`http://localhost:3001/dogs`)
            .then(data => {
                dispatch({
                    type: GET_ALL_DOGS,
                    payload: data.data.data
                })
            })
    }
}

export function loadResult(value) {
    return async function (dispatch) {
        if (!value) {
            await axios.get(`http://localhost:3001/dogs`)
                .then(data => {
                    dispatch({
                        type: LOAD_RESULT,
                        payload: data.data.data
                    })
                })
        } else {
            await axios.get(`http://localhost:3001/dogs?name=${value}`)
                .then(data => {
                    dispatch({
                        type: LOAD_RESULT,
                        payload: data.data.data
                    })
                })
        }
    }
}

export function getDogDetails(id) {
    return async function (dispatch) {
        await axios.get(`http://localhost:3001/dogs/${id}`)
            .then(data => {
                dispatch({
                    type: GET_DOG_DETAILS,
                    payload: data.data
                })
            })
    }
}

export function getAllTemps() {
    return async function (dispatch) {
        await axios.get(`http://localhost:3001/temperament`)
            .then(data => {
                dispatch({
                    type: GET_ALL_TEMPERAMENTS,
                    payload: data.data
                })
            })
    }
}