'use client';

import { Folder } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useRouter } from 'next/navigation';
import { Pasta } from '../type/documentos';

export default function PastaItem({ id, nome }: Pasta) {
  const router = useRouter();

  return (
    <div 
      className="flex items-center p-4 border-b border-gray-200 active:bg-gray-100 cursor-pointer"
      onClick={() => router.push(`/pasta/${id}`)}
    >
      <IconButton>
        <Folder className="text-black" />
      </IconButton>
      <div className="ml-4 flex-grow">
        <p className="text-lg font-medium text-black">{nome}</p>
      </div>
    </div>
  );
}