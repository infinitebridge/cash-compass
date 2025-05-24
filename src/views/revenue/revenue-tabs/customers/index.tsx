import { Button } from '@cash-compass/ui';
import { PlusIcon } from 'lucide-react';
import CustomersCards from './customers-cards';
import CustomersTable from './customers-table/table-component';

export default function Customers() {
  return (
    <div className="w-full p-4 rounded-xl border bg-card text-card-foreground my-4 shadow @container/card">
      <div className="flex justify-between items-center mb-2.5">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Customer Management
        </h2>
        <Button className="shadow h-9 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white">
          New Customer
          <PlusIcon className="h-3 w-3" />
        </Button>
      </div>
      <CustomersCards />
      <CustomersTable />
    </div>
  );
}
