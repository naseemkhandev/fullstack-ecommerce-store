import ProductCard from "../../components/products/productCard";
import Banner from "./banner";
import HeroSection from "./heroSection";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-24">
      <HeroSection />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 xl:gap-5">
        {[...Array(10)].map((_, i) => (
          <ProductCard key={i} />
        ))}
      </div>

      <Banner />
    </div>
  );
};

export default HomePage;
