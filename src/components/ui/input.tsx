import type { ComponentProps } from "react";

import { cn } from "@/utils/helpers";

type InputProps = ComponentProps<"input">;

const Input = ({ className, type = "text", ...props }: InputProps) => {
  return (
    <input
      data-slot="input"
      type={type}
      className={cn(
        "flex h-12 w-full px-5 py-3",
        "rounded-full border border-grey-50/20 bg-grey-50/10",
        "text-base text-white placeholder:text-grey-400",
        "outline-none transition-all duration-200",
        "focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30",
        "disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
};

export { Input };
