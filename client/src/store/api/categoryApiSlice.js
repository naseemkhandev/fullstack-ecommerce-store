import apiSlice from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addNewCategory: builder.mutation({
      query: (data) => ({
        url: "categories",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Category"],
    }),

    getAllCategories: builder.query({
      query: () => "categories",
      providesTags: ["Category"],
    }),
  }),
});

export const { useAddNewCategoryMutation, useGetAllCategoriesQuery } =
  authApiSlice;
