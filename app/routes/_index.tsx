// src/app/routes/pdf-notes-manager.tsx
import { useLoaderData } from '@remix-run/react'
import React, { useState } from 'react';
import PdfList from '../components/PdfList';
import PdfPreview from '../components/PdfPreview';
import NoteEditor from '../components/NoteEditor';
import { useEffect } from 'react';

import { getNotes} from '~/.server/noteUtil';

import { FaSave, FaTrash } from 'react-icons/fa';

import {
    Panel,
    PanelGroup,
    PanelResizeHandle
  } from "react-resizable-panels"; //gostei! ver mais em <https://react-resizable-panels.vercel.app/>

  export async function loader() {
    const allnotes = await getNotes(); // Pega as notas do banco de dados  
    return ({ allnotes });
  };
  

export default function ProjetoRoute() {
    //const {allnotes} = useLoaderData<typeof loader>();
	const [content, setContent] = useState('');
    const [notes, setNotes] = useState([]);
    const [selectedNoteId, setSelectedNoteId] = useState(null);
    const [currentContent, setCurrentContent] = useState('');

    const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
	
	
    const handlePdfSelect = (pdf: string) => {
        setSelectedPdf(pdf);
    };
    

    

    

    return (
        <div className="bg-gray-50 min-h-screen p-4 w-full flex-auto">
        <div className="max-w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="border-b border-gray-200 p-4">
                <input
                    type="text"
                    placeholder="Name of the project"
                    className="text-xl font-semibold w-full focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
                />
            </div>           

            <PanelGroup direction="horizontal">
                <Panel defaultSize={10} minSize={10}>
                    <PdfList onSelect={handlePdfSelect} />
                </Panel>
                
                <PanelResizeHandle className="w-1 bg-gray-300 hover:bg-blue-500 transition-colors" />
                
                <Panel defaultSize={60} minSize={20}>
                    <div className="p-4 h-full">
                    <PdfPreview pdf={selectedPdf} />
                    </div>
                </Panel>
                
                <PanelResizeHandle className="w-1 bg-gray-300 hover:bg-blue-500 transition-colors" />
                
                <Panel defaultSize={20} minSize={15}>
                    <div className="border-l border-gray-200 flex flex-col h-full">
                        <div className="p-4">
                            <NoteEditor
                                value={content}
                                onChange={setContent}
                                ></NoteEditor>                        
                        </div>
 
                    </div>
                </Panel>
            </PanelGroup>

        </div>
    </div>
);
};

