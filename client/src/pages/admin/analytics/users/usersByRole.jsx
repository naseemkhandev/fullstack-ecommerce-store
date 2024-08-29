import { Label, Pie, PieChart, Legend } from "recharts";
import { TrendingDown, TrendingUp } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import PieChartSkeleton from "../../../../components/skeletons/admin/pieChartSkeleton";
import { useGetUsersByRoleQuery } from "../../../../store/api/userApiSlice";

const UsersByRole = () => {
  const { data: { users: usersByRole } = [], isLoading } =
    useGetUsersByRoleQuery();

  const admins = usersByRole?.filter((user) => user?.isAdmin)?.length;
  const users = usersByRole?.filter((user) => !user?.isAdmin)?.length;

  const chartData = [
    { role: "Admins", users: admins, fill: "hsl(var(--primary))" },
    { role: "Users", users: users, fill: "hsl(var(--secondary))" },
  ];

  return isLoading ? (
    <PieChartSkeleton />
  ) : (
    <Card className="border-none shadow-lg rounded-2xl shadow-black/5 flex flex-col">
      <CardHeader className="pb-0">
        <CardTitle>Users by Role</CardTitle>
        <CardDescription>
          Distribution of users based on their role
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pb-0">
        <ChartContainer config={{}} className="mx-auto aspect-square">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="users"
              nameKey="role"
              innerRadius={75}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {usersByRole?.length}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          users
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>

            <Legend
              verticalAlign="bottom"
              align="center"
              iconType="circle"
              wrapperStyle={{ marginBottom: 10 }}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          {users > admins ? (
            <TrendingUp className="size-5 text-green-500" />
          ) : (
            <TrendingDown className="size-5 text-red-500" />
          )}
          {admins > users ? "Admins" : "Users"} are more than{" "}
          {admins > users ? "Users" : "Admins"}
        </div>
        <div className="leading-none text-muted-foreground">
          Showing all users based on their role
        </div>
      </CardFooter>
    </Card>
  );
};

export default UsersByRole;
