import { create } from 'zustand';

const useDialogStore = create<{
  isOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
}>((set) => ({
  isOpen: false,
  openDialog: () =>
    set({
      isOpen: true,
    }),
  closeDialog: () => set({ isOpen: false }),
}));

export default useDialogStore;
