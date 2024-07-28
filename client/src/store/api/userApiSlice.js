import apiSlice from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "users/",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
    addNewUser: builder.mutation({
      query: (newUser) => ({
        url: "users/",
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: (user) => {
        const formData = new FormData();
        for (const key in user) {
          formData.append(key, user[key]);
        }

        return {
          url: `users/${user._id}`,
          method: "PUT",
          body: formData,
        };
      },
      invalidatesTags: ["User"],
    }),
    getUserById: builder.query({
      query: (id) => ({
        url: `users/${id}`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    getUsersByRole: builder.query({
      query: () => ({
        url: `users/users-by-role`,
        method: "GET",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useDeleteUserMutation,
  useAddNewUserMutation,
  useUpdateUserMutation,
  useGetUserByIdQuery,
  useGetUsersByRoleQuery,
} = userApiSlice;
