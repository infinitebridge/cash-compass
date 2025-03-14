import { create } from 'zustand';
import { Service } from '../components/types';

type NewServiceState = {
  id: number | null;
  isOpen: boolean;
  onEditOpen: (id: number) => void;
  onOpenNew: () => void;
  onClose: () => void;
  selectedService: Service | null;
  setSelectedService: (value: Service | null) => void;
};

export const useNewService = create<NewServiceState>((set) => ({
  id: null,
  isOpen: false,
  isPersonCreationOpen: false,
  selectedService: null,
  setSelectedService: (value) => set(() => ({ selectedService: value })),
  onEditOpen: (id) => set({ isOpen: true, id }),
  onOpenNew: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false, id: null, selectedService: null }),
}));
