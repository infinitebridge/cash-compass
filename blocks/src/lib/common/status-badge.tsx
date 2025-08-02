import { Badge } from '@cash-compass/ui/badge';
import clsx from 'clsx';
import type { LucideIcon } from 'lucide-react';

// Define the status color mapping
export const statusColors = {
  invoiced: 'bg-blue-50 text-blue-700 border-blue-200',
  paid: 'bg-green-50 text-green-700 border-green-200',
  approved: 'bg-green-50 text-green-700 border-green-200',
  pending: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  rejected: 'bg-red-50 text-red-700 border-red-200',
  overdue: 'bg-red-50 text-red-700 border-red-200',
  draft: 'bg-gray-50 text-gray-700 border-gray-200',
  expected: 'bg-blue-50 text-blue-700 border-blue-200',
  sent: 'bg-blue-50 text-blue-700 border-blue-200',
  received: 'bg-green-50 text-green-700 border-green-200',
} as const;

export type StatusType = keyof typeof statusColors;

interface StatusBadgeProps {
  status: StatusType;
  icon?: LucideIcon;
  className?: string;
  showIcon?: boolean;
  capitalize?: boolean;
}

export function StatusBadge({
  status,
  icon: Icon,
  className,
  showIcon = true,
  capitalize = true,
}: StatusBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={clsx(
        'py-1 [&>svg]:size-3.5 flex items-center gap-1',
        statusColors[status] || 'border-gray-200',
        className
      )}
    >
      {showIcon && Icon && <Icon className="shrink-0" />}
      <span className={capitalize ? 'capitalize' : ''}>{status}</span>
    </Badge>
  );
}

// Helper function to get status color classes
export function getStatusColor(status: StatusType): string {
  return statusColors[status] || 'border-gray-200';
}

// Helper function to get status color classes with custom fallback
export function getStatusColorWithFallback(
  status: string,
  fallback = 'border-gray-200'
): string {
  return statusColors[status as StatusType] || fallback;
}
