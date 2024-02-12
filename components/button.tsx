"use client";

import React from "react";

import Icon, { icons } from "@/components/icon";
import Link from "@/components/link";

import { cn } from "@/lib/utils";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "lg";
  type?: "primary" | "secondary" | "outline";
  icon?: icons;
  href?: string;
  reverse?: boolean;
  disabled?: boolean;
  loading?: boolean;
  ref?: any;
  as?: keyof JSX.IntrinsicElements;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      as,
      className,
      size = "sm",
      type = "primary",
      icon,
      href,
      reverse = false,
      disabled = false,
      loading = false,
      tabIndex,
      role,
      children,
      ...props
    }: ButtonProps,
    ref
  ) => {
    const sizes = {
      sm: cn(children ? "px-4" : "px-2", "text-xs"),
      lg: cn(children ? "px-4" : "px-2", "text-sm"),
    };

    const types = {
      primary:
        "text-accent-contrast bg-accent hover:bg-accent-dark border-transparent",
      secondary:
        "text-secondary hover:text-secondary-dark bg-primary-dark hover:bg-muted border-transparent",
      outline:
        "text-secondary hover:text-secondary-dark bg-transparent border border-muted",
    };

    const classes = cn(
      sizes[size],
      types[type],
      reverse && "flex-row-reverse",
      (disabled || loading) && "opacity-50 pointer-events-none",
      "inline-flex items-center justify-center font-medium py-2 rounded border transition-colors truncate focus:outline-none focus-visible:outline-none",
      className
    );

    const CustomTag = ({ ...props }) => {
      const Tag = as as keyof JSX.IntrinsicElements;
      return <Tag {...props} />;
    };

    const content = (
      <>
        {loading ? (
          <Icon
            className={cn(
              children && (reverse ? "ml-4" : "mr-4"),
              "w-4 h-4 text-inherit animate-spin"
            )}
            name={icon || "spinner"}
          />
        ) : (
          icon && (
            <Icon
              className={cn(children && (reverse ? "ml-4" : "mr-4"), "w-4 h-4 text-inherit")}
              name={icon}
            />
          )
        )}
        {children && <span className="truncate">{children}</span>}
      </>
    );

    return href ? (
      <Link className={classes} href={href} {...props}>
        {content}
      </Link>
    ) : as ? (
      <CustomTag className={classes} {...props}>
        {content}
      </CustomTag>
    ) : (
      <button
        ref={ref}
        className={classes}
        disabled={loading || (disabled && true)}
        role={role}
        tabIndex={tabIndex}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "somebutton";

export default Button;
