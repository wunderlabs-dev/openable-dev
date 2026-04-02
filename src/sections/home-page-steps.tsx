"use client";

import { useRef, useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { useEventListener } from "usehooks-ts";

import { cn } from "@/utils/helpers";
import { gradientRenderer } from "@/utils/renderers";

import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { SvgIconSteps } from "@/components/icon/svg-icon-steps";

const renderers = { gradient: gradientRenderer } as const;

const STEP_INDEX_INITIAL = -1;
const STEP_ACTIVATION_OFFSET = 0.5;

const stepKeys = [
  { key: "steps.items.import", step: "01" },
  { key: "steps.items.setup", step: "02" },
  { key: "steps.items.run", step: "03" },
  { key: "steps.items.edit", step: "04" },
] as const;

const HomePageSteps = () => {
  const t = useTranslations();
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [activeStep, setActiveStep] = useState(STEP_INDEX_INITIAL);

  const handleScroll = useCallback(() => {
    const viewportHalf = window.innerHeight * STEP_ACTIVATION_OFFSET;

    const latest = stepsRef.current.reduce((accumulator, element, index) => {
      if (element && element.getBoundingClientRect().top <= viewportHalf) {
        return index;
      }
      return accumulator;
    }, STEP_INDEX_INITIAL);

    setActiveStep(latest);
  }, []);

  const setStepRef = useCallback(
    (index: number) => (element: HTMLDivElement | null) => {
      stepsRef.current[index] = element;
    },
    [],
  );

  useEventListener("scroll", handleScroll);

  return (
    <Container id="how-it-works" size="lg">
      <div className="flex flex-col gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <Typography variant="h2" className="whitespace-pre-line">
              {t.rich("steps.title", renderers)}
            </Typography>
            <Typography variant="small" color="muted">
              {t("steps.description")}
            </Typography>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="relative hidden lg:block">
            <SvgIconSteps active={activeStep} className="absolute right-0 h-full w-auto" />
          </div>

          <div className="flex flex-col gap-16">
            {stepKeys.map(({ key, step }, index) => (
              <div
                key={key}
                ref={setStepRef(index)}
                className={cn(
                  "flex flex-col gap-6 transition-opacity duration-300",
                  index <= activeStep ? "opacity-100" : "opacity-25",
                )}
              >
                <div className="flex flex-col">
                  <Typography variant="small" fontWeight="semibold">
                    {step}
                  </Typography>
                  <Typography variant="h1" as="h3">
                    {t(`${key}.title`)}
                  </Typography>
                </div>
                <Typography variant="small" color="muted">
                  {t(`${key}.description`)}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export { HomePageSteps };
