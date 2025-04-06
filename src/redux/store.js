import { configureStore, combineReducers } from "@reduxjs/toolkit";
import carsReducer from "./cars/slice";
import filtersReducer from "./filters/slice.js";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const carPersistConfig = {
  key: "cars",
  storage,

  whitelist: ["favorites"],
};

const store = configureStore({
  reducer: {
    cars: persistReducer(carPersistConfig, carsReducer),
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
