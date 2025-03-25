import { DonutChart } from '@cash-compass/blocks';

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
