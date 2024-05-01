import {
  add,
  remove,
  clear,
  plusQantity,
  minusQuantity,
} from "..//types/basketType";

const initialBasket = JSON.parse(localStorage.getItem("basket")) || [];

console.log(initialBasket)
const initialState = {
  basket: initialBasket
};

export const basketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case add:
      const availableProduct  = state.basket.findIndex(
        (item) => item.id === payload.id // eğer yoksa -1 dönecek
      );
      if (availableProduct !== -1) {
        alert("This product is already in your basket.");
        return state;
      }
      const newItem = { ...payload, quantity: 1 };
      updateLocalStorage({
        basket: [...state.basket, newItem],
      })
      return {
        basket: [...state.basket, newItem],
      };

    case remove:
      updateLocalStorage({
        basket: state.basket.filter((product) => product.id !== payload),
      })
      return {
        basket: state.basket.filter((product) => product.id !== payload),
      };

    case clear:
      updateLocalStorage({basket:[]})
      return {basket:[]};

    case plusQantity:
      const newQuantity = {
        basket: state.basket.map((product) =>
          product.id === payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
      updateLocalStorage(newQuantity)
      return newQuantity

    case minusQuantity:
      const minusbasket = state.basket.map((product) =>
        product.id === payload
          ? { ...product, quantity: Math.max(0, product.quantity - 1) }
          : product
      );
      const filteredBasket = minusbasket.filter(
        (product) => product.quantity > 0
      );
      updateLocalStorage({
        basket: filteredBasket,
      })
      return {
        basket: filteredBasket,
      };
      
    default:
      return state;
  }
};
const updateLocalStorage = (state) => {
  localStorage.setItem("basket", JSON.stringify(state.basket));
};
