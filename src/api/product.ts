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

const product = createApi({
  reducerPath: 'product',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<TProduct, void>({
      query: () => '/products',
    }),
  }),
});

export const { useGetProductsQuery } = product;
export { product };
