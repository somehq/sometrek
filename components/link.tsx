import React from "react";

import NextLink from "next/link";

import { cn } from "@/lib/utils";

export interface LinkProps {
  className?: string;
  href: string | object;
  replace?: boolean;
  scroll?: boolean;
  prefetch?: boolean;
  children?: React.ReactNode;
}

export default function Link({
  className,
  href,
  replace = false,
  scroll = true,
  prefetch = true,
  ...props
}: LinkProps) {
  const isExternalLink = typeof href === "string" && !href.startsWith("/");

  return isExternalLink ? (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ) : (
    <NextLink
      className={cn("focus:outline-none focus-visible:outline-none", className)}
      href={href}
      replace={replace}
      scroll={scroll}
      prefetch={prefetch}
      {...props}
    />
  );
}
