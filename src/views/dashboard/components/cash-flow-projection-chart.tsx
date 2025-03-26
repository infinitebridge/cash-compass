'use client';

import { useState, useMemo } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from 'recharts';
import { addDays, format } from 'date-fns';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@cash-compass/ui/card';

// Define transaction types
interface Transaction {
  date: Date;
  amount: number;
  description: string;
  type: 'inflow' | 'outflow';
}

// Sample transaction data
const transactions: Transaction[] = [
  {
    date: addDays(new Date(), 3),
    amount: 12500,
    description: 'Client payment - ABC Corp',
    type: 'inflow',
  },
  {
    date: addDays(new Date(), 5),
    amount: 8750,
    description: 'Payroll',
    type: 'outflow',
  },
  {
    date: addDays(new Date(), 10),
    amount: 15000,
    description: 'Client payment - XYZ Inc',
    type: 'inflow',
  },
  {
    date: addDays(new Date(), 15),
    amount: 3200,
    description: 'Office rent',
    type: 'outflow',
  },
  {
    date: addDays(new Date(), 15),
    amount: 2100,
    description: 'Utilities',
    type: 'outflow',
  },
  {
    date: addDays(new Date(), 20),
    amount: 9500,
    description: 'Client payment - 123 LLC',
    type: 'inflow',
  },
  {
    date: addDays(new Date(), 25),
    amount: 4500,
    description: 'Software subscriptions',
    type: 'outflow',
  },
  {
    date: addDays(new Date(), 30),
    amount: 18000,
    description: 'Client payment - Big Enterprise',
    type: 'inflow',
  },
  {
    date: addDays(new Date(), 35),
    amount: 9200,
    description: 'Payroll',
    type: 'outflow',
  },
  {
    date: addDays(new Date(), 40),
    amount: 14500,
    description: 'Client payment - New Client',
    type: 'inflow',
  },
  {
    date: addDays(new Date(), 45),
    amount: 3200,
    description: 'Office rent',
    type: 'outflow',
  },
  {
    date: addDays(new Date(), 50),
    amount: 11000,
    description: 'Client payment - Returning Client',
    type: 'inflow',
  },
  {
    date: addDays(new Date(), 55),
    amount: 6500,
    description: 'Equipment purchase',
    type: 'outflow',
  },
  {
    date: addDays(new Date(), 60),
    amount: 16500,
    description: 'Client payment - Project completion',
    type: 'inflow',
  },
  {
    date: addDays(new Date(), 65),
    amount: 9500,
    description: 'Payroll',
    type: 'outflow',
  },
  {
    date: addDays(new Date(), 70),
    amount: 13000,
    description: 'Client payment - Consulting',
    type: 'inflow',
  },
  {
    date: addDays(new Date(), 75),
    amount: 3200,
    description: 'Office rent',
    type: 'outflow',
  },
  {
    date: addDays(new Date(), 80),
    amount: 2300,
    description: 'Utilities',
    type: 'outflow',
  },
  {
    date: addDays(new Date(), 85),
    amount: 17500,
    description: 'Client payment - Large Project',
    type: 'inflow',
  },
  {
    date: addDays(new Date(), 90),
    amount: 9800,
    description: 'Payroll',
    type: 'outflow',
  },
];

