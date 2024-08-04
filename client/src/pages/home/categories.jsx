import CategoriesSkeleton from "../../components/skeletons/categoriesSkeleton";
import { useGetAllCategoriesQuery } from "../../store/api/categoryApiSlice";
import renderIcon from "../../utils/renderIcon";

const Categories = () => {
  const {
    data: { categories },
    isLoading: isCategoriesLoading,
  } = useGetAllCategoriesQuery();

  return (
    <div className="flex items-center gap-6 overflow-auto w-full">
      {isCategoriesLoading ? (
        <CategoriesSkeleton />
      ) : (
        <>
          {categories?.map((category) => (
            <div
              key={category.id}
              className="flex-col flex-center rounded-md relative cursor-pointer transition-all duration-500 capitalize"
              style={{
                background: `linear-gradient(to bottom, ${category?.bgColor}50, ${category?.bgColor}20 30%, transparent 70%)`,
                padding: "1rem",
              }}
            >
              <div className="flex-col flex-center min-w-36 md:min-w-40 rounded-md h-32 md:h-36 bg-white shadow-lg shadow-black/5">
                {category?.icon ? (
                  <span className="text-primary text-5xl">
                    {renderIcon(category.icon)}
                  </span>
                ) : (
                  <span className="text-gray-400">N/A</span>
                )}

                <h2 className="font-semibold text-gray-500 mt-2">
                  {category.name}
                </h2>
                <p className="text-sm font-light text-gray-400">85 items</p>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Categories;
