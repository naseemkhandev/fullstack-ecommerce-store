import {
  Carrot,
  Citrus,
  Footprints,
  Headset,
  Monitor,
  Shirt,
  Soup,
} from "lucide-react";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Electronics",
      icon: Monitor,
      color: "#FFDDC1",
    },
    {
      id: 2,
      name: "Clothing",
      icon: Shirt,
      color: "#D1E8E4",
    },
    {
      id: 3,
      name: "Shoes",
      icon: Footprints,
      color: "#FF43E0",
    },
    {
      id: 4,
      name: "Food",
      icon: Soup,
      color: "#FF3320",
    },
    {
      id: 5,
      name: "Accessories",
      icon: Headset,
      color: "#FFDF4F",
    },
    {
      id: 6,
      name: "Vegetables",
      icon: Carrot,
      color: "#C7CEEA",
    },
    {
      id: 7,
      name: "Fruits",
      icon: Citrus,
      color: "#D3E6FF",
    },
  ];

  return (
    <div className="flex items-center gap-6 overflow-auto w-full">
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex-col flex-center rounded-md relative cursor-pointer transition-all duration-500"
          style={{
            background: `linear-gradient(to bottom, ${category.color}50, ${category.color}20 30%, transparent 70%)`,
            padding: "1rem",
          }}
        >
          <div className="flex-col flex-center min-w-36 md:min-w-40 rounded-md h-32 md:h-36 bg-white shadow-lg shadow-black/5">
            <category.icon className="text-primary size-9 md:size-11 stroke-[1px]" />
            <h2 className="font-semibold text-gray-500 mt-2">
              {category.name}
            </h2>
            <p className="text-sm font-light text-gray-400">85 items</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
