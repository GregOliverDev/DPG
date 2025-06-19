import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET(request: Request, { params }: { params: { nome: string } }) {
  try {
    const pastaNome = decodeURIComponent(params.nome);
    const pastaPath = path.join(process.cwd(), 'public', 'Documentos', pastaNome);

    // Verifica se a pasta existe
    try {
      await fs.access(pastaPath);
    } catch {
      return NextResponse.json([], { status: 404 });
    }

    // Lê os arquivos
    const arquivos = (await fs.readdir(pastaPath))
      .filter(nome => /\.(png|jpg|jpeg|pdf)$/i.test(nome))
      .sort((a, b) => a.localeCompare(b))
      .map((nome, idx) => ({
        id: idx + 1,
        nome,
        imagem: `/Documentos/${encodeURIComponent(pastaNome)}/${encodeURIComponent(nome)}`,
        senhaCorreta: 'ye'
      }));

    return NextResponse.json(arquivos);
  } catch (error) {
    console.error('Erro ao listar documentos:', error);
    return NextResponse.json(
      { error: 'Erro interno ao processar a requisição' },
      { status: 500 }
    );
  }
}