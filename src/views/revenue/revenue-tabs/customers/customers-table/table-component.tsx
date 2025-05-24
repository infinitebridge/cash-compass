import * as React from 'react';

import { DataTableSkeleton } from './data-table/data-table-skeleton';

import { Shell } from '@cash-compass/ui';
import { Table } from './table';

export default function CustomersTable() {
  return (
    <Shell className="gap-2">
      <React.Suspense
        fallback={
          <DataTableSkeleton
            columnCount={6}
            searchableColumnCount={1}
            filterableColumnCount={2}
            cellWidths={['10rem', '40rem', '12rem', '12rem', '8rem', '8rem']}
            shrinkZero
          />
        }
      >
        <Table />
      </React.Suspense>
    </Shell>
  );
}
