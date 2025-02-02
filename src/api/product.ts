import { BASE_URL } from '@/constant';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type TProduct = {
  _id: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  images: string[];
  is_featured: boolean;
  is_upcoming: boolean;
  is_deleted: boolean;
  sell_count: number;
  rating: number;
  category: string;
  variants: {
    _id: string;
    name: string;
    price: number;
  }[];
  status: string;
  slug: string;
};

export type TProductResponse = {
  success: boolean;
  data: TProduct[];
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

export type TProductError = {
  status: number;
  data: Error403 | Error400;
};

export type TProductSlugResponse = {
  success: boolean;
  data: TProduct;
};

export type TProductsImages = TProduct['images'];

const product = createApi({
  reducerPath: 'product',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  endpoints: (builder) => ({
    getProducts: builder.query<TProductResponse, void>({
      query: () => '/product',
    }),
    createProduct: builder.mutation({
      query: (body) => ({
        url: '/product',
        method: 'POST',
        body,
      }),
    }),
    getProductBySlug: builder.query<TProductSlugResponse, string>({
      query: (slug) => `/product/${slug}`,
    }),
  }),
});

export const { useGetProductsQuery, useCreateProductMutation, useGetProductBySlugQuery } = product;
export { product };
