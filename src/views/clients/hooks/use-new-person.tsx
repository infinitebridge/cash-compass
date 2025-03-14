import { create } from 'zustand';

type NewPersonState = {
  isOpen: boolean;
  id: number | null;
  onNewPersonSheetOpen: () => void;
  onEditOpen: (id: number) => void;
  onClose: () => void;
};

export const useNewPerson = create<NewPersonState>((set) => ({
  isOpen: false,
  id: null,
  onEditOpen: (id) => set({ isOpen: true, id }),
  onNewPersonSheetOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false, id: null }),
}));
