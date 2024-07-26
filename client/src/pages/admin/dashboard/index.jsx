import DashboardCard from "./dashboardCard";

const DashboardPage = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
      </div>
    </div>
  );
};

export default DashboardPage;
