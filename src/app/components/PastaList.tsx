'use client';

import PastaItem from './PastaItem';
import { Pasta } from '../type/documentos';

export default function PastaList() {
  const pastas: Pasta[] = [
    { id: 1, nome: 'Casa Abandonada' },
    { id: 2, nome: 'Internet' },
    { id: 3, nome: 'Ordem' },
    { id: 4, nome: 'Santo' },
    { id: 5, nome: 'Sepultura' },
  ];

  return (
    <div className="divide-y divide-white">
      {pastas.map((pasta) => (
        <PastaItem key={pasta.id} {...pasta} />
      ))}
    </div>
  );
}