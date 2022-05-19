//import { createStoreHook } from "react-redux";
import { combineReducers } from "redux";
import { createStore } from 'redux';

import numerosReducer from "./reducers/numeros.Reducer";

const reducers = combineReducers({
    numeros: numerosReducer,
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig