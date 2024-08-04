import { Skeleton } from "@/components/ui/skeleton";

const ProductDetailsSkeleton = () => {
  return (
    <div className="mx-auto">
      <div className="flex gap-10 lg:gap-5 xl:gap-10 flex-col lg:flex-row">
        <div className="flex-[.7] w-full sticky top-0">
          <Skeleton className="max-lg:mx-auto w-full aspect-square rounded-2xl select-none max-h-[28rem] object-cover" />

          <div className="flex items-center justify-between gap-5 mt-5 overflow-auto w-full mx-auto">
            <div className="flex items-center gap-5 sm:w-full">
              {[...Array(5)].map((_, i) => (
                <Skeleton
                  key={i}
                  className="cursor-pointer rounded-xl w-[5.8rem] h-[5.5rem] block"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 w-full">
          <div className="flex flex-col gap-5 w-full h-full">
            <div className="flex flex-col gap-2">
              <Skeleton className="w-full h-5 rounded-full" />
              <Skeleton className="h-5 rounded-full w-[85%]" />
              <Skeleton className="h-5 rounded-full w-[70%]" />
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex-between">
                <div className="flex items-center gap-3">
                  <Skeleton className="w-24 h-4" />
                  <Skeleton className="w-24 h-4" />
                </div>

                <div className="flex items-center gap-3">
                  <Skeleton className="w-24 h-4" />
                  <Skeleton className="w-24 h-4" />
                </div>
              </div>

              <div className="flex-between">
                <div className="flex items-center gap-3">
                  <Skeleton className="w-24 h-4" />
                  <Skeleton className="w-24 h-4" />
                </div>

                <div className="flex items-center gap-3">
                  <Skeleton className="w-24 h-4" />
                  <Skeleton className="w-24 h-4" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-10">
              <Skeleton className="h-7 rounded-md w-full" />
              <Skeleton className="h-7 rounded-md w-full" />
              <Skeleton className="h-7 rounded-md w-full" />
              <Skeleton className="h-7 rounded-md w-full" />
              <Skeleton className="h-7 rounded-md w-full" />
            </div>

            <div className="flex-between gap-3 w-full py-1 top-5">
              <div className="flex items-center gap-3">
                <Skeleton className="w-24 h-10" />
                <Skeleton className="w-24 h-10" />
              </div>
              <div className="flex items-center gap-3">
                <Skeleton className="w-24 h-10" />
                <Skeleton className="w-24 h-10" />
              </div>
            </div>

            <div className="flex items-end gap-3 w-full h-full flex-grow">
              <Skeleton className="w-[25%] h-14" />
              <Skeleton className="w-[75%] h-14" />
              <Skeleton className="w-[25%] h-14" />
              <Skeleton className="w-[25%] h-14" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
