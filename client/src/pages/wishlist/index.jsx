import {
  ArrowRight,
  HeartOffIcon,
  ImageOff,
  ShoppingBasket,
  X,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import convertDate from "@/utils/convertDate";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import ProductCard from "../../components/products/productCard";
import { removeFromFavorites } from "../../store/slices/favoritesSlice";

const WishListPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.favorites.products);

  return (
    <div>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-700">
          Product <span className="text-primary">Wishlist</span>
        </h2>
        <p className="text-sm md:text-base text-gray-500 mt-2">
          Here are your favorite products that you have added to your wishlist
          list.
        </p>
      </div>

      {products?.length === 0 ? (
        <div className="flex items-center mt-5 justify-center h-72 sm:h-96 flex-col gap-3 bg-muted rounded-xl">
          <HeartOffIcon className="size-20 sm:size-28 text-primary stroke-[1px] opacity" />
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
        <div className="border rounded-xl mt-8">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] table-cell">Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="table-cell">Price</TableHead>
                <TableHead className="table-cell">Stock</TableHead>
                <TableHead className="table-cell">Date</TableHead>
                <TableHead className="table-cell text-center">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {products?.map((product) => (
                <TableRow key={product?.id}>
                  <TableCell className="table-cell">
                    {product?.image ? (
                      <img
                        src={product.image}
                        alt={product.title}
                        className="aspect-square w-[4.6rem] h-full rounded-md object-cover object-center"
                      />
                    ) : (
                      <div className="w-[4.5rem] aspect-square flex-center rounded-md bg-muted">
                        <ImageOff className="size-8 text-muted-foreground/80" />
                      </div>
                    )}
                  </TableCell>

                  <TableCell className="capitalize lg:whitespace-normal whitespace-nowrap table-cell antialiased lg:text-base text-gray-600">
                    {product?.title?.length > 50
                      ? product?.title?.slice(0, 50) + "..."
                      : product?.title}
                  </TableCell>

                  <TableCell className="table-cell">
                    ${product.price}.00
                  </TableCell>

                  <TableCell className="table-cell whitespace-nowrap">
                    <Badge
                      variant="outline"
                      className={
                        product?.stock
                          ? "bg-green-500/10 text-primary font-normal border-green-500/50"
                          : "bg-red-500/10 text-red-500 font-normal border-red-500/50"
                      }
                    >
                      {product?.stock ? "In Stock" : "Out of Stock"}
                    </Badge>
                  </TableCell>

                  <TableCell className="table-cell whitespace-nowrap">
                    {convertDate(new Date().toISOString())}
                  </TableCell>

                  <TableCell className="table-cell">
                    <div className="flex-center">
                      <ShoppingBasket className="size-[2.3rem] cursor-pointer text-primary p-2 rounded-full hover:bg-green-500/10" />
                      <X
                        onClick={() => {
                          dispatch(removeFromFavorites({ id: product?.id }));
                          console.log(product?.id);
                          toast.success("Product removed from wishlist");
                        }}
                        className="size-[2.3rem] cursor-pointer text-red-500 p-2 rounded-full hover:bg-red-500/10"
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <h3 className="text-2xl font-semibold mt-8 text-dark-gray dark:text-white">
        People also bought
      </h3>

      <div className="grid sm:grid-cols-2 mt-5 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3 xl:gap-5">
        {[...Array(4)].map((_, i) => (
          <ProductCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default WishListPage;
