import { HomePageCta } from "@/sections/home-page-cta";
import { HomePageFaq } from "@/sections/home-page-faq";

const Home = async () => {
  return (
    <>
      <HomePageFaq />
      <HomePageCta />
    </>
  );
};

export default Home;
