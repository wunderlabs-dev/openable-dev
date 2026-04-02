import "@/static/css/globals.css";

import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";

import { HomePageAppBar } from "@/components/home-page-app-bar";
import { HomePageFooter } from "@/components/home-page-footer";

const SITE_URL = "https://openable.dev";

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations();

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: SITE_URL,
      siteName: t("metadata.title"),
      title: t("metadata.ogTitle"),
      description: t("metadata.ogDescription"),
    },
    twitter: {
      card: "summary_large_image",
      title: t("metadata.twitterTitle"),
      description: t("metadata.twitterDescription"),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className="scroll-smooth bg-grey-900 text-white selection:bg-amber-500 selection:text-white"
    >
      <body className="bg-linear-to-b from-grey-800 to-grey-900 antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <HomePageAppBar />
          <main className="flex flex-col gap-24 overflow-hidden pt-32 lg:gap-48 lg:pt-48">
            {children}
          </main>
          <HomePageFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
