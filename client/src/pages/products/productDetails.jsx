import { Eye, Heart, Minus, Plus, ShoppingBasket, Star } from "lucide-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Button } from "../../components/ui/button";
import ProductPreviewModal from "../../components/products/productPreviewModal";

const ProductDetailsPage = () => {
  const images = [
    "https://pagedone.io/asset/uploads/1700472379.png",
    "https://pagedone.io/asset/uploads/1711622397.png",
    "https://pagedone.io/asset/uploads/1711622408.png",
    "https://pagedone.io/asset/uploads/1711622419.png",
  ];

  return (
    <section className="py-10">
      <div className="mx-auto">
        <div className="flex gap-10">
          <div className="flex-[.7] sticky top-0">
            <Carousel
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              showArrows={false}
              showIndicators={false}
              swipeable
              emulateTouch
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src="https://pagedone.io/asset/uploads/1700472379.png"
                  alt="Summer Travel Bag image"
                  className="max-lg:mx-auto w-full aspect-square bg-slate-50 mix-blend-multiply rounded-2xl select-none max-h-[28rem] object-cover"
                />
              ))}
            </Carousel>

            <div className="flex items-center gap-5 mt-5 overflow-auto">
              {images.map((image, index) => (
                <img
                  key={index}
                  src="https://pagedone.io/asset/uploads/1700472430.png"
                  alt="Summer Travel Bag image"
                  className="cursor-pointer rounded-xl transition-all duration-500 border border-transparent hover:border-primary"
                />
              ))}
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-3">
              <h2 className="font-manrope font-semibold text-2xl text-gray-600">
                Potato Chips 52g, American Cream & Onion Flavour, Crunchy Chips
                & Snacks.
              </h2>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 text-yellow-400 fill-yellow-400"
                  />
                ))}

                <p className="font-light text-sm text-gray-500">(4.9)</p>

                <button className="flex items-center gap-1 rounded-lg bg-amber-400 py-1.5 px-2.5 w-max">
                  <Star className="size-4 fill-white text-white" />
                  <span className="text-base font-medium text-white">4.8</span>
                </button>
              </div>
            </div>

            <div className="flex flex-col mb-8 gap-y-3 mt-5">
              <div className="flex items-center">
                <h5 className="font-manrope font-semibold text-2xl leading-9 text-dark-gray ">
                  $ 199.00{" "}
                </h5>
                <span className="ml-3 font-medium text-xl text-primary">
                  -30%
                </span>
              </div>

              <p className="text-base font-normal text-gray-500">
                M.R.P :{" "}
                <s>
                  <span className="text-gray-500">$ 299.00</span>
                </s>
              </p>
            </div>

            <p className="text-base font-normal text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              malesuada, eros sed bibendum lacinia, magna turpis lacinia odio,
              sit amet scelerisque ligula odio sit amet sem. Aliquam erat
              volutpat. Nullam auctor, velit nec posuere tristique, turpis elit
              sollicitudin turpis, vel lacinia elit risus nec nunc. In hac
              habitasse platea dictumst. Sed nec nisl auctor, vehicula erat nec,
              ultrices purus Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Alias magnam vero sapiente praesentium atque illum, aliquam
              fugit reiciendis animi tenetur dolor sunt obcaecati voluptate
              ipsum. Totam in repudiandae alias veniam!
            </p>

            <div className="flex items-center gap-3 mt-5">
              <div className="flex items-center border rounded-md gap-8 p-3">
                <Minus className="size-4 cursor-pointer" />
                <p className="block font-sans text-base font-normal leading-normal text-gray-700 antialiased">
                  1
                </p>
                <Plus className="size-4 cursor-pointer" />
              </div>

              <Button className="bg-dark-gray py-3.5 px-8 font-semibold">
                <ShoppingBasket className="size-4 mr-2" />
                Add to Cart
              </Button>

              <Heart className="size-12 border p-2.5 hover:border-primary hover:bg-primary hover:text-white rounded bg-white cursor-pointer stroke-[1px]" />
              <ProductPreviewModal iconClassName="!size-12 p-2.5 stroke-[1px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
