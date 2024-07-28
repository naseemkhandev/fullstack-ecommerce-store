import ProductsCategoryRatio from "./products/productsCategoryRatio";
import TotalRevenue from "./revenue/totalRevenue";
import TotalSales from "./totalSales/TotalSales";
import UsersByRole from "./users/usersByRole";

const AnalyticsPage = () => {
  return (
    <div className="flex flex-col gap-5 h-full pb-10 bg-neutral-50">
      <div className="mb-5">
        <h2 className="text-2xl font-semibold">Store Analytics</h2>
        <p className="text-gray-500 text-sm xl:text-base">
          View your store analytics here to make better decisions.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        <TotalRevenue />
        <TotalRevenue />
      </div>

      <TotalSales />

      <div className="grid lg:grid-cols-2 gap-5">
        <ProductsCategoryRatio />
        <ProductsCategoryRatio />
      </div>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
        <UsersByRole />
        <UsersByRole />
        <UsersByRole />
      </div>
    </div>
  );
};

export default AnalyticsPage;
