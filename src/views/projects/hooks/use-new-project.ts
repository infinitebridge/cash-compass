import { create } from 'zustand';
import { Project } from '../components/types';

type NewProjectState = {
  id: number | null;
  isOpen: boolean;
  onEditOpen: (id: number) => void;
  onOpenNew: () => void;
  onClose: () => void;
  selectedProject: Project | undefined;
  setSelectedProject: (value: Project | undefined) => void;
  isPersonFormOpen: boolean;
  onPersonCreation: () => void;
  onPersonFormClose: () => void;
};

export const useNewProject = create<NewProjectState>((set) => ({
  id: null,
  isOpen: false,
  isPersonCreationOpen: false,
  selectedProject: undefined,
  isPersonFormOpen: false,
  onPersonCreation: () => set({ isPersonFormOpen: true }),
  setSelectedProject: (value) => set(() => ({ selectedProject: value })),
  onPersonFormClose: () => set(() => ({ isPersonFormOpen: false })),
  onEditOpen: (id) => set({ isOpen: true, id }),
  onOpenNew: () => set({ isOpen: true, id: null, selectedProject: undefined }),
  onClose: () => set({ isOpen: false, id: null }),
}));
