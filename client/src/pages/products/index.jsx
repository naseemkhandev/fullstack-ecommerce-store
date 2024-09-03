import { useState } from "react";
import Filters from "../../components/products/filters";
import ProductsList from "../../components/products/productsList";
import { useGetAllCategoriesQuery } from "../../store/api/categoryApiSlice";
import Categories from "../home/categories";

const ProductsPage = () => {
  const { data: { categories } = [], isLoading: isCategoriesLoading } =
    useGetAllCategoriesQuery();

  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 1000,
    search: "",
    categories: [],
    rating: [],
  });

  return (
    <div className="flex flex-col gap-8">
      <Categories
        categories={categories}
        isCategoriesLoading={isCategoriesLoading}
      />
      <div className="w-full mx-auto flex relative flex-col-reverse md:flex-row">
        <Filters
          categories={categories}
          isCategoriesLoading={isCategoriesLoading}
          setFilters={setFilters}
          filters={filters}
        />
        <ProductsList filters={filters} />
      </div>
    </div>
  );
};

export default ProductsPage;
