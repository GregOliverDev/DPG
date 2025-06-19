'use client';

import { useParams, useRouter } from 'next/navigation';
import { ArrowBack } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import DocumentoCard from '@/app/components/DocumentoCard';

export default function DocumentosPasta() {
  const router = useRouter();
  const params = useParams();
  const nome = params?.nome && Array.isArray(params.nome) ? params.nome[0] : params?.nome || '';

  const documentos = [
    {
      id: 1,
      nome: "Calculos.png",
      pasta: "CasaAbandonada",
      imagem: "/Documentos/CasaAbandonada/Calculos.png",
      senhaCorreta: "ye"
    },
    {
      id: 2,
      nome: "Carta esposa veio 1.png",
      pasta: "CasaAbandonada",
      imagem: "/Documentos/CasaAbandonada/Carta esposa veio 1.png",
      senhaCorreta: "ye"
    },
    {
      id: 3,
      nome: "Carta esposa veio 2.png",
      pasta: "CasaAbandonada",
      imagem: "/Documentos/CasaAbandonada/Carta esposa veio 2.png",
      senhaCorreta: "ye"
    },
    {
      id: 4,
      nome: "Carta esposa veio 3.png",
      pasta: "CasaAbandonada",
      imagem: "/Documentos/CasaAbandonada/Carta esposa veio 3.png",
      senhaCorreta: "ye"
    },
    {
      id: 5,
      nome: "Carta veio 1.png",
      pasta: "CasaAbandonada",
      imagem: "/Documentos/CasaAbandonada/Carta veio 1.png",
      senhaCorreta: "ye"
    },
    {
      id: 6,
      nome: "Carta veio 2.png",
      pasta: "CasaAbandonada",
      imagem: "/Documentos/CasaAbandonada/Carta veio 2.png",
      senhaCorreta: "ye"
    },
    {
      id: 7,
      nome: "Casa.png",
      pasta: "CasaAbandonada",
      imagem: "/Documentos/CasaAbandonada/Casa.png",
      senhaCorreta: "ye"
    },
    {
      id: 8,
      nome: "Caveira.png",
      pasta: "CasaAbandonada",
      imagem: "/Documentos/CasaAbandonada/Caveira.png",
      senhaCorreta: "ye"
    },
    {
      id: 9,
      nome: "Cobaia 2.png",
      pasta: "CasaAbandonada",
      imagem: "/Documentos/CasaAbandonada/Cobaia 2.png",
      senhaCorreta: "ye"
    },
    {
      id: 10,
      nome: "Cobaia 3.png",
      pasta: "CasaAbandonada",
      imagem: "/Documentos/CasaAbandonada/Cobaia 3.png",
      senhaCorreta: "ye"
    },
    {
      id: 11,
      nome: "Documento dos criadores  (1).png",
      pasta: "CasaAbandonada",
      imagem: "/Documentos/CasaAbandonada/Documento dos criadores  (1).png",
      senhaCorreta: "ye"
    },
    {
      id: 12,
      nome: "Documento dos criadores  (2).png",
      pasta: "CasaAbandonada",
      imagem: "/Documentos/CasaAbandonada/Documento dos criadores  (2).png",
      senhaCorreta: "ye"
    },
    {
      id: 13,
      nome: "Documento dos criadores  (3).png",
      pasta: "CasaAbandonada",
      imagem: "/Documentos/CasaAbandonada/Documento dos criadores  (3).png",
      senhaCorreta: "ye"
    },
    {
      id: 14,
      nome: "Documento dos criadores  (4).png",
      pasta: "CasaAbandonada",
      imagem: "/Documentos/CasaAbandonada/Documento dos criadores  (4).png",
      senhaCorreta: "ye"
    },
    {
      id: 15,
      nome: "Documento dos criadores  (5).png",
      pasta: "CasaAbandonada",
      imagem: "/Documentos/CasaAbandonada/Documento dos criadores  (5).png",
      senhaCorreta: "ye"
    },
    {
      id: 16,
      nome: "Documento dos criadores  (6).png",
      pasta: "CasaAbandonada",
      imagem: "/Documentos/CasaAbandonada/Documento dos criadores  (6).png",
      senhaCorreta: "ye"
    },
    {
      id: 17,
      nome: "Documento dos criadores  (7).png",
      pasta: "CasaAbandonada",
      imagem: "/Documentos/CasaAbandonada/Documento dos criadores  (7).png",
      senhaCorreta: "ye"
    },
    {
      id: 18,
      nome: "Documento dos criadores  (8).png",
      pasta: "CasaAbandonada",
      imagem: "/Documentos/CasaAbandonada/Documento dos criadores  (8).png",
      senhaCorreta: "ye"
    },
    {
      id: 19,
      nome: "Etiqueta cobaia.png",
      pasta: "CasaAbandonada",
      imagem: "/Documentos/CasaAbandonada/Etiqueta cobaia.png",
      senhaCorreta: "ye"
    },
    {
      id: 20,
      nome: "imagem_19.png",
      pasta: "CasaAbandonada",
      imagem: "/Documentos/CasaAbandonada/imagem_19.png",
      senhaCorreta: "ye"
    },
    {
      id: 21,
      nome: "Simbolo no veio.png",
      pasta: "CasaAbandonada",
      imagem: "/Documentos/CasaAbandonada/Simbolo no veio.png",
      senhaCorreta: "ye"
    },
    {
      id: 22,
      nome: "Pesquisa 1.png",
      pasta: "Internet",
      imagem: "/Documentos/Internet/Pesquisa 1.png",
      senhaCorreta: "ye"
    },
    {
      id: 23,
      nome: "Pesquisa 1.png",
      pasta: "Ordem",
      imagem: "/Documentos/Ordem/Documento Ordem 1.png",
      senhaCorreta: "ye"
    },
    {
      id: 24,
      nome: "Pesquisa 2.png",
      pasta: "Ordem",
      imagem: "/Documentos/Ordem/Documento Ordem 2.png",
      senhaCorreta: "ye"
    },
    {
      id: 25,
      nome: "Carta 1.png",
      pasta: "Santo",
      imagem: "/Documentos/Santo/Carta 1.png",
      senhaCorreta: "ye"
    },
    {
      id: 26,
      nome: "Carta 2.png",
      pasta: "Santo",
      imagem: "/Documentos/Santo/Carta 2.png",
      senhaCorreta: "ye"
    },
    {
      id: 27,
      nome: "Carta hoteleiro (1).png",
      pasta: "Santo",
      imagem: "/Documentos/Santo/Carta hoteleiro (1).png",
      senhaCorreta: "ye"
    },
    {
      id: 28,
      nome: "Carta hoteleiro (2).png",
      pasta: "Santo",
      imagem: "/Documentos/Santo/Carta hoteleiro (2).png",
      senhaCorreta: "ye"
    },
    {
      id: 29,
      nome: "Casa do ferreiro.png",
      pasta: "Santo",
      imagem: "/Documentos/Santo/Casa do ferreiro.png",
      senhaCorreta: "ye"
    },
    {
      id: 30,
      nome: "Cristais.png",
      pasta: "Santo",
      imagem: "/Documentos/Santo/Cristais.png",
      senhaCorreta: "ye"
    },
    {
      id: 31,
      nome: "Documento Labirinto Normal Censurado.png",
      pasta: "Santo",
      imagem: "/Documentos/Santo/Documento Labirinto Normal Censurado.png",
      senhaCorreta: "ye"
    },
    {
      id: 32,
      nome: "Documento Labirinto Normal sem Censura.png",
      pasta: "Santo",
      imagem: "/Documentos/Santo/Documento Labirinto Normal sem Censura.png",
      senhaCorreta: "ye"
    },
    {
      id: 33,
      nome: "Quadro.png",
      pasta: "Santo",
      imagem: "/Documentos/Santo/Quadro.png",
      senhaCorreta: "ye"
    },
    {
      id: 34,
      nome: "Sepultura.png",
      pasta: "Sepultura",
      imagem: "/Documentos/Sepultura/Sepultura.png",
      senhaCorreta: "ye"
    }
  ];

  const documentosDaPasta = documentos.filter(doc => doc.pasta === nome);

  return (
    <div className="min-h-screen dark:bg-pink-400">
      <header className="dark:bg-pink-400 shadow-sm p-4 sticky top-0 z-10 flex items-center">
        <IconButton onClick={() => router.push('/documentos')}>
          <ArrowBack className="dark:text-black mt-5" />
        </IconButton>
        <h1 className="mt-5 text-xl font-bold dark:text-black ml-2">
          Pasta {nome}
        </h1>
      </header>

      <main className="p-4">
        <div className="grid grid-cols-1 gap-4">
          {documentosDaPasta.map((doc) => (
            <DocumentoCard key={doc.id} {...doc} />
          ))}
        </div>
      </main>
    </div>
  );
}