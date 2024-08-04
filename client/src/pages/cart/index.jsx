import { ArrowRight, ShoppingCart } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import ProductCard from "../../components/products/productCard";
import CouponCode from "./couponCode";
import OrderSummary from "./orderSummary";
import CartProduct from "./cartProduct";
import { emptyCart } from "../../store/slices/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const authUser = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (!authUser) {
      dispatch(emptyCart());
    }
  }, [authUser, dispatch]);

  return (
    <section className="bg-white antialiased">
      <h2 className="text-xl font-semibold text-dark-gray dark:text-white sm:text-2xl">
        Shopping Cart
      </h2>

      <div className="mt-6 sm:mt-8 md:gap-6 xl:flex xl:items-start xl:gap-8">
        <div className="mx-auto w-full flex-none xl:max-w-4xl">
          {products?.length === 0 ? (
            <div className="flex items-center justify-center h-72 sm:h-96 flex-col gap-3 bg-muted rounded-xl">
              <ShoppingCart className="size-20 sm:size-28 text-primary stroke-[1px] opacity" />
              <p className="text-xl font-semibold text-dark-gray dark:text-white">
                Your cart is empty
              </p>
              <Link
                to="/products"
                title
                className="inline-flex items-center gap-1.5 antialiased font-medium text-primary underline hover:no-underline dark:text-primary group"
              >
                Continue Shopping
                <ArrowRight className="size-5 mt-0.5 group-hover:ml-1.5 transition-all" />
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {products.map((product) => (
                <CartProduct key={product.id} {...product} />
              ))}
            </div>
          )}

          <h3 className="text-2xl xl:block hidden font-semibold mt-8 text-dark-gray dark:text-white">
            People also bought
          </h3>

          <div className="xl:grid hidden sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-3 xl:gap-5">
            {[...Array(3)].map((_, i) => (
              <ProductCard key={i} />
            ))}
          </div>
        </div>

        <div className="mx-auto mt-6 flex-1 space-y-6 xl:mt-0 lg:w-full">
          <OrderSummary />
          <CouponCode />
        </div>

        <h3 className="text-2xl xl:hidden font-semibold mt-8 text-dark-gray dark:text-white">
          People also bought
        </h3>

        <div className="grid xl:hidden sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-3 xl:gap-5">
          {[...Array(3)].map((_, i) => (
            <ProductCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CartPage;
