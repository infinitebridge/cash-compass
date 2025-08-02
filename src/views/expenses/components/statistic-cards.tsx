import { StatCard } from '@cash-compass/ui/stat-card';

export function StatisticsCards() {
  return (
    <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-4 gap-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card">
      <StatCard
        title="Total Expenses (March)"
        value="$42,385"
        trend={4.5}
        trendLabel="vs. February"
        trendClassName="text-green-600 font-medium"
        trendLabelClassName="text-muted-foreground"
      />

      <StatCard
        title="Top Category"
        value="Software"
        secondaryLabel="(32% of total)"
        amountChange="$13,560"
        amountChangeClassName="text-blue-600 font-medium"
        secondaryLabelClassName="text-muted-foreground"
      />

      <StatCard
        title="Pending Approval"
        value="7"
        amountChange="$4,580"
        secondaryLabel="awaiting review"
        amountChangeClassName="text-amber-500 font-medium"
        secondaryLabelClassName="text-muted-foreground"
      />

      <StatCard
        title="Year-to-Date"
        value="$126,785"
        secondaryLabel=" of annual budget"
        amountChange="33%"
        amountChangeClassName="text-green-600 font-medium"
        secondaryLabelClassName="text-muted-foreground"
      />
    </div>
  );
}
