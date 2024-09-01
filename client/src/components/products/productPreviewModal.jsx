import { Eye, ImageOff, ShoppingBasket, Star } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ProductQuantityButton from "../common/productQuantityButton";
import useHandleAddToCart from "../../hooks/useHandleAddToCart";

const ProductPreviewModal = ({
  iconClassName,
  id,
  title,
  category,
  image,
  rating,
  actualPrice,
  discountedPrice,
  description,
  stock,
  createdAt,
}) => {
  const { handleAddToCart } = useHandleAddToCart();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Eye
          className={`size-9 stroke-[1.5px] border p-1.5 hover:border-primary hover:bg-primary hover:text-white rounded-md bg-white cursor-pointer ${iconClassName}`}
        />
      </DialogTrigger>

      <DialogContent className="sm:max-w-4xl w-full">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex-center rounded flex-[.6] group relative bg-slate-50 h-full border border-gray-100 max-h-72 md:max-h-full">
            <Link to={`/product/${id}`}>
              {image ? (
                <>
                  <img
                    src={image}
                    className="w-full rounded-t-sm object-contain group-hover:opacity-0 group-hover:scale-90 scale-[.95] transition-all mix-blend-multiply duration-500 delay-150 h-full"
                  />
                  <img
                    src={image}
                    className="w-full rounded-t-sm object-contain group-hover:opacity-100 opacity-0 group-hover:scale-100 scale-90 mix-blend-multiply transition-all duration-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full"
                  />
                </>
              ) : (
                <div className="flex-center rounded-md w-full h-full min-h-72 min-w-64 max-w-64 p-5">
                  <ImageOff className="stroke-[1.3px] size-32 text-muted-foreground opacity-50" />
                </div>
              )}
            </Link>
          </div>

          <div className="flex flex-col gap-3 flex-[1] h-full">
            <Link
              to={`/product/${id}`}
              className="block font-medium text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-700 antialiased"
            >
              {title}
            </Link>

            <div className="flex items-center gap-1">
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

            <Link
              to={`/products?category=${category?.slug}`}
              className="block font-sans text-sm leading-normal antialiased"
            >
              {category?.name}
            </Link>

            <p className="block font-sans text-sm md:text-base text-dark-gray leading-normal antialiased">
              {description}
            </p>

            <div className="mb-2 flex items-center gap-3 mt-2 col-span-3">
              <p className="block font-sans text-xl font-bold leading-relaxed text-blue-gray-900 antialiased">
                ${discountedPrice}.00
              </p>

              <s className="block font-sans text-base font-normal leading-normal text-gray-700 antialiased opacity-75">
                ${actualPrice}.00
              </s>
            </div>

            <div className="flex items-center gap-3 mt-auto">
              <ProductQuantityButton />

              <Button
                onClick={() =>
                  handleAddToCart({
                    id,
                    title,
                    discountedPrice,
                    image,
                    stock,
                    createdAt,
                    quantity: 1,
                  })
                }
                className="bg-dark-gray py-3 font-semibold"
              >
                <ShoppingBasket className="size-4 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductPreviewModal;
