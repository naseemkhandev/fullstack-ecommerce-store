import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

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
  { category: "Mobiles", sales: 1, fill: "#00A9FF" },
  { category: "Laptops", sales: 2, fill: "#FEC7B4" },
  { category: "Desktops", sales: 3, fill: "#95D2B3" },
  { category: "Tablets", sales: 4, fill: "#68D2E8" },
  { category: "Watches", sales: 5, fill: "#FFBB70" },
  { category: "Accessories", sales: 6, fill: "#FA7070" },
];

const SalesByCategories = () => {
  return (
    <Card className="border-none shadow-lg rounded-2xl p-0 shadow-black/5 flex flex-col h-full bg-white">
      <CardHeader className="pb-0">
        <CardTitle>Sales by Categories</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 p-0">
        <ChartContainer config={{}} className="mx-auto aspect-square !p-0 !m-0">
          <PieChart className="!p-0 !m-0">
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="sales"
              nameKey="category"
              innerRadius={100}
              strokeWidth={5}
            ></Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total sales for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
};

export default SalesByCategories;
