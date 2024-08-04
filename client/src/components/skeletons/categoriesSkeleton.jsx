import { Fragment } from "react";

import { Skeleton } from "@/components/ui/skeleton";

const CategoriesSkeleton = () => {
  return (
    <Fragment>
      {[...Array(10)].map((_, i) => (
        <Skeleton
          key={i}
          className="min-w-40 md:min-w-44 rounded-md h-36 md:h-40 flex-center flex-col items-start gap-2 p-3"
        >
          <Skeleton className="w-full h-24 rounded-md" />
          <Skeleton className="w-24 h-3" />
          <Skeleton className="w-16 h-3" />
        </Skeleton>
      ))}
    </Fragment>
  );
};

export default CategoriesSkeleton;
