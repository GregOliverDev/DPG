'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowBack } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';
import { IconButton, Alert } from '@mui/material';
import DocumentoCard from '@/app/components/DocumentoCard';
import { Documento } from '@/app/type/documentos';

export default function DocumentosPasta() {
  const router = useRouter();
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const [documentos, setDocumentos] = useState<Documento[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pastaNome, setPastaNome] = useState<string>('');

  useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Busca a lista de pastas
      const pastasRes = await fetch('/api/pastas');
      if (!pastasRes.ok) throw new Error('Falha ao carregar pastas');
      const pastas = await pastasRes.json();
      
      // Encontra a pasta pelo ID
      const pasta = pastas.find((p: any) => String(p.id) === String(id));
      if (!pasta) throw new Error('Pasta não encontrada');
      setPastaNome(pasta.nome);

      // Busca os documentos da pasta
      const docsRes = await fetch(`/api/pastas/${encodeURIComponent(pasta.nome)}`);
      if (!docsRes.ok) throw new Error('Falha ao carregar documentos');
      const data = await docsRes.json();
      setDocumentos(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Ocorreu um erro'
      );
    } finally {
      setLoading(false);
    }
  };

  if (id) fetchData();
}, [id]);

  return (
    <div className="min-h-screen dark:bg-pink-400">
      <header className="dark:bg-pink-400 shadow-sm p-4 sticky top-0 z-10 flex items-center">
        <IconButton onClick={() => router.push('/documentos')}>
          <ArrowBack className="dark:text-black mt-5"/>
        </IconButton>
        <h1 className="mt-5 text-xl font-bold dark:text-black ml-2">
          {pastaNome || `Pasta ${id}`}
        </h1>
      </header>
      
      <main className="p-4">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <CircularProgress />
          </div>
        ) : error ? (
          <Alert severity="error" className="mb-4">
            {error}
          </Alert>
        ) : documentos.length === 0 ? (
          <Alert severity="info">
            Nenhum documento encontrado nesta pasta
          </Alert>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {documentos.map((doc) => (
              <DocumentoCard
                key={doc.id}
                id={doc.id}
                nome={doc.nome}
                imagem={doc.imagem}
                senhaCorreta={doc.senhaCorreta}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}