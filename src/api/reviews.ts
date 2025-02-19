import { BASE_URL } from '@/constant';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type TReview = {
  _id: string;
  user: string;
  name: string;
  email: string;
  photo: string;
  comment: string;
  rating: number;
  is_deleted: boolean;
};

type TReviewResponse = {
  success: boolean;
  data: TReview[];
};

type Error403 = {
  status: number;
  message: string;
};
type Error400 = {
  status: number;
  error: string;
};

export type TReviewError = {
  status: number;
  data: Error403 | Error400;
};

const reviews = createApi({
  reducerPath: 'reviews',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  endpoints: (builder) => ({
    reviews: builder.query<TReviewResponse, void>({
      query: () => '/review',
    }),
    createReview: builder.mutation<TReviewResponse, { orderId: string; comment: string }>({
      query: ({ orderId, comment }) => ({
        url: '/review/' + orderId,
        method: 'POST',
        body: { comment },
      }),
    }),
  }),
});

export const { useReviewsQuery, useCreateReviewMutation } = reviews;
export { reviews };
