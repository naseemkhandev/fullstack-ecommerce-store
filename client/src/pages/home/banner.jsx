import { ChevronsRight } from "lucide-react";
import { Button } from "../../components/ui/button";
import ShineEffect from "../../components/common/shineEffect";

const Banner = () => {
  return (
    <div className="h-60 sm:h-80 md:h-96 lg:h-[28rem] rounded-lg relative group overflow-hidden">
      <ShineEffect />

      <img
        src="/images/home/banner.jpg"
        alt="banner"
        className="absolute top-0 left-0 bg-neutral-50 -z-[1] rounded-lg w-full h-full object-cover"
      />

      <div className="w-[65%] sm:w-1/2 lg:w-[55%] xl:w-[45%] h-full flex flex-col justify-center pr-10 md:pr-16 xl:pr-24 gap-5 !z-[100] ml-auto text-right">
        <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-semibold text-gray-500">
          Fresh Fruits Healthy Products
        </h2>

        <h3 className="sm:text-lg md:text-2xl lg:text-3xl font-semibold text-primary">
          30% off sale <span className="text-gray-500"> Hurry up!!!</span>
        </h3>

        <Button
          className="w-fit ml-auto px-3 sm:px-4 py-2.5 sm:py-3.5 !font-semibold sm:text-sm text-xs"
          variant="default"
        >
          Shop Now
          <ChevronsRight className="size-4 sm:size-5 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default Banner;
