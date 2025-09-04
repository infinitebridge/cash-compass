import { Header } from './header';
import InvoiceDataGrid from './data-grid';
import { StatisticsCards } from './statistic-cards';
import MonthlyInvoiceTrend from './charts/monthly-invoice-trend';
export function InvoicesDashboard() {
  return (
    <div className="px-4 space-y-4 lg:px-6">
      <Header />
      <StatisticsCards />
      <InvoiceDataGrid />
      <MonthlyInvoiceTrend />
    </div>
  );
}
