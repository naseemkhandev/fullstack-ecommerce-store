import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../styles/carouselStyles.css";

import Banner from "./banner";
import Deals from "./deals";
import HeroSection from "./heroSection";
import NewArrivals from "./newArrivals";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-24">
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

      <Deals />
      <Banner />
      <NewArrivals />
    </div>
  );
};

export default HomePage;
