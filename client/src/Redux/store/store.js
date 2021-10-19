import {applyMiddleware, compose, createStore} from 'redux';
import { DogsReducers } from '../../Redux/reducer'
import thunk from "redux-thunk";

const compuesto = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store = createStore(
    DogsReducers, compuesto
);

export default store;