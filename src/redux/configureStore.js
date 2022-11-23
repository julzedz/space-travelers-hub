import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookSlice from "./books/books";
import categoryReducer from "./categories/categories";

const reducer = combineReducers({
  GetBookSlice: bookSlice,
  category: categoryReducer,
});

const store = configureStore({ reducer });

export default store;
