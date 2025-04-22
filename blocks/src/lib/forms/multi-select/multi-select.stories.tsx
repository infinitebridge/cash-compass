import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { FancyMultiSelect } from '@cash-compass/ui/multi-select';
import { User, Tag, Building, DollarSign } from 'lucide-react';
import { Badge } from '@cash-compass/ui/badge';

const meta: Meta<typeof FancyMultiSelect> = {
  title: 'Forms/fancy-multi-select',
  component: FancyMultiSelect,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible multi-select component with badge display and custom rendering options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'object',
      description: 'Array of options with value and label properties',
      table: {
        type: { summary: 'MultiSelectOption[]' },
      },
    },
    value: {
      control: 'object',
      description: 'Controlled selected values',
      table: {
        type: { summary: 'MultiSelectOption[]' },
      },
    },
    defaultValue: {
      control: 'object',
      description: 'Default selected values',
      table: {
        type: { summary: 'MultiSelectOption[]' },
        defaultValue: { summary: '[]' },
      },
    },
    onChange: {
      action: 'changed',
      description: 'Callback when selection changes',
      table: {
        type: { summary: '(selected: MultiSelectOption[]) => void' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no selection',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Select options...' },
      },
    },
    renderOption: {
      description: 'Custom renderer for dropdown options',
      table: {
        type: { summary: '(option: MultiSelectOption) => React.ReactNode' },
      },
    },
    renderBadge: {
      description: 'Custom renderer for selected option badges',
      table: {
        type: {
          summary:
            '(option: MultiSelectOption, onRemove: () => void) => React.ReactNode',
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FancyMultiSelect>;

// Sample options
const categoryOptions = [
  { value: 'income', label: 'Income' },
  { value: 'expenses', label: 'Expenses' },
  { value: 'investments', label: 'Investments' },
  { value: 'savings', label: 'Savings' },
  { value: 'debt', label: 'Debt' },
  { value: 'taxes', label: 'Taxes' },
  { value: 'retirement', label: 'Retirement' },
  { value: 'insurance', label: 'Insurance' },
];

const userOptions = [
  { value: 'alex', label: 'Alex Johnson' },
  { value: 'sam', label: 'Sam Smith' },
  { value: 'jordan', label: 'Jordan Lee' },
  { value: 'taylor', label: 'Taylor Brown' },
  { value: 'morgan', label: 'Morgan Davis' },
  { value: 'casey', label: 'Casey Wilson' },
];

const companyOptions = [
  { value: 'acme', label: 'Acme Corp' },
  { value: 'globex', label: 'Globex Inc' },
  { value: 'initech', label: 'Initech' },
  { value: 'umbrella', label: 'Umbrella Corp' },
  { value: 'stark', label: 'Stark Industries' },
  { value: 'wayne', label: 'Wayne Enterprises' },
];

// Default story
export const Default: Story = {
  args: {
    options: categoryOptions,
    defaultValue: [categoryOptions[0], categoryOptions[1]],
    placeholder: 'Select categories...',
  },
};

// Empty state
export const EmptySelection: Story = {
  args: {
    options: categoryOptions,
    placeholder: 'Select financial categories...',
  },
};

// Custom option rendering
export const CustomOptionRendering: Story = {
  args: {
    options: categoryOptions,
    defaultValue: [categoryOptions[0]],
    placeholder: 'Select categories...',
    renderOption: (option) => (
      <div className="flex items-center">
        <Tag className="mr-2 h-4 w-4 text-blue-500" />
        <span>{option.label}</span>
      </div>
    ),
  },
};

// Custom badge rendering
export const CustomBadgeRendering: Story = {
  args: {
    options: categoryOptions,
    defaultValue: [categoryOptions[0], categoryOptions[1]],
    placeholder: 'Select categories...',
    renderBadge: (option, onRemove) => (
      <Badge
        key={option.value}
        variant="outline"
        className="bg-blue-50 text-blue-700 border-blue-200"
      >
        {option.label}
        <button
          className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
          onClick={onRemove}
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <X className="h-3 w-3 text-blue-400 hover:text-blue-700" />
        </button>
      </Badge>
    ),
  },
};

// Users example
export const UserSelection: Story = {
  args: {
    options: userOptions,
    defaultValue: [userOptions[0]],
    placeholder: 'Select team members...',
    renderOption: (option) => (
      <div className="flex items-center">
        <User className="mr-2 h-4 w-4 text-purple-500" />
        <span>{option.label}</span>
      </div>
    ),
    renderBadge: (option, onRemove) => (
      <Badge
        key={option.value}
        variant="outline"
        className="bg-purple-50 text-purple-700 border-purple-200"
      >
        <User className="mr-1 h-3 w-3" />
        {option.label}
        <button
          className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
          onClick={onRemove}
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <X className="h-3 w-3 text-purple-400 hover:text-purple-700" />
        </button>
      </Badge>
    ),
  },
};

// Companies example
export const CompanySelection: Story = {
  args: {
    options: companyOptions,
    defaultValue: [companyOptions[0], companyOptions[1]],
    placeholder: 'Select companies...',
    renderOption: (option) => (
      <div className="flex items-center">
        <Building className="mr-2 h-4 w-4 text-gray-500" />
        <span>{option.label}</span>
      </div>
    ),
    renderBadge: (option, onRemove) => (
      <Badge
        key={option.value}
        variant="outline"
        className="bg-gray-100 text-gray-800 border-gray-200"
      >
        <Building className="mr-1 h-3 w-3" />
        {option.label}
        <button
          className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
          onClick={onRemove}
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <X className="h-3 w-3 text-gray-400 hover:text-gray-700" />
        </button>
      </Badge>
    ),
  },
};

// Currency categories example
export const CurrencyCategories: Story = {
  args: {
    options: [
      { value: 'usd', label: 'USD' },
      { value: 'eur', label: 'EUR' },
      { value: 'gbp', label: 'GBP' },
      { value: 'jpy', label: 'JPY' },
      { value: 'cad', label: 'CAD' },
      { value: 'aud', label: 'AUD' },
    ],
    defaultValue: [{ value: 'usd', label: 'USD' }],
    placeholder: 'Select currencies...',
    renderOption: (option) => (
      <div className="flex items-center">
        <DollarSign className="mr-2 h-4 w-4 text-green-500" />
        <span>{option.label}</span>
      </div>
    ),
    renderBadge: (option, onRemove) => (
      <Badge
        key={option.value}
        variant="outline"
        className="bg-green-50 text-green-700 border-green-200"
      >
        <DollarSign className="mr-1 h-3 w-3" />
        {option.label}
        <button
          className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
          onClick={onRemove}
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <X className="h-3 w-3 text-green-400 hover:text-green-700" />
        </button>
      </Badge>
    ),
  },
};

// Form Integration Example
export const FormIntegration: Story = {
  render: (args) => (
    <div className="w-full max-w-md space-y-6 p-4 border border-gray-200 rounded-md">
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Transaction Categories
        </label>
        <FancyMultiSelect
          options={categoryOptions}
          defaultValue={[categoryOptions[0]]}
          placeholder="Select categories..."
        />
        <p className="text-xs text-gray-500">
          Select all categories that apply to this transaction
        </p>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Assigned Users
        </label>
        <FancyMultiSelect
          options={userOptions}
          defaultValue={[userOptions[0]]}
          placeholder="Assign to team members..."
          renderOption={(option) => (
            <div className="flex items-center">
              <User className="mr-2 h-4 w-4 text-purple-500" />
              <span>{option.label}</span>
            </div>
          )}
        />
      </div>

      <div className="pt-4 border-t border-gray-200">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700">
          Save Transaction
        </button>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// Add missing X import (needed for the renderBadge implementations)
import { X } from 'lucide-react';
