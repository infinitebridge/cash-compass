import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@cash-compass/ui';

export const description = 'An area chart with gradient fill';

const chartData = [
  { month: 'January', created_invoices: 186, paid_invoices: 80 },
  { month: 'February', created_invoices: 305, paid_invoices: 200 },
  { month: 'March', created_invoices: 237, paid_invoices: 120 },
  { month: 'April', created_invoices: 73, paid_invoices: 190 },
  { month: 'May', created_invoices: 209, paid_invoices: 130 },
  { month: 'June', created_invoices: 214, paid_invoices: 140 },
];

const chartConfig = {
  created_invoices: {
    label: 'Created Invoices',
    color: 'hsl(var(--chart-1))',
  },
  paid_invoices: {
    label: 'Paid Invoices',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

export default function MonthlyInvoiceTrend() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Invoice Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Area
              dataKey="created_invoices"
              type="natural"
              fill="url(#fillCreatedInvoices)"
              fillOpacity={0.4}
              stroke="hsl(var(--chart-1))"
              stackId="a"
            />
            <Area
              dataKey="paid_invoices"
              type="natural"
              fill="url(#fillPaidInvoices)"
              fillOpacity={0.4}
              stroke="hsl(var(--chart-2))"
              stackId="b"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
