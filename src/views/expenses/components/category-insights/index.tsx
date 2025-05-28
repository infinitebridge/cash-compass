import { CategoryChart } from './category-chart';
import { CategoryTable } from './category-table';

export const CategoryInsights = () => {
  return (
    <div className="grid grid-cols-7 gap-4 !my-6">
      <CategoryChart className="col-span-3 w-full h-full" />
      <div className="col-span-4">
        <CategoryTable />
      </div>
    </div>
  );
};
