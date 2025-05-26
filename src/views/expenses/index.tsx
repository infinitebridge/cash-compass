import { Header } from './components/header';
import { StatisticsCards } from './components/statistic-cards';
import ExpenseTable from './components/table';
import { CategoryInsights } from './components/category-insights';
export function ExpensesManagement() {
  return (
    <div className="px-4 space-y-4 lg:px-6">
      <Header />
      <StatisticsCards />
      <ExpenseTable />
      <CategoryInsights />
    </div>
  );
}
