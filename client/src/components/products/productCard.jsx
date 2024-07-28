import { Button } from "@/components/ui/button";

const ProductCard = () => {
  return (
    <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="p-2">
        <img
          src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
          className="h-80 w-full rounded-xl object-cover"
        />
      </div>

      <div className="p-3 flex flex-col gap-3">
        <div className="mb-2 flex items-center justify-between">
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            Apple AirPods
          </p>
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            $95.00
          </p>
        </div>
        <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </p>

        <Button
          variant="outline"
          className="w-full py-4"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
