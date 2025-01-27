import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:3000/users";

export const getUser = createAsyncThunk("getUser", async () => {
  const { data } = await axios.get(baseUrl);
  const existUser = data.find((user) => user.isLogin === true);
  return existUser;
});

const initialState = {
  user: null,
};

export const updateWishlist = createAsyncThunk(
  "updateWishlist",
  async (product, { getState }) => {
    const state = getState();
    const user = state.wishlist.user;

    const existProduct = user.wishlist.some((item) => item.id === product.id);

    if (existProduct) {
      const newWishlist = user.wishlist.filter(
        (item) => item.id !== product.id
      );
      await axios.patch(`${baseUrl}/${user.id}`, {
        wishlist: newWishlist,
      });

      return newWishlist;
    } else {
      const newWishlist = [...user.wishlist, product];
      await axios.patch(`${baseUrl}/${user.id}`, {
        wishlist: newWishlist,
      });

      return newWishlist;
    }
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(updateWishlist.fulfilled, (state, action) => {
      state.user.wishlist = action.payload;
    });
  },
});

export default wishlistSlice.reducer;
export const { extraReducers } = wishlistSlice.actions;
