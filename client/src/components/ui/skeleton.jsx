import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn(
        "animate-skeleton rounded-md bg-muted-foreground/20",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
