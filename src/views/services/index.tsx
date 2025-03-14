import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@finbridge-manager-apps/ui';
import { formatDistanceToNow } from 'date-fns';
import { useMemo } from 'react';
import ProductsServicesActions from '../services-products/components/sheets-opener';
import { DataTableSkeleton } from './components/data-table/data-table-skeleton';
import { ServicesDataGrid } from './components/services-datagrid';
import { TabsSwitcher } from './components/tabs';
import { useGetServices } from './hooks/use-get-services';

const ServicesPage = () => {
  const { services, loadServices } = useGetServices();

  const rows = useMemo(
    () =>
      services?.map((srv) => ({
        id: srv.id,
        name: srv.name,
        rate: srv.rate,
        category: srv?.category_transaction?.name ?? '',
        income_category_id: srv.income_category_id ?? 0,
        billable: srv.billable,
        auto: srv.auto_add,
        description: srv.description,
        date: srv.created_at,
        readableDate: srv.created_at
          ? formatDistanceToNow(new Date(srv.created_at))
          : '',
      })) ?? [],
    [services]
  );

  return (
    <div className="mx-auto -mt-24 w-full max-w-screen-2xl pb-10">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="line-clamp-1 text-xl">Services Page</CardTitle>
          <ProductsServicesActions />
        </CardHeader>
        <CardContent>
          <div className="flex flex-row items-center justify-between">
            <TabsSwitcher />
          </div>
          <div className="mx-auto w-full max-w-screen-2xl py-4">
            {loadServices ? (
              <DataTableSkeleton
                columnCount={5}
                searchableColumnCount={1}
                filterableColumnCount={2}
                rowCount={5}
                cellWidths={['10rem', '40rem', '12rem', '12rem', '8rem']}
                shrinkZero
              />
            ) : (
              <ServicesDataGrid count={0} data={rows} />
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServicesPage;
