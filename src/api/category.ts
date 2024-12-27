import { BASE_URL } from '@/constant';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type TCategory = {
  _id: number;
  name: string;
  image: string;
};

const category = createApi({
  reducerPath: 'category',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    category: builder.query<TCategory[], void>({
      query: () => '/category',
    }),
  }),
});

export const { useCategoryQuery } = category;
export { category };
