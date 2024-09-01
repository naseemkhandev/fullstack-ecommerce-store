import DashboardCard from "./dashboardCard";
import SalesByCategories from "./salesByCategories";
import TotalRevenue from "./totalRevenue";

import {
  BriefcaseBusinessIcon,
  ChartNoAxesCombinedIcon,
  DollarSignIcon,
  UserRoundPlusIcon,
} from "lucide-react";
import OrdersRevenue from "./ordersRevenue";
import RecentSales from "./recentSales";
import TopProducts from "./topProducts";
import Transactions from "./transactions";
import WebsiteVisitors from "./websiteVisitors";

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-3 md:gap-4">
      <div className="grid lg:grid-cols-2 xl:grid-cols-3  gap-3 md:gap-4 overflow-hidden">
        <DashboardCard
          color={"#5356FF"}
          icon={<DollarSignIcon className="size-6" />}
          title="Total Revenue"
        />
        <DashboardCard
          color={"#EF4040"}
          icon={<ChartNoAxesCombinedIcon className="size-6" />}
          title="Total Sales"
        />
        <DashboardCard
          color={"#21C55D"}
          icon={<BriefcaseBusinessIcon className="size-6" />}
          title="product sold"
        />
        <DashboardCard
          color={"#A854F7"}
          icon={<UserRoundPlusIcon className="size-6" />}
          title="Total Customers"
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        <Transactions />
        <SalesByCategories />
      </div>

      <div className="flex flex-col lg:flex-row gap-3 md:gap-4">
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
