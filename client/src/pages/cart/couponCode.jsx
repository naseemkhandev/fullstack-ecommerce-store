import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

const CouponCode = () => {
  return (
    <div className="space-y-4 rounded-lg border-gray-100 border bg-white p-4 sm:p-6">
      <form className="space-y-4">
        <div>
          <Label htmlFor="couponCode" className="text-gray-500 font-semibold">
            Do you have a coupon code?
          </Label>

          <Input
            type="text"
            id="couponCode"
            name="couponCode"
            placeholder="Enter your coupon code"
            className="w-full py-3.5 mt-2 rounded-lg"
          />
        </div>

        <Button className="w-full py-3.5">Apply Code</Button>
      </form>
    </div>
  );
};

export default CouponCode;
