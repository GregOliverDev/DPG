import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const DOCUMENTOS_DIR = path.join(process.cwd(), 'public', 'Documentos');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const pastas = fs.readdirSync(DOCUMENTOS_DIR).filter((nome) => {
      return fs.statSync(path.join(DOCUMENTOS_DIR, nome)).isDirectory();
    });

    const resultado = pastas.map((pasta, idx) => {
      const arquivos = fs.readdirSync(path.join(DOCUMENTOS_DIR, pasta))
        .filter((nome) =>
          nome.endsWith('.png') ||
          nome.endsWith('.jpg') ||
          nome.endsWith('.jpeg') ||
          nome.endsWith('.pdf')
        )
        .map((arquivo, i) => ({
          id: `${idx}-${i}`,
          nome: arquivo,
          imagem: `/Documentos/${pasta}/${arquivo}`,
          senhaCorreta: 'ye'
        }));

      return {
        id: idx,
        nome: pasta,
        arquivos
      };
    });

    res.status(200).json(resultado);
  } catch (e) {
    res.status(500).json({ error: 'Erro ao ler pastas' });
  }
}