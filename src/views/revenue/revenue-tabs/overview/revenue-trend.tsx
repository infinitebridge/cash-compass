import { useMemo, useState } from 'react';
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { ChartContainer } from '@cash-compass/ui';
import clsx from 'clsx';
import { getDynamicFormatter } from '@cash-compass/utils';

export default function RevenueTrend() {
  const [showRevenue, setShowRevenue] = useState(true);

  const [showTarget, setShowTarget] = useState(true);

  const financialData = useMemo(
    () => [
      { month: 'Sep', revenue: 0, target: 0 },
      { month: 'Oct', revenue: 68000, target: 26000 },
      { month: 'Nov', revenue: 72000, target: 34000 },
      { month: 'Dec', revenue: 80000, target: 32000 },
      { month: 'Jan', revenue: 76000, target: 36000 },
      { month: 'Feb', revenue: 81000, target: 41000 },
      { month: 'Mar', revenue: 87000, target: 45000 },
    ],
    []
  );
  // Calculate formatters based on data
  const leftAxisFormatter = useMemo(
    () => getDynamicFormatter(financialData, ['revenue', 'target']),
    [financialData]
  );

  const rightAxisFormatter = useMemo(
    () => getDynamicFormatter(financialData, ['target']),
    [financialData]
  );

  // Calculate domains based on data
  const leftAxisDomain = useMemo(() => {
    const maxValue = Math.max(
      ...financialData.flatMap((item) => [item.revenue || 0])
    );
    return [0, Math.ceil((maxValue * 1.1) / 10000) * 10000]; // Round up to nearest 10k and add 10% padding
  }, [financialData]);

  const rightAxisDomain = useMemo(() => {
    const maxValue = Math.max(...financialData.map((item) => item.target || 0));
    return [0, Math.ceil((maxValue * 1.1) / 5000) * 5000]; // Round up to nearest 5k and add 10% padding
  }, [financialData]);
  return (
    <div className="w-full p-4 h-full rounded-xl border bg-card text-card-foreground shadow @container/card">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Revenue Trend</h2>

        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-[hsl(var(--chart-2))] mr-2"></span>

            <span
              className={clsx(
                'text-sm text-gray-600 transition-all ease-linear',
                !showRevenue ? 'line-through text-gray-400' : ''
              )}
              onClick={() => {
                setShowRevenue(!showRevenue);
              }}
            >
              Revenue
            </span>
          </div>

          <div className="flex items-center">
            <span className="h-3 w-1.5 bg-[hsl(var(--chart-4))] mr-2"></span>
            <span
              className={clsx(
                'text-sm text-gray-600 transition-all ease-linear',
                !showTarget ? 'line-through text-gray-400' : ''
              )}
              onClick={() => {
                setShowTarget(!showTarget);
              }}
            >
              Target{' '}
            </span>
          </div>
        </div>
      </div>
      <ChartContainer
        config={{
          revenue: {
            label: 'Revenue',
            color: 'hsl(var(--chart-1))',
          },

          target: {
            label: 'Target',
            color: '#fbbf24',
          },
        }}
        className="h-[350px] w-full"
      >
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={financialData}
            margin={{
              top: 20,
              right: 50,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              tickLine={false}
              axisLine={false}
              tickFormatter={leftAxisFormatter}
              domain={leftAxisDomain}
              label={{
                value: 'Amount ($)',
                angle: -90,
                position: 'insideLeft',
                style: { textAnchor: 'middle' },
                offset: -5,
              }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
              tickFormatter={rightAxisFormatter}
              domain={rightAxisDomain}
              label={{
                value: 'Target ($)',
                angle: 90,
                position: 'insideRight',
                style: { textAnchor: 'middle' },
                offset: -5,
              }}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border bg-background p-2 shadow-sm">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="font-medium">
                          {payload[0]?.payload.month}
                        </div>
                        <div></div>

                        {showRevenue &&
                          payload.find((p) => p.dataKey === 'revenue') && (
                            <>
                              <div className="flex items-center gap-1">
                                <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-2))]"></div>
                                <span>Revenue:</span>
                              </div>
                              <div className="text-right font-medium">
                                $
                                {payload
                                  .find((p) => p.dataKey === 'revenue')
                                  ?.value?.toLocaleString()}
                              </div>
                            </>
                          )}

                        {showTarget &&
                          payload.find((p) => p.dataKey === 'target') && (
                            <>
                              <div className="flex items-center gap-1">
                                <div className="h-3 w-1.5 bg-[hsl(var(--chart-4))]"></div>
                                <span>Target:</span>
                              </div>
                              <div className="text-right font-medium">
                                $
                                {payload
                                  .find((p) => p.dataKey === 'target')
                                  ?.value?.toLocaleString()}
                              </div>
                            </>
                          )}
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />

            {showRevenue && (
              <Bar
                yAxisId="left"
                dataKey="revenue"
                fill="hsl(var(--chart-2))"
                radius={[4, 4, 0, 0]}
                barSize={30}
              />
            )}

            {showTarget && (
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="target"
                stroke="hsl(var(--chart-4))"
                strokeWidth={3}
                dot={{
                  r: 6,
                  fill: 'hsl(var(--chart-4))',
                  stroke: '#ffffff',
                  strokeWidth: 2,
                }}
                activeDot={{
                  r: 8,
                  fill: 'hsl(var(--chart-4))',
                  stroke: '#ffffff',
                  strokeWidth: 2,
                }}
              />
            )}
          </ComposedChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}
