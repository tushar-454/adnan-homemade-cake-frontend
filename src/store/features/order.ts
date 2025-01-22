import { createSlice } from '@reduxjs/toolkit';

type TInitialState = {
  name: string;
  email: string;
  phone: string;
  line_items: {
    product_id: string;
    name: string;
    image: string;
    variant: string;
    quantity: number;
  }[];
  division: string;
  district: string;
  sub_district: string;
  address: string;
  coupon_code: string;
  discount: number;
  type: 'flat' | 'percentage';
};

const initialState: TInitialState = {
  name: '',
  email: '',
  phone: '',
  line_items: [],
  division: '',
  district: '',
  sub_district: '',
  address: '',
  coupon_code: '',
  discount: 0,
  type: 'flat',
};

const orderReducer = createSlice({
  name: 'orderReducer',
  initialState,
  reducers: {
    updateOrderDiscount: (state, action) => {
      const { type, discount } = action.payload;
      state.discount = discount;
      state.type = type;
    },
  },
});

export const { updateOrderDiscount } = orderReducer.actions;
export default orderReducer.reducer;
