import { Badge } from '@finbridge-manager-apps/ui';
import { useNavigate } from 'react-router-dom';
type Props = {
  transactionsCount: number;
  type: 'INCOME' | 'EXPENSE';
  categoryId: number;
};

const Transactions = ({ transactionsCount, type, categoryId }: Props) => {
  const route = useNavigate();

  function goToTransaction() {
    const searchParams = new URLSearchParams();
    searchParams.set('transaction', type.toLowerCase());
    searchParams.set('category', categoryId.toString());

    // Construct the full URL with the parameters
    const url = `/transactions?${searchParams.toString()}`;

    // Navigate to the constructed URL
    route(url);
  }

  return (
    <div
      onClick={transactionsCount !== 0 ? goToTransaction : undefined}
      className={`cursor-pointer ${
        transactionsCount === 0 ? 'pointer-events-none' : ''
      }`}
      aria-disabled={transactionsCount === 0}
    >
      <Badge
        variant={'outline'}
        className={`px-4 py-1 text-xs font-medium ${
          transactionsCount !== 0 ? 'hover:underline' : ''
        }`}
      >
        {transactionsCount}
      </Badge>
    </div>
  );
};

export default Transactions;
