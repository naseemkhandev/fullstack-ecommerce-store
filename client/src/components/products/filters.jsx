import { ChevronDownIcon, LoaderCircleIcon, StarIcon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Filters = ({ categories, isCategoriesLoading, setFilters, filters }) => {
  const [toggleCategorieFilters, setToggleCategorieFilters] = useState(true);
  const [toggleStarFilters, setToggleStarFilters] = useState(true);
  const navigate = useNavigate();

  const handleSliderChange = (value) => {
    setFilters({ ...filters, minPrice: value[0], maxPrice: value[1] });
  };

  const handleCategoryChange = (categoryName) => {
    const newCategories = filters.categories.includes(categoryName)
      ? filters.categories.filter((name) => name !== categoryName)
      : [...filters.categories, categoryName];
    setFilters({ ...filters, categories: newCategories });
  };

  const handleRatingChange = (rating) => {
    const newRatings = filters.rating.includes(rating)
      ? filters.rating.filter((r) => r !== rating)
      : [...filters.rating, rating];
    setFilters({ ...filters, rating: newRatings });
  };

  const clearFilters = () => {
    setFilters({
      minPrice: 0,
      maxPrice: 1000,
      search: "",
      categories: [],
      rating: [],
    });
    navigate("/products");
  };

  return (
    <div className="w-full mt-5 md:mt-0 md:w-[28rem] h-full">
      <div className="sticky top-5 h-fit select-none">
        <div className="box rounded-xl border bg-white py-6 px-4 w-full md:max-w-sm">
          <h6 className="font-medium text-base leading-7 text-black mb-5">
            Your Workspace
          </h6>

          <div className="mb-5">
            <Slider
              value={[filters.minPrice, filters.maxPrice]}
              min={0}
              max={1000}
              step={1}
              onValueChange={handleSliderChange}
              defaultValue={[0, 1000]}
            />
            <div className="flex justify-between mt-2 text-sm font-medium">
              <p>Min (${filters.minPrice === 0 ? 0 : filters.minPrice || 0})</p>
              <p>
                Max ($
                {filters.maxPrice === 1000 ? 1000 : filters.maxPrice || 1000})
              </p>
            </div>
          </div>

          <div>
            <Input
              label="Search"
              placeholder="Search"
              className="w-full rounded-full"
              value={filters.search}
              onChange={(e) =>
                setFilters({ ...filters, search: e.target.value })
              }
            />
          </div>
        </div>

        <div className="mt-7 box rounded-xl border bg-white p-6 w-full md:max-w-sm flex flex-col gap-5">
          <div className="flex items-center justify-between w-full pb-3 border-b">
            <p className="font-medium text-base leading-7 text-black ">
              Filter Plans
            </p>

            <button
              onClick={clearFilters}
              className="text-primary text-sm font-medium"
            >
              Clear All Filters
            </button>
          </div>

          <div>
            <div
              onClick={() => setToggleCategorieFilters(!toggleCategorieFilters)}
              className="flex justify-between mb-3 cursor-pointer"
            >
              <h6 className="font-medium text-sm leading-7 text-black">
                Categories
              </h6>

              <ChevronDownIcon className="w-5 cursor-pointer" />
            </div>

            {isCategoriesLoading && (
              <LoaderCircleIcon className="w-5 animate-spin mx-auto text-gray-500" />
            )}

            {!isCategoriesLoading && toggleCategorieFilters && (
              <div className="flex flex-col gap-3">
                {categories?.map((category) => (
                  <div
                    key={category._id}
                    onClick={() => handleCategoryChange(category.name)}
                    className="flex items-center space-x-2 capitalize"
                  >
                    <Checkbox
                      id={category.name}
                      checked={filters.categories.includes(category.name)}
                      onChange={() => handleCategoryChange(category.name)}
                    />
                    <Label
                      htmlFor={category.name}
                      className="text-sm font-medium capitalize leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {category.name}
                    </Label>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <div
              onClick={() => setToggleStarFilters(!toggleStarFilters)}
              className="flex justify-between cursor-pointer mb-3"
            >
              <h6 className="font-medium text-sm leading-7 text-black">
                Ratings
              </h6>

              <ChevronDownIcon className="w-5 cursor-pointer" />
            </div>

            {toggleStarFilters && (
              <div className="flex flex-col gap-3">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    onClick={() => handleRatingChange(i + 1)}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      id={`star-${i + 1}`}
                      checked={filters.rating.includes(i + 1)}
                      onChange={() => handleRatingChange(i + 1)}
                    />
                    <Label
                      htmlFor={`star-${i + 1}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                    >
                      {[...Array(i + 1)].map((_, j) => (
                        <StarIcon
                          key={j}
                          className="w-5 text-yellow-500 fill-yellow-500"
                        />
                      ))}
                    </Label>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