// Dynamic formatter for Y-axis similar to expenses-revenue-trend.tsx
const getDynamicFormatter = (data: any[], fields: string[]) => {
  // Find the maximum value across all specified fields
  const maxValue = Math.max(
    ...data.flatMap((item) => fields.map((field) => item[field] || 0))
  );

  // Return appropriate formatter based on value magnitude
  if (maxValue >= 1000000) {
    return (value: number) => `$${(value / 1000000).toFixed(1)}M`;
  } else if (maxValue >= 10000) {
    return (value: number) => `$${(value / 1000).toFixed(0)}k`;
  } else if (maxValue >= 1000) {
    return (value: number) => `$${(value / 1000).toFixed(1)}k`;
  } else {
    return (value: number) => `$${value}`;
  }
};

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const dayData = payload[0].payload;

    return (
      <div className="rounded-lg border bg-white p-4 shadow-md">
        <p className="font-semibold">{label}</p>
        <p className="text-sm text-gray-600">
          Cash Balance:{' '}
          <span className="font-medium text-blue-600">
            ${dayData.balance.toLocaleString()}
          </span>
        </p>

        {dayData.inflows.length > 0 && (
          <div className="mt-2">
            <p className="font-medium text-green-600">
              Inflows: $
              {dayData.inflows
                .reduce((sum: number, t: Transaction) => sum + t.amount, 0)
                .toLocaleString()}
            </p>
            <ul className="mt-1 space-y-1 text-xs">
              {dayData.inflows.map((inflow: Transaction, i: number) => (
                <li key={`inflow-${i}`} className="ml-2">
                  • {inflow.description}: ${inflow.amount.toLocaleString()}
                </li>
              ))}
            </ul>
          </div>
        )}

        {dayData.outflows.length > 0 && (
          <div className="mt-2">
            <p className="font-medium text-red-600">
              Outflows: $
              {dayData.outflows
                .reduce((sum: number, t: Transaction) => sum + t.amount, 0)
                .toLocaleString()}
            </p>
            <ul className="mt-1 space-y-1 text-xs">
              {dayData.outflows.map((outflow: Transaction, i: number) => (
                <li key={`outflow-${i}`} className="ml-2">
                  • {outflow.description}: ${outflow.amount.toLocaleString()}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default function CashFlowProjection() {
  const [timeframe, setTimeframe] = useState<'30' | '60' | '90'>('90');
  const startingBalance = 152890;

  // Calculate cumulative cash position for each day in the projection period
  const projectionData = useMemo(() => {
    const days = Number.parseInt(timeframe);
    const today = new Date();
    const endDate = addDays(today, days);

    // Create an array of all dates in the projection period
    const dateArray: Date[] = [];
    for (let i = 0; i <= days; i++) {
      dateArray.push(addDays(today, i));
    }

    // Sort transactions by date
    const sortedTransactions = [...transactions]
      .filter((t) => t.date <= endDate)
      .sort((a, b) => a.date.getTime() - b.date.getTime());

    // Calculate cumulative balance for each date
    let cumulativeBalance = startingBalance;
    const dailyData: {
      date: Date;
      formattedDate: string;
      balance: number;
      inflows: Transaction[];
      outflows: Transaction[];
      hasInflow: boolean;
      hasOutflow: boolean;
    }[] = [];

    // Initialize with starting balance
    dailyData.push({
      date: today,
      formattedDate: format(today, 'MMM d'),
      balance: startingBalance,
      inflows: [],
      outflows: [],
      hasInflow: false,
      hasOutflow: false,
    });

    // Group transactions by date
    const transactionsByDate = new Map<string, Transaction[]>();
    sortedTransactions.forEach((transaction) => {
      const dateKey = format(transaction.date, 'yyyy-MM-dd');
      if (!transactionsByDate.has(dateKey)) {
        transactionsByDate.set(dateKey, []);
      }
      transactionsByDate.get(dateKey)!.push(transaction);
    });

    // Calculate daily balances
    for (let i = 1; i <= days; i++) {
      const currentDate = addDays(today, i);
      const dateKey = format(currentDate, 'yyyy-MM-dd');
      const dayTransactions = transactionsByDate.get(dateKey) || [];

      const dayInflows = dayTransactions.filter((t) => t.type === 'inflow');
      const dayOutflows = dayTransactions.filter((t) => t.type === 'outflow');

      // Update balance with day's transactions
      const inflowTotal = dayInflows.reduce((sum, t) => sum + t.amount, 0);
      const outflowTotal = dayOutflows.reduce((sum, t) => sum + t.amount, 0);
      cumulativeBalance += inflowTotal - outflowTotal;

      dailyData.push({
        date: currentDate,
        formattedDate: format(currentDate, 'MMM d'),
        balance: cumulativeBalance,
        inflows: dayInflows,
        outflows: dayOutflows,
        hasInflow: dayInflows.length > 0,
        hasOutflow: dayOutflows.length > 0,
      });
    }

    return dailyData;
  }, [timeframe]);

  // Prepare data for Recharts
  const chartData = projectionData.map((day) => ({
    ...day,
    inflowBalance: day.hasInflow ? day.balance : null,
    outflowBalance: day.hasOutflow ? day.balance : null,
  }));

  // Calculate Y-axis formatter based on maximum balance value
  const yAxisFormatter = useMemo(() => {
    return getDynamicFormatter(chartData, ['balance']);
  }, [chartData]);

  // Calculate domain based on data with some padding
  const yAxisDomain = useMemo(() => {
    const maxBalance = Math.max(...chartData.map((item) => item.balance));
    const minBalance = Math.min(...chartData.map((item) => item.balance));
    const padding = (maxBalance - minBalance) * 0.1;

    // Round to appropriate nearest values based on magnitude
    const roundToNearest =
      maxBalance > 100000 ? 10000 : maxBalance > 10000 ? 5000 : 1000;

    return [
      Math.floor((minBalance - padding) / roundToNearest) * roundToNearest,
      Math.ceil((maxBalance + padding) / roundToNearest) * roundToNearest,
    ];
  }, [chartData]);

  return (
    <Card className="!p-4">
      <CardHeader className="!p-0">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-semibold text-gray-900 mb-4">
            Cash Flow Projection
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="!p-0">
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis
                dataKey="formattedDate"
                tick={{ fontSize: 12 }}
                tickMargin={10}
                interval={Math.floor(chartData.length / 8)}
                tickCount={8}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                tickFormatter={yAxisFormatter}
                tick={{ fontSize: 12 }}
                tickMargin={0}
                tickLine={false}
                axisLine={false}
                width={60}
                domain={yAxisDomain}
                label={{
                  value: 'Amount ($)',
                  angle: -90,
                  position: 'insideLeft',
                  style: { textAnchor: 'middle', fontSize: 12 },
                  offset: 0,
                }}
              />
              <Tooltip content={<CustomTooltip />} />
              <defs>
                <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="balance"
                name="Cash Balance"
                stroke="none"
                fillOpacity={1}
                fill="url(#colorBalance)"
              />
              <Line
                type="monotone"
                dataKey="balance"
                name="Cash Balance"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6 }}
              />
              <Scatter
                name="Expected Inflows"
                dataKey="inflowBalance"
                fill="#22c55e"
                shape="circle"
                legendType="circle"
                strokeWidth={0}
                r={6}
              />
              <Scatter
                name="Expected Outflows"
                dataKey="outflowBalance"
                fill="#ef4444"
                shape="circle"
                legendType="circle"
                strokeWidth={0}
                r={6}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-blue-500"></div>
            <div className="text-xs">
              <strong>Cash Balance Line:</strong> Cumulative cash position over
              time
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <div className="text-xs">
              <strong>Green Dots:</strong> Days with expected cash inflows
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="text-xs">
              <strong>Red Dots:</strong> Days with expected cash outflows
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
