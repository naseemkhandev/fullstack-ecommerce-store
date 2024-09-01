import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { Button } from "../../components/ui/button";

const OrderSummary = () => {
  const cart = useSelector((state) => state.cart);

  // Check if the cart is empty
  const isCartEmpty = cart.products?.length === 0;

  // Calculate original price
  const originalPrice = isCartEmpty
    ? 0
    : cart.products?.reduce(
        (total, item) => total + item.actualPrice * item.quantity,
        0
      );

  // Calculate savings as the difference between actual price and discounted price
  const savings = isCartEmpty
    ? 0
    : cart.products?.reduce(
        (total, item) =>
          total + (item.actualPrice - item.discountedPrice) * item.quantity,
        0
      );

  // Store pickup fee (assuming a fixed value for simplicity)
  const storePickup = isCartEmpty ? 0 : 99;

  // Calculate tax (assuming a fixed tax rate of 10% for simplicity)
  const tax = isCartEmpty ? 0 : (originalPrice - savings + storePickup) * 0.1;

  // Calculate total
  const total = isCartEmpty ? 0 : originalPrice - savings + storePickup + tax;

  return (
    <div className="space-y-4 rounded-lg border-gray-100 border bg-white p-4 sm:p-6">
      <p className="text-xl font-semibold text-dark-gray dark:text-white">
        Order summary
      </p>

      <div className="space-y-6">
        <div className="space-y-4">
          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
              Original price
            </dt>
            <dd className="text-base font-medium text-dark-gray dark:text-white">
              ${originalPrice?.toFixed(2)}
            </dd>
          </dl>

          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
              Savings
            </dt>
            <dd className="text-base font-medium text-green-600">
              -${savings?.toFixed(2)}
            </dd>
          </dl>

          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
              Store Pickup
            </dt>
            <dd className="text-base font-medium text-dark-gray dark:text-white">
              ${storePickup?.toFixed(2)}
            </dd>
          </dl>

          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
              Tax
            </dt>
            <dd className="text-base font-medium text-dark-gray dark:text-white">
              ${tax?.toFixed(2)}
            </dd>
          </dl>
        </div>

        <dl className="flex items-center justify-between gap-4 border-t pt-5 pb-3">
          <dt className="text-base font-bold text-dark-gray dark:text-white">
            Total
          </dt>
          <dd className="text-base font-bold text-dark-gray dark:text-white">
            ${total?.toFixed(2)}
          </dd>
        </dl>
      </div>

      <Button className="w-full py-3.5" disabled={isCartEmpty}>
        Proceed to Checkout
      </Button>

      <div className="flex items-center justify-center gap-2">
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          or{" "}
        </span>
        <Link
          to="/products"
          title
          className="inline-flex items-center gap-2 text-sm font-medium text-primary underline hover:no-underline dark:text-primary"
        >
          Continue Shopping
          <ArrowRight className="size-4 -ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
