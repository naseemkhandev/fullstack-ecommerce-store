import { ChevronsRight } from "lucide-react";
import { Button } from "../../components/ui/button";

const Banner = () => {
  return (
    <div className="h-[28rem] rounded-lg relative">
      <img
        src="/images/home/banner.jpg"
        alt="banner"
        className="absolute top-0 left-0 bg-neutral-50 -z-[1] rounded-lg w-full h-full object-cover"
      />

      <div className="w-[45%] h-full flex flex-col justify-center pr-24 gap-5 !z-[100] ml-auto text-right">
        <h2 className="text-6xl leading-tight font-semibold text-gray-500">
          Fresh Fruits Healthy Products
        </h2>

        <h3 className="text-3xl font-semibold text-primary">
          30% off sale <span className="text-gray-500"> Hurry up!!!</span>
        </h3>

        {/* <p className="text-lg text-gray-500 mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p> */}

        <Button
          className="w-fit ml-auto py-3.5 !font-semibold"
          variant="default"
        >
          Shop Now
          <ChevronsRight className="size-5 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default Banner;
