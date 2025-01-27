import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import productSlice from "../features/ProductSlice";
import basketSlice from "../features/BasketSlice";
import wishlistSlice from "../features/WishlistSlice";

const persistProductConfig = {
  key: "product",
  storage,
};
const persistBasketConfig = {
  key: "basket",
  storage,
};
const persistWishlistConfig = {
  key: "wishlist",
  storage,
};

const persistedProductReducer = persistReducer(
  persistProductConfig,
  productSlice
);

const persistedWishlistReducer = persistReducer(
  persistWishlistConfig,
  wishlistSlice
);

const persistedBasketReducer = persistReducer(persistBasketConfig, basketSlice);

export const store = configureStore({
  reducer: {
    products: persistedProductReducer,
    basket: persistedBasketReducer,
    wishlist: persistedWishlistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
