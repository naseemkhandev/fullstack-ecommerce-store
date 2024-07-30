import { Eye, Heart, ShoppingBasket, Star } from "lucide-react";

const ProductCard = () => {
  return (
    <div className="relative flex w-full flex-col gap-5 rounded-sm bg-white bg-clip-border border text-gray-600 border-gray-100 group cursor-pointer">
      <div className="bg-gray-50 border-b h-60 border-gray-100 relative overflow-hidden">
        <img
          src="https://img.freepik.com/free-psd/beautiful-gaming-headphone-isolated-transparent-background_191095-12528.jpg"
          className="w-full rounded-t-sm object-contain max-h-60 group-hover:opacity-0 group-hover:scale-90 transition-all duration-500 delay-150"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP6Ie5INr95uItxg0YVEe_eP0Bn6GOo63C_1VNfPP_0M7CuKDbeFw0Ddz62X5CcJK84tg&usqp=CAU"
          className="w-full rounded-t-sm object-contain max-h-60 group-hover:opacity-100 opacity-0 group-hover:scale-110 transition-all duration-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-60"
        />

        <div className="absolute transition-all -bottom-6 group-hover:bottom-2 flex-center gap-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 duration-300 text-gray-500">
          <Heart className="size-7 border p-1 hover:border-primary hover:bg-primary hover:text-white rounded bg-white cursor-pointer" />
          <Eye className="size-7 border p-1 hover:border-primary hover:bg-primary hover:text-white rounded bg-white cursor-pointer" />
          <ShoppingBasket className="size-7 border p-1 hover:border-primary hover:bg-primary hover:text-white rounded bg-white cursor-pointer" />
        </div>
      </div>

      <div className="p-3 flex flex-col gap-1">
        <p className="block font-sans text-sm leading-normal">Electronics</p>

        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
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
