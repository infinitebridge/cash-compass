import React from 'react';
import { StatisticCard } from '@cash-compass/ui';
import { AlertTriangle, UserCheck, UserPlus, Users } from 'lucide-react';

export default function CustomersCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Total Customers */}
      <StatisticCard
        title="Total Customers"
        value={42}
        bgColor="bg-gray-50"
        borderColor="border-gray-200"
        valueClassName="text-2xl text-gray-900 font-bold"
        icon={Users}
        iconSize={24}
        iconClassName="text-gray-600"
      />

      {/* Active Customers */}
      <StatisticCard
        title="Active"
        value={38}
        bgColor="bg-green-50"
        borderColor="border-green-200"
        valueClassName="text-2xl text-green-700 font-bold"
        titleClassName="text-sm text-green-600 font-medium"
        icon={UserCheck}
        iconSize={24}
        iconClassName="text-green-600"
      />

      {/* New This Month */}
      <StatisticCard
        title="New This Month"
        value={8}
        bgColor="bg-blue-50"
        borderColor="border-blue-200"
        valueClassName="text-2xl text-blue-700 font-bold"
        titleClassName="text-sm text-blue-600 font-medium"
        icon={UserPlus}
        iconSize={24}
        iconClassName="text-blue-600"
      />

      {/* At Risk */}
      <StatisticCard
        title="At Risk"
        value={4}
        bgColor="bg-yellow-50"
        borderColor="border-yellow-200"
        valueClassName="text-2xl text-yellow-700 font-bold"
        titleClassName="text-sm text-yellow-600 font-medium"
        icon={AlertTriangle}
        iconSize={24}
        iconClassName="text-yellow-600"
      />
    </div>
  );
}
