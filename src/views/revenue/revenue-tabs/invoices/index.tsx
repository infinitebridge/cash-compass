import { Button } from '@cash-compass/ui';
import InvoicesCards from './invoices-cards';

import { PlusIcon } from 'lucide-react';
import TableComponent from './invoice-table/table-component';

const RevenueOverview = () => {
  return (
    <div className="w-full p-4 rounded-xl border bg-card text-card-foreground my-4 shadow @container/card">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Invoices</h2>
        <Button className="shadow h-9 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white">
          New Invoice
          <PlusIcon className="h-3 w-3" />
        </Button>
      </div>
      <InvoicesCards />
      <TableComponent />
    </div>
  );
};

export default RevenueOverview;
