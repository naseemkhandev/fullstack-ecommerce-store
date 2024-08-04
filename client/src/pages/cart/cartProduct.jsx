import { Heart, ImageOff, Minus, Plus, X } from "lucide-react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { removeFromCart } from "../../store/slices/cartSlice";
import useHandleAddToFavorites from "../../hooks/useHandleAddToWishlist";

const CartProduct = ({
  id,
  title,
  image,
  actualPrice,
  discountedPrice,
  quantity,
  stock,
  createdAt,
}) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.favorites.products);
  const isProductInWishlist = wishlist.some((product) => product.id === id);

  const { handleAddToFavorites } = useHandleAddToFavorites();

  return (
    <div className="space-y-6">
      <div className="rounded-lg border-gray-100 border bg-white p-4 md:p-6">
        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
          <Link to="/" className="shrink-0 md:order-1">
            {image ? (
              <img
                className="h-72 mx-auto sm:h-20 sm:w-20 rounded-md"
                src={image}
                alt="imac image"
              />
            ) : (
              <div className="h-72 mx-auto sm:h-20 sm:w-20 flex-center rounded-md bg-muted">
                <ImageOff className="size-8 text-muted-foreground/80" />
              </div>
            )}
          </Link>

          <div className="flex items-center justify-between md:order-3 md:justify-end">
            <div className="flex items-center border-gray-100 border rounded-md gap-5 p-1 px-2">
              <Minus className="size-4 cursor-pointer" />
              <p className="block font-sans text-base font-normal leading-normal text-gray-700 antialiased">
                {quantity}
              </p>
              <Plus className="size-4 cursor-pointer" />
            </div>

            <div className="md:order-4 ml-8">
              <div className="flex items-center gap-3">
                <p className="block font-sans font-bold leading-relaxed text-gray-600 text-2xl">
                  ${actualPrice}.00
                </p>

                <s className="block font-sans text-base font-normal leading-normal text-gray-700 antialiased opacity-75">
                  ${discountedPrice}.00
                </s>
              </div>
            </div>
          </div>
          <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
            <Link
              to={`/product/${id}`}
              className="text-base capitalize font-medium text-dark-gray hover:underline dark:text-white"
            >
              {title}
            </Link>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() =>
                  handleAddToFavorites({
                    id,
                    title,
                    discountedPrice,
                    image,
                    stock,
                    createdAt,
                  })
                }
                className={`inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary hover:underline group ${
                  isProductInWishlist && "text-primary"
                }`}
              >
                <Heart
                  className={`size-4 me-1.5 group-hover:fill-primary ${
                    isProductInWishlist && "fill-primary"
                  }`}
                />
                Add to Favorites
              </button>

              <button
                type="button"
                className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                onClick={() => {
                  dispatch(removeFromCart({ id, price: discountedPrice }));
                  toast.error("Product removed from cart");
                }}
              >
                <X className="size-4 me-1.5" />
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
