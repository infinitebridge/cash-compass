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
  customActions?: ((row: Invoice) => ReactNode)[];
  menuActions: {
    label: ReactNode;
    className?: string;
    shortcut?: string;
    action: (row: Invoice) => void;
  }[];
};

export interface Invoice {
  invoice_id: number;
  invoice_number: string;
  customer_name: string;
  issue_date: Date;
  due_date: Date;
  amount_total: number;
  balance_remaining: number;
  status: 'Sent' | 'Paid' | 'Overdue' | 'Draft' | 'Cancelled';
  actions: Action;
}
