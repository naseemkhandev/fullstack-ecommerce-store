import Filters from "../../components/products/filters";
import ProductsList from "../../components/products/productsList";
import Categories from "../home/categories";

const ProductsPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <Categories />
      <div className="w-full mx-auto flex relative flex-col-reverse md:flex-row">
        <Filters />
        <ProductsList />
      </div>
    </div>
  );
};

export default ProductsPage;
