import { Header } from './header';
import { StatisticsCards } from './statistic-cards';

export function InvoicesDashboard() {
  return (
    <div className="px-4 space-y-4 lg:px-6">
      <Header />
      <StatisticsCards />
    </div>
  );
}
