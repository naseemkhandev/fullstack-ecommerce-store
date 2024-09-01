import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addToCart } from "@/store/slices/cartSlice";

const useHandleAddToCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authUser = useSelector((state) => state.auth.user);

  const handleAddToCart = ({
    id,
    title,
    actualPrice,
    discountedPrice,
    image,
    quantity,
    stock,
    createdAt,
  }) => {
    if (!authUser) {
      toast.error("Please login to add product to cart");
      navigate("/auth/login");
      return;
    }

    dispatch(
      addToCart({
        id,
        title,
        actualPrice,
        discountedPrice,
        image,
        quantity,
        stock,
        createdAt,
      })
    );
    toast.success("Product added to cart");
  };

  return { handleAddToCart };
};

export default useHandleAddToCart;
