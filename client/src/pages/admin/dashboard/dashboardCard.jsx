import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, TrendingUp } from "lucide-react";

import { Area, AreaChart } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", mobile: 80 },
  { month: "February", mobile: 200 },
  { month: "March", mobile: 120 },
  { month: "April", mobile: 190 },
  { month: "May", mobile: 130 },
  { month: "June", mobile: 140 },
];

const chartConfig = {
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
};

const DashboardCard = () => {
  return (
    <div>
      <Card
        x-chunk="dashboard-01-chunk-0"
        className="rounded-xl border-none shadow-md shadow-black/5 h-40 overflow-hidden"
      >
        <CardContent className="p-3 pb-0 flex items-center gap-3">
          <div className="bg-orange-500 w-12 aspect-square text-white flex-center rounded-full">
            <DollarSign className="size-6" />
          </div>

          <div>
            <p className="text-xs text-muted-foreground">Total Revenue</p>
            <div className="text-xl font-bold">$45,231.89</div>
          </div>

          <div className="ml-auto flex-center gap-1">
            <TrendingUp className="size-5 text-green-500" />
            <p className="text-sm font-semibold">+12.5%</p>
          </div>
        </CardContent>

        <CardContent className="p-0 pt-2">
          <ChartContainer config={chartConfig}>
            <AreaChart
              accessibilityLayer
              height={50}
              data={chartData}
              margin={{
                top: 5,
              }}
            >
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <defs>
                <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="1%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="70%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>

              <Area
                dataKey="mobile"
                type="natural"
                fill="url(#fillMobile)"
                fillOpacity={0.3}
                stroke="hsl(var(--primary))"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardCard;
