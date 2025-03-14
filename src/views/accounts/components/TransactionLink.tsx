import { Badge } from '@finbridge-manager-apps/ui';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { formatCurrency } from '../../../lib/utils';

type Props = {
  type: 'income' | 'expense';
  accountId: number;
  value: number;
};

const TransactionLink = ({ type, accountId, value }: Props) => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const filterParam = new URLSearchParams(params);

  const goToTransaction = () => {
    // Set the new parameters
    filterParam.set('transaction', type);
    filterParam.set('account', accountId.toString());

    // Navigate to the transactions page with the updated query parameters
    navigate(`/transactions?${filterParam.toString()}`);
  };

  return (
    <div
      onClick={value !== 0 ? goToTransaction : undefined}
      className={`cursor-pointer ${value === 0 ? 'pointer-events-none' : ''}`}
      aria-disabled={value === 0}
    >
      <Badge
        variant={'outline'}
        className={`px-2 py-1 text-xs font-medium ${
          value !== 0 ? 'hover:underline' : ''
        }`}
      >
        {formatCurrency(value)}
      </Badge>
    </div>
  );
};

export default TransactionLink;
