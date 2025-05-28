import * as React from 'react';
import {
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
} from 'lucide-react';
import { Label, Pie, PieChart } from 'recharts';
import { Card, CardContent, CardFooter } from '@cash-compass/ui';
import { ChartConfig, ChartContainer, ChartTooltip } from '@cash-compass/ui';
import clsx from 'clsx';

// Types for the expense data
interface ExpenseData {
  category: string;
  amount: number;
  budget: number;
  trend: number; // percentage change from previous period
  fill: string;
}

interface ExpenseCategoryChartProps {
  data: ExpenseData[];
  title?: string;
  description?: string;
  period?: string;
  className?: string;
  onCategoryClick?: (category: ExpenseData) => void;
}

// Sample data - you can replace this with your actual data
const defaultChartData: ExpenseData[] = [
  {
    category: 'software',
    amount: 13560,
    budget: 16000,
    trend: -2,
    fill: 'var(--color-software)',
  },
  {
    category: 'travel',
    amount: 11868,
    budget: 12000,
    trend: 28,
    fill: 'var(--color-travel)',
  },
  {
    category: 'marketing',
    amount: 10596,
    budget: 9000,
    trend: 18,
    fill: 'var(--color-marketing)',
  },
  {
    category: 'office',
    amount: 6358,
    budget: 10000,
    trend: -15,
    fill: 'var(--color-office)',
  },
  {
    category: 'meals',
    amount: 3385,
    budget: 4000,
    trend: 5,
    fill: 'var(--color-meals)',
  },
  {
    category: 'other',
    amount: 1618,
    budget: 2000,
    trend: -8,
    fill: 'var(--color-other)',
  },
];

const chartConfig = {
  amount: {
    label: 'Amount',
  },
  software: {
    label: 'Software & Subscriptions',
    color: 'hsl(var(--chart-1))',
  },
  travel: {
    label: 'Travel & Accommodation',
    color: 'hsl(var(--chart-2))',
  },
  marketing: {
    label: 'Marketing & Advertising',
    color: 'hsl(var(--chart-3))',
  },
  office: {
    label: 'Office Supplies',
    color: 'hsl(var(--chart-4))',
  },
  meals: {
    label: 'Business Meals',
    color: 'hsl(var(--chart-5))',
  },
  other: {
    label: 'Other Expenses',
    color: 'hsl(var(--chart-6))',
  },
} satisfies ChartConfig;

