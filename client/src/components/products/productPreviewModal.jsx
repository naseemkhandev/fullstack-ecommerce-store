import { Eye, Minus, Plus, ShoppingBasket, Star } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const ProductPreviewModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Eye className="size-7 border p-1 hover:border-primary hover:bg-primary hover:text-white rounded bg-white cursor-pointer" />
      </DialogTrigger>

      <DialogContent className="sm:max-w-4xl w-full">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex-center rounded flex-[.6] bg-slate-50 h-full p-5 border border-gray-100 max-h-72 md:max-h-full">
            <img
              src="https://www.tractor-shop.nl/1641/scania-soft-shell-jas-zwart.jpg"
              className="w-full object-contain h-full mix-blend-multiply"
            />
          </div>

          <div className="flex flex-col gap-3 flex-[1] h-full">
            <Link
              to="/"
              className="block font-medium text-xl md:text-2xl leading-relaxed text-gray-700 antialiased"
            >
              Apple Headphones Pro Max 2021 Edition - Black (Wireless)
            </Link>

            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="size-4 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>

            <Link
              to="/"
              className="block font-sans text-sm leading-normal antialiased hover:underline hover:text-dark-gray cursor-pointer"
            >
              Electronics
            </Link>

            <p className="block font-sans text-base text-dark-gray leading-normal antialiased">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              officia quam delectus corporis! Velit, necessitatibus veritatis.
              Expedita iusto nisi quam perspiciatis fuga dolor. Impedit totam
              cupiditate ut, sint quis facere?
            </p>

            <div className="mb-2 flex items-center gap-3 mt-2 col-span-3">
              <p className="block font-sans text-xl font-bold leading-relaxed text-blue-gray-900 antialiased">
                $95.00
              </p>

              <s className="block font-sans text-base font-normal leading-normal text-gray-700 antialiased opacity-75">
                $120.00
              </s>
            </div>

            <div className="flex items-center gap-3 mt-auto">
              <div className="flex items-center border rounded-md gap-5 p-2">
                <Minus className="size-4 cursor-pointer" />
                <p className="block font-sans text-base font-normal leading-normal text-gray-700 antialiased">
                  1
                </p>
                <Plus className="size-4 cursor-pointer" />
              </div>

              <Button className="bg-dark-gray py-3 font-semibold">
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
