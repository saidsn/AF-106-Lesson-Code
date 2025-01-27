import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { all } from "axios";

const baseURL = "http://localhost:5000/api/products";
const initialState = {
  products: [],
  allProducts: [],
};

export const getProducts = createAsyncThunk("product/getProducts", async () => {
  const { data } = await axios.get(baseURL);
  return data;
});

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (product) => {
    console.log(product)
    const { data } = await axios.post(baseURL, product);
    return data;
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id) => {
    await axios.delete(`${baseURL}/${id}`);
    return id;
  }
);

export const searchProduct = createAsyncThunk(
  "product/searchProduct",
  async (search, { getState }) => {
    if (search === "") {
      return getState().products.allProducts;
    }
    const { data } = await axios.get(`${baseURL}/search/${search}`);
    return data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // searchProduct: (state, action) => {
    //   state.products = state.allProducts.filter((item) =>
    //     item.title.toLowerCase().includes(action.payload.toLowerCase())
    //   );
    // },
    // sortProductAZ: (state) => {
    //   state.products = state.products.sort((a, b) =>
    //     a.title.localeCompare(b.title)
    //   );
    // },
    // sortProductZA: (state) => {
    //   state.products = state.products.sort((a, b) =>
    //     b.title.localeCompare(a.title)
    //   );
    // },

    sortProductLowest: (state) => {
      state.products = state.products.sort((a, b) => a.price - b.price);
    },
    sortProductHigest: (state) => {
      state.products = state.products.sort((a, b) => b.price - a.price);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.allProducts = action.payload;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.products.push(action.payload);
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      );
    });
    builder.addCase(searchProduct.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const { sortProductHigest, sortProductLowest } = productSlice.actions;

export default productSlice.reducer;
