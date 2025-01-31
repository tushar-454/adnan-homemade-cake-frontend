import { BASE_URL } from '@/constant';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type LineItem = {
  name: string;
  image: string;
  price: number;
  quantity: number;
  variant: string;
  discount: number;
  _id: string;
};

type OrderData = {
  instruction: null | string;
  _id: string;
  user: null | string;
  name: string;
  email: string;
  phone: string;
  photo: null | string;
  line_items: LineItem[];
  price: number;
  discount: number;
  shipping: number;
  status: string;
  is_deleted: boolean;
  division: string;
  district: string;
  sub_district: string;
  union: null | string;
  village: null | string;
  address: string;
  coupon_code: string;
  coupon_discount: number;
  tracking_id: number;
  createdAt: string;
  updatedAt: string;
};

type OrderResponse = {
  success: boolean;
  data: OrderData;
};

const order = createApi({
  reducerPath: 'apiOrder',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    order: builder.query<OrderResponse, number>({
      query: (trackingId) => `/tracking/${trackingId}`,
    }),
  }),
});

export const { useOrderQuery } = order;
export { order };
