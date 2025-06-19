'use client';

import { useEffect, useState } from 'react';
import PastaList from "@/app/components/PastaList";

export default function DocumentosPage() {
  const [pastas, setPastas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/documentos')
      .then((res) => res.json())
      .then((data) => setPastas(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen dark:bg-pink-400">
      <header className="dark:bg-pink-400 shadow-sm p-4 sticky top-0 z-10">
        <h1 className=" mt-5 text-2xl font-bold dark:text-black">Documentos</h1>
      </header>
      
      <main className="p-4">
        {loading ? (
          <div>Carregando...</div>
        ) : (
          <PastaList pastas={pastas} />
        )}
      </main>
    </div>
  );
}