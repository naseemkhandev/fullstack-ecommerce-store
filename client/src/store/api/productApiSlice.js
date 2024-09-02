import apiSlice from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "products/active-products",
        method: "GET",
      }),
      providesTags: ["Product"],
    }),
    getProductDetails: builder.query({
      query: (id) => ({
        url: `products/${id}`,
        method: "GET",
      }),
    }),
    addNewProduct: builder.mutation({
      query: (productData) => ({
        url: "products/",
        method: "POST",
        body: productData,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductDetailsQuery,
  useAddNewProductMutation,
} = productApiSlice;
