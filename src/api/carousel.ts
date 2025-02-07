import { BASE_URL } from '@/constant';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type TCarousel = {
  _id: string;
  image: string;
  button_link?: string;
  button_text?: string;
  description?: string;
  title?: string;
};

type TCarouselResponse = {
  success: boolean;
  data: TCarousel[];
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

export type TCarouselError = {
  status: number;
  data: Error403 | Error400;
};

const carousel = createApi({
  reducerPath: 'carousel',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  endpoints: (builder) => ({
    carousel: builder.query<TCarouselResponse, void>({
      query: () => '/carousel',
    }),
    deleteCarousel: builder.mutation({
      query: (id: string) => ({
        url: `/carousel/${id}`,
        method: 'DELETE',
      }),
    }),
    createCarousel: builder.mutation<TCarouselResponse, Partial<TCarousel>>({
      query: (body) => ({
        url: '/carousel',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useCarouselQuery, useCreateCarouselMutation, useDeleteCarouselMutation } = carousel;
export { carousel };
