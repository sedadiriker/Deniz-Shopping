import {add,remove,clear,plusQantity,minusQuantity} from "../types/basketType"

export const addProduct = (payload) => ({type:add,payload:payload})
export const removeProduct = (id) => ({type:remove,payload:id})
export const clearBasket = () => ({type:clear})

export const plusqantity = (id) => ({type:plusQantity,payload:id})
export const minusquantity = (id) => ({type:minusQuantity,payload:id})

