import { ImageOff, ShoppingBasket, X } from "lucide-react";

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
import ProductCard from "../../components/products/productCard";

const WishListPage = () => {
  const products = [
    {
      _id: "1",
      title:
        "Apple iPhone 12 Pro Max 256GB Graphite 5G Unlocked Smartphone - MGDA3LL/A",
      image: "image",
      stock: 15,
    },
    {
      _id: "2",
      title:
        "Apple iPhone 12 Pro Max 256GB Graphite 5G Unlocked Smartphone - MGDA3LL/A",
      image: "",
      stock: 0,
    },
    {
      _id: "3",
      title:
        "Apple iPhone 12 Pro Max 256GB Graphite 5G Unlocked Smartphone - MGDA3LL/A",
      image: "image",
      stock: 15,
    },
    {
      _id: "4",
      title:
        "Apple iPhone 12 Pro Max 256GB Graphite 5G Unlocked Smartphone - MGDA3LL/A",
      image: "",
      stock: 0,
    },
    {
      _id: "5",
      title:
        "Apple iPhone 12 Pro Max 256GB Graphite 5G Unlocked Smartphone - MGDA3LL/A",
      image: "image",
      stock: 15,
    },
  ];

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

      <div className="border rounded-xl mt-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] table-cell">Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="table-cell">Price</TableHead>
              <TableHead className="table-cell">Stock</TableHead>
              <TableHead className="table-cell">Date</TableHead>
              <TableHead className="table-cell text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {products?.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} className="text-center">
                  No products found
                </TableCell>
              </TableRow>
            )}

            {products?.map((product) => (
              <TableRow key={product?._id}>
                <TableCell className="table-cell">
                  {product?.image ? (
                    <img
                      src="/images/auth.jpg"
                      alt="product img"
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

                <TableCell className="table-cell">$499.99</TableCell>

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
                    <X className="size-[2.3rem] cursor-pointer text-red-500 p-2 rounded-full hover:bg-red-500/10" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

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
