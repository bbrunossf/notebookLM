// app/components/NoteEditor.tsx
import React, { useState } from 'react';
import { FaSave, FaTrash } from 'react-icons/fa';
import Editor from 'react-simple-wysiwyg';
import { 
    BtnBold,
    BtnBulletList,
    BtnClearFormatting,
    BtnItalic,
    BtnLink,
    BtnNumberedList,
    BtnRedo,
    BtnStrikeThrough,
    BtnStyles,
    BtnUnderline,
    BtnUndo,
    HtmlButton,
    Separator,
    Toolbar,
} from 'react-simple-wysiwyg';
//import { getNotes, newNote, updateNote, deleteNote } from '~/.server/noteUtil';


export default function NoteEditor() {
    const [content, setContent] = useState('');
    const [notes, setNotes] = useState([]);
    const [selectedNoteId, setSelectedNoteId] = useState(null);
    const [currentContent, setCurrentContent] = useState('');

    const handleSave = async (content) => {
            console.log('nada');
        };
    
        // const BtnAlignCenter = createButton('Align center', '≡', 'justifyCenter');

    return (
        <div className="editor-container">
            <h2>Editor de Notas</h2>            
                <Editor 
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                >
                <Toolbar>
                    <BtnUndo />
                    <BtnRedo />
                    <Separator />
                    <BtnBold />
                    <BtnItalic />
                    <BtnUnderline />
                    <BtnStrikeThrough />
                    <Separator />
                    <BtnNumberedList />
                    <BtnBulletList />
                    <Separator />
                    <BtnLink />
                    <BtnClearFormatting />
                    <HtmlButton />
                    <Separator />
                    <BtnStyles />
                </Toolbar>
                </Editor>
            
            <button onClick={handleSave}>Salvar</button>
        </div>
    );
}