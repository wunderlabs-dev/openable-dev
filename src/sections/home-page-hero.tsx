import { getTranslations } from "next-intl/server";

import productPosterSrc from "@/static/images/product-poster@2x.png";

import { gradientRenderer, mutedRenderer } from "@/utils/renderers";

import { HeroVideo } from "@/components/hero-video";

import { SvgIconCursor } from "@/components/icon/svg-icon-cursor";
import { SvgIconGear } from "@/components/icon/svg-icon-gear";
import { SvgIconGlitters } from "@/components/icon/svg-icon-glitters";

import { HomePageSignupForm } from "@/components/home-page-signup-form";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { LavaBlob } from "@/components/ui/lava-blob";
import { Typography } from "@/components/ui/typography";

const renderers = {
  gradient: gradientRenderer,
  muted: mutedRenderer,
} as const;

const features = [
  {
    icon: SvgIconGear,
    titleKey: "hero.features.zero.title",
    descKey: "hero.features.zero.description",
  },
  {
    icon: SvgIconCursor,
    titleKey: "hero.features.cursor.title",
    descKey: "hero.features.cursor.description",
  },
  {
    icon: SvgIconGlitters,
    titleKey: "hero.features.ai.title",
    descKey: "hero.features.ai.description",
  },
] as const;

const HomePageHero = async () => {
  const t = await getTranslations();

  return (
    <div id="overview" className="relative flex flex-col items-center gap-16">
      <LavaBlob />

      <Container size="sm" className="px-12 lg:px-4">
        <div className="flex flex-col gap-2">
          <Typography variant="small" fontWeight="semibold">
            {t.rich("hero.brand", renderers)}
          </Typography>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Typography variant="h1">{t.rich("hero.title", renderers)}</Typography>
              <Typography variant="small">{t("hero.description")}</Typography>
              <Typography variant="small" color="muted">
                {t("hero.beta")}
              </Typography>
            </div>

            <HomePageSignupForm variant="secondary" />
          </div>
        </div>
      </Container>

      <Container size="lg">
        <Card variant="glass" spacing="sm" className="w-full overflow-hidden">
          <CardContent>
            <HeroVideo
              webmSrc="https://cdn.openable.dev/videos/openable.webm"
              mp4Src="https://cdn.openable.dev/videos/openable.mp4"
              poster={productPosterSrc.src}
            />
          </CardContent>
        </Card>
      </Container>

      <Container size="md">
        <div className="flex flex-col gap-6 sm:flex-row">
          {features.map((feature) => (
            <div key={feature.titleKey} className="flex flex-1 flex-col gap-4">
              <feature.icon className="size-8 text-white" />
              <div className="flex flex-col gap-1">
                <Typography variant="small" fontWeight="semibold">
                  {t(feature.titleKey)}
                </Typography>
                <Typography variant="overline" color="muted">
                  {t(feature.descKey)}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export { HomePageHero };
