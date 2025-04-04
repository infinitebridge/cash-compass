import { StatCard } from '@cash-compass/ui/stat-card';
import { Meta, StoryFn } from '@storybook/react';
import { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: number;
  trendLabel?: string;
  secondaryValue?: string | number;
  secondaryLabel?: string;
  valueColor?: string;
  secondaryValueColor?: string;
  className?: string;
  onClick?: () => void;
  customTrendIndicator?: ReactNode;
  amountChange?: string | number;
  amountChangeDirection?: 'up' | 'down';
}

// Storybook Meta Configuration
export default {
  title: 'Layout/stat-card/StatCard',
  component: StatCard,
  argTypes: {
    title: {
      control: 'text',
      description: 'The title displayed at the top of the card',
    },
    value: {
      control: 'text',
      description: 'The primary value displayed prominently',
    },
    subtitle: { control: 'text', description: 'Optional subtitle text' },
    trend: {
      control: 'number',
      description: 'Trend percentage (positive for up, negative for down)',
    },
    trendLabel: {
      control: 'text',
      description: 'Label to display next to the trend percentage',
    },
    secondaryValue: {
      control: 'text',
      description: 'Secondary value to display at the bottom',
    },
    secondaryLabel: {
      control: 'text',
      description: 'Label for the secondary value',
    },
    valueColor: {
      control: 'text',
      description: 'Tailwind CSS class for primary value color',
    },
    secondaryValueColor: {
      control: 'text',
      description: 'Tailwind CSS class for secondary value color',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class for styling',
    },
    onClick: { action: 'clicked', description: 'Optional click handler' },
    customTrendIndicator: {
      control: 'object',
      description: 'Custom trend indicator (replaces default icons)',
    },
    amountChange: {
      control: 'text',
      description: 'Amount change value (e.g., "$15,230 this month")',
    },
    amountChangeDirection: {
      control: 'select',
      options: ['up', 'down'],
      description: 'Direction for amount change',
    },
  },
} as Meta<StatCardProps>;

// Template for reusable stories
const Template: StoryFn<StatCardProps> = (args: any) => <StatCard {...args} />;

// Default Story
export const Default = Template.bind({});
Default.args = {
  title: 'Total Users',
  value: '1,234',
};

// With Subtitle
export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  title: 'Total Users',
  value: '1,234',
  subtitle: 'Active accounts this month',
};

// With Upward Trend
export const WithUpwardTrend = Template.bind({});
WithUpwardTrend.args = {
  title: 'Revenue',
  value: '$45,678',
  trend: 12.5,
  trendLabel: 'since last month',
};

// With Downward Trend
export const WithDownwardTrend = Template.bind({});
WithDownwardTrend.args = {
  title: 'Bounce Rate',
  value: '32%',
  trend: -8.3,
  trendLabel: 'since last week',
};

// With Secondary Value
export const WithSecondaryValue = Template.bind({});
WithSecondaryValue.args = {
  title: 'New Signups',
  value: '892',
  secondaryValue: '1,245',
  secondaryLabel: 'total users',
};

// With Amount Change (Up)
export const WithAmountChangeUp = Template.bind({});
WithAmountChangeUp.args = {
  title: 'Sales',
  value: '$78,900',
  amountChange: '$15,230',
  amountChangeDirection: 'up',
  secondaryLabel: 'this month',
};

// With Amount Change (Down)
export const WithAmountChangeDown = Template.bind({});
WithAmountChangeDown.args = {
  title: 'Expenses',
  value: '$23,450',
  amountChange: '$4,120',
  amountChangeDirection: 'down',
  secondaryLabel: 'this quarter',
};

// With Custom Colors
export const WithCustomColors = Template.bind({});
WithCustomColors.args = {
  title: 'Profit',
  value: '$12,345',
  valueColor: 'text-blue-600',
  trend: 7.8,
  secondaryValue: '$1,200',
  secondaryValueColor: 'text-purple-500',
  secondaryLabel: 'bonus',
};

// Interactive Card
export const Interactive = Template.bind({});
Interactive.args = {
  title: 'Clicks',
  value: '3,210',
  trend: 5.2,
  trendLabel: 'since yesterday',
  onClick: () => alert('Card clicked!'),
};

// With Custom Trend Indicator
export const WithCustomTrendIndicator = Template.bind({});
WithCustomTrendIndicator.args = {
  title: 'Engagement',
  value: '67%',
  trend: 3.1,
  customTrendIndicator: <span className="text-yellow-500">★</span>,
  trendLabel: 'this week',
};
