import { create } from 'zustand';
import { Product } from '../components/types';

type NewProductState = {
  id: number | null;
  isOpen: boolean;
  onEditOpen: (id: number) => void;
  onOpenNew: () => void;
  onClose: () => void;
  selectedProduct: Product | null;
  setSelectedProduct: (value: Product | undefined) => void;
};

export const useNewProduct = create<NewProductState>((set) => ({
  id: null,
  isOpen: false,
  isPersonCreationOpen: false,
  selectedProduct: null,
  setSelectedProduct: (value) => set(() => ({ selectedProduct: value })),
  onEditOpen: (id) => set({ isOpen: true, id }),
  onOpenNew: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false, id: null, selectedProduct: null }),
}));
