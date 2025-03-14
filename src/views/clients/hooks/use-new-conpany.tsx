import { create } from 'zustand';

type NewCompanyState = {
  isOpen: boolean;
  id: number | null;
  onOpen: () => void;
  onEditOpen: (id: number) => void;
  onClose: () => void;
};

export const useNewCompany = create<NewCompanyState>((set) => ({
  isOpen: false,
  id: null,
  onOpen: () => set({ isOpen: true }),
  onEditOpen: (id) => set({ isOpen: true, id }),
  onClose: () => set({ isOpen: false, id: null }),
}));
