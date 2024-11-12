import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./features/counter/counterSlice"
import converterReducer from "./features/temperature/converterSlice"
import gitsearchReducer from "./features/githubsearch/gitsearchSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    temperature: converterReducer,
    gitsearch: gitsearchReducer,
  },
})