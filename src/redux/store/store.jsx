import { combineReducers } from "redux";
import {loadingReducer} from "../reducers/loadingReducer"
import {createStore} from "redux"
import { composeWithDevTools } from "@redux-devtools/extension"


const rootreducer = combineReducers({
    loading:loadingReducer
})

export const store = createStore(rootreducer,composeWithDevTools())