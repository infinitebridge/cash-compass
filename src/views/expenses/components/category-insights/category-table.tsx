import * as React from 'react';
import {
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Minus,
} from 'lucide-react';

import {
  Progress,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Card,
  CardContent,
} from '@cash-compass/ui';
import { GenericBadge } from '@cash-compass/blocks';
import clsx from 'clsx';

// Using the same ExpenseData type from the chart component for API consistency
interface ExpenseData {
  category: string;
  amount: number;
  budget: number;
  trend: number; // percentage change from previous period
  fill: string;
}

// Sample expense data using the same structure as the chart
const expenseCategories: ExpenseData[] = [
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

export function CategoryTable() {
  // Calculate totals
  const totalExpenses = React.useMemo(() => {
    return expenseCategories.reduce((acc, curr) => acc + curr.amount, 0);
  }, []);

  const totalBudget = React.useMemo(() => {
    return expenseCategories.reduce((acc, curr) => acc + curr.budget, 0);
  }, []);

  return (
    <Card className={'flex flex-col'}>
      <CardContent className="flex-1 p-0">
        <Table>
          <TableHeader>
            <TableRow className="uppercase text-xs font-normal">
              <TableHead className="w-[200px] !p-4">Category</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right">Budget</TableHead>
              <TableHead className="w-[120px]">Usage</TableHead>
              <TableHead className="text-center">Trend</TableHead>
              <TableHead className="text-center">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {expenseCategories.map((expense) => {
              const budgetUsage = (expense.amount / expense.budget) * 100;
              const isOverBudget = expense.amount > expense.budget;

              return (
                <TableRow
                  key={expense.category}
                  className={clsx(
                    isOverBudget ? 'bg-destructive/5' : '',
                    '!p-4'
                  )}
                >
                  <TableCell className="font-medium pl-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{
                          backgroundColor:
                            'hsl(var(--chart-' +
                            (expenseCategories.indexOf(expense) + 1) +
                            '))',
                        }}
                      />
                      {expense.category}
                    </div>
                  </TableCell>

                  <TableCell className="text-right">
                    <div
                      className={`font-semibold ${
                        isOverBudget ? 'text-destructive' : ''
                      }`}
                    >
                      ${expense.amount.toLocaleString()}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {((expense.amount / totalExpenses) * 100).toFixed(1)}% of
                      total
                    </div>
                  </TableCell>

                  <TableCell className="text-right">
                    <div className="font-medium">
                      ${expense.budget.toLocaleString()}
                    </div>
                    {isOverBudget && (
                      <div className="text-xs text-destructive">
                        +${(expense.amount - expense.budget).toLocaleString()}
                      </div>
                    )}
                  </TableCell>

                  <TableCell>
                    <div className="space-y-1">
                      <span className="font-medium">
                        {budgetUsage.toFixed(1)}%
                      </span>
                    </div>
                  </TableCell>

                  <TableCell className="text-center">
                    <GenericBadge
                      colorScheme={
                        expense.trend > 0
                          ? 'red'
                          : expense.trend < 0
                          ? 'green'
                          : 'gray'
                      }
                      icon={
                        expense.trend > 0
                          ? TrendingUp
                          : expense.trend < 0
                          ? TrendingDown
                          : Minus
                      }
                      size="sm"
                      className="text-xs"
                    >
                      {Math.abs(expense.trend)}%
                    </GenericBadge>
                  </TableCell>

                  <TableCell className="text-center">
                    {isOverBudget ? (
                      <GenericBadge
                        colorScheme="red"
                        icon={AlertTriangle}
                        size="sm"
                        className="text-xs"
                      >
                        Over Budget
                      </GenericBadge>
                    ) : budgetUsage > 90 ? (
                      <GenericBadge
                        colorScheme="yellow"
                        icon={AlertTriangle}
                        size="sm"
                        className="text-xs"
                      >
                        Near Limit
                      </GenericBadge>
                    ) : (
                      <GenericBadge
                        colorScheme="green"
                        icon={CheckCircle}
                        size="sm"
                        className="text-xs"
                      >
                        On Track
                      </GenericBadge>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell className="!p-4" colSpan={2}>
                Total
              </TableCell>
              <TableCell className="text-right">
                ${totalBudget.toLocaleString()}
              </TableCell>
              <TableCell>
                <div className="space-y-1">
                  <div className="text-xs">
                    {((totalExpenses / totalBudget) * 100).toFixed(1)}% utilized
                  </div>
                  <Progress
                    value={(totalExpenses / totalBudget) * 100}
                    className="h-2"
                  />
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="text-xs text-muted-foreground">
                  Avg:{' '}
                  {(
                    expenseCategories.reduce(
                      (acc, curr) => acc + curr.trend,
                      0
                    ) / expenseCategories.length
                  ).toFixed(1)}
                  %
                </div>
              </TableCell>
              <TableCell className="text-right font-bold !p-4">
                ${totalExpenses.toLocaleString()}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardContent>
    </Card>
  );
}
