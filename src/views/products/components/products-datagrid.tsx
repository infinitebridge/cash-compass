'use client';
'use memo';

import * as React from 'react';

import { useDataTable } from '../hooks/use-data-table';
import { DataTable } from './data-table/data-table';
import { DataTableToolbar } from './data-table/data-table-toolbar';

import { useSearchParams } from 'react-router-dom';

import { useGetCategoryTransactionQuery } from '../../../graphql';
import { getColumns } from './tasks-table-columns';
import { TasksTableFloatingBar } from './tasks-table-floating-bar';
import { useTasksTable } from './tasks-table-provider';
import { TasksTableToolbarActions } from './tasks-table-toolbar-actions';
import { Product, type DataTableFilterField } from './types';

interface ProductDataGridProps {
  count: number;
  data: Product[];
}
export function ProductsDataGrid({
  count,
  data,
}: Readonly<ProductDataGridProps>) {
  // Feature flags for showcasing some additional features. Feel free to remove them.
  const { featureFlags } = useTasksTable();

  const [params] = useSearchParams();
  const per_page = params.get('per_page');

  const { data: incomeCategories } = useGetCategoryTransactionQuery({
    variables: {
      where: {
        type: {
          _eq: 'INCOME',
        },
      },
    },
  });

  const pageCount = React.useMemo(
    () => Math.ceil(count / (per_page ? ~~per_page : 1)),
    [count, per_page]
  );

  // Memoize the columns so they don't re-render on every render
  const columns = React.useMemo(() => getColumns(), []);

  /**
   * This component can render either a faceted filter or a search filter based on the `options` prop.
   *
   * @prop options - An array of objects, each representing a filter option. If provided, a faceted filter is rendered. If not, a search filter is rendered.
   *
   * Each `option` object has the following properties:
   * @prop {string} label - The label for the filter option.
   * @prop {string} value - The value for the filter option.
   * @prop {React.ReactNode} [icon] - An optional icon to display next to the label.
   * @prop {boolean} [withCount] - An optional boolean to display the count of the filter option.
   */
  const filterFields: DataTableFilterField<Product>[] = [
    {
      label: 'Category',
      value: 'category',
      options:
        incomeCategories?.category_transaction?.map((category) => {
          return {
            value: `${category.id}`,
            label: category.name,
            count: category?.transactions_aggregate?.aggregate?.count ?? 0,
          };
        }) ?? [],
    },
  ];

  const { table } = useDataTable({
    data,
    columns,
    pageCount,
    filterFields,
    enableAdvancedFilter: featureFlags.includes('advancedFilter'),
    defaultPerPage: per_page ? ~~per_page : 10,
    defaultSort: 'date.desc',
  });

  return (
    <DataTable
      table={table}
      floatingBar={
        featureFlags.includes('floatingBar') ? (
          <TasksTableFloatingBar table={table} />
        ) : null
      }
    >
      {/* {featureFlags.includes('advancedFilter') ? (
        <DataTableAdvancedToolbar table={table} filterFields={filterFields}>
          <TasksTableToolbarActions table={table} />
        </DataTableAdvancedToolbar>
      ) : ( */}
      <DataTableToolbar table={table} filterFields={filterFields}>
        <TasksTableToolbarActions table={table} />
      </DataTableToolbar>
      {/* )} */}
    </DataTable>
  );
}
