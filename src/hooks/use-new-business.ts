import { create } from 'zustand';

type NewBusinessState = {
  isOpen: boolean;
  id: number | null;
  onOpen: () => void;
  onEditOpen: (id: number) => void;
  onClose: () => void;
};

export const useNewBusiness = create<NewBusinessState>((set) => ({
  isOpen: false,
  id: null,
  onEditOpen: (id) => set({ isOpen: true, id }),
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false, id: null }),
}));
