import React from 'react';

/**
 * Props for the StatisticCard component
 */
export interface StatisticCardProps {
  /** Card title (e.g., "Total Receivables") */
  title: string;

  /** Main statistic value (e.g., "$36,580") */
  value: string | number;

  /** Optional subtitle text (e.g., "12 invoices") */
  subtitle?: string;

  /** Optional trend indicator ("up", "down", or undefined) */
  trend?: 'up' | 'down';

  /** Optional trend value (e.g., "8.2%") */
  trendValue?: string | number;

  /** Optional trend label (e.g., "vs. last month") */
  trendLabel?: string;

  /** Background color Tailwind class (e.g., "bg-blue-50") */
  bgColor?: string;

  /** Border color Tailwind class (e.g., "border-blue-200") */
  borderColor?: string;

  /** Container className */
  className?: string;

  /** Title className */
  titleClassName?: string;

  /** Value className */
  valueClassName?: string;

  /** Subtitle className */
  subtitleClassName?: string;

  /** Optional Lucide React icon component */
  icon?: React.ElementType;

  /** Optional icon size in pixels (default: 20) */
  iconSize?: number;

  /** Optional icon color className */
  iconClassName?: string;

  /** Optional additional content */
  children?: React.ReactNode;
}

/**
 * StatisticCard - A flexible card component for displaying financial and metric statistics
 *
 * @example
 * <StatisticCard
 *   title="Total Revenue"
 *   value="$87,450"
 *   subtitle="March 2025"
 *   icon={DollarSign}
 *   bgColor="bg-green-50"
 *   borderColor="border-green-200"
 *   valueClassName="text-green-700 text-2xl font-bold"
 * />
 */
export const StatisticCard = ({
  title,
  value,
  subtitle,
  trend,
  trendValue,
  trendLabel,
  bgColor = 'bg-white',
  borderColor = 'border-gray-200',
  className = '',
  titleClassName = 'text-sm text-gray-600 font-medium',
  valueClassName = 'text-xl text-gray-900 font-bold',
  subtitleClassName = 'text-sm text-gray-600',
  icon: Icon,
  iconSize = 20,
  iconClassName = '',
  children,
}: StatisticCardProps) => {
  // Format numbers with commas if they're numeric
  const formatValue = (val: number | string) => {
    if (typeof val === 'number') {
      return val.toLocaleString();
    }
    return val.toString();
  };

  // Determine trend class
  const getTrendClass = () => {
    switch (trend) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      default:
        return 'text-gray-500';
    }
  };

  // Extract color class from valueClassName for icon if not specified
  const getIconColorClass = () => {
    if (iconClassName) return iconClassName;

    // Try to extract a text color class from valueClassName
    const colorClass = valueClassName
      .split(' ')
      .find((c) => c.startsWith('text-'));
    return colorClass || '';
  };

  return (
    <div
      className={`stat-card rounded-lg shadow-sm p-4 border ${borderColor} ${bgColor} ${className}`}
    >
      <div className="flex justify-between items-start">
        <div>
          <div className={`${titleClassName} mb-1`}>{title}</div>

          <div className={`${valueClassName} mb-1`}>{formatValue(value)}</div>

          {subtitle && <div className={subtitleClassName}>{subtitle}</div>}

          {(trend || trendValue) && (
            <div className="flex items-center mt-1">
              {trend && (
                <span className={`${getTrendClass()} mr-1 flex items-center`}>
                  {trend === 'up' ? (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                  ) : (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  )}
                  {trendValue}
                </span>
              )}
              {trendLabel && (
                <span className="text-xs text-gray-500">{trendLabel}</span>
              )}
            </div>
          )}
        </div>

        {Icon && (
          <div
            className={`h-10 w-10 rounded-full ${bgColor} bg-opacity-70 flex items-center justify-center ${getIconColorClass()}`}
          >
            <Icon size={iconSize} />
          </div>
        )}
      </div>

      {children}
    </div>
  );
};
