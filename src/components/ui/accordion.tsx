"use client";

import type { ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useBoolean } from "usehooks-ts";
import { PlusIcon, MinusIcon } from "lucide-react";

import { cn } from "@/utils/helpers";
import { accordionTransition, accordionVariants } from "@/utils/animations";

type AccordionProps = React.ComponentProps<"div">;

const Accordion = ({ className, children, ...props }: AccordionProps) => {
  return (
    <div data-slot="accordion" className={cn("flex w-full flex-col", className)} {...props}>
      {children}
    </div>
  );
};

type AccordionItemProps = {
  children: (isOpen: boolean, toggle: () => void) => ReactNode;
  className?: string;
};

const AccordionItem = ({ className, children }: AccordionItemProps) => {
  const { value, toggle } = useBoolean();

  return (
    <div
      data-slot="accordion-item"
      className={cn(
        "flex flex-col gap-4 border-b border-grey-50/30 px-6 py-3 first:border-t",
        className,
      )}
    >
      {children(value, toggle)}
    </div>
  );
};

type AccordionTriggerProps = {
  children: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
};

const AccordionTrigger = ({ className, children, isOpen, onToggle }: AccordionTriggerProps) => {
  return (
    <button
      data-slot="accordion-trigger"
      type="button"
      onClick={onToggle}
      className={cn("flex w-full cursor-pointer items-center gap-12 text-left", className)}
    >
      <span className="flex-1 text-xl font-semibold leading-8 text-white">{children}</span>
      {isOpen ? (
        <MinusIcon className="size-4 shrink-0 text-white" />
      ) : (
        <PlusIcon className="size-4 shrink-0 text-white" />
      )}
    </button>
  );
};

type AccordionContentProps = {
  children: ReactNode;
  isOpen: boolean;
  className?: string;
};

const AccordionContent = ({ className, children, isOpen }: AccordionContentProps) => {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          data-slot="accordion-content"
          variants={accordionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={accordionTransition}
          className="overflow-hidden"
        >
          <div className={cn("text-sm leading-5 text-grey-100", className)}>{children}</div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
