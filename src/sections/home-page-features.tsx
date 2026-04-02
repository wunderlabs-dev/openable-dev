import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { gradientRenderer } from "@/utils/renderers";

import bg2 from "@/static/images/bg-2@2x.png";
import bg3 from "@/static/images/bg-3@2x.png";
import bg5 from "@/static/images/bg-5@2x.png";
import bg6 from "@/static/images/bg-6@2x.png";

import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";

const renderers = { gradient: gradientRenderer } as const;

const HomePageFeatures = async () => {
  const t = await getTranslations();

  return (
    <Container id="features" size="lg">
      <div className="grid grid-cols-2 gap-16">
        <div className="flex flex-col gap-4">
          <Typography variant="h2" className="whitespace-pre-line">
            {t.rich("features.title", renderers)}
          </Typography>
          <Typography variant="small" color="muted">
            {t("features.description")}
          </Typography>
        </div>

        <div className="col-span-2 flex flex-col gap-8">
          <Card variant="solid" className="flex flex-col gap-8">
            <CardContent className="w-1/2">
              <Typography variant="h3">{t("features.creators.title")}</Typography>
              <Typography variant="small" color="muted">
                {t("features.creators.description")}
              </Typography>
            </CardContent>

            <Image
              src={bg6}
              alt={t("features.creators.title")}
              className="h-70 w-auto ml-auto object-cover select-none"
            />
          </Card>

          <div className="grid grid-cols-2 gap-8">
            <Card variant="solid" className="flex flex-col gap-8">
              <CardContent>
                <Typography variant="h3">{t("features.github.title")}</Typography>
                <Typography variant="small" color="muted">
                  {t("features.github.description")}
                </Typography>
              </CardContent>

              <Image
                src={bg5}
                alt={t("features.github.title")}
                className="h-70 w-auto mx-auto object-cover select-none"
              />
            </Card>

            <Card variant="solid" className="flex flex-col gap-8">
              <CardContent>
                <Typography variant="h3">{t("features.cursor.title")}</Typography>
                <Typography variant="small" color="muted">
                  {t("features.cursor.description")}
                </Typography>
              </CardContent>

              <Image
                src={bg3}
                alt={t("features.cursor.title")}
                className="h-70 w-auto mx-auto object-cover select-none"
              />
            </Card>
          </div>

          <Card variant="solid" className="flex flex-col gap-8">
            <CardContent className="w-1/2">
              <Typography variant="h3">{t("features.setup.title")}</Typography>
              <Typography variant="small" color="muted">
                {t("features.setup.description")}
              </Typography>
            </CardContent>

            <Image
              src={bg2}
              alt={t("features.setup.title")}
              className="h-70 w-auto mx-auto object-cover select-none"
            />
          </Card>
        </div>
      </div>
    </Container>
  );
};

export { HomePageFeatures };
