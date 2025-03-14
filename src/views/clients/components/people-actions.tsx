import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@finbridge-manager-apps/ui';
import { MoreHorizontal, PencilIcon } from 'lucide-react';
import { toast } from 'sonner';
import { DeleteAlertDialog } from '../../../components/alert-dialog';
import { useDeletePersonByPkMutation } from '../../../graphql';
import { useGetPeople } from '../hooks/use-get-people';
import { useNewPerson } from '../hooks/use-new-person';

type Props = {
  id: number;
};

const PeopleActions = ({ id }: Props) => {
  const { onEditOpen } = useNewPerson();
  const [deletePerson] = useDeletePersonByPkMutation();
  const { refetch } = useGetPeople();
  const onDelete = () => {
    toast.loading('removing person', { id: 'person-delete' });

    deletePerson({
      variables: {
        deletePersonByPkId: id,
      },
      onCompleted: () => {
        toast.dismiss('person-delete');
        toast.success('Person removed successfully');
        refetch();
      },
      onError: (err) => {
        toast.dismiss('person-delete');
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
          onClick={() => onEditOpen(id)}
        >
          <PencilIcon className="h-4 w-4" />
          <span>Edit</span>
        </DropdownMenuLabel>
        <DeleteAlertDialog
          onDelete={onDelete}
          title="Are you sure you want to remove this client ?"
          description="This action cannot be undone. This will permanently delete this user
            and remove his data from our servers."
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PeopleActions;
