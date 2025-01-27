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

const reviews = createApi({
  reducerPath: 'reviews',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    reviews: builder.query<TReviewResponse, void>({
      query: () => '/review',
    }),
  }),
});

export const { useReviewsQuery } = reviews;
export { reviews };
