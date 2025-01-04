import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openFilter: false,
  cartlength: 0,
};

const globalReducer = createSlice({
  name: 'globalReducer',
  initialState,
  reducers: {
    setOpenFilter: (state, action) => {
      state.openFilter = action.payload;
    },
    setCartlength: (state, action) => {
      state.cartlength = action.payload;
    },
  },
});

export const { setOpenFilter, setCartlength } = globalReducer.actions;
export default globalReducer.reducer;
