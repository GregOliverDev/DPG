import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const DOCUMENTOS_DIR = path.join(process.cwd(), 'public', 'Documentos');

export async function GET() {
  try {
    // Verifica se o diretório existe
    try {
      await fs.access(DOCUMENTOS_DIR);
    } catch {
      return NextResponse.json(
        { error: 'Diretório de documentos não encontrado' },
        { status: 404 }
      );
    }

    // Lê as pastas
    const pastas = await fs.readdir(DOCUMENTOS_DIR);
    
    // Filtra apenas diretórios e mapeia para o formato esperado
    const pastasFormatadas = await Promise.all(
      pastas.map(async (nome, idx) => {
        const stat = await fs.stat(path.join(DOCUMENTOS_DIR, nome));
        return stat.isDirectory() ? { id: idx + 1, nome } : null;
      })
    );

    // Filtra nulls e ordena
    const resultado = pastasFormatadas
      .filter((pasta): pasta is { id: number; nome: string } => pasta !== null)
      .sort((a, b) => a.nome.localeCompare(b.nome));

    return NextResponse.json(resultado);
  } catch (error) {
    console.error('Erro ao listar pastas:', error);
    return NextResponse.json(
      { error: 'Erro interno ao processar a requisição' },
      { status: 500 }
    );
  }
}