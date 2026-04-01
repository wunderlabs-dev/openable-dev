import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SvgIconDownload } from "@/components/icon/svg-icon-download";
import { SvgIconEye } from "@/components/icon/svg-icon-eye";

const renderers = {
  gradient: (chunks: ReactNode) => (
    <span className="bg-linear-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
      {chunks}
    </span>
  ),
} as const;

const HomePageCta = async () => {
  const t = await getTranslations();

  return (
    <Container size="lg">
      <Card variant="solid" spacing="lg">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-5xl font-extrabold leading-none">
              {t.rich("cta.title", renderers)}
            </h2>

            <p className="text-base leading-6">{t("cta.description")}</p>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="primary">
              <SvgIconDownload size="md" />
              {t("cta.download")}
            </Button>

            <Button variant="secondary">
              <SvgIconEye size="md" />
              {t("cta.docs")}
            </Button>
          </div>
        </div>
      </Card>
    </Container>
  );
};

export { HomePageCta };
