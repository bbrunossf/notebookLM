// src/app/components/PdfList.tsx
import React, { useEffect, useState } from 'react';

interface PdfListProps {
    onSelect: (pdf: string) => void; // Função callback para selecionar PDF
}

const PdfList: React.FC<PdfListProps> = ({ onSelect }) => {
    const [pdfFiles, setPdfFiles] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPdfFiles = async () => {
            try {
                // Simula uma chamada para buscar arquivos no diretório /public/pdfs
                const response = await fetch('/api/pdf-files'); // Este endpoint deve ser configurado no backend
                if (!response.ok) {
                    throw new Error('Falha ao buscar arquivos PDF');
                }
                const data = await response.json();
                setPdfFiles(data.files); // Ajuste dependendo da estrutura da resposta
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPdfFiles();
    }, []);

    if (loading) {
        return <div>Carregando arquivos...</div>;
    }

    if (error) {
        return <div>Erro: {error}</div>;
    }

    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold">Arquivos PDF</h2>
            <ul className="space-y-2">
                {pdfFiles.map((file) => (
                    <li key={file} className="p-2 rounded cursor-pointer hover:bg-gray-100 transition" onClick={() => onSelect(file)}>
                        {file}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PdfList;