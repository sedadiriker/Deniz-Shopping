import {start,stop} from "..//types/loadingType"

const initialState = {
    loading:true
}

export const loadingReducer = (state=initialState, {type})=> {
switch (type) {
    case start : 
        return {loading:true}
    case stop :
        return {loading:false}
    default :  
        return state
}
}