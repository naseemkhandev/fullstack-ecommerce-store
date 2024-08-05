import { Skeleton } from "@/components/ui/skeleton";

const ProductCardSkeleton = () => {
  return (
    <div className="flex-center flex-col items-start gap-3 p-1">
      <Skeleton className="w-full h-72 rounded-md" />
      <Skeleton className="w-[95%] h-4" />
      <Skeleton className="w-[80%] h-4" />
      <Skeleton className="w-[55%] h-4" />

      <div className="flex-between gap-3 w-full py-1">
        <div className="flex items-center gap-3">
          <Skeleton className="w-12 h-4" />
          <Skeleton className="w-12 h-4" />
        </div>
        <div className="flex items-center gap-3">
          <Skeleton className="w-12 h-4" />
          <Skeleton className="w-12 h-4" />
        </div>
      </div>

      <div className="flex items-center gap-3 w-full">
        <Skeleton className="w-[75%] h-12" />
        <Skeleton className="w-[25%] h-12" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
