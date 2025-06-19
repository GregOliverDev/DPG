import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center p-4 dark:bg-pink-400">
      <div className="w-full max-w-md dark:bg-pink-200 mt-20 rounded-lg shadow-md p-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 dark:text-black">
          Sistema de Documentos
        </h1>
        <p className="text-gray-600 mb-6 dark:text-black">
          Acesse a lista de documentos da história
        </p>
        <Link
          href="/documentos"
          className="bg-pink-500 hover:bg-pink-600 text-black font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Acessar Documentos
        </Link>
      </div>
    </main>
  );
}