import { getTranslations } from "next-intl/server";

import { gradientRenderer } from "@/utils/renderers";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { SvgIconDownload } from "@/components/icon/svg-icon-download";
import { SvgIconEye } from "@/components/icon/svg-icon-eye";

const renderers = { gradient: gradientRenderer } as const;

const HomePageCta = async () => {
  const t = await getTranslations();

  return (
    <Container size="md">
      <Card variant="solid">
        <CardContent spacing="lg" className="items-center gap-8">
          <div className="flex w-full flex-col gap-4 whitespace-pre-line">
            <Typography variant="h1" as="h2">
              {t.rich("cta.title", renderers)}
            </Typography>

            <Typography variant="small">{t("cta.description")}</Typography>
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
        </CardContent>
      </Card>
    </Container>
  );
};

export { HomePageCta };
