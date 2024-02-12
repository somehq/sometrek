"use client";

import React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  before?: React.ReactNode;
  after?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, disabled, before, after, ...props }, ref) => {
    const Element = ({
      className,
      children,
      ...props
    }: {
      className?: string;
      children?: React.ReactNode | string;
    }) => {
      const isNode = React.isValidElement(children);
      const Tag = isNode ? "div" : "p";
      return (
        <Tag
          className={cn(
            !isNode && "text-xs text-secondary-light",
            "px-4",
            className
          )}
          {...props}
        >
          {children}
        </Tag>
      );
    };

    return (
      <div
        className={cn(
          disabled && "opacity-80 pointer-events-none",
          "relative w-full inline-flex items-center py-2 rounded border border-muted focus-within:border-muted-dark/80",
          className
        )}
      >
        {before && (
          <Element className="border-r border-muted">{before}</Element>
        )}
        <input
          ref={ref}
          className={cn(
            disabled && "opacity-50",
            "w-full text-xs px-4 bg-transparent focus:outline-none focus-visible:outline-none"
          )}
          disabled={disabled}
          {...props}
        />
        {after && <Element>{after}</Element>}
      </div>
    );
  }
);

Input.displayName = "someinput";

export default Input;
