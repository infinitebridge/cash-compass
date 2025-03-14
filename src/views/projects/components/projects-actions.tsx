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
import { toast } from 'sonner';
import { DeleteAlertDialog } from '../../../components/alert-dialog';
import { useDeleteProjectByPkMutation } from '../../../graphql';
import { useGetProjects } from '../hooks/use-get-projects';
import { useNewProject } from '../hooks/use-new-project';
import { Project } from './types';

type Props = {
  data: CoreRow<Project>['original'];
};

const ProjectsActions = ({ data }: Props) => {
  const [deleteProject] = useDeleteProjectByPkMutation();
  const { reloadProjects } = useGetProjects();
  const { setSelectedProject, onEditOpen } = useNewProject();

  function handleDelete() {
    toast.loading('removing project', { id: 'delete' });
    deleteProject({
      variables: {
        deleteProjectByPkId: data.id,
      },
      onCompleted: () => {
        toast.dismiss('delete');
        toast.success('Project removed');
        reloadProjects();
      },
      onError: (err) => {
        toast.dismiss('delete');
        toast.error(err.message);
      },
    });
  }

  function handleEdit() {
    setSelectedProject(data);
    onEditOpen(data.id);
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
          title={'Are you sure you want to delete this project ?'}
          description="This action cannot be undone. This will permanently delete this user
            and remove his data from our servers."
        />{' '}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProjectsActions;
