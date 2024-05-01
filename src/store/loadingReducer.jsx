const initialState = {
    loading:true
}

const start = "START"
const stop = "STOP"

export const startLoading = () => ({type:start})
export const stopLoading = () => ({type:stop})

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