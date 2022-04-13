import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from "./cartSlice";

let store;
const reducers = combineReducers({
  cart: cartReducer,
});

const isClient = typeof window !== 'undefined';
if (isClient) {
  const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
  };
  
  const persistedReducer = persistReducer(persistConfig,reducers);
  
  store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  })
  store.__PERSISTOR = persistStore(store);
} else {
  store = configureStore({
    reducer: reducers,
    devTools: process.env.NODE_ENV !== 'production',
  })
}
console.log(store);
export default store;