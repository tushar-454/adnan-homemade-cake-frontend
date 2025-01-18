import { BASE_URL2 } from '@/constant';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type TGallery = {
  _id: number;
  src: string;
  width: number;
  height: number;
  label: string;
};

type TGalleryResponse = {
  success: boolean;
  data: TGallery[];
};

const gallery = createApi({
  reducerPath: 'gallery',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL2 }),
  endpoints: (builder) => ({
    gallery: builder.query<TGalleryResponse, void>({
      query: () => '/gallery',
    }),
  }),
});

export const { useGalleryQuery } = gallery;
export { gallery };
