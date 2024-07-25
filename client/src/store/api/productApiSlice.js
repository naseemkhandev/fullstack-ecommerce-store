import apiSlice from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "products/",
        method: "GET",
      }),
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetAllProductsQuery } = productApiSlice;
