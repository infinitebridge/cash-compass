import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type BusinessState = {
  businessId: number | undefined;
  setBusinessId: (value: number | undefined) => void;
};

export const useBusinessStore = create(
  persist<BusinessState>(
    (set) => ({
      businessId: undefined,
      setBusinessId: (value) => set({ businessId: value }),
    }),
    {
      name: 'business',
      getStorage: () => localStorage,
    }
  )
);
