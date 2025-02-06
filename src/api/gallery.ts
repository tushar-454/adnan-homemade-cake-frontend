import { BASE_URL } from '@/constant';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type TGallery = {
  _id: string;
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
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  endpoints: (builder) => ({
    gallery: builder.query<TGalleryResponse, void>({
      query: () => '/gallery',
    }),
    deleteGallery: builder.mutation({
      query: (id: string) => ({
        url: `/gallery/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGalleryQuery, useDeleteGalleryMutation } = gallery;
export { gallery };
