'use client';

import PastaList from "@/app/components/PastaList";

export default function DocumentosPage() {
  return (
    <div className="min-h-screen dark:bg-pink-400">
      <header className="dark:bg-pink-400 shadow-sm p-4 sticky top-0 z-10">
        <h1 className=" mt-5 text-2xl font-bold dark:text-black">Documentos</h1>
      </header>
      
      <main className="p-4">
        <PastaList />
      </main>
    </div>
  );
}