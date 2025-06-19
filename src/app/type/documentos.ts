export interface Pasta {
  id: number;
  nome: string;
}

export interface Documento {
  id: number;
  nome: string;
  imagem: string;
  senhaCorreta: string;
}

export interface SenhaModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  senhaCorreta: string;
}

export interface DocumentState {
  unlockedDocuments: Record<number, boolean>;
  unlockDocument: (id: number) => void;
  isDocumentUnlocked: (id: number) => boolean;
  lockDocument?: (id: number) => void;
  toggleDocumentLock?: (id: number) => void;
  resetAllLocks?: () => void;
}

export interface PersistOptions {
  name: string;
  storage: () => Storage;
}