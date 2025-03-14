import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@finbridge-manager-apps/ui';
import { PersonForm } from '../../clients/components/person-form';
import { useNewTransaction } from '../hooks/use-new-transaction';

const PersonCreationModal = () => {
  const { onPersonCreationOpen, isPersonCreationOpen } = useNewTransaction();

  return (
    <Dialog
      open={isPersonCreationOpen}
      onOpenChange={() => {
        onPersonCreationOpen(false);
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Person</DialogTitle>
          <DialogDescription>
            This person will added to the people table too
          </DialogDescription>
        </DialogHeader>
        <PersonForm onClose={() => onPersonCreationOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default PersonCreationModal;
