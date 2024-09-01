import ProductCard from "../../components/products/productCard";
import ProductCardSkeleton from "../../components/skeletons/productCardSkeleton";
import { useGetAllCategoriesQuery } from "../../store/api/categoryApiSlice";
import { useGetAllProductsQuery } from "../../store/api/productApiSlice";

const NewArrivals = () => {
  const { data: { products } = [], isLoading: isProductsLoading } =
    useGetAllProductsQuery();
  const { data: { categories } = [] } = useGetAllCategoriesQuery();

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between flex-col md:flex-row items-start md:items-end">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700">
            New <span className="text-primary">Arrivals</span>
          </h2>
          <p className="text-sm md:text-base text-gray-500 mt-2">
            Shop online for new arrivals and get free shipping!
          </p>
        </div>

        <div className="w-full md:w-fit overflow-auto">
          <div className="flex items-center gap-5">
            <button
              className={`text-sm font-semibold text-gray-500 antialiased hover:text-primary uppercase mt-5 mr-5`}
            >
              All
            </button>

            {categories?.slice(0, 4)?.map((category, i) => (
              <button
                key={category._id}
                className={`text-sm font-semibold text-gray-500 antialiased hover:text-primary uppercase mt-5 mr-5 ${
                  i === 0 ? "text-primary" : ""
                }`}
              >
                {category?.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 xl:gap-5">
        {isProductsLoading && (
          <>
            {[...Array(12)].map((_, i) => (
              <ProductCardSkeleton key={i} isLoading />
            ))}
          </>
        )}

        {products?.map((product) => (
          <ProductCard key={product?._id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
