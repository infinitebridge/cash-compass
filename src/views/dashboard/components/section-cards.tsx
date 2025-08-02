import { StatCard } from '@cash-compass/ui/stat-card';

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-4 gap-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card">
      <StatCard
        title="Net Position (March)"
        value="$45,065"
        trend={12}
        trendLabel="vs. February"
        trendClassName="text-green-600 font-medium"
        trendLabelClassName="text-muted-foreground"
      />

      <StatCard
        title="Total Revenue"
        value="$87,450"
        trend={8.2}
        trendLabel="month-over-month"
        valueClassName="text-green-600"
        trendClassName="text-green-600 font-medium"
        trendLabelClassName="text-muted-foreground"
      />

      <StatCard
        title="Total Expenses"
        value="$42,385"
        trend={4.5}
        trendLabel="month-over-month"
        valueClassName="text-blue-600"
        trendClassName="text-blue-600 font-medium"
        trendLabelClassName="text-muted-foreground"
      />

      <StatCard
        title="Cash on Hand"
        value="$152,890"
        amountChange="$15,230"
        amountChangeDirection="up"
        secondaryLabel="this month"
        amountChangeClassName="text-green-600 font-medium"
        secondaryLabelClassName="text-muted-foreground"
      />
    </div>
  );
}
