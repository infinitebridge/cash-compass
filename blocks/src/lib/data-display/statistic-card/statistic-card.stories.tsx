import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { StatisticCard } from '@cash-compass/ui';
import {
  DollarSign,
  Users,
  TrendingUp,
  ShoppingCart,
  AlertTriangle,
  FileText,
} from 'lucide-react';

const meta: Meta<typeof StatisticCard> = {
  title: 'Data Display/statistic-card',

  component: StatisticCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible card component for displaying financial and metric statistics.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Card title',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      control: 'text',
      description: 'Main statistic value',
      table: {
        type: { summary: 'string | number' },
      },
    },
    subtitle: {
      control: 'text',
      description: 'Optional subtitle text',
      table: {
        type: { summary: 'string' },
      },
    },
    trend: {
      control: { type: 'select', options: ['up', 'down', undefined] },
      description: 'Optional trend indicator',
      table: {
        type: { summary: "'up' | 'down'" },
        defaultValue: { summary: 'undefined' },
      },
    },
    trendValue: {
      control: 'text',
      description: 'Optional trend value',
      table: {
        type: { summary: 'string | number' },
      },
    },
    trendLabel: {
      control: 'text',
      description: 'Optional trend label',
      table: {
        type: { summary: 'string' },
      },
    },
    bgColor: {
      control: 'text',
      description: 'Background color Tailwind class',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'bg-white' },
      },
    },
    borderColor: {
      control: 'text',
      description: 'Border color Tailwind class',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'border-gray-200' },
      },
    },
    icon: {
      control: {
        type: 'select',
        options: [
          'None',
          'DollarSign',
          'Users',
          'TrendingUp',
          'ShoppingCart',
          'AlertTriangle',
          'FileText',
        ],
      },
      mapping: {
        None: undefined,
        DollarSign: DollarSign,
        Users: Users,
        TrendingUp: TrendingUp,
        ShoppingCart: ShoppingCart,
        AlertTriangle: AlertTriangle,
        FileText: FileText,
      },
      description: 'Optional Lucide React icon component',
      table: {
        type: { summary: 'React.ElementType' },
      },
    },
    iconSize: {
      control: { type: 'number', min: 12, max: 48, step: 2 },
      description: 'Optional icon size in pixels',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '20' },
      },
    },
    iconClassName: {
      control: 'text',
      description: 'Optional icon color className',
      table: {
        type: { summary: 'string' },
      },
    },
    className: {
      control: 'text',
      description: 'Container className',
      table: {
        type: { summary: 'string' },
      },
    },
    titleClassName: {
      control: 'text',
      description: 'Title className',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text-sm text-gray-600 font-medium' },
      },
    },
    valueClassName: {
      control: 'text',
      description: 'Value className',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text-xl text-gray-900 font-bold' },
      },
    },
    subtitleClassName: {
      control: 'text',
      description: 'Subtitle className',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text-sm text-gray-600' },
      },
    },
    children: {
      control: { type: 'text' },
      description: 'Optional additional content',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatisticCard>;

// Base StatisticCard story
export const Default: Story = {
  args: {
    title: 'Total Revenue',
    value: '$87,450',
    subtitle: 'March 2025',
  },
};

// StatisticCard with positive trend
export const WithPositiveTrend: Story = {
  args: {
    title: 'Total Revenue',
    value: '$87,450',
    trend: 'up',
    trendValue: '8.2%',
    trendLabel: 'vs. February',
  },
};

// StatisticCard with negative trend
export const WithNegativeTrend: Story = {
  args: {
    title: 'Customer Churn',
    value: '4.8%',
    trend: 'down',
    trendValue: '2.1%',
    trendLabel: 'from last month',
  },
};

// StatisticCard with icon
export const WithIcon: Story = {
  args: {
    title: 'Total Revenue',
    value: '$87,450',
    trend: 'up',
    trendValue: '8.2%',
    trendLabel: 'vs. last month',
    icon: DollarSign,
    iconClassName: 'text-green-600',
  },
};

// StatisticCard with custom styling (success)
export const SuccessVariant: Story = {
  args: {
    title: 'Conversion Rate',
    value: '24.8%',
    trend: 'up',
    trendValue: '3.2%',
    trendLabel: 'vs. last month',
    icon: TrendingUp,
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    valueClassName: 'text-2xl font-bold text-green-700',
    iconClassName: 'text-green-600',
  },
};

// StatisticCard with custom styling (warning)
export const WarningVariant: Story = {
  args: {
    title: 'Pending Approvals',
    value: '7',
    subtitle: '$4,580 awaiting review',
    icon: AlertTriangle,
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    valueClassName: 'text-2xl font-bold text-yellow-700',
    iconClassName: 'text-yellow-600',
  },
};

// StatisticCard with custom styling (danger)
export const DangerVariant: Story = {
  args: {
    title: 'Overdue Invoices',
    value: '3',
    subtitle: '$7,750 at risk',
    icon: FileText,
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    valueClassName: 'text-2xl font-bold text-red-700',
    iconClassName: 'text-red-600',
  },
};

// StatisticCard with custom styling (primary)
export const PrimaryVariant: Story = {
  args: {
    title: 'Active Users',
    value: '1,247',
    trend: 'up',
    trendValue: '12%',
    trendLabel: 'new signups',
    icon: Users,
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    valueClassName: 'text-2xl font-bold text-blue-700',
    iconClassName: 'text-blue-600',
  },
};

// StatisticCard with additional content
export const WithProgressBar: Story = {
  args: {
    title: 'Year-to-Date',
    value: '$245,780',
    subtitle: '73% of quarterly target',
    bgColor: 'bg-white',
    borderColor: 'border-gray-200',
    children: (
      <div className="mt-3 pt-3 border-t border-gray-200">
        <div className="text-xs text-gray-500">Progress to goal:</div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: '73%' }}
          ></div>
        </div>
      </div>
    ),
  },
};

