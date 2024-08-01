import Filters from "./filters";
import ProductsList from "./productsList";

const ShopPage = () => {
  return (
    <div className="w-full mx-auto flex relative flex-col-reverse md:flex-row">
      <Filters />

      <ProductsList />
    </div>
  );
};

export default ShopPage;
