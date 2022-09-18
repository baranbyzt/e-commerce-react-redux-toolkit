import { createSlice } from "@reduxjs/toolkit";
import ProductsData from "./data/ProductsData";

export const CardSlice = createSlice({
  name: "card",
  initialState: {
    items: ProductsData,
    totalBasket: 0,
    totalSpend: 0,
    disposableMoney: 300,
  },
  reducers: {
    control: (state, action) => {
      const dd = action.payload - 1;
      if (state.items[dd].amount <= state.items[dd].productReceived) {
      } else {
        state.items[dd].productReceived += 1;
      }
    },
    btnIncreaseItem: (state, action) => {
      const dd = action.payload - 1;
      if (state.items[dd].amount <= state.items[dd].productReceived) {
      } else {
        state.items[dd].productReceived += 1;
      }
    },
    btnDecreaseItem: (state, action) => {
      const dd = action.payload - 1;
      state.items[dd].productReceived -= 1;
    },
    btnDeleteItem: (state, action) => {
      const dd = action.payload - 1;
      state.items[dd].productReceived = 0;
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
      if (state.items[myid].amount > state.items[myid].productReceived) {
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
export const selectMoneyDirectly = (state) => state.card.disposableMoney;
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
