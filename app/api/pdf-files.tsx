// src/app/routes/api/pdf-files.ts
import { json, LoaderFunction } from "@remix-run/node";
import fs from 'fs';
import path from 'path';

export let loader: LoaderFunction = async () => {
    try {
        const pdfDir = path.join(process.cwd(), 'public', 'pdfs'); // Caminho para o diretório de PDFs
        const files = fs.readdirSync(pdfDir); // Lê o conteúdo do diretório
        const pdfFiles = files.filter(file => file.endsWith('.pdf')); // Filtra apenas os arquivos .pdf

        return json({ files: pdfFiles }); // Retorna os arquivos no formato JSON
    } catch (error) {
        return json({ error: 'Falha ao listar arquivos PDF.' }, { status: 500 });
    }
};