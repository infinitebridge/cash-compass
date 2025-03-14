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
import { ProductsDataGrid } from './components/products-datagrid';
import { TabsSwitcher } from './components/tabs';
import { useGetProducts } from './hooks/use-get-products';

const ProductsPage = () => {
  const { products, loadProducts } = useGetProducts();

  const rows = useMemo(
    () =>
      products?.map((prd) => ({
        id: prd.id,
        name: prd.name,
        rate: prd.rate,
        stock: {
          initial_stock: prd.initial_stock ?? 0,
          current_stock: prd.current_stock ?? 0,
        },
        description: prd.description,
        date: prd.created_at,
        income_category_id: prd.income_category_id ?? 0,
        category: prd.category_transaction?.name ?? '',
        readableDate: prd.created_at
          ? formatDistanceToNow(new Date(prd.created_at))
          : '',
      })) ?? [],
    [products]
  );

  return (
    <div className="mx-auto -mt-24 w-full max-w-screen-2xl pb-10">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="line-clamp-1 text-xl">Products Page</CardTitle>
          <ProductsServicesActions />
        </CardHeader>
        <CardContent>
          <div className="flex flex-row items-center justify-between">
            <TabsSwitcher />
          </div>
          <div className="mx-auto w-full max-w-screen-2xl py-4">
            {loadProducts ? (
              <DataTableSkeleton
                columnCount={5}
                searchableColumnCount={1}
                filterableColumnCount={2}
                rowCount={5}
                cellWidths={['10rem', '40rem', '12rem', '12rem', '8rem']}
                shrinkZero
              />
            ) : (
              <ProductsDataGrid count={rows.length} data={rows} />
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductsPage;
