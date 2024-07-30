import ProductCard from "../../components/products/productCard";

const NewArrivals = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-gray-700">
            New <span className="text-primary">Arrivals</span>
          </h2>
          <p className="text-base text-gray-500 mt-2">
            Shop online for new arrivals and get free shipping!
          </p>
        </div>

        <div className="flex items-center gap-5">
          {[
            "all",
            "electronics",
            "clothing",
            "shoes",
            "accessories",
            "beauty",
            "furniture",
          ]
            .slice(0, 5)
            .map((category, i) => (
              <button
                key={i}
                className={`text-sm font-semibold text-gray-500 antialiased hover:text-primary uppercase mt-5 mr-5 ${
                  i === 0 ? "text-primary" : ""
                }`}
              >
                {category}
              </button>
            ))}
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

export default NewArrivals;
