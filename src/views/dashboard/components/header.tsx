import React, { ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@cash-compass/ui';

interface PageHeaderProps {
  /** The title to display */
  title: string;

  /** Selected time period */
  selectedPeriod?: string;

  /** Handler for time period changes */
  onPeriodChange?: (period: string) => void;

  /** Available time periods */
  timePeriods?: Array<{ value: string; label: string }>;

  /** Primary action button label */
  actionButtonLabel?: string;

  /** Primary action button color (tailwind class) */
  actionButtonColor?: string;

  /** Dropdown menu items */
  dropdownItems?: Array<{
    label: string;
    icon?: ReactNode;
    iconColor?: string;
    onClick?: () => void;
    href?: string;
  }>;

  /** Additional classes for styling */
  className?: string;
}

/**
 * PageHeader - A consistent header component for dashboard pages
 *
 * Includes a title, optional time period selector, and action button with dropdown
 */
const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  selectedPeriod,
  onPeriodChange,
  timePeriods = [],
  actionButtonLabel = '',
  actionButtonColor = 'bg-blue-600 hover:bg-blue-700',
  dropdownItems = [],
  className = '',
}) => {
  const handlePeriodChange = (value: string) => {
    if (onPeriodChange) {
      onPeriodChange(value);
    }
  };

  return (
    <div
      className={`flex flex-col md:flex-row justify-between items-start md:items-center mb-6 ${className}`}
    >
      <h1 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">{title}</h1>
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full md:w-auto">
        {timePeriods.length > 0 && (
          <Select value={selectedPeriod} onValueChange={handlePeriodChange}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              {timePeriods.map((period) => (
                <SelectItem key={period.value} value={period.value}>
                  {period.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}

        {dropdownItems.length > 0 && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className={`${actionButtonColor} text-white`}>
                {actionButtonLabel}
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              {dropdownItems.map((item, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={item.onClick}
                  asChild={!!item.href}
                >
                  {item.href ? (
                    <a href={item.href} className="flex items-center w-full">
                      {item.icon && (
                        <span className={`mr-2 ${item.iconColor || ''}`}>
                          {item.icon}
                        </span>
                      )}
                      {item.label}
                    </a>
                  ) : (
                    <span className="flex items-center w-full">
                      {item.icon && (
                        <span className={`mr-2 ${item.iconColor || ''}`}>
                          {item.icon}
                        </span>
                      )}
                      {item.label}
                    </span>
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
