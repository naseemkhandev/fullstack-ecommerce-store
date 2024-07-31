import ProductCard from "../../components/products/productCard";

const Deals = () => {
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

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 xl:gap-5">
        {[...Array(10)].map((_, i) => (
          <ProductCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default Deals;
