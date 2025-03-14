import { useMemo, useState } from 'react';
import useRecordStore from '../../../zustand/record-store';

const TotalSection = () => {
  const { items } = useRecordStore();
  const [taxPercentage, setTaxPercentage] = useState(20);

  const calculateTotals = () => {
    const subtotal = items.reduce(
      (acc, item) => acc + item.rate * item.quantity,
      0
    );
    const taxAmount = (subtotal * taxPercentage) / 100;
    const total = subtotal + taxAmount;
    const amountPaid = 0;
    const amountDue = total - amountPaid;

    return {
      subtotal,
      taxAmount,
      total,
      amountPaid,
      amountDue,
    };
  };

  const totals = useMemo(calculateTotals, [items, taxPercentage]);

  const handleTaxPercentageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setTaxPercentage(value);
    }
  };

  return (
    <div className="mr-5 mt-20 w-64 gap-6 justify-self-end text-right text-sm">
      <div className="flex flex-row justify-between gap-6">
        <div>
          <p className="font-semibold">Subtotal:</p>
          <p className="mt-2 text-gray-500">(Tax Percentage)</p>
        </div>
        <div className="text-right">
          <p className="font-semibold">{totals.subtotal.toFixed(2)}</p>
          <p className="mt-2 text-gray-500">
            <input
              type="number"
              value={taxPercentage}
              onChange={handleTaxPercentageChange}
              className="w-16 text-right"
              min="0"
              step="0.01"
            />
            %
          </p>
        </div>
      </div>
      <div className="my-4 h-0.5 bg-gray-300" />
      <div className="flex flex-row justify-between gap-6">
        <div>
          <p className="font-semibold">Total:</p>
          <p className="mt-2 text-gray-500">Amount Paid</p>
        </div>
        <div className="text-right">
          <p className="font-semibold">{totals.total.toFixed(2)}</p>
          <p className="mt-2 text-gray-500">{totals.amountPaid.toFixed(2)}</p>
        </div>
      </div>
      <div className="my-4 h-0.5 bg-gray-300" />
      <div className="flex flex-row justify-between gap-6">
        <div>
          <p className="font-semibold">Amount Due (MAD):</p>
        </div>
        <div className="text-right">
          <p className="font-semibold">{totals.amountDue.toFixed(2)} DHS</p>
        </div>
      </div>
    </div>
  );
};

export default TotalSection;
