"use client";

import { useForm } from "@formspree/react";
import { useTranslations } from "next-intl";

import { cn } from "@/utils/helpers";

import { Button, type ButtonVariant } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";

type SignupFormProps = {
  variant?: ButtonVariant;
};

const FORMSPREE_ID = "xykbdweo";

const HomePageSignupForm = ({ variant = "primary" }: SignupFormProps) => {
  const t = useTranslations();
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  if (state.succeeded) {
    return <Typography variant="small">{t("signup.success")}</Typography>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex w-full max-w-md flex-col gap-3 self-start sm:flex-row sm:items-center",
        variant === "primary" && "mx-auto",
      )}
    >
      <Input type="email" name="email" required placeholder={t("signup.emailPlaceholder")} />

      <Button
        type="submit"
        variant={variant}
        className="justify-center sm:justify-start"
        disabled={state.submitting}
      >
        {t("signup.submit")}
      </Button>
    </form>
  );
};

export { HomePageSignupForm };
