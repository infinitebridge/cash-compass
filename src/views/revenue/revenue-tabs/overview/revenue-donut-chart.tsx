import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  ChartTooltip,
  ChartContainer,
} from '@cash-compass/ui/index';
import { PieChart, Pie, Cell } from 'recharts';
import clsx from 'clsx';

export function RevenueDonutChart() {
  const expenseData = [
    {
      name: 'Office',
      value: 25,
      color: 'hsl(var(--chart-1))',
      growthValuePercentage: 18,
    },
    {
      name: 'Travel',
      value: 23,
      color: 'hsl(var(--chart-2))',
      growthValuePercentage: 18,
    },
    {
      name: 'Software',
      value: 32,
      color: 'hsl(var(--chart-3))',
      growthValuePercentage: 18,
    },
    {
      name: 'Marketing',
      value: 20,
      color: 'hsl(var(--chart-4))',
      growthValuePercentage: 18,
    },
  ];

  return <DonutChart title="Expense Breakdown" statsData={expenseData} />;
}

export interface DonutChartProps {
  /**
   * The title displayed at the top of the chart card
   */
  title: string;

  /**
   * The data to be displayed in the donut chart
   */
  statsData: {
    /**
     * Category name
     */
    name: string;
    /**
     * Category value (percentage or absolute)
     */
    value: number;
    /**
     * HEX color code for this segment
     */
    color: string;
    /**
     * growth value (percentage or absolute)
     */
    growthValuePercentage: number;
  }[];
}

/**
 * DonutChart component displays categorical data in a donut chart with supporting statistics.
 *
 * The component combines a visual pie chart with textual statistics for a comprehensive data view.
 * It's ideal for showing breakdowns of financial data, customer segments, or any categorical data.
 */
export function DonutChart({ title, statsData }: DonutChartProps) {
  return (
    <Card className="!p-4 h-full">
      <CardHeader className="!p-0">
        <CardTitle className="text-lg font-semibold text-gray-900">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 py-0">
        <div className="flex flex-col">
          <div className="col-span-2">
            <ChartContainer config={{}} className="mx-auto aspect-square">
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
            <div className="flex flex-col">
              {statsData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm text-muted-foreground truncate">
                      {item.name}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground truncate">
                    <span
                      className={clsx(
                        item.growthValuePercentage > 0
                          ? '!text-emerald-500'
                          : '!text-red-500'
                      )}
                    >
                      ${item.growthValuePercentage}%
                    </span>{' '}
                    vs. last month
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// This component is needed for the ChartTooltip but isn't defined in the original code
// Adding a simple implementation for completeness
export function ChartTooltipContent({
  active,
  payload,
  hideLabel = false,
  indicator = 'dot',
}: {
  active?: boolean;
  payload?: any[];
  hideLabel?: boolean;
  indicator?: 'dot' | 'line';
}) {
  if (!active || !payload || !payload.length) {
    return null;
  }

  return (
    <div className="rounded-lg border bg-background p-2 shadow-sm">
      <div className="grid grid-flow-col gap-2">
        {!hideLabel && (
          <div className="col-span-1 flex items-center gap-2">
            {indicator === 'dot' ? (
              <div
                className="h-3 w-3 rounded-full"
                style={{
                  backgroundColor:
                    payload[0]?.payload?.color || payload[0]?.color,
                }}
              />
            ) : (
              <div
                className="h-2 w-4"
                style={{
                  backgroundColor:
                    payload[0]?.payload?.color || payload[0]?.color,
                }}
              />
            )}
            <span className="font-medium">{payload[0]?.name}</span>
          </div>
        )}
        <div className="col-span-1 flex items-center text-sm">
          <span className="font-medium">
            {payload[0]?.value}
            {typeof payload[0]?.value === 'number' && '%'}
          </span>
        </div>
      </div>
    </div>
  );
}
