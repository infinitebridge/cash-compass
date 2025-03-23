'use client';

import { PieChart, Pie, Cell } from 'recharts';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@cash-compass/ui';
import clsx from 'clsx';

export function ExpensesRevenueDonuts() {
  const expenseData = [
    { name: 'Office', value: 25, color: 'hsl(var(--chart-1))' },
    { name: 'Travel', value: 23, color: 'hsl(var(--chart-2))' },
    { name: 'Software', value: 32, color: 'hsl(var(--chart-3))' },
    { name: 'Marketing', value: 20, color: 'hsl(var(--chart-4))' },
  ];
  const expensesStats = [
    {
      statsTitle: 'Largest Category',
      name: 'Software & Subscriptions',
      value: '$13,560 (32%)',
    },
    {
      statsTitle: 'Highest Growth',
      name: 'Marketing',
      value: '+18% vs. last month',
      ValueclassName: '!text-emerald-500',
    },
    {
      statsTitle: 'Pending Approvals',
      name: '7 expenses',
      value: '$4,580 total',
    },
  ];
  const revenueData = [
    { name: 'Product Sales', value: 45, color: 'hsl(var(--chart-1))' },
    { name: 'Services', value: 25, color: 'hsl(var(--chart-3))' },
    { name: 'Subscriptions', value: 30, color: 'hsl(var(--chart-2))' },
  ];

  const revenueStats = [
    {
      statsTitle: 'Most Profitable',
      name: 'Product Sales',
      value: '$39,350 (45%)',
    },
    {
      statsTitle: 'Fastest Growing',
      name: 'Subscriptions',
      value: '+24% vs. last month',
      ValueclassName: '!text-emerald-500',
    },
    {
      statsTitle: 'Open Invoices',
      name: '12 invoices',
      value: '$36,580 total',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full my-4">
      <DonutChart
        title="Expense Breakdown"
        statsData={expenseData}
        statsSummary={expensesStats}
      />
      <DonutChart
        title="Revenue Streams"
        statsData={revenueData}
        statsSummary={revenueStats}
      />
    </div>
  );
}
interface DonutChartProps {
  title: string;
  statsData: {
    name: string;
    value: number;
    color: string;
  }[];
  statsSummary: {
    statsTitle: string;
    name: string;
    value: string;
    ValueclassName?: string;
  }[];
}
export function DonutChart({
  title,
  statsData,
  statsSummary,
}: DonutChartProps) {
  return (
    <Card className="!p-4">
      <CardHeader className="!p-0">
        <CardTitle className="text-lg font-semibold text-gray-900">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 py-0">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-2">
            <ChartContainer
              config={{}}
              className="mx-auto aspect-square max-h-[250px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel indicator="line" />}
                />
                <Pie
                  data={statsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {statsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ChartContainer>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {statsData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-xs text-muted-foreground truncate">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-3 flex flex-col justify-start gap-4 ml-6">
            {statsSummary.map((stats) => (
              <div>
                <div className="text-sm text-muted-foreground">
                  {stats.statsTitle}
                </div>
                <div className="font-medium">{stats.name}</div>
                <div
                  className={clsx(
                    'text-sm text-gray-700',
                    stats.ValueclassName
                  )}
                >
                  {stats.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
