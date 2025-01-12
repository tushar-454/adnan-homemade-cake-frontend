import { BASE_URL2 } from '@/constant';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export type TCategory = {
  _id: string;
  name: string;
  photo: string;
};
export type TCategories = {
  success: boolean;
  data: TCategory[];
};

const category = createApi({
  reducerPath: 'category',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL2 }),
  endpoints: (builder) => ({
    category: builder.query<TCategories, void>({
      query: () => '/category',
    }),
  }),
});

export const { useCategoryQuery } = category;
export { category };
