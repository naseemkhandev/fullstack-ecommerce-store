import { useState } from "react";
import { CiCircleList, CiGrid41 } from "react-icons/ci";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

import ProductCard from "../../components/products/productCard";
import { useGetAllProductsQuery } from "../../store/api/productApiSlice";
import ProductCardSkeleton from "../skeletons/productCardSkeleton";

const ProductsList = () => {
  const [layoutStyle, setLayoutStyle] = useState("grid");

  const { data: { products } = [], isLoading: isProductsLoading } =
    useGetAllProductsQuery();

  return (
    <div className="md:ml-5 w-full">
      <div className="flex border items-center gap-4 p-1.5 rounded-lg justify-between w-full">
        <div className="flex items-center gap-1">
          <CiGrid41
            onClick={() => setLayoutStyle("grid")}
            className={cn(
              "size-10 cursor-pointer stroke-[.5px] text-white p-2 rounded-md",
              layoutStyle === "grid"
                ? "bg-primary"
                : "hover:bg-gray-100 text-dark-gray"
            )}
          />
          <CiCircleList
            onClick={() => setLayoutStyle("list")}
            className={cn(
              "size-10 cursor-pointer stroke-[.5px] text-white p-2 rounded-md",
              layoutStyle === "list"
                ? "bg-primary"
                : "hover:bg-gray-100 text-dark-gray"
            )}
          />
        </div>

        <Select>
          <SelectTrigger className="min-w-[150px] w-fit h-11">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sort Byy</SelectLabel>
              <SelectItem value="name(asce)">
                Name <span className="text-gray-500">(A-Z)</span>
              </SelectItem>
              <SelectItem value="name(desc)">
                Name <span className="text-gray-500">(Z-A)</span>
              </SelectItem>
              <SelectItem value="price(asce)">
                Price <span className="text-gray-500">(Low to High)</span>
              </SelectItem>
              <SelectItem value="price(desc)">
                Price <span className="text-gray-500">(High to Low)</span>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {isProductsLoading ? (
        <div className="grid mt-5 gap-3 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {[...Array(12)].map((_, i) => (
            <ProductCardSkeleton key={i} isLoading />
          ))}
        </div>
      ) : (
        <div
          className={cn(
            "grid mt-5 gap-3 xl:gap-5",
            layoutStyle === "list"
              ? "md:grid-cols-1"
              : "md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
          )}
        >
          {products?.map((product) => (
            <ProductCard
              key={product?._id}
              layoutStyle={layoutStyle}
              {...product}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsList;
