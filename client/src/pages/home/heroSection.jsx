import { ChevronsRight } from "lucide-react";
import { Button } from "../../components/ui/button";

const HeroSection = () => {
  return (
    <div className="h-[38rem] rounded-lg relative">
      <div className="w-1/2 h-full flex flex-col justify-center pl-24 gap-5 !z-[100]">
        <h3 className="text-lg font-semibold text-primary">
          Starting from $99.00
        </h3>

        <h2 className="text-6xl font-semibold text-gray-600">
          Orgainc & healthy vegetables
        </h2>

        <p className="text-lg text-gray-500 mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <Button className="w-fit py-3.5 !font-semibold" variant="default">
          Shop Now
          <ChevronsRight className="size-5 ml-2" />
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
