import type * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/helpers";

type NavProps = React.ComponentProps<"nav">;

const Nav = ({ className, ...props }: NavProps) => {
  return <nav data-slot="nav" className={cn("flex items-center gap-1", className)} {...props} />;
};

const navLinkVariants = cva(
  [
    "inline-flex items-center",
    "rounded-full px-4 py-3",
    "text-base font-normal leading-6",
    "cursor-pointer select-none",
    "transition-colors duration-150 ease-in-out",
  ],
  {
    variants: {
      variant: {
        default: "text-grey-50/90 hover:text-white",
        active: "text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type NavLinkProps = React.ComponentProps<typeof Link> & VariantProps<typeof navLinkVariants>;

const NavLink = ({ className, variant = "default", ...props }: NavLinkProps) => {
  return (
    <Link
      data-slot="nav-link"
      data-variant={variant}
      className={cn(navLinkVariants({ variant, className }))}
      {...props}
    />
  );
};

export { Nav, NavLink, navLinkVariants };
