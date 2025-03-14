import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@finbridge-manager-apps/ui';
import { useNewProject } from '../hooks/use-new-project';
import { ProjectForm } from './project-form';

export const NewProjectSheet = () => {
  const { isOpen, onClose } = useNewProject();

  const handleClose = () => {
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={handleClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>New Project</SheetTitle>
          <SheetDescription>Add a new project</SheetDescription>
        </SheetHeader>

        <ProjectForm
          disabled={false}
          onCreateCategory={() => {
            return;
          }}
          editMode={false}
          onClose={handleClose}
          onCreateAccount={() => {
            //
          }}
        />
      </SheetContent>
    </Sheet>
  );
};
