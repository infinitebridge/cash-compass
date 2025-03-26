import type { Meta, StoryObj } from '@storybook/react';
import { GenericTable } from '@cash-compass/blocks';
import { ColumnDef } from '@tanstack/react-table';

// User Type
type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive' | 'Pending';
};

// Product Type
type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
};

// Transaction Type
type Transaction = {
  id: string;
  date: string;
  type: 'Revenue' | 'Expense';
  description: string;
  category: string;
  amount: number;
  status: string;
};

// Mock User Data
const users: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'User',
    status: 'Pending',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike.johnson@example.com',
    role: 'Manager',
    status: 'Inactive',
  },
];

// Mock Product Data
const products: Product[] = [
  {
    id: 'TECH-001',
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: 129.99,
    stock: 50,
  },
  {
    id: 'TECH-002',
    name: 'Smart Watch',
    category: 'Wearables',
    price: 199.99,
    stock: 25,
  },
  {
    id: 'TECH-003',
    name: 'Bluetooth Speaker',
    category: 'Audio',
    price: 79.99,
    stock: 100,
  },
];

// Mock Transaction Data
const transactions: Transaction[] = [
  {
    id: '1',
    date: '2024-03-18',
    type: 'Revenue',
    description: 'XYZ Corp Monthly Retainer',
    category: 'Services',
    amount: 5000.0,
    status: 'Invoiced',
  },
  {
    id: '2',
    date: '2024-03-17',
    type: 'Expense',
    description: 'Adobe Creative Cloud',
    category: 'Software',
    amount: 59.99,
    status: 'Paid',
  },
  {
    id: '3',
    date: '2024-03-15',
    type: 'Revenue',
    description: 'Product License - ABC Inc',
    category: 'Product Sales',
    amount: 12500.0,
    status: 'Paid',
  },
];

// User Columns
const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'role',
    header: 'Role',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: (info) => {
      const status = info.getValue<string>();
      const statusColorMap = {
        Active: 'text-green-600',
        Inactive: 'text-red-600',
        Pending: 'text-yellow-600',
      };
      return (
        <span
          className={`font-medium ${
            statusColorMap[status as keyof typeof statusColorMap]
          }`}
        >
          {status}
        </span>
      );
    },
  },
];

// Product Columns
const productColumns: ColumnDef<Product>[] = [
  {
    accessorKey: 'id',
    header: 'SKU',
  },
  {
    accessorKey: 'name',
    header: 'Product Name',
  },
  {
    accessorKey: 'category',
    header: 'Category',
  },
  {
    accessorKey: 'price',
    header: 'Price',
    cell: (info) => `$${info.getValue<number>().toFixed(2)}`,
  },
  {
    accessorKey: 'stock',
    header: 'Stock',
    cell: (info) => {
      const stock = info.getValue<number>();
      return (
        <span
          className={stock < 30 ? 'text-red-600 font-bold' : 'text-green-600'}
        >
          {stock}
        </span>
      );
    },
  },
];

// Transaction Columns
const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'date',
    header: 'Date',
    cell: (info) => new Date(info.getValue<string>()).toLocaleDateString(),
  },
  {
    accessorKey: 'type',
    header: 'Type',
    cell: (info) => {
      const type = info.getValue<string>();
      return (
        <span
          className={type === 'Revenue' ? 'text-green-600' : 'text-red-600'}
        >
          {type}
        </span>
      );
    },
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
  {
    accessorKey: 'category',
    header: 'Category',
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    cell: (info) => `$${info.getValue<number>().toFixed(2)}`,
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
];

// Meta configuration for the Generic Table component
const meta: Meta = {
  title: 'Data Display/generic-table/GenericTable',
  component: GenericTable,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A highly flexible table component that can render any type of structured data.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      description: 'Array of data objects to display in the table',
    },
    columns: {
      control: 'object',
      description: 'Column definitions for the table',
    },
    title: {
      control: 'text',
      description: 'Optional title to display above the table',
    },
  },
};

export default meta;

type Story = StoryObj;

export const UserTable: Story = {
  name: 'User Management',
  args: {
    data: users,
    columns: userColumns,
    title: 'User Management',
    filterColumn: 'name',
    enableSorting: true,
    enableFiltering: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the GenericTable with a user management dataset.',
      },
    },
  },
};

export const ProductInventory: Story = {
  name: 'Product Inventory',
  args: {
    data: products,
    columns: productColumns,
    title: 'Product Inventory',
    filterColumn: 'name',
    enablePagination: true,
    enableColumnVisibility: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Shows the GenericTable rendering a product inventory with stock indicators.',
      },
    },
  },
};

export const TransactionLog: Story = {
  name: 'Transaction Log',
  args: {
    data: transactions,
    columns: transactionColumns,
    title: 'Recent Transactions',
    enableSorting: true,
    enableFiltering: true,
    filterColumn: 'description',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Illustrates the GenericTable with a financial transactions dataset.',
      },
    },
  },
};

export const EmptyState: Story = {
  name: 'Empty State',
  args: {
    data: [],
    columns: userColumns,
    title: 'No Data Available',
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the table's behavior when no data is present.",
      },
    },
  },
};

export const CustomizedView: Story = {
  name: 'Customized View',
  args: {
    data: users,
    columns: userColumns,
    title: 'Advanced User Management',
    enableSorting: true,
    enableFiltering: true,
    enablePagination: true,
    enableColumnVisibility: true,
    filterColumn: 'name',
    defaultPageSize: 2,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates the full range of GenericTable features with custom configuration.',
      },
    },
  },
};
