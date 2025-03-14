import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@finbridge-manager-apps/ui';
import { ServiceForm } from './components/service-form';
import { useNewService } from './hooks/use-new-service';

export const NewServiceSheet = () => {
  const { isOpen, onClose } = useNewService();

  const handleClose = () => {
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={handleClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>New Service</SheetTitle>
          <SheetDescription>Add a new service</SheetDescription>
        </SheetHeader>

        <ServiceForm
          disabled={false}
          onCreateCategory={() => {
            return;
          }}
          onClose={handleClose}
          onCreateAccount={() => {
            //
          }}
        />
      </SheetContent>
    </Sheet>
  );
};