// StatisticCard with custom size
export const CompactSize: Story = {
  args: {
    title: 'Total Orders',
    value: '256',
    trend: 'up',
    trendValue: '12',
    trendLabel: 'new today',
    icon: ShoppingCart,
    iconSize: 16,
    titleClassName: 'text-xs text-gray-600 font-medium',
    valueClassName: 'text-lg font-bold text-gray-900',
    className: 'max-w-[180px]',
  },
};

// Grid of StatisticCards
export const GridLayout: Story = {
  render: (args) => (
    <div className="grid grid-cols-2 gap-4 w-full max-w-3xl">
      <StatisticCard
        title="Total Revenue"
        value="$87,450"
        trend="up"
        trendValue="8.2%"
        trendLabel="vs. last month"
        icon={DollarSign}
        bgColor="bg-green-50"
        borderColor="border-green-200"
        valueClassName="text-2xl font-bold text-green-700"
        iconClassName="text-green-600"
      />
      <StatisticCard
        title="Total Expenses"
        value="$42,385"
        trend="up"
        trendValue="4.5%"
        trendLabel="vs. last month"
        icon={ShoppingCart}
        bgColor="bg-blue-50"
        borderColor="border-blue-200"
        valueClassName="text-2xl font-bold text-blue-700"
        iconClassName="text-blue-600"
      />
      <StatisticCard
        title="Active Users"
        value="1,247"
        trend="up"
        trendValue="12%"
        trendLabel="new signups"
        icon={Users}
        bgColor="bg-purple-50"
        borderColor="border-purple-200"
        valueClassName="text-2xl font-bold text-purple-700"
        iconClassName="text-purple-600"
      />
      <StatisticCard
        title="Overdue Invoices"
        value="3"
        subtitle="$7,750 at risk"
        icon={FileText}
        bgColor="bg-red-50"
        borderColor="border-red-200"
        valueClassName="text-2xl font-bold text-red-700"
        iconClassName="text-red-600"
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
