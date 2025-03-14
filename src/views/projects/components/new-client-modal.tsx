import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@finbridge-manager-apps/ui';
import { PersonForm } from '../../clients/components/person-form';
import { useNewProject } from '../hooks/use-new-project';

const NewClientModal = () => {
  const { isPersonFormOpen, onPersonFormClose } = useNewProject();

  return (
    <Dialog open={isPersonFormOpen} onOpenChange={onPersonFormClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Client</DialogTitle>
          <DialogDescription>
            Create new client directly related to the new project
          </DialogDescription>
        </DialogHeader>
        <PersonForm onClose={onPersonFormClose} />
      </DialogContent>
    </Dialog>
  );
};

export default NewClientModal;
