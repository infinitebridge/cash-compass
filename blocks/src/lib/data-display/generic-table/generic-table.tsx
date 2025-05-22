import * as React from 'react';

import { Shell } from '@cash-compass/ui';
import { Table } from './revenue-table/table';
import { DataTableSkeleton } from './revenue-table/data-table/data-table-skeleton';
import { NuqsAdapter } from 'nuqs/adapters/react';

export default function TableComponent() {
  return (
    <NuqsAdapter>
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
    </NuqsAdapter>
  );
}
