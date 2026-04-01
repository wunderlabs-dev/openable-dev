"use client";

import type { ComponentProps } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { cn } from "@/utils/helpers";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Nav, NavLink } from "@/components/ui/nav";
import { SvgIconDownload } from "@/components/icon/svg-icon-download";
import { SvgIconOpenableSymbol } from "@/components/icon/svg-icon-openable-symbol";

type AppBarProps = ComponentProps<"header">;

const links = [
  { href: "/#overview", labelKey: "appBar.overview" },
  { href: "/#features", labelKey: "appBar.features" },
  { href: "/#how-it-works", labelKey: "appBar.howItWorks" },
  { href: "/docs", labelKey: "appBar.docs" },
] as const;

const AppBar = ({ className, ...props }: AppBarProps) => {
  const t = useTranslations();

  return (
    <header data-slot="app-bar" className={cn("sticky top-4 z-50", className)} {...props}>
      <Container className="flex max-w-3xl items-center gap-3">
        <Link
          href="/"
          className="flex h-14 px-6 items-center justify-center rounded-full bg-grey-50/10 shadow-card-inset backdrop-blur-2xl"
        >
          <SvgIconOpenableSymbol size="auto" className="h-5" />
        </Link>

        <div className="flex items-center gap-12 rounded-full bg-grey-50/10 p-1 shadow-card-inset backdrop-blur-2xl">
          <Nav>
            {links.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {t(link.labelKey)}
              </NavLink>
            ))}
          </Nav>

          <Button variant="primary">
            <SvgIconDownload size="md" />
            {t("appBar.download")}
          </Button>
        </div>
      </Container>
    </header>
  );
};

export { AppBar };
