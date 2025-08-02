import { StatCard } from '@cash-compass/ui/stat-card';

export function StatisticsCards() {
  return (
    <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-4 gap-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card">
      <StatCard
        title="Total Revenue (March)"
        value="$87,450"
        trend={8.2}
        trendLabel="vs. February"
        valueClassName="text-green-600"
        trendClassName="text-green-600 font-medium"
        trendLabelClassName="text-muted-foreground"
      />

      <StatCard
        title="Top Revenue Source"
        value="Product Sales"
        secondaryLabel="(45% of total)"
        secondaryValue="$39,350"
        secondaryValueClassName="text-green-600 font-medium"
        secondaryLabelClassName="text-muted-foreground"
        inlineSecondary={true}
      />

      <StatCard
        title="Outstanding Invoices"
        value="12"
        secondaryValue="$36,580"
        secondaryLabel="unpaid"
        secondaryValueClassName="text-amber-500 font-medium"
        secondaryLabelClassName="text-muted-foreground"
        inlineSecondary={true}
      />

      <StatCard
        title="Year-to-Date"
        value="$245,780"
        secondaryLabel=" of quarterly target"
        secondaryValue="73%"
        valueClassName="text-green-600"
        secondaryValueClassName="text-green-600 font-medium"
        secondaryLabelClassName="text-muted-foreground"
        inlineSecondary={true}
      />
    </div>
  );
}
