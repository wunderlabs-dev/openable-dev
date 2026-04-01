import type { Transition } from "motion/react";

const accordionTransition: Transition = {
  duration: 0.25,
  ease: [0.16, 1, 0.3, 1],
};

const accordionVariants = {
  initial: { height: 0, opacity: 0 },
  animate: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
};

const lavaBlobPrimaryAnimate = {
  x: [0, 120, -80, 40, 0],
  y: [0, -100, 60, -40, 0],
  scale: [1, 1.3, 0.8, 1.15, 1],
  rotate: [0, 25, -20, 10, 0],
};

const lavaBlobPrimaryTransition: Transition = {
  duration: 10,
  repeat: Infinity,
  ease: "easeInOut",
};

const lavaBlobSecondaryAnimate = {
  x: [0, -100, 80, -60, 0],
  y: [0, 80, -70, 50, 0],
  scale: [1, 0.8, 1.3, 0.9, 1],
  rotate: [0, -20, 15, -25, 0],
};

const lavaBlobSecondaryTransition: Transition = {
  duration: 13,
  repeat: Infinity,
  ease: "easeInOut",
};

export {
  accordionTransition,
  accordionVariants,
  lavaBlobPrimaryAnimate,
  lavaBlobPrimaryTransition,
  lavaBlobSecondaryAnimate,
  lavaBlobSecondaryTransition,
};
