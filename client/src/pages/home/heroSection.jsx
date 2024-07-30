import { ChevronsRight } from "lucide-react";
import { Button } from "../../components/ui/button";

const HeroSection = () => {
  return (
    <div className="h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] xl:h-[38rem] rounded-lg relative cursor-pointer select-none">
      <div className="w-[80%] sm:w-2/3 xl:w-1/2 text-left h-full flex flex-col justify-center pl-5 sm:pl-8 md:pl-16 xl:pl-24 gap-3 sm:gap-5 !z-[100]">
        <h3 className="md:text-lg font-semibold text-primary">
          Starting from $99.00
        </h3>

        <h2 className="text-xl sm:text-3xl md:text-4xl xl:text-6xl font-semibold text-gray-600">
          Orgainc & healthy vegetables
        </h2>

        <p className="w-[80%] xl:w-full text-sm md:text-base lg:text-lg text-gray-500 md:mt-3 lg:mt-5 hidden sm:block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <p className="text-sm md:text-base lg:text-lg text-gray-500 sm:hidden">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam,
          cupiditate hic...
        </p>

        <Button
          className="w-fit px-3 sm:px-4 py-2.5 sm:py-3.5 !font-semibold sm:text-sm text-xs"
          variant="default"
        >
          Shop Now
          <ChevronsRight className="size-4 sm:size-5 ml-2" />
        </Button>
      </div>

      <img
        src="/images/home/hero.jpg"
        alt="banner"
        className="absolute top-0 left-0 bg-neutral-50 -z-[1] rounded-lg w-full h-full object-cover"
      />
    </div>
  );
};

export default HeroSection;
