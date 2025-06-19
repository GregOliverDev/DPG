import { create } from 'zustand';
import { persist, createJSONStorage, StateStorage } from 'zustand/middleware';

const getClientStorage = (): StateStorage => {
  if (typeof window === 'undefined') {
    return {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
    };
  }
  return localStorage;
};

interface DocumentState {
  unlockedDocuments: Record<number, boolean>;
  unlockDocument: (id: number) => void;
  isDocumentUnlocked: (id: number) => boolean;
}

export const useDocumentStore = create<DocumentState>()(
  persist(
    (set, get) => ({
      unlockedDocuments: {},
      
      unlockDocument: (id: number) => {
        set((state) => ({
          unlockedDocuments: {
            ...state.unlockedDocuments,
            [id]: true,
          },
        }));
      },
      
      isDocumentUnlocked: (id: number) => {
        return get().unlockedDocuments[id] || false;
      },
    }),
    {
      name: 'document-storage',
      storage: createJSONStorage(getClientStorage),
    }
  )
);