import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Heart, ImageOff, ShoppingBasket, Star } from "lucide-react";
import { toast } from "react-hot-toast";

import { cn } from "@/lib/utils";
import ProductPreviewModal from "./productPreviewModal";
import { addToCart } from "@/store/slices/cartSlice";

const ProductCard = ({
  _id: id,
  layoutStyle,
  title,
  category,
  images,
  rating,
  actualPrice,
  discountedPrice,
  description,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authUser = useSelector((state) => state.auth.user);

  return (
    <div
      className={cn(
        "relative flex w-full gap-5 rounded-sm bg-white bg-clip-border border text-gray-600 border-gray-100 group cursor-pointer",
        layoutStyle === "list"
          ? "sm:flex-row flex-col md:flex-col lg:flex-row"
          : "flex-col"
      )}
    >
      <div
        className={cn(
          "bg-white flex-center border-gray-100 relative overflow-hidden",
          layoutStyle === "list"
            ? "lg:aspect-square min-w-64 md:h-72 lg:h-fit lg:min-w-64 border-b sm:border-r md:border-b lg:border-r"
            : "h-72 border-b"
        )}
      >
        <Link to="/product/123">
          {images?.length > 0 ? (
            <>
              <img
                src={images[0]}
                className={cn(
                  "w-full rounded-t-sm object-contain group-hover:opacity-0 group-hover:scale-90 scale-[.95] transition-all mix-blend-multiply duration-500 delay-150",
                  layoutStyle === "list" ? "aspect-square max-w-60" : "max-h-72"
                )}
              />
              <img
                src={images[1]}
                className={cn(
                  "w-full rounded-t-sm object-contain group-hover:opacity-100 opacity-0 group-hover:scale-100 scale-90 mix-blend-multiply transition-all duration-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                  layoutStyle === "list" ? "aspect-square max-w-60" : "max-h-72"
                )}
              />
            </>
          ) : (
            <div className="flex-center rounded-md bg-muted w-full h-full p-80 max-h-72 max-w-64">
              <ImageOff className="size-24 stroke-[1.5px] text-gray-300" />
            </div>
          )}
        </Link>

        <div className="absolute z-10 transition-all -bottom-6 group-hover:bottom-2 flex-center gap-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 duration-300 text-gray-500">
          <Heart className="size-9 stroke-[1.5px] border p-1.5 hover:border-primary hover:bg-primary hover:text-white rounded-md bg-white cursor-pointer" />
          <ProductPreviewModal />
          <ShoppingBasket
            onClick={() => {
              if (!authUser) {
                toast.error("Please login to add product to cart");
                navigate("/auth/login");
                return;
              }
              dispatch(
                addToCart({
                  id,
                  title,
                  discountedPrice,
                  image: images[0],
                  quantity: 1,
                })
              );
              toast.success("Product added to cart");
            }}
            className="size-9 stroke-[1.5px] border p-1.5 hover:border-primary hover:bg-primary hover:text-white rounded-md bg-white cursor-pointer"
          />
        </div>
      </div>

      <Link to="/product/123" className="p-3 flex flex-col gap-1">
        <Link
          to={`/products?category=${category}`}
          className="block font-sans text-sm leading-normal antialiased"
        >
          {category}
        </Link>

        <h2
          className={cn(
            "block font-medium capitalize hover:underline text-[.95rem] leading-relaxed text-blue-gray-900 antialiased",
            layoutStyle === "list" && "sm:text-base xl:text-lg"
          )}
        >
          {title}
        </h2>

        {layoutStyle === "list" && (
          <p className="block font-sans text-sm xl:text-base leading-relaxed text-blue-gray-500 antialiased mt-auto">
            {description.slice(0, 100)}...
          </p>
        )}

        <div className="flex items-center gap-1 mt-5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`size-4 ${
                i < rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-400 fill-gray-400"
              }`}
            />
          ))}
        </div>

        <div className="mb-2 flex items-center gap-3 mt-2">
          <p className="block font-sans text-base font-bold leading-relaxed text-blue-gray-900 antialiased">
            ${actualPrice}.00
          </p>

          <s className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            ${discountedPrice}.00
          </s>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
