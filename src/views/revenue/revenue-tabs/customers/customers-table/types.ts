import type { ColumnSort, Row } from '@tanstack/react-table';
import type { z } from 'zod';

import type { DataTableConfig } from './data-table/config/data-table';
import type { filterSchema } from './data-table/lib/parsers';
import { ReactNode } from 'react';

export type Prettify<T> = {
  [K in keyof T]: T[K];
};

export type StringKeyOf<TData> = Extract<keyof TData, string>;

export interface SearchParams {
  [key: string]: string | string[] | undefined;
}

export interface Option {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
  count?: number;
}

export interface ExtendedColumnSort<TData> extends Omit<ColumnSort, 'id'> {
  id: StringKeyOf<TData>;
}

export type ExtendedSortingState<TData> = ExtendedColumnSort<TData>[];

export type ColumnType = DataTableConfig['columnTypes'][number];

export type FilterOperator = DataTableConfig['globalOperators'][number];

export type JoinOperator = DataTableConfig['joinOperators'][number]['value'];

export interface DataTableFilterField<TData> {
  id: StringKeyOf<TData>;
  label: string;
  placeholder?: string;
  options?: Option[];
}

export interface DataTableAdvancedFilterField<TData>
  extends DataTableFilterField<TData> {
  type: ColumnType;
}

export type Filter<TData> = Prettify<
  Omit<z.infer<typeof filterSchema>, 'id'> & {
    id: StringKeyOf<TData>;
  }
>;

export interface DataTableRowAction<TData> {
  row: Row<TData>;
  type: 'update' | 'delete';
}

export type Action = {
  customActions?: ((row: Customer) => ReactNode)[];
  menuActions: {
    label: ReactNode;
    className?: string;
    shortcut?: string;
    action: (row: Customer) => void;
  }[];
};

export interface Customer {
  /** Unique identifier for the customer */
  id: string;

  /** Customer company name */
  name: string;

  /** Customer type/category */
  type:
    | 'Enterprise customer'
    | 'Corporate account'
    | 'Small business'
    | 'Individual';

  /** First letter of company name for avatar display */
  avatar: string;

  /** Optional avatar background color */
  avatarColor?: 'blue' | 'green' | 'purple' | 'red' | 'yellow' | 'gray';

  /** Optional contact person name */
  contactPerson?: string;

  /** Optional contact email */
  email?: string;

  /** Optional phone number */
  phone?: string;

  /** Customer status */
  status: 'Active' | 'Inactive' | 'At Risk' | 'New';

  /** Optional revenue metrics */
  revenueYTD: number;

  /** Optional last transaction date */
  lastTransaction: Date | string;

  /** When the customer was created */
  createdAt?: Date | string;

  /** When the customer was last updated */
  updatedAt?: Date | string;

  actions?: Action;
}
