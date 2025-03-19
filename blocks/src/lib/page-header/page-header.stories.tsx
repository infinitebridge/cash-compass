import type { Meta, StoryObj } from '@storybook/react';
import PageHeader from './page-header';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Receipt, DollarSign, ReceiptText } from 'lucide-react';
import PageHeaderDocs from './page-header.mdx';
const meta: Meta<typeof PageHeader> = {
  component: PageHeader,

  title: 'Components/Page/Header',
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    selectedPeriod: {
      control: 'select',
      options: ['march', 'february', 'january', 'q1', 'ytd'],
    },
    onPeriodChange: { action: 'period changed' },
    actionButtonColor: { control: 'text' },
    actionButtonLabel: { control: 'text' },
    className: { control: 'text' },
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        page: PageHeaderDocs,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PageHeader>;

// Sample time periods for stories
const sampleTimePeriods = [
  { value: 'march', label: 'March 2025' },
  { value: 'february', label: 'February 2025' },
  { value: 'january', label: 'January 2025' },
  { value: 'q1', label: 'Q1 2025' },
  { value: 'ytd', label: 'Year-to-date' },
];

// Sample dropdown items
const sampleDropdownItems = [
  {
    label: 'New Expense',
    icon: <Receipt className="h-4 w-4 mr-2" />,
    iconColor: 'text-blue-500',
    onClick: () => console.log('New expense clicked'),
  },
  {
    label: 'New Revenue',
    icon: <DollarSign className="h-4 w-4 mr-2" />,
    iconColor: 'text-green-500',
    onClick: () => console.log('New revenue clicked'),
  },
  {
    label: 'New Invoice',
    icon: <ReceiptText className="h-4 w-4 mr-2" />,
    iconColor: 'text-purple-500',
    onClick: () => console.log('New invoice clicked'),
  },
];

export const Default: Story = {
  args: {
    title: 'Financial Dashboard',
    selectedPeriod: 'march',
    timePeriods: sampleTimePeriods,
    actionButtonLabel: 'New Transaction',
    actionButtonColor: 'bg-blue-600 hover:bg-blue-700',
    dropdownItems: sampleDropdownItems,
  },
};

export const WithoutDropdown: Story = {
  args: {
    title: 'Expense Report',
    selectedPeriod: 'ytd',
    timePeriods: sampleTimePeriods,
    dropdownItems: [], // No dropdown items
  },
};

export const WithoutTimePeriod: Story = {
  args: {
    title: 'User Settings',
    timePeriods: [], // No time periods
    actionButtonLabel: 'Add User',
    actionButtonColor: 'bg-green-600 hover:bg-green-700',
    dropdownItems: [
      {
        label: 'Add Admin',
        icon: <Receipt className="h-4 w-4 mr-2" />,
        iconColor: 'text-blue-500',
        onClick: () => console.log('Add admin clicked'),
      },
      {
        label: 'Add Manager',
        icon: <DollarSign className="h-4 w-4 mr-2" />,
        iconColor: 'text-green-500',
        onClick: () => console.log('Add manager clicked'),
      },
    ],
  },
};

export const CustomStyling: Story = {
  args: {
    title: 'Revenue Dashboard',
    selectedPeriod: 'q1',
    timePeriods: sampleTimePeriods,
    actionButtonLabel: 'Add Revenue',
    actionButtonColor: 'bg-emerald-600 hover:bg-emerald-700',
    dropdownItems: sampleDropdownItems.filter(
      (item) => item.label !== 'New Expense'
    ),
    className: 'border-b pb-4',
  },
};

export const InteractiveTest: Story = {
  args: {
    title: 'Interactive Dashboard',
    selectedPeriod: 'march',
    timePeriods: sampleTimePeriods,
    actionButtonLabel: 'New Transaction',
    actionButtonColor: 'bg-blue-600 hover:bg-blue-700',
    dropdownItems: sampleDropdownItems,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Check if title is rendered correctly
    expect(canvas.getByText('Interactive Dashboard')).toBeTruthy();

    // Check if time period selector is rendered
    const periodSelector = canvas.getByRole('combobox');
    expect(periodSelector).toBeTruthy();

    // Test changing time period
    await userEvent.selectOptions(periodSelector, 'february');
    expect(args.onPeriodChange).toHaveBeenCalledWith('february');

    // Test dropdown button
    const dropdownButton = canvas.getByText('New Transaction');
    expect(dropdownButton).toBeTruthy();

    // Test opening dropdown
    await userEvent.click(dropdownButton);

    // Check if dropdown items are visible
    expect(canvas.getByText('New Expense')).toBeTruthy();
    expect(canvas.getByText('New Revenue')).toBeTruthy();
    expect(canvas.getByText('New Invoice')).toBeTruthy();

    // Test clicking a dropdown item
    await userEvent.click(canvas.getByText('New Expense'));
    // The dropdown should close after clicking an item
  },
};

export const ResponsiveTest: Story = {
  args: {
    ...Default.args,
    title: 'Responsive Header',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
