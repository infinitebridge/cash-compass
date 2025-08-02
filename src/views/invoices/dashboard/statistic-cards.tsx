import { StatCard } from '@cash-compass/ui/stat-card';

export function StatisticsCards() {
  return (
    <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-4 gap-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card">
      <StatCard
        title="Total Invoices (March)"
        value="28"
        trend={12}
        trendLabel="vs. February"
        trendClassName="text-green-600 font-medium"
        trendLabelClassName="text-muted-foreground"
      />

      <StatCard
        title="Total Invoiced"
        value="$87,450"
        valueClassName="text-purple-600"
        secondaryValue="16"
        secondaryLabel="paid ($50,870)"
        secondaryValueClassName="text-green-600 font-medium"
        secondaryLabelClassName="text-gray-500"
        inlineSecondary={true}
      />

      <StatCard
        title="Outstanding"
        value="$28,830"
        valueClassName="text-orange-500"
        secondaryValue="9"
        secondaryLabel="invoices pending"
        secondaryValueClassName="text-orange-500 font-medium"
        secondaryLabelClassName="text-gray-500 font-semibold"
        inlineSecondary={true}
      />

      <StatCard
        title="Overdue"
        value="$7,750"
        valueClassName="text-red-500"
        secondaryValue="3"
        secondaryLabel="invoices need action"
        secondaryValueClassName="text-red-500 font-medium"
        secondaryLabelClassName="text-gray-700 font-semibold"
        actionText="(require attention)"
        actionTextClassName="text-red-600 font-semibold underline"
        inlineSecondary={true}
      />
    </div>
  );
}
