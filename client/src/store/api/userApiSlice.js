import apiSlice from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "users/",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllUsersQuery } = userApiSlice;
