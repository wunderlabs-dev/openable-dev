import { getTranslations } from "next-intl/server";

import { gradientRenderer } from "@/utils/renderers";

import { SvgIconBrowser } from "@/components/icon/svg-icon-browser";

import { HomePageSignupForm } from "@/components/home-page-signup-form";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";

const renderers = { gradient: gradientRenderer } as const;

const HomePageCta = async () => {
  const t = await getTranslations();

  return (
    <div className="flex flex-col items-center">
      <SvgIconBrowser className="hidden -mt-12 -mb-72 h-200 lg:block" />

      <Container size="md">
        <Card variant="solid" spacing="lg">
          <CardContent className="items-center gap-8">
            <div className="flex w-full flex-col gap-4 whitespace-pre-line">
              <Typography variant="h1" as="h2">
                {t.rich("cta.title", renderers)}
              </Typography>

              <Typography variant="small">{t("cta.description")}</Typography>
            </div>

            <HomePageSignupForm />
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export { HomePageCta };
