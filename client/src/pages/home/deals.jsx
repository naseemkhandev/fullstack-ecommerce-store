import ProductCard from "../../components/products/productCard";
import ProductCardSkeleton from "../../components/skeletons/productCardSkeleton";
import { useGetAllProductsQuery } from "../../store/api/productApiSlice";

const Deals = () => {
  const { data: { products } = [], isLoading: isProductsLoading } =
    useGetAllProductsQuery();

  return (
    <div className="flex flex-col gap-10">
      <div className="flex-between items-end">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700">
            Day of the <span className="text-primary">Deal</span>
          </h2>
          <p className="text-sm md:text-base text-gray-500 mt-2">
            Don&apos;t wait. The time will never be just right.
          </p>
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

export default Deals;
