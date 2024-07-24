import ProductsCategoryRatio from "./products/productsCategoryRatio";
import TotalRevenue from "./revenue/totalRevenue";
import TotalSales from "./totalSales/TotalSales";
import UsersByRole from "./users/usersByRole";

const AnalyticsPage = () => {
  return (
    <div className="flex flex-col gap-5 h-full">
      <div className="grid grid-cols-2 gap-5">
        <TotalRevenue />
        <TotalRevenue />
      </div>

      <TotalSales />

      <div className="grid grid-cols-2 gap-5">
        <ProductsCategoryRatio />
        <ProductsCategoryRatio />
      </div>
      <div className="grid grid-cols-3 gap-5">
        <UsersByRole />
        <UsersByRole />
        <UsersByRole />
      </div>
    </div>
  );
};

export default AnalyticsPage;
