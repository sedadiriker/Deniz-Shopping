import {start,stop} from "../types/loadingType"

export const startLoading = () => ({type:start})
export const stopLoading = () => ({type:stop})