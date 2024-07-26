import DashboardCard from "./dashboardCard";
import SalesByCategories from "./salesByCategories";
import TotalRevenue from "./totalRevenue";

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-3 md:gap-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
      </div>

      <div className="flex gap-3 md:gap-4">
        <div className="flex-[.5] w-full">
          <SalesByCategories />
        </div>
        <div className="flex-[1] w-full">
          <TotalRevenue />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
