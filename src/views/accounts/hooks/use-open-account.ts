import { create } from 'zustand';

type Account = {
  id: number;
  name: string;
};

type OpenAccountState = {
  id?: string;
  isEditOpen: boolean;
  selectedAccount: Account | null;
  setSelectedAccount: (value: Account | null) => void;
  onEditOpen: () => void;
  onEditClose: () => void;
};

export const useOpenAccount = create<OpenAccountState>((set) => ({
  id: undefined,
  isEditOpen: false,
  selectedAccount: null,
  setSelectedAccount: (value) => set({ selectedAccount: value }),
  onEditOpen: () => set({ isEditOpen: true }),
  onEditClose: () => set({ isEditOpen: false, id: undefined }),
}));
