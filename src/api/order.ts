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
  instruction: null | string;
  createdAt: string;
  updatedAt: string;
};

type OrderResponse = {
  success: boolean;
  data: OrderData;
};

type CreateOrder = {
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
  type: string;
  instruction: string;
};

const order = createApi({
  reducerPath: 'apiOrder',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    order: builder.query<OrderResponse, number>({
      query: (trackingId) => `/tracking/${trackingId}`,
    }),
    createOrder: builder.mutation<OrderResponse, Partial<CreateOrder>>({
      query: (order) => ({
        url: '/order',
        method: 'POST',
        body: order,
      }),
    }),
  }),
});

export const { useOrderQuery, useCreateOrderMutation } = order;
export { order };
