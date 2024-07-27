import DashboardCard from "./dashboardCard";
import SalesByCategories from "./salesByCategories";
import TotalRevenue from "./totalRevenue";

import Transactions from "./transactions";
import RecentSales from "./recentSales";
import TopProducts from "./topProducts";
import OrdersRevenue from "./ordersRevenue";
import WebsiteVisitors from "./websiteVisitors";

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-3 md:gap-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
      </div>

      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        <Transactions />
        <SalesByCategories />
      </div>

      <div className="flex gap-3 md:gap-4">
        <div className="flex-[.5] w-full">
          <RecentSales />
        </div>
        <div className="flex-[1] w-full">
          <TotalRevenue />
        </div>
      </div>

      <div>
        <TopProducts />
      </div>

      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        <OrdersRevenue />
        <WebsiteVisitors />
      </div>
    </div>
  );
};

export default DashboardPage;
