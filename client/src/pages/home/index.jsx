import ProductCard from "../../components/products/productCard";

const HomePage = () => {
  return (
    <div>
      <div className="container px-3 md:px-5 mx-auto mt-5">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 xl:gap-5">
          {[...Array(10)].map((_, i) => (
            <ProductCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
