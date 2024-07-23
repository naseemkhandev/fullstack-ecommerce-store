import apiSlice from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    auth: builder.mutation({
      query: (data) => ({
        url: `auth/${data.path}`,
        method: "POST",
        body: data.user,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "auth/logout",
        method: "POST",
      }),
    }),
  }),
});

export const { useAuthMutation, useLogoutMutation } = authApiSlice;
