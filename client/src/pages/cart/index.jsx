import ProductCard from "../../components/products/productCard";
import CartProducts from "./cartProducts";
import CouponCode from "./couponCode";
import OrderSummary from "./orderSummary";

const CartPage = () => {
  return (
    <section className="bg-white antialiased">
      <h2 className="text-xl font-semibold text-dark-gray dark:text-white sm:text-2xl">
        Shopping Cart
      </h2>

      <div className="mt-6 sm:mt-8 md:gap-6 xl:flex xl:items-start xl:gap-8">
        <div className="mx-auto w-full flex-none xl:max-w-4xl">
          <CartProducts />

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
