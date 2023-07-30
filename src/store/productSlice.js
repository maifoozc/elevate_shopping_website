import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: "All Category",
  searchQuery: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setCategory, setSearchQuery } = productSlice.actions;
export default productSlice.reducer;
