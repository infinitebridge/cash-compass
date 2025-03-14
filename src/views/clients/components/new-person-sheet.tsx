import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@finbridge-manager-apps/ui';
import { useNewPerson } from '../hooks/use-new-person';
import { PersonForm } from './person-form';

export const NewPersonSheet = () => {
  const { isOpen, onClose } = useNewPerson();

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>New Person</SheetTitle>
          <SheetDescription>Add new person to the team</SheetDescription>
        </SheetHeader>
        <PersonForm onClose={onClose} />
      </SheetContent>
    </Sheet>
  );
};
