import { CircleAlert, Heart, ShoppingBasket, Star } from "lucide-react";
import { useSelector } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams } from "react-router-dom";

import ProductQuantityButton from "../../components/common/productQuantityButton";
import ProductPreviewModal from "../../components/products/productPreviewModal";
import ProductDetailsSkeleton from "../../components/skeletons/productDetailsSkeleton";
import { Button } from "../../components/ui/button";
import useHandleAddToCart from "../../hooks/useHandleAddToCart";
import useHandleAddToFavorites from "../../hooks/useHandleAddToWishlist";
import { useGetProductDetailsQuery } from "../../store/api/productApiSlice";

const ProductDetailsPage = () => {
  const params = useParams();
  const { data: { product } = {}, isLoading: isProductDetailsLoading } =
    useGetProductDetailsQuery(params?.id);

  const { handleAddToCart } = useHandleAddToCart();
  const { handleAddToFavorites } = useHandleAddToFavorites();

  const wishlist = useSelector((state) => state.favorites.products);
  const isProductInWishlist = wishlist.some(
    (product) => product.id === params?.id
  );

  if (isProductDetailsLoading) {
    return <ProductDetailsSkeleton />;
  }

  if (!product) {
    return (
      <div className="flex-center flex-grow flex-center min-h-80 h-full flex-col">
        <CircleAlert className="size-12 text-primary mb-2" />
        <p className="text-2xl text-muted-foreground">Product not found</p>
      </div>
    );
  }

  const {
    title,
    category,
    image: { secure_url: image },
    rating,
    actualPrice,
    discountedPrice,
    description,
    stock,
    createdAt,
  } = product;

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="flex gap-10 relative">
          <div className="flex-[.7] sticky top-5 h-fit">
            <img
              src={image}
              alt={title}
              className="max-lg:mx-auto w-full min-h-[35rem] max-h-[40rem] h-full bg-slate-50 mix-blend-multiply rounded-2xl select-none object-cover"
            />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-3">
              <h2 className="font-manrope font-semibold text-2xl text-gray-600">
                {title}
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
                  $ {discountedPrice}{" "}
                </h5>
                <span className="ml-3 font-medium text-xl text-primary">
                  -30%
                </span>
              </div>

              <p className="text-base font-normal text-gray-500">
                M.R.P :{" "}
                <s>
                  <span className="text-gray-500">$ {actualPrice}</span>
                </s>
              </p>
            </div>

            <p className="text-base font-normal text-gray-500">{description}</p>

            <div className="flex items-center gap-3 mt-5">
              <ProductQuantityButton />

              <Button
                onClick={() =>
                  handleAddToCart({
                    id: params?.id,
                    title,
                    discountedPrice,
                    image,
                    stock,
                    createdAt,
                    quantity: 1,
                  })
                }
                className="bg-dark-gray py-3.5 px-8 font-semibold"
              >
                <ShoppingBasket className="size-4 mr-2" />
                Add to Cart
              </Button>

              <Heart
                onClick={() =>
                  handleAddToFavorites({
                    id: params?.id,
                    title,
                    discountedPrice,
                    image: image[0],
                    stock,
                    createdAt,
                  })
                }
                className={`size-12 border p-2.5 hover:border-primary hover:bg-primary hover:text-white rounded bg-white cursor-pointer stroke-[1px] ${
                  isProductInWishlist
                    ? "!bg-primary text-white"
                    : "hover:border-primary hover:bg-primary hover:text-white"
                }`}
              />
              <ProductPreviewModal
                iconClassName="!size-12 p-2.5 stroke-[1px]"
                {...{
                  id: params?.id,
                  title,
                  category,
                  image,
                  rating,
                  actualPrice,
                  discountedPrice,
                  description,
                  stock,
                  createdAt,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