// Custom tooltip content with expense insights
const ExpenseTooltipContent = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload as ExpenseData;
    const budgetUsage = ((data.amount / data.budget) * 100).toFixed(1);
    const isOverBudget = data.amount > data.budget;
    const categoryLabel =
      chartConfig[data.category as keyof typeof chartConfig]?.label ||
      data.category;

    return (
      <div className="rounded-lg min-w-[200px] border bg-background p-2 shadow-sm">
        <div className="grid gap-2">
          <div className="flex flex-col">
            <span className="text-[0.70rem] uppercase font-bold">
              {categoryLabel}
            </span>
            <span className="font-bold">${data.amount.toLocaleString()}</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex flex-col">
              <span className="text-[0.70rem] text-muted-foreground">
                Budget
              </span>
              <span className="font-medium text-muted-foreground">
                ${data.budget.toLocaleString()}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[0.70rem] text-muted-foreground">
                Usage
              </span>
              <span
                className={`font-medium ${
                  isOverBudget ? 'text-destructive' : 'text-muted-foreground'
                }`}
              >
                {budgetUsage}%
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[0.70rem] text-muted-foreground">Trend:</span>
            {data.trend > 0 ? (
              <TrendingUp className="h-3 w-3 text-destructive" />
            ) : (
              <TrendingDown className="h-3 w-3 text-green-600" />
            )}
            <span
              className={`text-xs font-medium ${
                data.trend > 0 ? 'text-destructive' : 'text-green-600'
              }`}
            >
              {data.trend > 0 ? '+' : ''}
              {data.trend}%
            </span>
          </div>
          {isOverBudget && (
            <div className="flex items-center gap-1 text-xs text-destructive">
              <AlertTriangle className="h-3 w-3" />
              <span>
                Over budget by ${(data.amount - data.budget).toLocaleString()}
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
  return null;
};

export function ExpenseCategoryChart({
  data = defaultChartData,
  period = 'March 2025',
  className = '',
  onCategoryClick,
}: ExpenseCategoryChartProps) {
  // Calculate totals and insights
  const totalExpenses = React.useMemo(() => {
    return data.reduce((acc, curr) => acc + curr.amount, 0);
  }, [data]);

  const totalBudget = React.useMemo(() => {
    return data.reduce((acc, curr) => acc + curr.budget, 0);
  }, [data]);

  const budgetUtilization = React.useMemo(() => {
    return (totalExpenses / totalBudget) * 100;
  }, [totalExpenses, totalBudget]);

  const overBudgetCategories = React.useMemo(() => {
    return data.filter((item) => item.amount > item.budget);
  }, [data]);

  const avgTrend = React.useMemo(() => {
    return data.reduce((acc, curr) => acc + curr.trend, 0) / data.length;
  }, [data]);

  const handleCategoryClick = (entry: any) => {
    if (onCategoryClick) {
      onCategoryClick(entry);
    }
  };

  return (
    <Card className={clsx('flex flex-col', className)}>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[350px]"
        >
          <PieChart>
            <ChartTooltip cursor={false} content={<ExpenseTooltipContent />} />
            <Pie
              data={data}
              dataKey="amount"
              nameKey="category"
              innerRadius={80}
              strokeWidth={5}
              onClick={handleCategoryClick}
              className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          ${(totalExpenses / 1000).toFixed(0)}K
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total Expenses
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 40}
                          className="fill-muted-foreground text-xs"
                        >
                          {budgetUtilization.toFixed(1)}% of budget
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center  gap-2 font-medium leading-none">
          {avgTrend > 0 ? (
            <>
              Trending up by {avgTrend.toFixed(1)}% this month
              <TrendingUp className="h-4 w-4 text-destructive" />
            </>
          ) : (
            <>
              Trending down by {Math.abs(avgTrend).toFixed(1)}% this month
              <TrendingDown className="h-4 w-4 text-green-600" />
            </>
          )}
        </div>
        <div className="leading-none text-muted-foreground flex items-center gap-2">
          {overBudgetCategories.length > 0 ? (
            <>
              <AlertTriangle className="h-4 w-4 text-destructive" />
              {overBudgetCategories.length}{' '}
              {overBudgetCategories.length === 1
                ? 'category is'
                : 'categories are'}{' '}
              over budget
            </>
          ) : (
            <>
              <CheckCircle className="h-4 w-4 text-green-600" />
              All categories within budget for {period}
            </>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

export function CategoryChart({ className }: { className?: string }) {
  const handleCategoryClick = (category: ExpenseData) => {
    console.log('Category clicked:', category);
    // You can handle the click here - navigate, show modal, etc.
    alert(
      `Clicked on ${
        chartConfig[category.category as keyof typeof chartConfig]?.label ||
        category.category
      }: $${category.amount.toLocaleString()}`
    );
  };

  // You can also use custom data
  const customData: ExpenseData[] = [
    {
      category: 'software',
      amount: 15000,
      budget: 16000,
      trend: 5,
      fill: 'var(--color-software)',
    },
    {
      category: 'travel',
      amount: 8500,
      budget: 12000,
      trend: -12,
      fill: 'var(--color-travel)',
    },
    {
      category: 'marketing',
      amount: 12000,
      budget: 9000,
      trend: 25,
      fill: 'var(--color-marketing)',
    },
    {
      category: 'office',
      amount: 4500,
      budget: 10000,
      trend: -30,
      fill: 'var(--color-office)',
    },
  ];

  return (
    <div className={clsx('mx-auto space-y-6', className)}>
      <ExpenseCategoryChart
        className="h-full"
        data={customData}
        period="April 2025"
        onCategoryClick={handleCategoryClick}
      />
    </div>
  );
}
