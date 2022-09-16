import { createSlice } from "@reduxjs/toolkit";
import ProductsData from "./data/ProductsData";

export const CardSlice = createSlice({
  name: "card",
  initialState: {
    items: ProductsData,
    totalBasket: 0,
    totalSpend: 0,
  },
  reducers: {
    control: (state, action) => {
      const dd = action.payload - 1;
      if (state.items[dd].amount <= state.items[dd].product_received) {
      } else {
        state.items[dd].product_received += 1;
      }
    },
    btnIncreaseItem: (state, action) => {
      const dd = action.payload - 1;
      if (state.items[dd].amount <= state.items[dd].product_received) {
      } else {
        state.items[dd].product_received += 1;
      }
    },
    btnDecreaseItem: (state, action) => {
      const dd = action.payload - 1;
      state.items[dd].product_received -= 1;
    },
    btnDeleteItem: (state, action) => {
      const dd = action.payload - 1;
      state.items[dd].product_received = 0;
    },
    totalSpend: (state, action) => {
      const money = action.payload;
      state.totalSpend += money;
    },
    totalSpendReduce: (state, action) => {
      const money = action.payload;
      state.totalSpend -= money;
    },
    basketInncrease: (state, action) => {
      let myid = action.payload - 1;
      if (state.items[myid].amount > state.items[myid].product_received) {
        state.totalBasket += 1;
      } else {
      }
    },
    basketDecrease: (state, action) => {
      if (state.totalBasket <= 0) {
      } else {
        state.totalBasket -= action.payload;
      }
    },
  },
});

export const selectAllProducts = (state) => state.card.items;
export const selectMoney = (state) => state.card;
export const {
  control,
  btnIncreaseItem,
  totalSpendReduce,
  basketInncrease,
  basketDecrease,
  btnDecreaseItem,
  btnDeleteItem,
  totalSpend,
} = CardSlice.actions;
export default CardSlice.reducer;
