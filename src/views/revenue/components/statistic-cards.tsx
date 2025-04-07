import { StatCard } from '@cash-compass/ui/stat-card';

export function StatisticsCards() {
  return (
    <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-4 gap-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card">
      <StatCard
        title="Total Revenue (March)"
        value="$87,450"
        trend={8.2}
        trendLabel="vs. February"
        valueColor="text-green-600"
      />

      <StatCard
        title="Top Revenue Source"
        value="Product Sales"
        secondaryLabel="(45% of total)"
        secondaryValue="$39,350"
        secondaryValueColor="text-green-600"
      />

      <StatCard
        title="Outstanding Invoices"
        value="12"
        secondaryValue="$36,580"
        secondaryLabel="unpaid"
        secondaryValueColor="text-amber-500"
      />

      <StatCard
        title="Year-to-Date"
        value="$245,780"
        secondaryLabel="73% of quarterly target"
        valueColor="text-green-600"
      />
    </div>
  );
}
