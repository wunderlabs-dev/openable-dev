import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/helpers";

const typographyVariants = cva([], {
  variants: {
    variant: {
      h2: "text-4xl font-semibold leading-none",
      h3: "text-5xl font-extrabold leading-none",
      h4: "text-base font-semibold leading-normal lg:text-xl",
      h5: "text-3xl font-semibold leading-none",
      small: "text-base font-normal leading-6 text-pretty",
      overline: "text-sm font-normal leading-5 text-pretty",
    },
    fontWeight: {
      default: [],
      semibold: "font-semibold",
      bold: "font-bold",
    },
    color: {
      default: "text-white",
      neutral: "text-grey-100",
      muted: "text-grey-100",
      accent: "text-amber-500",
      inherit: "text-inherit",
    },
    leading: {
      default: [],
      none: "leading-none",
      normal: "leading-normal",
    },
  },
  defaultVariants: {
    variant: "small",
    fontWeight: "default",
    color: "default",
    leading: "default",
  },
});

type VariantElementMap = {
  h2: "h2";
  h3: "h3";
  h4: "h4";
  h5: "h5";
  small: "p";
  overline: "span";
};

type Variant = keyof VariantElementMap;

type TypographyProps<V extends Variant = "small"> = React.ComponentProps<VariantElementMap[V]> &
  VariantProps<typeof typographyVariants> & {
    variant?: V;
    as?: React.ElementType;
  };

const defaultElements: VariantElementMap = {
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  small: "p",
  overline: "span",
};

const Typography = <V extends Variant = "small">({
  variant = "small" as V,
  fontWeight = "default",
  color = "default",
  leading = "default",
  as,
  className,
  ...props
}: TypographyProps<V>) => {
  const Component = as || defaultElements[variant];

  return (
    <Component
      data-slot="typography"
      data-variant={variant}
      className={cn(typographyVariants({ variant, fontWeight, color, leading, className }))}
      {...props}
    />
  );
};

export { Typography, typographyVariants, type Variant as TypographyVariant };
