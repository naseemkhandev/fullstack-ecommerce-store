import Filters from "../../components/products/filters";
import ProductsList from "../../components/products/productsList";

const ProductsPage = () => {
  return (
    <div className="w-full mx-auto flex relative flex-col-reverse md:flex-row">
      <Filters />
      <ProductsList />
    </div>
  );
};

export default ProductsPage;
