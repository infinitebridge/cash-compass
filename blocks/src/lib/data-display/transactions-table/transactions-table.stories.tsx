import type { Meta, StoryObj } from '@storybook/react';
import { TransactionsTable, type Transaction } from '@cash-compass/blocks';

// Mock data (same as in your code)
const transactions: Transaction[] = [
  {
    id: '1',
    date: 'Mar 18',
    type: 'Revenue',
    description: 'XYZ Corp Monthly Retainer',
    category: 'Services',
    amount: 5000.0,
    status: 'Invoiced',
    actions: ['Record Payment'],
  },
  {
    id: '2',
    date: 'Mar 17',
    type: 'Expense',
    description: 'Adobe Creative Cloud',
    category: 'Software',
    amount: 59.99,
    status: 'Paid',
    actions: [],
  },
  {
    id: '3',
    date: 'Mar 15',
    type: 'Revenue',
    description: 'Product License - ABC Inc',
    category: 'Product Sales',
    amount: 12500.0,
    status: 'Paid',
    actions: [],
  },
  {
    id: '4',
    date: 'Mar 15',
    type: 'Expense',
    description: 'Conference Travel to Boston',
    category: 'Travel',
    amount: 1247.88,
    status: 'Approved',
    actions: [],
  },
  {
    id: '5',
    date: 'Mar 10',
    type: 'Revenue',
    description: 'Consulting - DEF Corp',
    category: 'Services',
    amount: 8750.0,
    status: 'Overdue',
    actions: ['Send Reminder'],
  },
];

// Meta configuration for the component
const meta: Meta<typeof TransactionsTable> = {
  title: 'Data Display/transactions-table',
  component: TransactionsTable,
  parameters: {
    layout: 'centered', // Center the component in the Storybook canvas
  },
  tags: ['autodocs'], // Automatically generate docs from PropTypes or TypeScript types
  argTypes: {
    data: {
      control: 'object',
      description: 'Array of transaction objects to display in the table',
    },
  },
};

export default meta;

type Story = StoryObj<typeof TransactionsTable>;

// Default story
export const Default: Story = {
  args: {
    data: transactions,
  },
};

// Empty state story
export const Empty: Story = {
  args: {
    data: [],
  },
};

// Single row story
export const SingleRow: Story = {
  args: {
    data: [transactions[0]],
  },
};

// Mixed statuses story
export const MixedStatuses: Story = {
  args: {
    data: transactions.filter((t) =>
      ['Invoiced', 'Paid', 'Overdue'].includes(t.status)
    ),
  },
};
