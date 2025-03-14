export interface SearchParams {
  [key: string]: string | string[] | undefined;
}

export interface Option {
  label: string;
  value: string;
  count?: number;
}

export interface DataTableFilterField<TData> {
  label: string;
  value: keyof TData;
  placeholder?: string;
  options?: Option[];
}

export interface DataTableFilterOption<TData> {
  id: string;
  label: string;
  value: keyof TData;
  options: Option[];
  filterValues?: string[];
  filterOperator?: string;
  isMulti?: boolean;
}

export type Task = {
  title: string | null;
  status: 'todo' | 'in-progress' | 'done' | 'canceled';
  priority: 'low' | 'medium' | 'high';
  code: string;
  id: string;
  label: 'bug' | 'feature' | 'enhancement' | 'documentation';
  createdAt: Date;
  updatedAt: Date | null;
};

export type Category = {
  id: number;
  name: string;
  type: 'INCOME' | 'EXPENSE';
  transactions: number;
  readableDate?: string;
  date: any;
};
