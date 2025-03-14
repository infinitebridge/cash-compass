import { create } from 'zustand';

type Category = {
  id: number;
  name: string;
};

type OpenCategoryState = {
  id?: string;
  isEditOpen: boolean;
  selectedCategory: Category | null;
  setSelectedCategory: (value: Category | null) => void;
  onEditOpen: () => void;
  onEditClose: () => void;
};

export const useOpenCategory = create<OpenCategoryState>((set) => ({
  id: undefined,
  isEditOpen: false,
  selectedCategory: null,
  setSelectedCategory: (value) => set({ selectedCategory: value }),
  onEditOpen: () => set({ isEditOpen: true }),
  onEditClose: () => set({ isEditOpen: false }),
}));
