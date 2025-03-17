// src/app/components/NoteEditor.tsx
import React, { useState } from 'react';

interface NoteEditorProps {
    onAddNote: (note: string) => void; // Função callback para adicionar notas
}

const NoteEditor: React.FC<NoteEditorProps> = ({ onAddNote }) => {
    const [noteText, setNoteText] = useState(''); // Estado para o texto da nota

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevê o comportamento padrão do formulário
        if (noteText.trim()) { // Verifica se a nota não é vazia
            onAddNote(noteText); // Chama a função para adicionar a nota
            setNoteText(''); // Limpa o campo de texto
        }
    };

    return (
        <div className="note-editor p-4 border border-gray-200 rounded-md">
            <h2 className="text-lg font-semibold mb-2">Criar Nova Nota</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)} // Atualiza o estado conforme usuário digita
                    className="w-full h-24 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Escreva sua nota aqui..."
                />
                <button
                    type="submit"
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                >
                    Adicionar Nota
                </button>
            </form>
        </div>
    );
};

export default NoteEditor;