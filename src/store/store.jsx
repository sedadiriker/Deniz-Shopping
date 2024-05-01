import { loadingReducer } from "./loadingReducer";
import {createStore} from "redux"

export const store = createStore(loadingReducer)