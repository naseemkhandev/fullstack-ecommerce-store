import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const ProductQuantityButton = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity((prev) => prev + 1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="flex select-none items-center border rounded-md gap-5 p-2">
      <Minus onClick={handleDecrement} className="size-4 cursor-pointer" />
      <p className="block font-sans text-base font-normal leading-normal text-gray-700 antialiased">
        {quantity}
      </p>
      <Plus onClick={handleIncrement} className="size-4 cursor-pointer" />
    </div>
  );
};

export default ProductQuantityButton;
