import { BASE_URL } from '@/constant';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type TReview = {
  id: string;
  user: string;
  name: string;
  email: string;
  photo: string;
  comment: string;
  rating: number;
  is_deleted: boolean;
};

const reviews = createApi({
  reducerPath: 'reviews',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    reviews: builder.query<TReview[], void>({
      query: () => '/reviews',
    }),
  }),
});

export const { useReviewsQuery } = reviews;
export { reviews };
