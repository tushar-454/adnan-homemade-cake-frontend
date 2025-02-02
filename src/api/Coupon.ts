import { BASE_URL } from '@/constant';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type TCoupon = {
  _id: string;
  code: string;
  type: string;
  discount: number;
  quantity: number;
  minprice: number;
  startAt: number;
  expireAt: number;
  createdAt: string;
  updatedAt: string;
};

export type TCouponRes = {
  success: boolean;
  data: TCoupon;
};

type Error403 = {
  status: number;
  message: string;
};
type Error400 = {
  status: number;
  errors: {
    field: string;
    message: string;
  }[];
};

export type TCouponError = {
  status: number;
  data: Error403 | Error400;
};

const coupon = createApi({
  reducerPath: 'coupon',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  endpoints: (builder) => ({
    coupon: builder.query<TCouponRes, string>({
      query: (code) => `/coupon/${code}`,
    }),
    createCoupon: builder.mutation<TCouponRes, Partial<TCoupon>>({
      query: (body) => ({
        url: '/coupon',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useCouponQuery, useCreateCouponMutation } = coupon;
export { coupon };
