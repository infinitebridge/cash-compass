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
} from '@cash-compass/ui/index';

// New interface for action buttons
interface ActionButton {
  /** Button label */
  label: string;

  /** Button icon */
  icon?: ReactNode;

  /** Button click handler */
  onClick?: () => void;

  /** Button href for links */
  href?: string;

  /** Button variant/style */
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'outline';

  /** Button size */
  size?: 'sm' | 'md' | 'lg';

  /** Whether button is disabled */
  disabled?: boolean;

  /** Custom button className */
  className?: string;

  /** Custom icon color */
  iconColor?: string;
}

interface PageHeaderProps {
  /** The title to display */
  title: string;

  /** Selected time period */
  selectedPeriod?: string;

  /** Handler for time period changes */
  onPeriodChange?: (period: string) => void;

  /** Available time periods */
  timePeriods?: Array<{ value: string; label: string }>;

  // Legacy dropdown props (maintained for backward compatibility)
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

  // New action button props
  /** Action buttons to display (alternative to dropdown) */
  actionButtons?: ActionButton[];

  /** Whether to show action buttons instead of dropdown */
  useActionButtons?: boolean;

  /** Layout for action buttons */
  actionButtonsLayout?: 'horizontal' | 'vertical';

  /** Additional classes for styling */
  className?: string;
}

/**
 * PageHeader - A consistent header component for dashboard pages
 *
 * Includes a title, optional time period selector, and flexible actions (buttons or dropdown)
 *
 * @example
 * // With dropdown (legacy)
 * <PageHeader
 *   title="Revenue Management"
 *   dropdownItems={[{label: "New Revenue", onClick: handleNewRevenue}]}
 * />
 *
 * // With action buttons (new)
 * <PageHeader
 *   title="Revenue Management"
 *   useActionButtons={true}
 *   actionButtons={[
 *     {label: "New Revenue", variant: "primary", onClick: handleNewRevenue},
 *     {label: "Export", variant: "outline", onClick: handleExport}
 *   ]}
 * />
 */
export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  selectedPeriod,
  onPeriodChange,
  timePeriods = [],
  actionButtonLabel = '',
  actionButtonColor = 'bg-blue-600 hover:bg-blue-700',
  dropdownItems = [],
  actionButtons = [],
  useActionButtons = false,
  actionButtonsLayout = 'horizontal',
  className = '',
}) => {
  const handlePeriodChange = (value: string) => {
    if (onPeriodChange) {
      onPeriodChange(value);
    }
  };

  // Get button variant styles
  const getButtonVariantStyles = (
    variant: ActionButton['variant'] = 'primary',
    size: ActionButton['size'] = 'md'
  ) => {
    const variants = {
      primary: 'bg-blue-600 hover:bg-blue-700 text-white',
      secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
      danger: 'bg-red-600 hover:bg-red-700 text-white',
      success: 'bg-green-600 hover:bg-green-700 text-white',
      outline: 'border border-gray-300 bg-white hover:bg-gray-50 text-gray-700',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base',
    };

    return `${variants[variant]} ${sizes[size]}`;
  };

  // Render action buttons
  const renderActionButtons = () => {
    if (!useActionButtons || actionButtons.length === 0) return null;

    const buttonElements = actionButtons.map((button, index) => {
      const ButtonComponent = (
        <Button
          key={index}
          onClick={button.onClick}
          disabled={button.disabled}
          className={`
            ${
              button.className ||
              getButtonVariantStyles(button.variant, button.size)
            }
            ${button.disabled ? 'opacity-50 cursor-not-allowed' : ''}
            flex items-center justify-center
          `}
        >
          {button.icon && (
            <span
              className={`${button.iconColor || ''} ${
                button.label ? 'mr-2' : ''
              }`}
            >
              {button.icon}
            </span>
          )}
          {button.label}
        </Button>
      );

      if (button.href) {
        return (
          <a key={index} href={button.href} className="inline-block">
            {ButtonComponent}
          </a>
        );
      }

      return ButtonComponent;
    });

    return (
      <div
        className={`
        flex 
        ${
          actionButtonsLayout === 'vertical'
            ? 'flex-col space-y-2'
            : 'flex-row space-x-2'
        }
        ${actionButtonsLayout === 'horizontal' ? 'flex-wrap' : ''}
      `}
      >
        {buttonElements}
      </div>
    );
  };

  // Render legacy dropdown
  const renderDropdown = () => {
    if (useActionButtons || dropdownItems.length === 0) return null;

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className={`${actionButtonColor} text-white`}>
            {actionButtonLabel}
            <ChevronDown className="h-3 w-3 ml-1" />
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
    );
  };

  return (
    <div
      className={`flex flex-col md:flex-row justify-between items-start md:items-center mb-6 ${className}`}
    >
      <h1 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">{title}</h1>
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full md:w-auto">
        {/* Time Period Selector */}
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

        {/* Action Buttons or Dropdown */}
        {renderActionButtons()}
        {renderDropdown()}
      </div>
    </div>
  );
};

// Export the ActionButton type for external use
export type { ActionButton };

// Example usage component
export const PageHeaderExamples = () => {
  const timePeriods = [
    { value: 'march', label: 'March 2025' },
    { value: 'february', label: 'February 2025' },
    { value: 'january', label: 'January 2025' },
    { value: 'q1', label: 'Q1 2025' },
    { value: 'ytd', label: 'Year-to-date' },
  ];

  const dropdownItems = [
    { label: 'New Revenue', onClick: () => alert('New Revenue clicked') },
    { label: 'Export Data', onClick: () => alert('Export clicked') },
    { label: 'Settings', onClick: () => alert('Settings clicked') },
  ];

  const actionButtons: ActionButton[] = [
    {
      label: 'New Revenue',
      variant: 'primary',
      onClick: () => alert('New Revenue clicked'),
    },
    {
      label: 'Export',
      variant: 'outline',
      onClick: () => alert('Export clicked'),
    },
    {
      label: 'Settings',
      variant: 'secondary',
      onClick: () => alert('Settings clicked'),
    },
  ];

  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-900">
          PageHeader Examples
        </h1>

        {/* Legacy Dropdown Example */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">
            Legacy Dropdown (Backward Compatible)
          </h2>
          <PageHeader
            title="Revenue Management"
            selectedPeriod="march"
            timePeriods={timePeriods}
            actionButtonLabel="New Revenue"
            dropdownItems={dropdownItems}
            onPeriodChange={(period) => console.log('Period changed:', period)}
          />
        </div>

        {/* Action Buttons Example */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Action Buttons (New)</h2>
          <PageHeader
            title="Customer Management"
            selectedPeriod="march"
            timePeriods={timePeriods}
            useActionButtons={true}
            actionButtons={actionButtons}
            onPeriodChange={(period) => console.log('Period changed:', period)}
          />
        </div>

        {/* Vertical Layout Example */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">
            Vertical Action Buttons
          </h2>
          <PageHeader
            title="Invoice Management"
            selectedPeriod="march"
            timePeriods={timePeriods}
            useActionButtons={true}
            actionButtons={actionButtons.slice(0, 2)}
            actionButtonsLayout="vertical"
            onPeriodChange={(period) => console.log('Period changed:', period)}
          />
        </div>

        {/* Mixed Variants Example */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Mixed Button Variants</h2>
          <PageHeader
            title="Financial Dashboard"
            useActionButtons={true}
            actionButtons={[
              { label: 'Create', variant: 'primary' },
              { label: 'Export', variant: 'outline' },
              { label: 'Delete', variant: 'danger' },
              { label: 'Archive', variant: 'secondary' },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
