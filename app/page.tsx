import Header from "@/components/sections/header";
import HomeCarousel from "@/components/groups/homeCarousel";
import ShowCardListComponent from "@/components/groups/showCaseCard";
import { handleBannerList } from "@/utils/helpers";
import JoinCommunityComponent from "@/components/groups/joinCommunity";
import Footer from "@/components/sections/footer";
import SalesDayComponent from "@/components/groups/salesDay";
import YoungFavouriteComponent from "@/components/groups/youngFavourite";

export default async function Home() {
  //getStaticProps
  const result = await handleBannerList();

  return (
    <main>
      <Header />
      <HomeCarousel bannerList={result} />
      <ShowCardListComponent />
      <SalesDayComponent />
      <YoungFavouriteComponent />
      <JoinCommunityComponent />
      <Footer />
    </main>
  );
}
