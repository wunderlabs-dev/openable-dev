import "@/static/css/globals.css";

import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";

import { AppBar } from "@/components/ui/app-bar";
import { Footer } from "@/components/ui/footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations();

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
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
    <html lang={locale} className={cn("bg-grey-900 text-white", "font-sans", geist.variable)}>
      <body className="bg-linear-to-r from-grey-800 to-grey-900 antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AppBar />
          <main className="flex flex-col gap-48">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
