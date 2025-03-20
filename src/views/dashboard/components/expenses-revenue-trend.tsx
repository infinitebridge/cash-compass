'use client';

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

export default function FinancialChart() {
  const [showRevenue, setShowRevenue] = useState(true);
  const [showExpenses, setShowExpenses] = useState(true);
  const [showNetIncome, setShowNetIncome] = useState(true);

  const financialData = useMemo(
    () => [
      { month: 'Oct', revenue: 68000, expenses: 42000, netIncome: 26000 },
      { month: 'Nov', revenue: 72000, expenses: 38000, netIncome: 34000 },
      { month: 'Dec', revenue: 80000, expenses: 48000, netIncome: 32000 },
      { month: 'Jan', revenue: 76000, expenses: 40000, netIncome: 36000 },
      { month: 'Feb', revenue: 81000, expenses: 40000, netIncome: 41000 },
      { month: 'Mar', revenue: 87000, expenses: 42000, netIncome: 45000 },
    ],
    []
  );
  // Calculate formatters based on data
  const leftAxisFormatter = useMemo(
    () => getDynamicFormatter(financialData, ['revenue', 'expenses']),
    [financialData]
  );

  const rightAxisFormatter = useMemo(
    () => getDynamicFormatter(financialData, ['netIncome']),
    [financialData]
  );

  // Calculate domains based on data
  const leftAxisDomain = useMemo(() => {
    const maxValue = Math.max(
      ...financialData.flatMap((item) => [
        item.revenue || 0,
        item.expenses || 0,
      ])
    );
    return [0, Math.ceil((maxValue * 1.1) / 10000) * 10000]; // Round up to nearest 10k and add 10% padding
  }, [financialData]);

  const rightAxisDomain = useMemo(() => {
    const maxValue = Math.max(
      ...financialData.map((item) => item.netIncome || 0)
    );
    return [0, Math.ceil((maxValue * 1.1) / 5000) * 5000]; // Round up to nearest 5k and add 10% padding
  }, [financialData]);
  return (
    <div className="w-full p-4 my-6 rounded-xl border bg-card text-card-foreground shadow @container/card">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Revenue vs. Expenses
        </h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-green-500 mr-2"></span>

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
            <span className="h-3 w-3 rounded-full bg-blue-500 mr-2"></span>
            <span
              className={clsx(
                'text-sm text-gray-600 transition-all ease-linear',
                !showExpenses ? 'line-through text-gray-400' : ''
              )}
              onClick={() => {
                setShowExpenses(!showExpenses);
              }}
            >
              Expenses
            </span>
          </div>
          <div className="flex items-center">
            <span className="h-3 w-1 bg-yellow-500 mr-2"></span>
            <span
              className={clsx(
                'text-sm text-gray-600 transition-all ease-linear',
                !showNetIncome ? 'line-through text-gray-400' : ''
              )}
              onClick={() => {
                setShowNetIncome(!showNetIncome);
              }}
            >
              Net Income
            </span>
          </div>
        </div>
      </div>
      <ChartContainer
        config={{
          revenue: {
            label: 'Revenue',
            color: 'hsl(var(--emerald-500))',
          },
          expenses: {
            label: 'Expenses',
            color: 'hsl(var(--blue-500))',
          },
          netIncome: {
            label: 'Net Income',
            color: '#fbbf24',
          },
        }}
        className="h-[400px] w-full"
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
                value: 'Net Income ($)',
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
                                <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
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

                        {showExpenses &&
                          payload.find((p) => p.dataKey === 'expenses') && (
                            <>
                              <div className="flex items-center gap-1">
                                <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                                <span>Expenses:</span>
                              </div>
                              <div className="text-right font-medium">
                                $
                                {payload
                                  .find((p) => p.dataKey === 'expenses')
                                  ?.value?.toLocaleString()}
                              </div>
                            </>
                          )}

                        {showNetIncome &&
                          payload.find((p) => p.dataKey === 'netIncome') && (
                            <>
                              <div className="flex items-center gap-1">
                                <div className="h-3 w-3 rounded-full bg-amber-400"></div>
                                <span>Net Income:</span>
                              </div>
                              <div className="text-right font-medium">
                                $
                                {payload
                                  .find((p) => p.dataKey === 'netIncome')
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
                fill="#10b981" // emerald-500
                radius={[4, 4, 0, 0]}
                barSize={30}
              />
            )}

            {showExpenses && (
              <Bar
                yAxisId="left"
                dataKey="expenses"
                fill="#3b82f6" // blue-500
                radius={[4, 4, 0, 0]}
                barSize={30}
              />
            )}

            {showNetIncome && (
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="netIncome"
                stroke="#fbbf24" // amber-400
                strokeWidth={3}
                dot={{
                  r: 6,
                  fill: '#fbbf24',
                  stroke: '#ffffff',
                  strokeWidth: 2,
                }}
                activeDot={{
                  r: 8,
                  fill: '#fbbf24',
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
