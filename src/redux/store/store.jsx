import { combineReducers } from "redux";
import {loadingReducer} from "../reducers/loadingReducer"
import {createStore} from "redux"
import { composeWithDevTools } from "@redux-devtools/extension"
import { basketReducer } from "../reducers/basketReducer";

const rootreducer = combineReducers({
    loading:loadingReducer,
    basket:basketReducer
})

export const store = createStore(rootreducer,composeWithDevTools())