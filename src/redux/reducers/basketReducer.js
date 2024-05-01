import {
  add,
  remove,
  clear,
  plusQantity,
  minusQuantity,
} from "..//types/basketType";

const initialState = {
  basket: [],
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
      return {
        basket: [...state.basket, newItem],
      };

    case remove:
      return {
        basket: state.basket.filter((product) => product.id !== payload),
      };

    case clear:
      return initialState;

    case plusQantity:
      return {
        basket: state.basket.map((product) =>
          product.id === payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };

    case minusQuantity:
      const minusbasket = state.basket.map((product) =>
        product.id === payload
          ? { ...product, quantity: Math.max(0, product.quantity - 1) }
          : product
      );
      const filteredBasket = minusbasket.filter(
        (product) => product.quantity > 0
      );
      return {
        basket: filteredBasket,
      };
    default:
      return state;
  }
};
