import { Header } from './header';
import InvoiceDataGrid from './data-grid';
import { StatisticsCards } from './statistic-cards';
import MonthlyInvoiceTrend from './charts/monthly-invoice-trend';
import { InvoiceStatusDistributionDonut } from './charts/invoice-status-distribution-donut';
export function InvoicesDashboard() {
  return (
    <div className="px-4 space-y-4 lg:px-6">
      <Header />
      <StatisticsCards />
      <InvoiceDataGrid />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <InvoiceStatusDistributionDonut />
        <div className="col-span-2">
          <MonthlyInvoiceTrend />
        </div>
      </div>
    </div>
  );
}
