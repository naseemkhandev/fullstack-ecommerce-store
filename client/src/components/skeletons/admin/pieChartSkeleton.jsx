import { Skeleton } from "@/components/ui/skeleton";

const PieChartSkeleton = () => {
  return (
    <Skeleton className="w-full h-96 p-5 rounded-2xl">
      <div className="flex flex-col gap-y-10">
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>

        <Skeleton className="w-full h-[16rem] rounded-2xl" />
      </div>
    </Skeleton>
  );
};

export default PieChartSkeleton;
