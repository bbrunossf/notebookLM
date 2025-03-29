 // Módulo utilitário para gerenciar notas


 import { prisma } from "~/.server/db.server";

 //create getNotes function to get all notes from the database
    export async function getNotes() {
        return await prisma.note.findMany({
            orderBy: { createdAt: "desc" },
        });
    }


//create newNote function to create a new note in the database
    export async function newNote(content: string) {
        return await prisma.note.create({
            data: {                
                content,
            },
        });
    }

//create updateNote function to update a note in the database
    export async function updateNote(id: number, content: string) {
        return await prisma.note.update({
            where: { id },
            data: {
                content,
            },
        });
    }

//create deleteNote function to delete a note in the database
    export async function deleteNote(id: number) {
        return await prisma.note.delete({
            where: { id },
        });
    }

//create getNote function to get a note by id from the database
    export async function getNote(id: number) {
        return await prisma.note.findUnique({
            where: { id },
        });
    }