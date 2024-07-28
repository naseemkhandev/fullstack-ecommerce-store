import { Skeleton } from "@/components/ui/skeleton";

const TablesSkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-5 overflow-auto">
      <div className="w-full flex-between">
        <Skeleton className="h-12 w-40 lg:w-52 rounded-lg" />
        <Skeleton className="h-12 w-40 lg:w-52 rounded-lg" />
      </div>

      <div className="w-full flex-between">
        <div className="space-y-2">
          <Skeleton className="h-4 w-[100px] lg:w-[200px]" />
          <Skeleton className="h-4 w-[200px] lg:w-[400px]" />
        </div>

        <Skeleton className="h-14 w-32 rounded-lg" />
      </div>

      <div className="w-full flex flex-col gap-5 overflow-auto">
        <div className="flex-between w-full mt-5">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="space-y-2 space-x-2">
              <Skeleton className="h-4 w-[70px]" />
              <Skeleton className="h-4 w-[120px]" />
            </div>
          ))}
        </div>

        {[...Array(10)].map((_, index) => (
          <div key={index} className="w-full flex-between mt-5 space-x-5">
            <Skeleton className="w-[4.5rem] aspect-square rounded-md" />

            <div className="space-y-2">
              <Skeleton className="h-4 w-[80px]" />
              <Skeleton className="h-4 w-[120px]" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[300px]" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-[80px]" />
              <Skeleton className="h-4 w-[120px]" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-[120px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>

            <Skeleton className="h-12 aspect-square rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TablesSkeleton;
