import { createStore } from 'redux';
import { ShopReducer } from "./ShopReducer";
import { CartartReducer } from "./CartReducer";
import { CommonReducer } from "./CommonReducer";

export const SportsStoreDataStore = createStore(CommonReducer(ShopReducer,CartartReducer));