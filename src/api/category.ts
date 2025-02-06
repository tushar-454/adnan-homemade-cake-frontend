import { BASE_URL } from '@/constant';
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

export type TCategoryRes = {
  success: boolean;
  data: TCategory;
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

export type TCategoryError = {
  status: number;
  data: Error403 | Error400;
};

const category = createApi({
  reducerPath: 'category',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  endpoints: (builder) => ({
    category: builder.query<TCategories, void>({
      query: () => '/category',
    }),
    createCategory: builder.mutation<TCategoryRes, Partial<TCategory>>({
      query: (body) => ({
        url: '/category',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useCategoryQuery, useCreateCategoryMutation } = category;
export { category };
