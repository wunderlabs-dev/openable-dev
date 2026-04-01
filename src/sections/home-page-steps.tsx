import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";

import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";

const renderers = {
  gradient: (chunks: ReactNode) => (
    <span className="bg-linear-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
      {chunks}
    </span>
  ),
} as const;

const stepKeys = [
  "steps.items.import",
  "steps.items.setup",
  "steps.items.run",
  "steps.items.edit",
] as const;

const HomePageSteps = async () => {
  const t = await getTranslations();

  return (
    <Container size="lg">
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

        <div className="grid grid-cols-2">
          <div />
          <div className="flex flex-col gap-16">
            {stepKeys.map((key, index) => (
              <div key={key} className={`flex flex-col gap-6 ${index > 0 ? "opacity-25" : ""}`}>
                <div className="flex flex-col">
                  <Typography variant="small" fontWeight="semibold">
                    {String(index + 1).padStart(2, "0")}
                  </Typography>
                  <Typography variant="h3">{t(`${key}.title`)}</Typography>
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
