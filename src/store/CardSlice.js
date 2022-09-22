import { createSlice } from "@reduxjs/toolkit";
import ProductsData from "./data/ProductsData";
import {
  SaveProduct,
  GetProduct,
  SaveDisposbleMoney,
  GetDisposbleMoney,
  SaveAddToCart,
  GetAddToCart,
  SaveTotalSpend,
  GetTotalSpend,
} from "../utils/storage/CartStorage";
const defaultMoneyMoney = 1200;
const defaultAddToCart = 0;
const defaultSpendMoney = 0;

if (GetProduct() == null || undefined)
  window.localStorage.setItem("products", JSON.stringify(ProductsData));

if (GetDisposbleMoney() == null || undefined)
  window.localStorage.setItem(
    "disposableMoney",
    JSON.stringify(defaultMoneyMoney)
  );

if (GetAddToCart() == null || undefined)
  window.localStorage.setItem("addToCart", JSON.stringify(defaultAddToCart));

if (GetTotalSpend() == null || undefined)
  window.localStorage.setItem("totalSpend", JSON.stringify(defaultSpendMoney));

export const CardSlice = createSlice({
  name: "card",
  initialState: {
    items: JSON.parse(GetProduct()) || ProductsData,
    totalSpend: JSON.parse(GetTotalSpend()) || defaultSpendMoney,
    addToCart: JSON.parse(GetAddToCart()) || defaultAddToCart,
    disposableMoney: JSON.parse(GetDisposbleMoney()) || defaultMoneyMoney,
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
        state.addToCart += 1;

        SaveTotalSpend(state.totalSpend);
        SaveAddToCart(state.addToCart);
        SaveDisposbleMoney(state.disposableMoney);
        SaveProduct(JSON.parse(JSON.stringify(state.items)));
      }
    },
    productReduce: (state, action) => {
      const productId = action.payload - 1;
      const productPrize = state.items[productId].price;

      if (
        state.disposableMoney >= 0 &&
        state.items[productId].productReceived >= 1
      ) {
        state.items[productId].productReceived -= 1;
        state.totalSpend -= productPrize;
        state.disposableMoney += productPrize;
        state.addToCart -= 1;

        SaveTotalSpend(state.totalSpend);
        SaveAddToCart(state.addToCart);
        SaveDisposbleMoney(state.disposableMoney);
        SaveProduct(JSON.parse(JSON.stringify(state.items)));
      }
    },
    productDelete: (state, action) => {
      const productId = action.payload - 1;
      state.addToCart -= state.items[productId].productReceived;

      let calculation =
        state.items[productId].productReceived * state.items[productId].price;
      state.disposableMoney += calculation;
      state.totalSpend -= calculation;
      state.items[productId].productReceived = 0;

      SaveTotalSpend(state.totalSpend);
      SaveAddToCart(state.addToCart);
      SaveDisposbleMoney(state.disposableMoney);
      SaveProduct(JSON.parse(JSON.stringify(state.items)));
    },
  },
});

export const selectAllProducts = (state) => state.card.items;
export const selectCart = (state) => state.card;
export const selectMoneyDirectly = (state) => state.card.disposableMoney;
export const { productAdd, productDelete, productReduce } = CardSlice.actions;
export default CardSlice.reducer;
