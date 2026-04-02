"use client";

import { createContext, use, type ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/helpers";

type CardSpacing = "none" | "sm" | "md" | "lg";

type CardContextValue = {
  variant: "solid" | "glass" | null;
  spacing: CardSpacing;
};

const CardContext = createContext<CardContextValue>({ variant: "solid", spacing: "md" });

const cardVariants = cva(
  "relative overflow-hidden rounded-3xl after:pointer-events-none after:absolute after:inset-0 after:rounded-3xl after:shadow-card-inset",
  {
    variants: {
      variant: {
        solid: "bg-grey-900",
        glass: "backdrop-blur-2xl bg-grey-50/10",
      },
    },
    defaultVariants: {
      variant: "solid",
    },
  },
);

const cardContentVariants = cva("flex flex-col gap-2", {
  variants: {
    spacing: {
      none: "p-0",
      sm: "p-3",
      md: "p-8",
      lg: "p-12",
    },
  },
  defaultVariants: {
    spacing: "md",
  },
});

type CardProps = ComponentProps<"div"> &
  VariantProps<typeof cardVariants> & {
    spacing?: CardSpacing;
  };

type CardContentProps = ComponentProps<"div"> & VariantProps<typeof cardContentVariants>;

const Card = ({ variant = "solid", spacing = "md", className, children, ...props }: CardProps) => {
  return (
    <CardContext value={{ variant, spacing }}>
      <div data-slot="card" className={cn(cardVariants({ variant, className }))} {...props}>
        {children}
      </div>
    </CardContext>
  );
};

const CardContent = ({ spacing, className, children, ...props }: CardContentProps) => {
  const context = use(CardContext);
  const resolvedSpacing = spacing ?? context.spacing;

  return (
    <div
      data-slot="card-content"
      className={cn(cardContentVariants({ spacing: resolvedSpacing, className }))}
      {...props}
    >
      {children}
    </div>
  );
};

export { Card, CardContent, cardVariants, cardContentVariants };
