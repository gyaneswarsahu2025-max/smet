import BannerSlider from "../userComponents/BannerSlider";
import SmartPowerHero from "../userComponents/SmartPowerHero";
import AboutSection from "../userComponents/AboutSection";
import CategoryShowcase from "../userComponents/CategoryShowcase";
import FeaturedProducts from "../userComponents/FeaturedProducts";
import HomeEnhancements from "../userComponents/HomeEnhancements";
import ClientsSection from "../userComponents/ClientsSection";

export default function HomePage() {
  return (
    <>
      <BannerSlider />
    
      <AboutSection />
      <CategoryShowcase />
      <FeaturedProducts />
      {/* <HomeEnhancements /> */}
        <SmartPowerHero />
      <ClientsSection />
    </>
  );
}
