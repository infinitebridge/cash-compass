import { Loader2 } from 'lucide-react';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Chart } from '../../components/chart';
import { SpendingPie } from '../../components/spending-pie';
import { useGetCategoryTransactionOverviewQuery } from '../../graphql';

const financialData = [
  { date: '2024-01-01', income: 5000, expenses: 3000 },
  { date: '2024-02-01', income: 6000, expenses: 3200 },
  { date: '2024-03-01', income: 5500, expenses: 3100 },
  { date: '2024-04-01', income: 7000, expenses: 3500 },
  { date: '2024-05-01', income: 6500, expenses: 3400 },
  { date: '2024-06-01', income: 8000, expenses: 3800 },
  { date: '2024-07-01', income: 7500, expenses: 3700 },
  { date: '2024-08-01', income: 7200, expenses: 3600 },
  { date: '2024-09-01', income: 7700, expenses: 3900 },
  { date: '2024-10-01', income: 8200, expenses: 4000 },
  { date: '2024-11-01', income: 8500, expenses: 4200 },
  { date: '2024-12-01', income: 9000, expenses: 4500 },
];

const DataCharts = () => {
  const [searchParams] = useSearchParams();
  const to = searchParams.get('to') || undefined;
  const from = searchParams.get('from') || undefined;

  const { data, loading } = useGetCategoryTransactionOverviewQuery({
    variables: {
      where: {
        created_at: {
          _lte: to,
          _gte: from,
        },
      },
    },
  });

  const formattedData = useMemo(() => {
    const total =
      data?.category_transaction.reduce((a, b) => {
        return a + (b.transactions_aggregate.aggregate?.sum?.amount ?? 0);
      }, 0) ?? 0;
    return data?.category_transaction.map((category) => {
      const value = category.transactions_aggregate.aggregate?.sum?.amount ?? 0;
      return {
        name: category.name,
        value,
        percent: total === 0 || value === 0 ? 0 : total / value,
      };
    });
  }, [data]);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-6">
      <div className="col-span-1 lg:col-span-3 xl:col-span-4">
        <Chart data={financialData} />
      </div>
      <div className="col-span-1 lg:col-span-3 xl:col-span-2">
        {loading ? (
          <div className="flex h-[500px] w-full items-center justify-center">
            <Loader2 className="size-6 animate-spin text-slate-400" />
          </div>
        ) : (
          <SpendingPie data={formattedData} />
        )}
      </div>
    </div>
  );
};

export default DataCharts;
