"use client";

import { useRef, useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { useEventListener } from "usehooks-ts";

import { cn } from "@/utils/helpers";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { SvgIconSteps } from "@/components/icon/svg-icon-steps";
import { gradientRenderer } from "@/utils/renderers";

const renderers = { gradient: gradientRenderer } as const;

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
  const [activeStep, setActiveStep] = useState(-1);

  const handleScroll = useCallback(() => {
    const viewportMiddle = window.innerHeight * STEP_ACTIVATION_OFFSET;
    let latest = -1;

    stepsRef.current.forEach((el, index) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top <= viewportMiddle) {
        latest = index;
      }
    });

    setActiveStep(latest);
  }, []);

  useEventListener("scroll", handleScroll);

  return (
    <Container id="how-it-works" size="lg">
      <div className="flex flex-col gap-16">
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-4">
            <Typography variant="h2" className="whitespace-pre-line">
              {t.rich("steps.title", renderers)}
            </Typography>
            <Typography variant="small" color="muted">
              {t("steps.description")}
            </Typography>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-24">
          <div className="col-span-1 relative">
            <SvgIconSteps active={activeStep} className="absolute right-0 h-full w-auto" />
          </div>

          <div className="col-span-1 flex flex-col gap-16">
            {stepKeys.map(({ key, step }, index) => (
              <div
                key={key}
                ref={(el) => {
                  stepsRef.current[index] = el;
                }}
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
