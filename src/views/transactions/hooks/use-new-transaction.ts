import { create } from 'zustand';
import { TransactionTypes } from '../../../types/type';

type NewTransactionState = {
  id: number | null;
  isPersonCreationOpen: boolean;
  isOpenNew: boolean;
  transactionType: TransactionTypes;
  setTransactionType: (value: TransactionTypes) => void;
  onEditOpen: (id: number) => void;
  onOpenNew: () => void;
  onCloseNew: () => void;
  onPersonCreationOpen: (value: boolean) => void;
};

export const useNewTransaction = create<NewTransactionState>((set) => ({
  id: null,
  isOpenNew: false,
  transactionType: 'EXPENSE',
  isPersonCreationOpen: false,
  setTransactionType: (value: TransactionTypes) =>
    set(() => ({ transactionType: value })),
  onEditOpen: (id) => set({ isOpenNew: true, id }),
  onOpenNew: () => set({ isOpenNew: true }),
  onCloseNew: () => set({ isOpenNew: false, id: null }),
  onPersonCreationOpen: (value) => set({ isPersonCreationOpen: value }),
}));
