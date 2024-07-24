import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import { useLogoutMutation } from "../store/api/authApiSlice";
import { removeUser } from "../store/slices/authSlice";

const useLogout = () => {
  const dispatch = useDispatch();
  const [logoutMutation, { isLoading: isLogouting }] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logoutMutation().unwrap();
      dispatch(removeUser());
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error(error?.data?.message || "An error occurred");
    }
  };

  return { handleLogout, isLogouting };
};

export default useLogout;
