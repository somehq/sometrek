import React from "react";

import { cn } from "@/lib/utils";

export default function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rounded bg-muted-dark/50 animate-pulse", className)}
      {...props}
    />
  );
}
