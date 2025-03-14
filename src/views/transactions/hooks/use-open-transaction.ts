import { create } from 'zustand';

type Transaction = {
  id: number;
  date: string;
  categoryId: number;
  amount: string;
  accountId: number;
  notes: string;
  payeeId: number;
};

type OpenTransactionState = {
  id?: string;
  isEditOpen: boolean;
  selectedTransaction: Transaction | null;
  onOpenEdit: (id: string) => void;
  onEditClose: () => void;
  setSelectedTransaction: (value: Transaction | null) => void;
};

export const useOpenTransaction = create<OpenTransactionState>((set) => ({
  id: undefined,
  isEditOpen: false,
  selectedTransaction: null,
  setSelectedTransaction: (value) => set({ selectedTransaction: value }),
  onOpenEdit: (id: string) => set({ isEditOpen: true, id }),
  onEditClose: () => set({ isEditOpen: false, id: undefined }),
}));
