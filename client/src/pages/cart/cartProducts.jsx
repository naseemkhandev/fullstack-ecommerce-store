import { Heart, Minus, Plus, X } from "lucide-react";
import { Link } from "react-router-dom";

const CartProducts = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border-gray-100 border bg-white p-4 md:p-6">
        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
          <Link to="/" className="shrink-0 md:order-1">
            <img
              className="h-72 mx-auto sm:h-20 sm:w-20 dark:hidden"
              src="https://www.tractor-shop.nl/1641/scania-soft-shell-jas-zwart.jpg"
              alt="imac image"
            />
          </Link>

          <div className="flex items-center justify-between md:order-3 md:justify-end">
            <div className="flex items-center border-gray-100 border rounded-md gap-5 p-1 px-2">
              <Minus className="size-4 cursor-pointer" />
              <p className="block font-sans text-base font-normal leading-normal text-gray-700 antialiased">
                1
              </p>
              <Plus className="size-4 cursor-pointer" />
            </div>

            <div className="text-end md:order-4 md:w-32">
              <p className="text-base font-bold text-dark-gray dark:text-white">
                $1,499
              </p>
            </div>
          </div>
          <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
            <Link
              to="/"
              className="text-base font-medium text-dark-gray hover:underline dark:text-white"
            >
              PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3, 24
              Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, Keyboard layout INT
            </Link>

            <div className="flex items-center gap-4">
              <button
                type="button"
                className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary hover:underline group"
              >
                <Heart className="size-4 me-1.5 group-hover:fill-primary" />
                Add to Favorites
              </button>

              <button
                type="button"
                className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
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

export default CartProducts;
