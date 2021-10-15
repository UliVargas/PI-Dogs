import { Switch } from "react-router"

const initialState = {
    breeds: [],
    Temperaments: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'GET_DOGS': {
            return {
                ...state,
                breeds: action.payload
            }
        }
    }
}