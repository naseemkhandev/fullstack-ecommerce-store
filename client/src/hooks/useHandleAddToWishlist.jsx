import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addToFavorites,
  removeFromFavorites,
} from "../store/slices/favoritesSlice";

const useHandleAddToFavorites = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authUser = useSelector((state) => state.auth.user);
  const wishlist = useSelector((state) => state.favorites.products);

  const handleAddToFavorites = ({
    id,
    title,
    discountedPrice,
    image,
    stock,
    createdAt,
  }) => {
    const isProductInWishlist = wishlist.some((product) => product.id === id);

    if (!authUser) {
      toast.error("Please login to add product to wishlist");
      navigate("/auth/login");
      return;
    }

    if (isProductInWishlist) {
      dispatch(removeFromFavorites({ id }));
      toast.success("Product removed from wishlist");
    } else {
      dispatch(
        addToFavorites({
          id,
          title,
          price: discountedPrice,
          image,
          stock,
          createdAt,
        })
      );
      toast.success("Product added to wishlist");
    }
  };

  return { handleAddToFavorites };
};

export default useHandleAddToFavorites;
