import React, { ReactNode } from 'react';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card';
import { TrendingUpIcon, TrendingDownIcon } from 'lucide-react';

interface StatCardProps {
  /** The title displayed at the top of the card */
  title: string;

  /** The primary value displayed prominently in the card */
  value: string | number;

  /** Optional subtitle text */
  subtitle?: string;

  /** Optional trend percentage (positive for upward trend, negative for downward) */
  trend?: number;

  /** Optional label to display next to the trend percentage */
  trendLabel?: string;

  /** Optional secondary value to display at the bottom */
  secondaryValue?: string | number;

  /** Optional label to accompany the secondary value */
  secondaryLabel?: string;

  /** Optional color class for the primary value (Tailwind CSS class) */
  valueColor?: string;

  /** Optional color class for the secondary value */
  secondaryValueColor?: string;

  /** Optional CSS class for additional styling */
  className?: string;

  /** Optional onClick handler for making the card interactive */
  onClick?: () => void;

  /** Optional custom trend indicator (replaces the default trending icons) */
  customTrendIndicator?: ReactNode;

  /** Optional amount change value (for cases like "$15,230 this month") */
  amountChange?: string | number;

  /** Optional direction for amount change (up or down) */
  amountChangeDirection?: 'up' | 'down';
}

/**
 * StatCard - A reusable component for displaying metrics and statistics
 *
 * This component can be used to display various types of statistical information
 * with support for trends, secondary values, and customizable styling.
 */
export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  trend,
  trendLabel,
  secondaryValue,
  secondaryLabel,
  valueColor,
  secondaryValueColor,
  className = '',
  onClick,
  customTrendIndicator,
  amountChange,
  amountChangeDirection = 'up',
}) => {
  // Determine trend color
  const getTrendColor = (): string => {
    if (trend === undefined || trend === null) return '';
    return trend > 0 ? 'text-green-600' : 'text-red-600';
  };

  // Determine amount change color
  const getAmountChangeColor = (): string => {
    if (secondaryValueColor) return secondaryValueColor;
    return amountChangeDirection === 'up' ? 'text-green-500' : 'text-red-500';
  };

  // Determine value color
  const getValueColor = (): string => {
    if (valueColor) return valueColor;
    return 'text-gray-900';
  };

  return (
    <Card
      className={`@container/card ${className} ${
        onClick ? 'cursor-pointer hover:bg-gray-50' : ''
      }`}
      onClick={onClick}
    >
      <CardHeader className="p-4">
        <CardDescription className="line-clamp-1 flex gap-2 font-medium">
          {title}
        </CardDescription>
        <CardTitle
          className={`@[250px]/card:text-3xl text-2xl font-semibold tabular-nums ${getValueColor()}`}
        >
          {value}
        </CardTitle>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1 text-sm pb-4 -mt-2">
        {/* Case 1: Display trend percentage with icon */}
        {trend !== undefined && !amountChange && (
          <div className="line-clamp-1 flex gap-2">
            <span className={`font-medium ${getTrendColor()}`}>
              {customTrendIndicator ||
                (trend > 0 ? (
                  <TrendingUpIcon className="size-4 inline mr-1" />
                ) : (
                  <TrendingDownIcon className="size-4 inline mr-1" />
                ))}
              {Math.abs(trend)}%
            </span>
            {trendLabel && (
              <span className="text-muted-foreground">{trendLabel}</span>
            )}
          </div>
        )}

        {/* Case 2: Display amount change (like "$15,230 this month") */}
        {amountChange && (
          <div className="line-clamp-1 flex items-center gap-2">
            <span className={`font-medium ${getAmountChangeColor()}`}>
              {amountChangeDirection === 'up' ? (
                <TrendingUpIcon className="size-4 inline mr-1" />
              ) : (
                <TrendingDownIcon className="size-4 inline mr-1" />
              )}
              {amountChange}
            </span>
            {secondaryLabel && (
              <span className="text-muted-foreground">{secondaryLabel}</span>
            )}
          </div>
        )}

        {/* Case 3: Display secondary value without trend indicator */}
        {secondaryValue !== undefined && !amountChange && (
          <div className="text-muted-foreground">
            {secondaryValue} {secondaryLabel}
          </div>
        )}

        {/* Case 4: Display subtitle alone */}
        {subtitle &&
          trend === undefined &&
          secondaryValue === undefined &&
          !amountChange && (
            <div className="text-muted-foreground">{subtitle}</div>
          )}
      </CardFooter>
    </Card>
  );
};
