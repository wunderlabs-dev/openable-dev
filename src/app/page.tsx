import { getTranslations } from "next-intl/server";

const Home = async () => {
  const t = await getTranslations();

  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">{t("metadata.title")}</h1>
    </main>
  );
};

export default Home;
