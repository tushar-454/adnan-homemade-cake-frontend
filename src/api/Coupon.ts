import { BASE_URL2 } from '@/constant';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type TCoupon = {
  _id: string;
  code: string;
  type: string;
  discount: number;
  quantity: number;
  startAt: number;
  expireAt: number;
  createdAt: string;
  updatedAt: string;
};

export type TCouponRes = {
  success: boolean;
  data: TCoupon;
};

const coupon = createApi({
  reducerPath: 'coupon',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL2 }),
  endpoints: (builder) => ({
    coupon: builder.query<TCouponRes, void>({
      query: (code) => `/coupon/${code}`,
    }),
  }),
});

export const { useCouponQuery } = coupon;
export { coupon };
