



import { configureStore } from "@reduxjs/toolkit";
// reducers
import CardSlice from './CardSlice'


export default configureStore({
    reducer:{
      card:CardSlice
    }
})

