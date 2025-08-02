import React, { ReactNode } from 'react';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card';
import { TrendingUpIcon, TrendingDownIcon } from 'lucide-react';
import clsx from 'clsx';

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

  /** Optional amount change value (for cases like "$15,230 this month") */
  amountChange?: string | number;

  /** Optional direction for amount change (up or down) */
  amountChangeDirection?: 'up' | 'down';

  /** Optional action text to replace "need action" in secondary labels */
  actionText?: string;

  /** Tailwind classes for the title */
  titleClassName?: string;

  /** Tailwind classes for the primary value */
  valueClassName?: string;

  /** Tailwind classes for the subtitle */
  subtitleClassName?: string;

  /** Tailwind classes for the trend text */
  trendClassName?: string;

  /** Tailwind classes for the trend label */
  trendLabelClassName?: string;

  /** Tailwind classes for the secondary value */
  secondaryValueClassName?: string;

  /** Tailwind classes for the secondary label */
  secondaryLabelClassName?: string;

  /** Tailwind classes for the action text */
  actionTextClassName?: string;

  /** Tailwind classes for the amount change text */
  amountChangeClassName?: string;

  /** Optional CSS class for additional styling */
  className?: string;

  /** Optional onClick handler for making the card interactive */
  onClick?: () => void;

  /** Optional custom trend indicator (replaces the default trending icons) */
  customTrendIndicator?: ReactNode;

  /** Optional custom secondary content (overrides default secondary display) */
  customSecondaryContent?: ReactNode;

  /** Optional flag to show secondary value and label inline */
  inlineSecondary?: boolean;
}

/**
 * StatCard - A reusable component for displaying metrics and statistics
 *
 * This component can be used to display various types of statistical information
 * with support for trends, secondary values, and comprehensive styling options.
 */
export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  trend,
  trendLabel,
  secondaryValue,
  secondaryLabel,
  amountChange,
  amountChangeDirection = 'up',
  actionText,
  titleClassName,
  valueClassName,
  subtitleClassName,
  trendClassName,
  trendLabelClassName,
  secondaryValueClassName,
  secondaryLabelClassName,
  actionTextClassName,
  amountChangeClassName,
  className = '',
  onClick,
  customTrendIndicator,
  customSecondaryContent,
  inlineSecondary = false,
}) => {
  // Helper function to get text classes with defaults
  const getTextClasses = (
    customClassName?: string,
    defaultClassName = 'text-gray-900'
  ): string => {
    return clsx(customClassName || defaultClassName);
  };

  // Determine default colors based on context
  const getDefaultTrendColor = (): string => {
    if (trend === undefined || trend === null) return '';
    return trend > 0 ? 'text-green-600' : 'text-red-600';
  };

  const getDefaultAmountChangeColor = (): string => {
    return amountChangeDirection === 'up' ? 'text-green-500' : 'text-red-500';
  };

  // Process secondary label with action text replacement and styling
  const processSecondaryLabel = (label: string): ReactNode => {
    if (actionText && label.includes('need action')) {
      const parts = label.split('need action');
      const beforeAction = parts[0];
      const afterAction = parts[1] || '';

      const actionClasses = getTextClasses(
        actionTextClassName,
        'text-red-500 font-medium'
      );

      const secondaryClasses = getTextClasses(
        secondaryLabelClassName,
        'text-muted-foreground'
      );

      return (
        <>
          <span className={secondaryClasses}>{beforeAction}</span>
          <span className={actionClasses}>{actionText}</span>
          {afterAction && (
            <span className={secondaryClasses}>{afterAction}</span>
          )}
        </>
      );
    }
    return label;
  };

  // Render secondary content
  const renderSecondaryContent = () => {
    // If custom secondary content is provided, use it
    if (customSecondaryContent) {
      return customSecondaryContent;
    }

    // Case 1: Display trend percentage with icon
    if (trend !== undefined && !amountChange) {
      return (
        <div className="line-clamp-1 flex gap-2">
          <span
            className={clsx(
              'font-medium',
              getTextClasses(trendClassName, getDefaultTrendColor())
            )}
          >
            {customTrendIndicator ||
              (trend > 0 ? (
                <TrendingUpIcon className="size-4 inline mr-1" />
              ) : (
                <TrendingDownIcon className="size-4 inline mr-1" />
              ))}
            {Math.abs(trend)}%
          </span>
          {trendLabel && (
            <span
              className={getTextClasses(
                trendLabelClassName,
                'text-muted-foreground'
              )}
            >
              {trendLabel}
            </span>
          )}
        </div>
      );
    }

    // Case 2: Display amount change (like "$15,230 this month")
    if (amountChange) {
      return (
        <div className="line-clamp-1 flex items-center gap-2">
          <span
            className={clsx(
              'font-medium',
              getTextClasses(
                amountChangeClassName,
                getDefaultAmountChangeColor()
              )
            )}
          >
            {amountChangeDirection === 'up' ? (
              <TrendingUpIcon className="size-4 inline mr-1" />
            ) : (
              <TrendingDownIcon className="size-4 inline mr-1" />
            )}
            {amountChange}
          </span>
          {secondaryLabel && (
            <span
              className={getTextClasses(
                secondaryLabelClassName,
                'text-muted-foreground'
              )}
            >
              {processSecondaryLabel(secondaryLabel)}
            </span>
          )}
        </div>
      );
    }

    // Case 3: Display secondary value with label
    if (secondaryValue !== undefined) {
      if (inlineSecondary) {
        return (
          <div
            className={clsx(
              'line-clamp-1',
              getTextClasses(secondaryLabelClassName, 'text-muted-foreground')
            )}
          >
            <span
              className={getTextClasses(secondaryValueClassName, 'font-medium')}
            >
              {secondaryValue}
            </span>{' '}
            {processSecondaryLabel(secondaryLabel || '')}
          </div>
        );
      }
      return (
        <div
          className={clsx(
            'line-clamp-1',
            getTextClasses(secondaryLabelClassName, 'text-muted-foreground')
          )}
        >
          <span
            className={getTextClasses(secondaryValueClassName, 'font-medium')}
          >
            {secondaryValue}
          </span>{' '}
          {processSecondaryLabel(secondaryLabel || '')}
        </div>
      );
    }

    // Case 4: Display subtitle alone
    if (subtitle) {
      return (
        <div
          className={getTextClasses(subtitleClassName, 'text-muted-foreground')}
        >
          {subtitle}
        </div>
      );
    }

    return null;
  };

  return (
    <Card
      className={`@container/card ${className} ${
        onClick ? 'cursor-pointer hover:bg-gray-50' : ''
      }`}
      onClick={onClick}
    >
      <CardHeader className="p-4">
        <CardDescription
          className={clsx(
            'line-clamp-1 flex gap-2 font-medium',
            getTextClasses(titleClassName, 'text-gray-700')
          )}
        >
          {title}
        </CardDescription>
        <CardTitle
          className={clsx(
            '@[250px]/card:text-3xl text-2xl font-semibold tabular-nums',
            getTextClasses(valueClassName, 'text-gray-900')
          )}
        >
          {value}
        </CardTitle>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1 text-sm pb-4 -mt-2">
        {renderSecondaryContent()}
      </CardFooter>
    </Card>
  );
};
