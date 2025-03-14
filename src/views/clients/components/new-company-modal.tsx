import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@finbridge-manager-apps/ui';
import { Dispatch, SetStateAction } from 'react';
import { CompanyForm } from './company-form';

function NewCompanyModal({
  openCreationModal,
  setOpenCreationModal,
  newCompany,
}: {
  openCreationModal: boolean;
  setOpenCreationModal: Dispatch<SetStateAction<boolean>>;
  newCompany: string;
}) {
  return (
    <Dialog
      open={openCreationModal}
      onOpenChange={() => {
        setOpenCreationModal(false);
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Company</DialogTitle>
        </DialogHeader>
        <CompanyForm
          onClose={() => setOpenCreationModal(false)}
          companyName={newCompany}
        />
      </DialogContent>
    </Dialog>
  );
}

export default NewCompanyModal;
