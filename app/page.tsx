import Header from "@/components/sections/header";
import HomeCarousel from "@/components/groups/homeCarousel";
import ShowCardListComponent from "@/components/groups/showCaseCard";
import { handleBannerList } from "@/utils/helpers";

export default async function Home() {
  //getStaticProps
  const result = await handleBannerList();

  return (
    <main>
      <Header />
      <HomeCarousel bannerList={result} />
      <ShowCardListComponent />
    </main>
  );
}
