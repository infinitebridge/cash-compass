import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@finbridge-manager-apps/ui';
import PersonCreationModal from '../../transactions/components/person-creation-modal';
import { useNewCompany } from '../hooks/use-new-conpany';
import { CompanyForm } from './company-form';

export const NewCompanySheet = () => {
  const { isOpen, onClose } = useNewCompany();

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>New Company</SheetTitle>
          <SheetDescription>
            Create a new account to track your transactions.
          </SheetDescription>
        </SheetHeader>
        <CompanyForm onClose={onClose} />
      </SheetContent>
      <PersonCreationModal />
    </Sheet>
  );
};
