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

export type Product = {
  id: number;
  name: string;
  rate: number;
  stock: {
    current_stock: number;
    initial_stock: number;
  };
  description: string;
  readableDate?: string;
  income_category_id: number;
  category: string;
  initial_price: number;
  date: any;
};
