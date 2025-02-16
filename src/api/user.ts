import { BASE_URL } from '@/constant';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type TUser = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  photo: string;
  role: 'admin' | 'user';
  status: 'active' | 'inactive';
  is_deleted: boolean;
};

type TUserResponse = {
  success: boolean;
  data: TUser[];
};

const user = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  endpoints: (builder) => ({
    users: builder.query<TUserResponse, void>({
      query: () => '/users',
    }),
  }),
});

export const { useUsersQuery } = user;
export { user };
