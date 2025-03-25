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
  }[];

  /**
   * The summary statistics to be displayed alongside the chart
   */
  statsSummary: {
    /**
     * Title of the statistic
     */
    statsTitle: string;
    /**
     * Primary statistic name/label
     */
    name: string;
    /**
     * Value or description text
     */
    value: string;
    /**
     * Optional CSS class name for custom styling of value
     */
    ValueclassName?: string;
  }[];
}

/**
 * DonutChart component displays categorical data in a donut chart with supporting statistics.
 *
 * The component combines a visual pie chart with textual statistics for a comprehensive data view.
 * It's ideal for showing breakdowns of financial data, customer segments, or any categorical data.
 */
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
            {statsSummary.map((stats, index) => (
              <div key={index}>
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
