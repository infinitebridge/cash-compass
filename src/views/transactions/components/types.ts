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

export type Transaction = {
  id: number;
  account?: string;
  accountId?: number;
  category?: string;
  categoryId?: number;
  payeeId?: number;
  amount: number;
  payee: string;
  payeeCompany?: string;
  payeeCompanyId?: number;
  note: string;
  readableDate: string;
  date: any;
};
