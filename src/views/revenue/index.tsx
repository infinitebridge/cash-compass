'use client';

import { useState } from 'react';
import {
  ArrowDown,
  ArrowUp,
  Calendar,
  DollarSign,
  Package,
  ShoppingCart,
  Tag,
} from 'lucide-react';

import { Button } from '@cash-compass/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@cash-compass/ui/card';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@cash-compass/ui/popover';
import { Calendar as CalendarComponent } from '@cash-compass/ui/calendar';

import FinancialChart from '../dashboard/components/expenses-revenue-trend';

export function RevenueManagement() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Sample data for the dashboard
  const summaryData = {
    monthlyRevenue: 128750,
    topSource: 'Product Sales',
    topSourceAmount: 58250,
    outstandingInvoices: 42300,
    ytdRevenue: 1245000,
    monthlyChange: 8.2,
    ytdChange: 12.5,
  };

  // Revenue trend data (6 months)
  const revenueData = [
    { month: 'Jan', revenue: 98000, target: 95000 },
    { month: 'Feb', revenue: 105000, target: 100000 },
    { month: 'Mar', revenue: 112000, target: 105000 },
    { month: 'Apr', revenue: 118000, target: 110000 },
    { month: 'May', revenue: 125000, target: 115000 },
    { month: 'Jun', revenue: 128750, target: 120000 },
  ];

  // Revenue by source data
  const sourceData = [
    { name: 'Product Sales', value: 58250, color: 'hsl(var(--chart-1))' },
    { name: 'Consulting Services', value: 42500, color: 'hsl(var(--chart-2))' },
    { name: 'Subscriptions', value: 28000, color: 'hsl(var(--chart-3))' },
  ];

  // Accounts receivable aging data
  const arAgingData = [
    { name: 'Current', value: 28500, color: 'hsl(var(--chart-1))' },
    { name: '1-30 Days', value: 8200, color: 'hsl(var(--chart-2))' },
    { name: '31-60 Days', value: 3600, color: 'hsl(var(--chart-3))' },
    { name: '61-90 Days', value: 1200, color: 'hsl(var(--chart-4))' },
    { name: '90+ Days', value: 800, color: 'hsl(var(--chart-5))' },
  ];

  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Revenue Overview</h1>
        <div className="flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="flex gap-2">
                <Calendar className="h-4 w-4" />
                {date
                  ? date.toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric',
                    })
                  : 'Select date'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <CalendarComponent
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <Button>Export</Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Monthly Revenue
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(summaryData.monthlyRevenue)}
            </div>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
              {summaryData.monthlyChange > 0 ? (
                <ArrowUp className="mr-1 h-4 w-4 text-emerald-500" />
              ) : (
                <ArrowDown className="mr-1 h-4 w-4 text-rose-500" />
              )}
              <span
                className={
                  summaryData.monthlyChange > 0
                    ? 'text-emerald-500'
                    : 'text-rose-500'
                }
              >
                {Math.abs(summaryData.monthlyChange)}%
              </span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Top Revenue Source
            </CardTitle>
            <Tag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{summaryData.topSource}</div>
            <div className="text-xs text-muted-foreground mt-1">
              {formatCurrency(summaryData.topSourceAmount)} (
              {Math.round(
                (summaryData.topSourceAmount / summaryData.monthlyRevenue) * 100
              )}
              % of total)
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Outstanding Invoices
            </CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(summaryData.outstandingInvoices)}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              {Math.round(
                (summaryData.outstandingInvoices / summaryData.monthlyRevenue) *
                  100
              )}
              % of monthly revenue
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Year-to-Date Revenue
            </CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(summaryData.ytdRevenue)}
            </div>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
              {summaryData.ytdChange > 0 ? (
                <ArrowUp className="mr-1 h-4 w-4 text-emerald-500" />
              ) : (
                <ArrowDown className="mr-1 h-4 w-4 text-rose-500" />
              )}
              <span
                className={
                  summaryData.ytdChange > 0
                    ? 'text-emerald-500'
                    : 'text-rose-500'
                }
              >
                {Math.abs(summaryData.ytdChange)}%
              </span>
              <span className="ml-1">from last year</span>
            </div>
          </CardContent>
        </Card>
      </div>
      <FinancialChart />
    </div>
  );
}
