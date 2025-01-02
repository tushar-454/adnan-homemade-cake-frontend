import { BASE_URL } from '@/constant';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type TGallery = {
  id: number;
  src: string;
  width: number;
  height: number;
  label: string;
};

const gallery = createApi({
  reducerPath: 'gallery',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    gallery: builder.query<TGallery[], void>({
      query: () => '/gallery',
    }),
  }),
});

export const { useGalleryQuery } = gallery;
export { gallery };
