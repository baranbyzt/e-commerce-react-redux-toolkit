import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "./CardSlice";

export default configureStore({
  reducer: {
    card: CardSlice,
  },
});
