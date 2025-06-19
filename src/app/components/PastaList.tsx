'use client';

import PastaItem from './PastaItem';
import { Pasta } from '../type/documentos';

type PastaListProps = {
  pastas: Pasta[];
};

export default function PastaList({ pastas }: PastaListProps) {
  return (
    <div className="divide-y divide-white">
      {pastas.map((pasta) => (
        <PastaItem key={pasta.id} {...pasta} />
      ))}
    </div>
  );
}