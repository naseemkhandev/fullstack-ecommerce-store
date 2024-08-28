import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

import { Area, AreaChart } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const DashboardCard = ({ color, icon, title }) => {
  const chartData = [
    { month: "January", mobile: 0 },
    { month: "February", mobile: 200 },
    { month: "March", mobile: 120 },
    { month: "April", mobile: 0 },
    { month: "May", mobile: 130 },
    { month: "June", mobile: 0 },
  ];

  const chartConfig = {
    mobile: {
      label: "Mobile",
    },
  };

  return (
    <div>
      <Card
        x-chunk="dashboard-01-chunk-0"
        className="rounded-xl border-none shadow-md shadow-black/5"
      >
        <CardContent className="p-3 pb-0 flex items-center gap-3">
          <div
            style={{ backgroundColor: color }}
            className="w-12 aspect-square text-white flex-center rounded-full"
          >
            {icon}
          </div>

          <div>
            <p className="text-sm text-muted-foreground capitalize">{title}</p>
            <div className="text-xl font-bold">$45,231.89</div>
          </div>

          <div className="ml-auto flex-center gap-1">
            <TrendingUp className="size-5 text-green-500" />
            <p className="text-sm font-semibold">+12.5%</p>
          </div>
        </CardContent>

        <CardContent className="p-0 pt-2">
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[90px] w-full relative"
          >
            <div
              style={{ backgroundColor: color }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[99%] h-[6px] opacity-[0.08] rounded-b-xl"
            />
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{
                top: 5,
                bottom: 6,
              }}
            >
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <defs>
                <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="1%" stopColor={color} stopOpacity={0.8} />
                  <stop offset="70%" stopColor={color} stopOpacity={0.5} />
                </linearGradient>
              </defs>

              <Area
                dataKey="mobile"
                type="natural"
                fill={color}
                fillOpacity={0.08}
                stroke={color}
                strokeWidth={5}
                strokeOpacity={0.8}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardCard;
