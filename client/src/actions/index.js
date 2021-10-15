import axios from 'axios';

import {GET_DOGS} from './types'

export async function getDogs() {
    return await axios.get('https://localhost:3001/dogs').then(response => {
        dispatch({type: GET_DOGS, payload: json})
    })
}