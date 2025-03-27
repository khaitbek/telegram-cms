import { mergeClassNames } from "../lib/utils/classnames";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={mergeClassNames(
        "bg-accent animate-pulse rounded-md",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
