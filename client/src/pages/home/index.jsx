import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../styles/carouselStyles.css";

import Banner from "./banner";
import Deals from "./deals";
import HeroSection from "./heroSection";
import NewArrivals from "./newArrivals";
import Services from "./services";
import Categories from "./categories";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-20">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        swipeable
        emulateTouch
      >
        <HeroSection />
        <HeroSection />
      </Carousel>

      <Categories />

      <Deals />
      <Banner />
      <NewArrivals />
      <Services />
    </div>
  );
};

export default HomePage;
