// src/app/routes/pdf-notes-manager.tsx
import React, { useState } from 'react';
import PdfList from '../components/PdfList';
import PdfPreview from '../components/PdfPreview';
import NoteEditor from '../components/NoteEditor';

const PdfNotesManager: React.FC = () => {
    const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
    const [notes, setNotes] = useState<string[]>([]);
    const [isListVisible, setListVisible] = useState(true);
    const [isPreviewVisible, setPreviewVisible] = useState(true);
    const [isEditorVisible, setEditorVisible] = useState(true);

    const handlePdfSelect = (pdf: string) => {
        setSelectedPdf(pdf);
    };

    const handleAddNote = (note: string) => {
        setNotes((prevNotes) => [...prevNotes, note]);
    };

    const handleRemoveNote = (index: number) => {
        setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
    };

    const toggleList = () => setListVisible(!isListVisible);
    const togglePreview = () => setPreviewVisible(!isPreviewVisible);
    const toggleEditor = () => setEditorVisible(!isEditorVisible);

    return (
        <div className="bg-gray-50 min-h-screen p-4 w-full">
        {/* //<div className="flex flex-col md:flex-row"> */}
            <div className="max-w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                {/* Header with project name */}
                <div className="border-b border-gray-200 p-4">
                    <input
                        type="text"
                        placeholder="Name of the project"
                        className="text-xl font-semibold w-full focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
                    />
                </div>

                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/4 border-r border-gray-200">
                        <PdfList onSelect={handlePdfSelect} />
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <PdfPreview pdf={selectedPdf} />
                    </div>
                    <div className="w-full md:w-1/4 border-l border-gray-200 flex flex-col">
                        <div className="p-4">
                            <NoteEditor onAddNote={handleAddNote} />
                        </div>
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">Notas</h2>
                            <ul>
                                {notes.map((note, index) => (
                                    <li key={index} className="flex justify-between items-center">
                                        <span>{note}</span>
                                        <button onClick={() => handleRemoveNote(index)} className="text-red-500">Remover</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PdfNotesManager;