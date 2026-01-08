import { create } from 'zustand';
import type { UIState } from '@/types';

export const useUIStore = create<UIState>((set) => ({
  mobileNavOpen: false,
  activeService: 'payment-systems',

  toggleMobileNav: () => set((state) => ({
    mobileNavOpen: !state.mobileNavOpen
  })),

  closeMobileNav: () => set({ mobileNavOpen: false }),

  setActiveService: (id) => set({ activeService: id }),
}));
