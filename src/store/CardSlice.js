import { createSlice } from "@reduxjs/toolkit";
import ProductsData from "./data/ProductsData";

export const CardSlice = createSlice({
  name: "card",
  initialState: {
    items: ProductsData,
    totalBasket: 0,
    totalSpend: 0,
    disposableMoney: 250,
  },
  reducers: {
    productAdd: (state, action) => {
      const productId = action.payload - 1;
      const productPrize = state.items[productId].price;
      const productAmount = state.items[productId].amount;

      if (
        state.disposableMoney >= productPrize &&
        !(productAmount <= state.items[productId].productReceived)
      ) {
        state.items[productId].productReceived += 1;
        state.totalSpend += productPrize;
        state.disposableMoney -= productPrize;
      }
    },
    productReduce: (state, action) => {
      const productId = action.payload - 1;
      const productPrize = state.items[productId].price;

      if (state.disposableMoney >= 0) {
        state.items[productId].productReceived -= 1;
        state.totalSpend -= productPrize;
        state.disposableMoney += productPrize;
        console.log("çıkartmaya basıldı");
      }
    },
    productDelete: (state, action) => {
      const productId = action.payload - 1;

      let calculation =
        state.items[productId].productReceived * state.items[productId].price;
      state.disposableMoney += calculation;

      state.totalSpend -= calculation;
      state.items[productId].productReceived = 0;
    },
  },
});

export const selectAllProducts = (state) => state.card.items;
export const selectMoney = (state) => state.card;
export const selectMoneyDirectly = (state) => state.card.disposableMoney;
export const { productAdd, productDelete, productReduce } = CardSlice.actions;
export default CardSlice.reducer;
