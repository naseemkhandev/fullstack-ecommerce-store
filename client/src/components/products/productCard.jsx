import { Heart, ShoppingBasket, Star } from "lucide-react";
import ProductPreviewModal from "./productPreviewModal";

const ProductCard = () => {
  return (
    <div className="relative flex w-full flex-col gap-5 rounded-sm bg-white bg-clip-border border text-gray-600 border-gray-100 group cursor-pointer">
      <div className="bg-gray-50 border-b h-60 border-gray-100 relative overflow-hidden">
        <img
          src="https://www.tractor-shop.nl/1641/scania-soft-shell-jas-zwart.jpg"
          className="w-full rounded-t-sm object-contain max-h-60 group-hover:opacity-0 group-hover:scale-90 scale-[.95] transition-all mix-blend-multiply duration-500 delay-150"
        />
        <img
          src="https://m.media-amazon.com/images/I/61ekniUkLJL._AC_UF894,1000_QL80_.jpg"
          className="w-full rounded-t-sm object-contain max-h-60 group-hover:opacity-100 opacity-0 group-hover:scale-100 scale-90 mix-blend-multiply transition-all duration-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-60"
        />

        <div className="absolute transition-all -bottom-6 group-hover:bottom-2 flex-center gap-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 duration-300 text-gray-500">
          <Heart className="size-7 border p-1 hover:border-primary hover:bg-primary hover:text-white rounded bg-white cursor-pointer" />
          <ProductPreviewModal />
          <ShoppingBasket className="size-7 border p-1 hover:border-primary hover:bg-primary hover:text-white rounded bg-white cursor-pointer" />
        </div>
      </div>

      <div className="p-3 flex flex-col gap-1">
        <p className="block font-sans text-sm leading-normal antialiased">
          Electronics
        </p>

        <p className="block font-medium hover:underline text-[.95rem] leading-relaxed text-blue-gray-900 antialiased">
          Apple Headphones Pro Max 2021 Edition - Black
        </p>

        <div className="flex items-center gap-1 mt-5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="size-4 text-yellow-400 fill-yellow-400" />
          ))}
        </div>

        <div className="mb-2 flex items-center gap-3 mt-2">
          <p className="block font-sans text-base font-bold leading-relaxed text-blue-gray-900 antialiased">
            $95.00
          </p>

          <s className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            $120.00
          </s>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
