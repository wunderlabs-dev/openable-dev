"use client";

import { useTranslations } from "next-intl";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SvgIconEye } from "@/components/icon/svg-icon-eye";

const faqKeys = [
  "faq.items.code",
  "faq.items.import",
  "faq.items.platforms",
  "faq.items.builtForMe",
  "faq.items.free",
] as const;

const HomePageFaq = () => {
  const t = useTranslations();

  return (
    <Container size="md">
      <div className="flex flex-col items-center gap-12">
        <div className="flex w-full flex-col gap-4">
          <h2 className="bg-linear-to-r from-amber-200 to-amber-500 bg-clip-text text-4xl font-semibold leading-10 text-transparent">
            {t("faq.title")}
          </h2>
          <p className="text-base leading-6 text-grey-100">{t("faq.subtitle")}</p>
        </div>

        <Accordion className="w-full">
          {faqKeys.map((key) => (
            <AccordionItem key={key}>
              {(isOpen, toggle) => (
                <>
                  <AccordionTrigger isOpen={isOpen} onToggle={toggle}>
                    {t(`${key}.question`)}
                  </AccordionTrigger>
                  <AccordionContent isOpen={isOpen}>{t(`${key}.answer`)}</AccordionContent>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>

        <Button variant="secondary">
          <SvgIconEye size="md" />
          {t("faq.docs")}
        </Button>
      </div>
    </Container>
  );
};

export { HomePageFaq };
