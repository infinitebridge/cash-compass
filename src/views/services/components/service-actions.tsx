import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@finbridge-manager-apps/ui';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { CoreRow } from '@tanstack/react-table';
import { PencilIcon } from 'lucide-react';
import { DeleteAlertDialog } from '../../../components/alert-dialog';

import { toast } from 'sonner';
import { useDeleteServiceByPkMutation } from '../../../graphql';
import { useGetServices } from '../hooks/use-get-services';
import { useNewService } from '../hooks/use-new-service';
import { Service } from './types';

type Props = {
  data: CoreRow<Service>['original'];
};

const ServiceActions = ({ data }: Props) => {
  const [removeService] = useDeleteServiceByPkMutation();
  const { reloadServices } = useGetServices();
  const { setSelectedService, onEditOpen } = useNewService();

  function handleDelete() {
    toast.loading('Removing service...', { id: 'delete' });
    removeService({
      variables: {
        deleteServiceByPkId: data?.id,
      },
      onCompleted: () => {
        toast.dismiss('delete');
        toast.success('Service deleted successfully');
        reloadServices();
      },
      onError: (err) => {
        toast.dismiss('delete');
        toast.error(err.message);
      },
    });
  }

  function handleEdit() {
    setSelectedService(data);
    onEditOpen(data?.id);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          aria-label="Open menu"
          variant="ghost"
          className="data-[state=open]:bg-muted flex size-8 p-0"
        >
          <DotsHorizontalIcon className="size-4" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuLabel
          onClick={handleEdit}
          className="flex cursor-pointer flex-row items-center gap-2 font-normal"
        >
          <PencilIcon className="h-4 w-4" />
          <span>Edit</span>
        </DropdownMenuLabel>{' '}
        <DeleteAlertDialog
          onDelete={handleDelete}
          title={'Are you sure you want to delete this service ?'}
          description="This action cannot be undone. This will permanently delete this user
            and remove his data from our servers."
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ServiceActions;
