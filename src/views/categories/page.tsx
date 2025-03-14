import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@finbridge-manager-apps/ui';
import { formatDistanceToNow } from 'date-fns';
import { PlusIcon } from 'lucide-react';
import { useMemo } from 'react';

import { CategoriesDataGrid } from './components/categories-datagrid';
import { DataTableSkeleton } from './components/data-table/data-table-skeleton';
import { TabsSwitcher } from './components/tabs';
import { useGetCategories } from './hooks/use-get-categories';
import { useNewCategory } from './hooks/use-new-category';

const CategoryPage = () => {
  const { categories, loading } = useGetCategories();
  const { onOpen } = useNewCategory();

  const rows = useMemo(
    () =>
      categories?.category_transaction.map((cat) => ({
        id: cat.id,
        name: cat.name,
        date: cat.created_at,
        transactions: cat.transactions_aggregate.aggregate?.count ?? 0,
        type: cat.type,
        readableDate: cat.created_at
          ? formatDistanceToNow(new Date(cat.created_at))
          : '',
      })) ?? [],
    [categories]
  );

  return (
    <div className="mx-auto -mt-24 w-full max-w-screen-2xl pb-10">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="line-clamp-1 text-xl">
            Categories Page
          </CardTitle>
          <Button size={'sm'} className="flex flex-row gap-2" onClick={onOpen}>
            <PlusIcon className="h-5 w-5" />
            Create New
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row items-center justify-between">
            <TabsSwitcher />
          </div>
          <div className="mx-auto w-full max-w-screen-2xl py-4">
            {loading ? (
              <DataTableSkeleton
                columnCount={5}
                searchableColumnCount={1}
                filterableColumnCount={2}
                rowCount={5}
                cellWidths={['10rem', '40rem', '12rem', '12rem', '8rem']}
                shrinkZero
              />
            ) : (
              <CategoriesDataGrid count={0} data={rows} />
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CategoryPage;
