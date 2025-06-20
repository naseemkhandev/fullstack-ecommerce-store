import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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

const chartData = [
  { month: "January", revenue: 186, profit: 80 },
  { month: "February", revenue: 305, profit: 200 },
  { month: "March", revenue: 237, profit: 120 },
  { month: "April", revenue: 73, profit: 190 },
  { month: "May", revenue: 209, profit: 130 },
  { month: "June", revenue: 214, profit: 140 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--primary))",
  },
  profit: {
    label: "Profit",
    color: "hsl(var(--secondary))",
  },
};

const TotalRevenue = () => {
  return (
    <Card className="border-none flex h-full flex-col shadow-lg rounded-2xl shadow-black/5">
      <CardHeader>
        <CardTitle>Total Revenue</CardTitle>
        <CardDescription>
          Revenue and profit for the last 6 months
        </CardDescription>
      </CardHeader>

      <CardContent className="h-full flex-grow p-0 m-0 flex-center">
        <ChartContainer config={chartConfig} className="xl:h-[350px] w-[97%]">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
            <Bar dataKey="profit" fill="var(--color-profit)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
};

export default TotalRevenue;
