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

const carousel = createApi({
  reducerPath: 'carousel',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    carousel: builder.query<TCarousel[], void>({
      query: () => '/carousel',
    }),
  }),
});

export const { useCarouselQuery } = carousel;
export { carousel };
