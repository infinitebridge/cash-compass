import { Meta, StoryObj } from '@storybook/react';
import { DonutChart } from './donut-chart';

const meta: Meta<typeof DonutChart> = {
  title: 'Data Display/donut-chart',
  component: DonutChart,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A visualization component that displays data in a donut chart with supporting statistics.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title displayed at the top of the chart card',
      table: {
        type: { summary: 'string' },
      },
    },
    statsData: {
      control: 'object',
      description: 'The data to be displayed in the donut chart',
      table: {
        type: { summary: 'array' },
      },
    },
    statsSummary: {
      control: 'object',
      description: 'The summary statistics to be displayed alongside the chart',
      table: {
        type: { summary: 'array' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DonutChart>;

// Example data for expense breakdown
const expenseData = [
  { name: 'Software', value: 32, color: '#EAB308' },
  { name: 'Travel', value: 28, color: '#10B981' },
  { name: 'Marketing', value: 25, color: '#A855F7' },
  { name: 'Office', value: 15, color: '#3B82F6' },
];

const expenseSummary = [
  {
    statsTitle: 'Largest Category',
    name: 'Software & Subscriptions',
    value: '$13,560 (32%)',
  },
  {
    statsTitle: 'Highest Growth',
    name: 'Marketing',
    value: '+18% vs. last month',
    ValueclassName: 'text-green-600',
  },
  {
    statsTitle: 'Pending Approvals',
    name: '7 expenses',
    value: '$4,580 total',
  },
];

// Example data for revenue sources
const revenueData = [
  { name: 'Product Sales', value: 45, color: '#3B82F6' },
  { name: 'Services', value: 35, color: '#10B981' },
  { name: 'Subscriptions', value: 20, color: '#A855F7' },
];

const revenueSummary = [
  {
    statsTitle: 'Most Profitable',
    name: 'Product Sales',
    value: '$39,350 (45%)',
  },
  {
    statsTitle: 'Fastest Growing',
    name: 'Subscriptions',
    value: '+24% vs. last month',
    ValueclassName: 'text-green-600',
  },
  {
    statsTitle: 'Open Invoices',
    name: '12 invoices',
    value: '$36,580 total',
  },
];

// Example data for customer segments
const customerData = [
  { name: 'Enterprise', value: 40, color: '#3B82F6' },
  { name: 'SMB', value: 30, color: '#10B981' },
  { name: 'Startups', value: 20, color: '#A855F7' },
  { name: 'Individual', value: 10, color: '#F97316' },
];

const customerSummary = [
  {
    statsTitle: 'Top Segment',
    name: 'Enterprise',
    value: '40% of revenue',
  },
  {
    statsTitle: 'Fastest Growing',
    name: 'Startups',
    value: '+35% year-over-year',
    ValueclassName: 'text-green-600',
  },
  {
    statsTitle: 'Churn Rate',
    name: 'Individual',
    value: '7.5% (high)',
    ValueclassName: 'text-red-600',
  },
];

export const ExpenseBreakdown: Story = {
  args: {
    title: 'Expense Breakdown',
    statsData: expenseData,
    statsSummary: expenseSummary,
  },
  parameters: {
    docs: {
      description: {
        story:
          'DonutChart displaying expense categories with their respective proportions and highlights.',
      },
    },
  },
};

export const RevenueSources: Story = {
  args: {
    title: 'Revenue Sources',
    statsData: revenueData,
    statsSummary: revenueSummary,
  },
  parameters: {
    docs: {
      description: {
        story:
          'DonutChart showing the distribution of revenue across different business streams.',
      },
    },
  },
};

export const CustomerSegmentation: Story = {
  args: {
    title: 'Customer Segmentation',
    statsData: customerData,
    statsSummary: customerSummary,
  },
  parameters: {
    docs: {
      description: {
        story:
          'DonutChart illustrating customer distribution across different market segments.',
      },
    },
  },
};

export const SmallDataSet: Story = {
  args: {
    title: 'Binary Comparison',
    statsData: [
      { name: 'Active', value: 72, color: '#10B981' },
      { name: 'Inactive', value: 28, color: '#EF4444' },
    ],
    statsSummary: [
      {
        statsTitle: 'Active Accounts',
        name: '72 accounts',
        value: 'Up 5% from last month',
        ValueclassName: 'text-green-600',
      },
      {
        statsTitle: 'Inactive Accounts',
        name: '28 accounts',
        value: 'Down 3% from last month',
        ValueclassName: 'text-green-600',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'DonutChart with just two data points for simple binary comparisons.',
      },
    },
  },
};

export const CustomColors: Story = {
  args: {
    title: 'Custom Branded Colors',
    statsData: [
      { name: 'Segment A', value: 35, color: '#8B5CF6' }, // Purple
      { name: 'Segment B', value: 30, color: '#EC4899' }, // Pink
      { name: 'Segment C', value: 20, color: '#F59E0B' }, // Amber
      { name: 'Segment D', value: 15, color: '#06B6D4' }, // Cyan
    ],
    statsSummary: [
      {
        statsTitle: 'Primary Focus',
        name: 'Segment A',
        value: '35% of total',
      },
      {
        statsTitle: 'Growth Target',
        name: 'Segment D',
        value: '+5% goal this quarter',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'DonutChart with custom brand colors that match your application theme.',
      },
    },
  },
};
