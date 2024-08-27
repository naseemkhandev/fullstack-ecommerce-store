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
    changePassword: builder.mutation({
      query: (data) => ({
        url: "auth/change-password",
        method: "PUT",
        body: data,
      }),
    }),
    signInWithGoogle: builder.mutation({
      query: (data) => ({
        url: "auth/signin-with-google",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useAuthMutation,
  useLogoutMutation,
  useChangePasswordMutation,
  useSignInWithGoogleMutation,
} = authApiSlice;
