import React from "react";

import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = React.forwardRef<HTMLTextAreaElement, InputProps>(
  ({ className, disabled, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          disabled && "opacity-50 pointer-events-none",
          "w-full text-xs px-4 py-2 rounded border border-muted focus-visible:border-muted-dark/80 transition-colors resize-none focus:outline-none focus-visible:outline-none",
          className
        )}
        rows={4}
        {...props}
      />
    );
  }
);

TextArea.displayName = "someinput";

export default TextArea;