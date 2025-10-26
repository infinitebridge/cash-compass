import { create } from 'zustand';

const useInvoiceDialogStore = create<{
  isInvoiceDialogOpen: boolean;
  openInvoiceDialog: () => void;
  closeInvoiceDialog: () => void;
}>((set) => ({
  isInvoiceDialogOpen: false,
  openInvoiceDialog: () =>
    set({
      isInvoiceDialogOpen: true,
    }),
  closeInvoiceDialog: () => set({ isInvoiceDialogOpen: false }),
}));

export default useInvoiceDialogStore;
