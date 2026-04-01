import type { Transition, Variants } from "motion/react";

const accordionTransition: Transition = {
  duration: 0.2,
  ease: "easeInOut",
};

const accordionVariants: Variants = {
  initial: { height: 0, opacity: 0 },
  animate: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
};

export { accordionTransition, accordionVariants };
