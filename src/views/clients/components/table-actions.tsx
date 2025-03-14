import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@finbridge-manager-apps/ui';
import { ExternalLink, MoreHorizontal, PencilIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { DeleteAlertDialog } from '../../../components/alert-dialog';
import { useDeleteCompanyByPkMutation } from '../../../graphql';
import { useGetCompanies } from '../hooks/use-get-companies';
import { useNewCompany } from '../hooks/use-new-conpany';

type Props = {
  id: number;
};

const TableActions = ({ id }: Props) => {
  const [deleteCompany] = useDeleteCompanyByPkMutation();
  const { refetch } = useGetCompanies();
  const { onEditOpen } = useNewCompany();
  const navigate = useNavigate();
  const onDelete = () => {
    toast.loading('removing company', { id: 'company-delete' });

    deleteCompany({
      variables: {
        deleteCompanyByPkId: id,
      },
      onCompleted: () => {
        toast.dismiss('company-delete');
        toast.success('Company removed successfully');
        refetch();
      },
      onError: (err) => {
        toast.dismiss('company-delete');
        toast.error(err.message);
      },
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel
          className="flex cursor-pointer flex-row items-center gap-2 font-normal"
          onClick={() => navigate(`/company/${id}`)}
        >
          <ExternalLink className="h-4 w-4" />
          <span>Details</span>
        </DropdownMenuLabel>
        <DropdownMenuLabel
          className="flex cursor-pointer flex-row items-center gap-2 font-normal"
          onClick={() => onEditOpen(id)}
        >
          <PencilIcon className="h-4 w-4" />
          <span>Edit</span>
        </DropdownMenuLabel>
        <DeleteAlertDialog
          onDelete={onDelete}
          title="Are you sure you want to delete this service ?"
          description="This action cannot be undone. This will permanently delete this user
            and remove his data from our servers."
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TableActions;
